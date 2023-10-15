package controller;


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
            if (checkCoords(request)) {
                forward(request, response, ForwardElements.AREA_CHECK);
            } else {
                forward(request, response, ForwardElements.INDEX_JSP);
            }
        } catch (ServletException e) {
            // something bad
        }
    }

    @Override
    public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
        doPost(request, response);
    }


    private boolean checkCoords(HttpServletRequest request) throws IOException {
        Gson gson = new Gson();
        PointRequestBody requestBody = gson.fromJson(request.getReader(), PointRequestBody.class);
        if (requestBody == null){
            return false;
        }
        // Получение параметров из объекта requestBody
        Double x = requestBody.getX();
        Double y = requestBody.getY();
        Double r = requestBody.getR();
        String timeZone = requestBody.getTimeZone();
        request.setAttribute("x", x);
        request.setAttribute("y", y);
        request.setAttribute("r", r);
        request.setAttribute("timeZone", timeZone);
        if (x != null && y != null && r != null) {
            return true;
        }
        return false;
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

