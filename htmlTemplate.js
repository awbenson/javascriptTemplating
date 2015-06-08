/* Copyright 2015, Andrew W. Benson */
/* MIT License */

/* Below templating is mini-library that enables basic templating abilities */
var templating = function() {
    "use strict";

    function location(cssSelector) {
        return document.querySelector(cssSelector);
    }
    function applyTemplate(templateNode, dataLiteral) {
        var templateHTML = templateNode.innerHTML.toString();
        for (var data in dataLiteral) {
            templateHTML = templateHTML.replace(new RegExp("{{" + data + "}}", "g"), dataLiteral[data]);
        }
        return templateHTML;
    }
    function insertInNode(elementNode, htmlString) {
        elementNode.innerHTML = htmlString;
    }

    return {
        insertInNode: insertInNode,
        applyTemplate: applyTemplate,
        location: location
    };

}();
