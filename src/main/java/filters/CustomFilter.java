package filters;

import controller.ForwardElements;
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
        HttpServletResponse httpServletResponse = (HttpServletResponse) response;

        if (httpServletRequest.getRequestURI().equals("/web-lab-2.1/controller")) {
            httpServletRequest.getSession().setAttribute("redirection", true);
        }

        boolean redirection = httpServletRequest.getSession().getAttribute("redirection") != null &&
                (Boolean) httpServletRequest.getSession().getAttribute("redirection");
        System.out.println(httpServletRequest.getRequestURI());
        System.out.println(redirection);

        if (redirection || httpServletRequest.getRequestURI().equals("/web-lab-2.1/result")) {
            httpServletRequest.getSession().setAttribute("redirection", false);

            if (redirection){

                chain.doFilter(request, response);
            }

        } else {
            httpServletRequest.getRequestDispatcher("/error").forward(request, response);
        }


    }

    @Override
    public void destroy() {
        Filter.super.destroy();
    }
}
