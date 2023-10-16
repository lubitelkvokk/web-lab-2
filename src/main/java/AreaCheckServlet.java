import beans.Row;
import beans.Table;
import com.google.gson.Gson;
import controller.ForwardElements;
import exceptions.InputException;
import jakarta.servlet.RequestDispatcher;
import jakarta.servlet.ServletContext;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import utils.PointRequestBody;

import javax.print.attribute.standard.JobKOctets;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.time.LocalDateTime;
import java.util.Calendar;
import java.util.TimeZone;

public class AreaCheckServlet extends HttpServlet {

    @Override
    public void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException, ServletException {
        long startTime = System.nanoTime();

        Gson gson = new Gson();
        PointRequestBody requestBody = gson.fromJson(request.getReader(), PointRequestBody.class);

        // Получение параметров из объекта requestBody
        try {
            double x = parseX(request.getAttribute("x"));
            double y = parseY(request.getAttribute("y"));
            double r = parseR(request.getAttribute("r"));
//            double x = (Double) request.getAttribute("x");
//            double y = (Double) request.getAttribute("y");
//            double r = (Double) request.getAttribute("r");
            String timeZone = (String) request.getAttribute("timeZone");
            boolean isHit = isHit(x, y, r);

            TimeZone tz = TimeZone.getTimeZone(timeZone);

            // Получаем текущее время в заданном часовом поясе
            Calendar calendar = Calendar.getInstance(tz);
            int hour = calendar.get(Calendar.HOUR_OF_DAY);
            int minute = calendar.get(Calendar.MINUTE);
            int second = calendar.get(Calendar.SECOND);


            long endTime = System.nanoTime();
            long scriptRuntime = (endTime - startTime);

            Row lastCheck = new Row(x,
                    y,
                    r,
                    timeZone + ": " + hour + ":" + minute + ":" + second,
                    scriptRuntime, isHit);

            Table table = (Table) request.getSession().getAttribute("table");
            table.getTable().add(lastCheck);
            request.getSession().setAttribute("table", table);


            request.getSession().setAttribute("lastCheck", lastCheck);

            response.setStatus(HttpServletResponse.SC_FOUND); // Установка кода состояния 302 (Found)

            response.sendRedirect(request.getContextPath() + ForwardElements.RESULT_JSP.getName());
        } catch (InputException e) {
            response.setStatus(HttpServletResponse.SC_INTERNAL_SERVER_ERROR); // Установка кода состояния 404
            request.getSession().setAttribute("error_message", e.getMessage());
            response.sendRedirect(request.getContextPath() + ForwardElements.ERROR_PAGE.getName());
        }

    }

    private boolean isHit(Double x, Double y, Double r) {
        boolean isHit = false;
        if (((x * x + y * y) <= r * r) && x <= 0d && y >= 0d) {
            isHit = true;
        }
        if (x >= 0d && y >= 0d && x <= r && y <= r) {
            isHit = true;
        }
        if (x >= 0d && y <= 0d && (y >= (0.5 * x - r / 2d))) {
            isHit = true;
        }
        return isHit;
    }

    private double parseX(Object x) throws InputException {
        double dx;
        try {
            dx = (Double) x;
            if (dx > 2 || dx < -2) throw new InputException("x has an invalid format: " + dx);
        } catch (ClassCastException | InputException e) {
            throw new InputException("x has an invalid format");
        }
        return dx;
    }

    private double parseY(Object y) throws InputException {
        double dy;
        try {
            dy = (Double) y;
            if (5.0 <= dy || dy <= -5.0) throw new InputException("y has an invalid format: " + dy);
        } catch (ClassCastException | InputException e) {
            throw new InputException("y has an invalid format");
        }
        return dy;
    }

    private double parseR(Object r) throws InputException {
        double dr;
        try {
            dr = (Double) r;
            if (dr <= 2 || dr >= 5) throw new InputException("r has an invalid format");
        } catch (ClassCastException | InputException e) {
            throw new InputException("r has an invalid format");
        }
        return dr;
    }


}
