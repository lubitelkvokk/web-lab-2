package filters;

import beans.Table;
import jakarta.servlet.*;
import jakarta.servlet.http.HttpServletRequest;

import java.io.IOException;

public class TableFilter implements Filter {

    @Override
    public void init(FilterConfig filterConfig) throws ServletException {
        Filter.super.init(filterConfig);
    }

    @Override
    public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) throws IOException, ServletException {

        HttpServletRequest httpServletRequest = (HttpServletRequest) request;
        Table table = (Table) httpServletRequest.getSession().getAttribute("table");
        if (table == null) {
            table = new Table();
            httpServletRequest.getSession().setAttribute("table", table);
            httpServletRequest.getRequestDispatcher("/controller").forward(request, response);
        }
        else{
            chain.doFilter(request, response);
        }


    }

    @Override
    public void destroy() {
        Filter.super.destroy();
    }
}
