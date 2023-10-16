package filters;

import jakarta.servlet.*;
import jakarta.servlet.annotation.WebFilter;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import java.io.IOException;
import java.util.regex.Pattern;

//@WebFilter("/*")
public class CustomFilter implements Filter {
    @Override
    public void init(FilterConfig filterConfig) throws ServletException {
        Filter.super.init(filterConfig);
    }

    @Override
    public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) throws IOException, ServletException {
        HttpServletRequest httpServletRequest = (HttpServletRequest) request;
        System.out.println(httpServletRequest.getRequestURI());
        if ((httpServletRequest.getRequestURI().equals("/web-lab-2.1/controller"))) {
            httpServletRequest.getRequestDispatcher("/controller").forward(request, response);
        }
    }

    @Override
    public void destroy() {
        Filter.super.destroy();
    }
}
