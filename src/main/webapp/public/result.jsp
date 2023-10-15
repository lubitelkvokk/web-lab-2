<jsp:useBean id="lastCheck" scope="session" type="beans.Row"/>
<%--
  Created by IntelliJ IDEA.
  User: Alex
  Date: 15.10.2023
  Time: 20:30
  To change this template use File | Settings | File Templates.
--%>
<!doctype html>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Hitting result</title>
</head>
<body>

<table>
    <thead>
    <tr>
        <th>X</th>
        <th>Y</th>
        <th>R</th>
        <th>Current time</th>
        <th>Script runtime</th>
        <th>Hit result</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td><%= lastCheck.getY() %></td>
        <td><%= lastCheck.getY() %></td>
        <td><%= lastCheck.getR() %></td>
        <td><%= lastCheck.getCurrentTime() %></td>
        <td><%= lastCheck.getScriptRuntime() %></td>
        <td><%= lastCheck.getIsHit() %></td>
    </tr>
    </tbody>
</table>
<a href="controller">Вернуться к форме</a>
</body>
</html>s
