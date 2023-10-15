<%@ page import="beans.Row" %>
<jsp:useBean id="table" scope="session" type="beans.Table"/>
<svg class="svg-graph">
    <line x1="0" y1="150" x2="300" y2="150" stroke-width="1" stroke="rgb(0,0,0)">

    </line>
    <line x1="150" y1="0" x2="150" y2="300" stroke-width="1" stroke="rgb(0,0,0)">

    </line>
    <polyline points="147,5 150,0 153,5" fill="none" stroke-width="1" stroke="rgb(0,0,0)">

    </polyline>
    <polyline points="295,147 300,150, 295,153" fill="none" stroke-width="1" stroke="rgb(0,0,0)">

    </polyline>
    <polyline points="147,5 150,0 153,5" fill="none" stroke-width="1" stroke="rgb(0,0,0)">

    </polyline>
    <polyline points="295,147 300,150, 295,153" fill="none" stroke-width="1" stroke="rgb(0,0,0)">

    </polyline>
    <text fill="rgb(0,0,0)" x="155" y="35">
        R
    </text>
    <line x1="148" y1="30" x2="152" y2="30" stroke-width="1" stroke="rgb(0,0,0)">

    </line>
    <text fill="rgb(0,0,0)" x="155" y="95">
        R/2
    </text>
    <line x1="148" y1="90" x2="152" y2="90" stroke-width="1" stroke="rgb(0,0,0)">

    </line>
    <text fill="rgb(0,0,0)" x="155" y="215">
        -R/2
    </text>
    <line x1="148" y1="210" x2="152" y2="210" stroke-width="1" stroke="rgb(0,0,0)">

    </line>
    <text fill="rgb(0,0,0)" x="155" y="275">
        -R
    </text>
    <line x1="148" y1="270" x2="152" y2="270" stroke-width="1" stroke="rgb(0,0,0)">

    </line>
    <text fill="rgb(0,0,0)" x="25" y="145">
        -R
    </text>
    <line x1="30" y1="148" x2="30" y2="152" stroke-width="1" stroke="rgb(0,0,0)">

    </line>
    <text fill="rgb(0,0,0)" x="85" y="145">
        -R/2
    </text>
    <line x1="90" y1="148" x2="90" y2="152" stroke-width="1" stroke="rgb(0,0,0)">

    </line>
    <text fill="rgb(0,0,0)" x="205" y="145">
        R/2
    </text>
    <line x1="210" y1="148" x2="210" y2="152" stroke-width="1" stroke="rgb(0,0,0)">

    </line>
    <text fill="rgb(0,0,0)" x="265" y="145">
        R
    </text>
    <line x1="270" y1="148" x2="270" y2="152" stroke-width="1" stroke="rgb(0,0,0)">

    </line>
    <defs>
        <clipPath id="cut-off-bottom-right">
            <rect x="30" y="30" width="120" height="120">

            </rect>
        </clipPath>
    </defs>
    <circle cx="150" cy="150" r="120" clip-path="url(#cut-off-bottom-right)" opacity="0.3">

    </circle>
    <rect x="150" y="30" height="120" width="120" opacity="0.3">

    </rect>
    <polygon points="150,150 270,150, 150,210" fill="rgb(0,0,0)" opacity="0.3">

    </polygon>

    <% for (Row row : table.getTable()) { %>
    <circle
            cx="<%= 150 + row.getX() * 120 / row.getR()%>"
            cy="<%= 150 - row.getY() * 120 / row.getR()%>"
            r="2"
            fill="<%= row.getIsHit() ? "green" : "red" %> "
            id="point"></circle>
    <% } %>
</svg>