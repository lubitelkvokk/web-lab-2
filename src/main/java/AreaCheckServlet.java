import beans.Row;
import beans.Table;
import exceptions.InputException;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import utils.PointRequestBody;
import java.io.IOException;
import java.util.Calendar;
import java.util.TimeZone;

public class AreaCheckServlet extends HttpServlet {

    @Override
    public void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException, ServletException {
        long startTime = System.nanoTime();
        try {

            PointRequestBody params = getPointParamsBody(request);
            checkPointParamsBody(params);

            boolean isHit = isHit(params.getX(), params.getY(), params.getR());

            long scriptRuntime = (System.nanoTime() - startTime);

            Row lastCheck = new Row(params.getX(), params.getY(), params.getR(),
                    getTimeStringByTimeZone(params.getTimeZone()),
                    scriptRuntime, isHit);


            Table table = (Table) request.getSession().getAttribute("table");
//            if (table == null) {
//                table = new Table();
//            }
            table.addRow(lastCheck);

            request.getSession().setAttribute("table", table);

            request.getSession().setAttribute("lastCheck", lastCheck);

            // указываем, что мы делаем перенаправление из сервлета
            request.getSession().setAttribute("redirection", true);

            response.sendRedirect(request.getContextPath() + "/result");
        } catch (InputException e) {
            response.setStatus(HttpServletResponse.SC_INTERNAL_SERVER_ERROR); // Установка кода состояния 404
            request.getSession().setAttribute("error_message", e.getMessage());

            // указываем, что мы делаем перенаправление из сервлета
            request.getSession().setAttribute("redirection", true);
            response.sendRedirect(request.getContextPath() + "/error");
        }
    }

    private PointRequestBody getPointParamsBody(HttpServletRequest request) throws InputException {
        PointRequestBody pointRequestBody = (PointRequestBody) request.getAttribute("pointRequestBody");
        return pointRequestBody;
    }

    private void checkPointParamsBody(PointRequestBody pointRequestBody) throws InputException {
        if (pointRequestBody == null) throw new InputException("body request must not be empty");

        if (pointRequestBody.getX() == null) throw new InputException("x must not be empty");
        if (pointRequestBody.getY() == null) throw new InputException("y must not be empty");
        if (pointRequestBody.getR() == null) throw new InputException("r must not be empty");

        checkX(pointRequestBody.getX());
        checkY(pointRequestBody.getY());
        checkR(pointRequestBody.getR());
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

    private void checkX(Double x) throws InputException {
        try {
            if (x > 2 || x < -2) throw new InputException("x has an invalid format: " + x);
        } catch (NumberFormatException | NullPointerException | ClassCastException | InputException e) {
            throw new InputException("x has an invalid format");
        }
    }

    private void checkY(Double y) throws InputException {
        try {
            if (5.0 <= y || y <= -5.0) throw new InputException("y has an invalid format: " + y);
        } catch (NumberFormatException | NullPointerException | ClassCastException | InputException e) {
            throw new InputException("y has an invalid format");
        }
    }

    private void checkR(Double r) throws InputException {
        try {
            if (r <= 2 || r >= 5) throw new InputException("r has an invalid format");
        } catch (NumberFormatException | NullPointerException | ClassCastException | InputException e) {
            throw new InputException("r has an invalid format");
        }
    }

    public String getTimeStringByTimeZone(String timeZone) {
        TimeZone tz = TimeZone.getTimeZone(timeZone);

        // Получаем текущее время в заданном часовом поясе
        Calendar calendar = Calendar.getInstance(tz);
        int hour = calendar.get(Calendar.HOUR_OF_DAY);
        int minute = calendar.get(Calendar.MINUTE);
        int second = calendar.get(Calendar.SECOND);

        return tz.getID() + ": " + hour + ":" + minute + ":" + second;
    }


}
