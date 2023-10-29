
<jsp:useBean id="table" scope="session" type="beans.Table"/>
<%@ page import="beans.Row" %>
<% String path = "public/";%>
<!DOCTYPE html>
<head>
    <base href="${pageContext.request.contextPath}">
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>web-lab</title>
    <link rel="stylesheet" href="<%= path %>styles/header.css">
    <link rel="stylesheet" href="<%= path %>styles/table.css">
    <link rel="stylesheet" href="<%= path %>styles/errors.css">
    <link rel="stylesheet" href="<%= path %>styles/input-values.css">
    <link rel="stylesheet" href="<%= path %>styles/form-input-blocks.css">
    <link rel="stylesheet" href="<%= path %>styles/graph.css">
    <link rel="stylesheet" href="<%= path %>styles/main_page.css">

</head>
<body class="main_page">

<jsp:include page="header.html"/>
<jsp:include page="graph.jsp"/>

<div id="form-block">
    <div class="input-block" id="x-input-block">
        <label>
            Choose X:
        </label>

        <input type="button" name="xChoice" value="-2" id="x-2">

        <input type="button" name="xChoice" value="-1.5" id="x-1.5">

        <input type="button" name="xChoice" value="-1" id="x-1">

        <input type="button" name="xChoice" value="-0.5" id="x-0.5">

        <input type="button" name="xChoice" value="0" id="x0">

        <input type="button" name="xChoice" value="0.5" id="x0.5">

        <input type="button" name="xChoice" value="1" id="x1">

        <input type="button" name="xChoice" value="1.5" id="x1.5">

        <input type="button" name="xChoice" value="2" id="x2">

        <br>
        <span class="error-message" id="x-error">
        </span>
    </div>

    <div class="input-block" id="y-input-block">


        <label>
            Y
            <input type="text" name="yChoice" value="" id="y">
        </label>
        <br>
        <span class="error-message" id="y-error"></span>
    </div>


    <div class="input-block" id="r-input-block">


        <label>
            R
            <input type="text" name="rChoice" value="" id="r">
        </label>
        <br>
        <span class="error-message" id="r-error"></span>
    </div>

    <div id="submit-container">
        <button type="submit" id="form-submit">
            Submit
        </button>
    </div>

        <div class="tableContainer">
            <table id="hit-results">
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
                <% for (Row row : table.getTable()) {%>
                <tr>
                    <td><%= row.getX()%>
                    </td>
                    <td><%= row.getY()%>
                    </td>
                    <td><%= row.getR()%>
                    </td>
                    <td><%= row.getCurrentTime()%>
                    </td>
                    <td><%= row.getScriptRuntime()%>
                    </td>
                    <td><%= row.getIsHit()%>
                    </td>
                </tr>
                <% } %>
            </table>
        </div>
</div>

</body>
<script src="<%= path %>bundle.js"></script>
</html>
<% session.setAttribute("isForward", false); %>