<%@ page import="exceptions.InputException" %><%--
  Created by IntelliJ IDEA.
  User: Alex
  Date: 16.10.2023
  Time: 20:52
  To change this template use File | Settings | File Templates.
--%>
<% String path =  application.getContextPath() +  "/public/";%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>ERROR</title>
    <link rel="stylesheet" href="<%= path %>styles/error_page.css">
</head>
<body class="error_screen">
<div class="return">
    <div class="content">
        <h1>
            <%= session.getAttribute("error_message")%>
        </h1>
        <a href="http://localhost:8080/web-lab-2.1/controller">Вернуться к форме</a>
    </div>

</div>
</body>
</html>
