package controller;

import beans.Table;
import com.google.gson.JsonParseException;
import com.google.gson.JsonSyntaxException;
import jakarta.servlet.RequestDispatcher;
import jakarta.servlet.ServletContext;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import com.google.gson.Gson;
import utils.PointRequestBody;
import java.io.IOException;

public class ControllerServlet extends HttpServlet {
    @Override
    public void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException {

        try {
            Table table = (Table) request.getSession().getAttribute("table");
//            if (table == null) {
//                table = new Table();
//            }
//            request.getSession().setAttribute("table", table);

            if (checkRequestBody(request)) {
                forward(request, response, ForwardElements.AREA_CHECK);
            } else {
                forward(request, response, ForwardElements.INDEX_JSP);
            }
        } catch (NumberFormatException | ServletException e) {
            response.setStatus(HttpServletResponse.SC_INTERNAL_SERVER_ERROR); // Установка кода состояния 404
            request.getSession().setAttribute("error_message", e.getMessage());
            // указываем, что мы делаем перенаправление из сервлета
            request.getSession().setAttribute("redirection", true);
            response.sendRedirect(request.getContextPath() + "/error");
        } catch (JsonParseException e) {
            response.setStatus(HttpServletResponse.SC_INTERNAL_SERVER_ERROR); // Установка кода состояния 404
            request.getSession().setAttribute("error_message", "Неверный формат JSON");
            // указываем, что мы делаем перенаправление из сервлета
            request.getSession().setAttribute("redirection", true);
            response.sendRedirect(request.getContextPath() + "/error");
        }
    }

    @Override
    public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
        doPost(request, response);
    }


    private boolean checkRequestBody(HttpServletRequest request) throws IOException {
        Gson gson = new Gson();
        PointRequestBody requestBody = gson.fromJson(request.getReader(), PointRequestBody.class);
        setPointParamsToRequest(requestBody, request);
        if (requestBody == null) {
            return false;
        }
        return true;
    }

    public void setPointParamsToRequest(PointRequestBody pointRequestBody, HttpServletRequest request){
        request.setAttribute("pointRequestBody", pointRequestBody);
    }

    public void forward(HttpServletRequest request,
                        HttpServletResponse response,
                        ForwardElements forwardElement) throws IOException, ServletException {
        String path = forwardElement.getName();
        ServletContext servletContext = getServletContext();
        RequestDispatcher requestDispatcher = servletContext.getRequestDispatcher(path);
        requestDispatcher.forward(request, response);
    }


}

