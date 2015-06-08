/* Below script uses the above mini-library to apply the templating to the page */
window.addEventListener("load", function() {
    // "content" would normally be a JSON object of items
    var content = {
        "item1" : {
            "title":"First",
            "description":"This is a description"
        },
        "item2" : {
            "title":"Second",
            "description":"More of a description"
        },
        "item3" : {
            "title":"Third",
            "description":"This might be a description"
        }
    };
    var htmlString = "";
    var myTemplate = templating.location("#contentBoxThreeColumn");
    for (var item in content) {
        htmlString += templating.applyTemplate(myTemplate, content[item]);
    }
    templating.insertInNode(document.getElementById("contentBoxes"), htmlString );
}, false);