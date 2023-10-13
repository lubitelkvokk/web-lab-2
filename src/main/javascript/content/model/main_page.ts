import Block from "../components/Blocks/Block";
import SVGBlock from "../components/Blocks/SVGBlock";
import FormBlock from "../components/Blocks/FormBlock";
import AuxBlock from "../components/Blocks/AuxBlock";

export const model = [
    // Header
    new Block("header", "",
        new Block("h1", "", "Mikhailov Pavel Maximovich").toHTML() +
        new Block("h1", "", "P3225").toHTML() +
        new Block("h1", "", "Variant 3514").toHTML()),



    // SVG BLOCK
    new SVGBlock("svg", "",
        new SVGBlock("line", "", "", {
            "x1": "0",
            "y1": "150",
            "x2": "300",
            "y2": "150",
            "stroke-width": "1",
            "stroke": "rgb(0,0,0)"
        }).toHTML() +
        new SVGBlock("line", "", "", {
            "x1": "150",
            "y1": "0",
            "x2": "150",
            "y2": "300",
            "stroke-width": "1",
            "stroke": "rgb(0,0,0)"
        }).toHTML() +
        // Вертикальный указатель R
        new SVGBlock("polyline", "", "", {
            "points": "147,5 150,0 153,5",
            "fill": "none",
            "stroke-width": "1",
            "stroke": "rgb(0,0,0)"
        }).toHTML() +

        // Горизонтальный указатель R/2
        new SVGBlock("polyline", "", "", {
            "points": "295,147 300,150, 295,153",
            "fill": "none",
            "stroke-width": "1",
            "stroke": "rgb(0,0,0)"
        }).toHTML() +
        // Вертикальный указатель R
        new SVGBlock("polyline", "", "", {
            "points": "147,5 150,0 153,5",
            "fill": "none",
            "stroke-width": "1",
            "stroke": "rgb(0,0,0)"
        }).toHTML() +

        // Горизонтальный указатель R/2
        new SVGBlock("polyline", "", "", {
            "points": "295,147 300,150, 295,153",
            "fill": "none",
            "stroke-width": "1",
            "stroke": "rgb(0,0,0)"
        }).toHTML() +
        // Текст R
        new SVGBlock("text", "", "R", {
            "fill": "rgb(0,0,0)",
            "x": "155",
            "y": "35"
        }).toHTML() +

        // Засечка R
        new SVGBlock("line", "", "", {
            "x1": "148",
            "y1": "30",
            "x2": "152",
            "y2": "30",
            "stroke-width": "1",
            "stroke": "rgb(0,0,0)"
        }).toHTML() +

        // Текст R/2
        new SVGBlock("text", "", "R/2", {
            "fill": "rgb(0,0,0)",
            "x": "155",
            "y": "95"
        }).toHTML() +

        // Засечка R/2
        new SVGBlock("line", "", "", {
            "x1": "148",
            "y1": "90",
            "x2": "152",
            "y2": "90",
            "stroke-width": "1",
            "stroke": "rgb(0,0,0)"
        }).toHTML() +
        // Текст -R/2
        new SVGBlock("text", "", "-R/2", {
            "fill": "rgb(0,0,0)",
            "x": "155",
            "y": "215"
        }).toHTML() +

        // Засечка -R/2
        new SVGBlock("line", "", "", {
            "x1": "148",
            "y1": "210",
            "x2": "152",
            "y2": "210",
            "stroke-width": "1",
            "stroke": "rgb(0,0,0)"
        }).toHTML() +

        // Текст -R
        new SVGBlock("text", "", "-R", {
            "fill": "rgb(0,0,0)",
            "x": "155",
            "y": "275"
        }).toHTML() +

        // Засечка -R
        new SVGBlock("line", "", "", {
            "x1": "148",
            "y1": "270",
            "x2": "152",
            "y2": "270",
            "stroke-width": "1",
            "stroke": "rgb(0,0,0)"
        }).toHTML() +

        // Текст -R (слева)
        new SVGBlock("text", "", "-R", {
            "fill": "rgb(0,0,0)",
            "x": "25",
            "y": "145"
        }).toHTML() +

        // Засечка -R (слева)
        new SVGBlock("line", "", "", {
            "x1": "30",
            "y1": "148",
            "x2": "30",
            "y2": "152",
            "stroke-width": "1",
            "stroke": "rgb(0,0,0)"
        }).toHTML() +

        // Текст -R/2 (слева)
        new SVGBlock("text", "", "-R/2", {
            "fill": "rgb(0,0,0)",
            "x": "85",
            "y": "145"
        }).toHTML() +

        // Засечка -R/2 (слева)
        new SVGBlock("line", "", "", {
            "x1": "90",
            "y1": "148",
            "x2": "90",
            "y2": "152",
            "stroke-width": "1",
            "stroke": "rgb(0,0,0)"
        }).toHTML() +

        // Текст R/2 (справа)
        new SVGBlock("text", "", "R/2", {
            "fill": "rgb(0,0,0)",
            "x": "205",
            "y": "145"
        }).toHTML() +

        // Засечка R/2 (справа)
        new SVGBlock("line", "", "", {
            "x1": "210",
            "y1": "148",
            "x2": "210",
            "y2": "152",
            "stroke-width": "1",
            "stroke": "rgb(0,0,0)"
        }).toHTML() +

        // Текст R (справа)
        new SVGBlock("text", "", "R", {
            "fill": "rgb(0,0,0)",
            "x": "265",
            "y": "145"
        }).toHTML() +

        // Засечка R (справа)
        new SVGBlock("line", "", "", {
            "x1": "270",
            "y1": "148",
            "x2": "270",
            "y2": "152",
            "stroke-width": "1",
            "stroke": "rgb(0,0,0)"
        }).toHTML() +
        // Определение вырезающей области
        new SVGBlock("defs", "",
            new SVGBlock("clipPath", "cut-off-bottom-right",
                new SVGBlock("rect", "", "", {
                    "x": "50",
                    "y": "50",
                    "width": "100",
                    "height": "100"
                }).toHTML(),
                {}).toHTML(),
            {}).toHTML() +

        // Круг с вырезанной областью
        new SVGBlock("circle", "", "", {
            "cx": "150",
            "cy": "150",
            "r": "60",
            "clip-path": "url(#cut-off-bottom-right)",
            "opacity": "0.3"
        }).toHTML() +

        // Прямоугольник с прозрачностью
        new SVGBlock("rect", "", "", {
            "x": "150",
            "y": "150",
            "height": "60",
            "width": "120",
            "opacity": "0.3"
        }).toHTML() +

        // Многоугольник
        new SVGBlock("polygon", "", "", {
            "points": "150,150 90,150, 150,270",
            "fill": "rgb(0,0,0)",
            "opacity": "0.3"
        }).toHTML()

        ,
        {
            "height":
                "300", "width":
                "300"
        }
    ),

    new Block("div", "form-block",
        new FormBlock("label", "", "Choose X:", {}).toHTML() +

        new AuxBlock("br").toHTML() +
        new FormBlock("span", "x-error", "", {"class": "error-message"}).toHTML() +
        new AuxBlock("br").toHTML() +
        // X
        new FormBlock("input", "x4", "", {"type": "button", "name": "xChoice", "value": "4"}).toHTML() +
        new AuxBlock("br").toHTML() +

        new FormBlock("input", "x3", "", {"type": "button", "name": "xChoice", "value": "3"}).toHTML() +
        new AuxBlock("br").toHTML() +

        new FormBlock("input", "x2", "", {"type": "button", "name": "xChoice", "value": "2"}).toHTML() +
        new AuxBlock("br").toHTML() +

        new FormBlock("input", "x1", "", {"type": "button", "name": "xChoice", "value": "1"}).toHTML() +
        new AuxBlock("br").toHTML() +

        new FormBlock("input", "x0", "", {"type": "button", "name": "xChoice", "value": "0"}).toHTML() +
        new AuxBlock("br").toHTML() +

        new FormBlock("input", "x-1", "", {"type": "button", "name": "xChoice", "value": "-1"}).toHTML() +
        new AuxBlock("br").toHTML() +

        new FormBlock("input", "x-2", "", {"type": "button", "name": "xChoice", "value": "-2"}).toHTML() +
        new AuxBlock("br").toHTML() +

        new FormBlock("input", "x-3", "", {"type": "button", "name": "xChoice", "value": "-3"}).toHTML() +
        new AuxBlock("br").toHTML() +

        new FormBlock("input", "x-4", "", {"type": "button", "name": "xChoice", "value": "-4"}).toHTML() +
        new AuxBlock("br").toHTML() +

        new FormBlock("input", "selectedX", "", {"type": "hidden", "value": "", "name": "selectedX"}).toHTML() +

        // Y
        new FormBlock("span", "y-error", "", {"class": "error-message"}).toHTML() +
        new AuxBlock("br").toHTML() +
        new FormBlock("label", "", "Y", {}).toHTML() +
        new FormBlock("input", "y", "", {"type": "text", "name": "yChoice", "value": ""}).toHTML() +
        new AuxBlock("br").toHTML() +


        // R
        new FormBlock("label", "", "Choose R:", {}).toHTML() +
        new AuxBlock("br").toHTML() +
        new FormBlock("span", "r-error", "", {"class": "error-message"}).toHTML() +
        new AuxBlock("br").toHTML() +

        new FormBlock("input", "r1", "", {"type": "button", "name": "rChoice", "value": "1"}).toHTML() +
        new AuxBlock("br").toHTML() +

        new FormBlock("input", "r2", "", {"type": "button", "name": "rChoice", "value": "2"}).toHTML() +
        new AuxBlock("br").toHTML() +

        new FormBlock("input", "r3", "", {"type": "button", "name": "rChoice", "value": "3"}).toHTML() +
        new AuxBlock("br").toHTML() +

        new FormBlock("input", "r4", "", {"type": "button", "name": "rChoice", "value": "4"}).toHTML() +
        new AuxBlock("br").toHTML() +

        new FormBlock("input", "r5", "", {"type": "button", "name": "rChoice", "value": "5"}).toHTML() +
        new AuxBlock("br").toHTML() +

        new FormBlock("button", "form-submit", "Submit", {"type": "submit"}).toHTML()
    ),

    new Block("span", "server-validation-error", ""),

    new Block("table", "hit-results", "")

]
