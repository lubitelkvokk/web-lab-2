package controller;


import jakarta.servlet.RequestDispatcher;
import jakarta.servlet.ServletContext;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import com.google.gson.Gson;
import utils.HittingParams;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Arrays;

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


    private boolean checkCoords(HttpServletRequest request) throws IOException {
        Gson gson = new Gson();
        HittingParams requestBody = gson.fromJson(request.getReader(), utils.HittingParams.class);
        // Получение параметров из объекта requestBody
        Double x = requestBody.getX();
        Double y = requestBody.getY();
        Double r = requestBody.getR();
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

