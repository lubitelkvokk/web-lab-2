<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>web-lab</title>
    <link rel="stylesheet" href="public/styles/header.css">
    <link rel="stylesheet" href="public/styles/table.css">
    <link rel="stylesheet" href="public/styles/errors.css">
    <link rel="stylesheet" href="public/styles/input-values.css">
    <link rel="stylesheet" href="public/styles/form-input-blocks.css">
    <link rel="stylesheet" href="public/styles/graph.css">
    <link rel="stylesheet" href="public/styles/main_page.css">
</head>
<body class="main_page">

<jsp:include page="public/header.html"/>
<jsp:include page="public/graph.html"/>
<div id="form-block">
    <div class="input-block" id="x-input-block">
        <label>
            Choose X:
        </label>


        <input type="button" name="xChoice" value="4" id="x4">



        <input type="button" name="xChoice" value="3" id="x3">



        <input type="button" name="xChoice" value="2" id="x2">



        <input type="button" name="xChoice" value="1" id="x1">



        <input type="button" name="xChoice" value="0" id="x0">



        <input type="button" name="xChoice" value="-1" id="x-1">



        <input type="button" name="xChoice" value="-2" id="x-2">



        <input type="button" name="xChoice" value="-3" id="x-3">



        <input type="button" name="xChoice" value="-4" id="x-4">

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
            Choose R:
        </label>


        <input type="button" name="rChoice" value="1" id="r1">



        <input type="button" name="rChoice" value="2" id="r2">



        <input type="button" name="rChoice" value="3" id="r3">



        <input type="button" name="rChoice" value="4" id="r4">



        <input type="button" name="rChoice" value="5" id="r5">

        <br>

        <span class="error-message" id="r-error">
        </span>
    </div>

    <div id="submit-container">
        <button type="submit" id="form-submit">
            Submit
        </button>
    </div>
    <div class="tableContainer">
        <table id="hit-results">
        </table>
    </div>




</div>

<script src="./public/bundle.js"></script>

</body>
</html>