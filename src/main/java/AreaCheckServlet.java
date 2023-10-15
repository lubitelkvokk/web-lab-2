import beans.Row;
import beans.Table;
import com.google.gson.Gson;
import controller.ForwardElements;
import jakarta.servlet.RequestDispatcher;
import jakarta.servlet.ServletContext;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import utils.PointRequestBody;

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
        Double x = (Double) request.getAttribute("x");
        Double y = (Double) request.getAttribute("y");
        Double r = (Double) request.getAttribute("r");
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

        response.sendRedirect(request.getContextPath() + "/result");
//        getServletContext().getRequestDispatcher("/result").forward(request, response);
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


}
