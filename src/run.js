import sketch from 'sketch'
var UI = require('sketch/ui')

export default function () {
   var identity = ["Oval", "Rectangle", "Path", "Combined Shape", "Polygon", "Star", "Triangle", "Line", "Group", "Type something", "Shape"];
    var artboardSelect = 0;
    var obj = {
        "Oval": 0,
        "Rectangle": 0,
        "Path": 0,
        "Combined Shape": 0,
        "Polygon": 0,
        "Star": 0,
        "Triangle": 0,
        "Line": 0,
        "Group": 0,
        "Type something": 0,
        "Shape": 0
    };
    let selected = context.selection;
    artboardSelect = selected.length;
    var layersAlert = "You have selected " + artboardSelect + " artboards. \n Check the following Layers Naming \n \n";
    if (artboardSelect < 1) {
        UI.alert("Error ❓", "Choose a Artboard \n to check the layer name")
    } else {
        selected.forEach(function (layer) {

            var c = layer.children();
            c.forEach(function (data) {
                var layerName = data.name();
                var layerNameTrim = data.name().trim();
                var layerNameSplit = layerNameTrim.split(" ");
                var name = elementCheck(layerNameSplit);
                function elementCheck(expression) {
                    let layerNameCheck, layerFinalName, layerFinalNameCheck;
                    switch (expression[0]) {
                        case "Oval":
                            layerNameCheck = identity.includes(expression[0].trim());
                            layerFinalName = expression[0],
                                layerFinalNameCheck = layerNameCheck;
                            update(layerFinalName, layerFinalNameCheck)
                                // code block
                            break;
                        case "Shape":
                            layerNameCheck = identity.includes(expression[0].trim());
                            layerFinalName = expression[0],
                                layerFinalNameCheck = layerNameCheck;
                            update(layerFinalName, layerFinalNameCheck)
                                // code block
                            break;
                        case "Rectangle":
                            layerNameCheck = identity.includes(expression[0].trim());
                            layerFinalName = expression[0],
                                layerFinalNameCheck = layerNameCheck;
                            update(layerFinalName, layerFinalNameCheck)
                                // code block
                            break;
                        case "Path":
                            layerNameCheck = identity.includes(expression[0].trim());
                            layerFinalName = expression[0],
                                layerFinalNameCheck = layerNameCheck;
                            update(layerFinalName, layerFinalNameCheck)
                            break;
                        case "Combined":
                            let na = expression[0] + " " + expression[1]
                            layerNameCheck = identity.includes(na.trim());
                            layerFinalName = na,
                                layerFinalNameCheck = layerNameCheck;
                            update(layerFinalName, layerFinalNameCheck)
                            break;
                        case "Polygon":
                            layerNameCheck = identity.includes(expression[0].trim());
                            layerFinalName = expression[0],
                                layerFinalNameCheck = layerNameCheck;
                            update(layerFinalName, layerFinalNameCheck)
                            break;
                        case "Star":
                            layerNameCheck = identity.includes(expression[0].trim());
                            layerFinalName = expression[0],
                                layerFinalNameCheck = layerNameCheck;
                            update(layerFinalName, layerFinalNameCheck)
                            break;
                        case "Triangle":
                            layerNameCheck = identity.includes(expression[0].trim());
                            layerFinalName = expression[0],
                                layerFinalNameCheck = layerNameCheck;
                            update(layerFinalName, layerFinalNameCheck)
                            break;
                        case "Line":
                            layerNameCheck = identity.includes(expression[0].trim());
                            layerFinalName = expression[0],
                                layerFinalNameCheck = layerNameCheck;
                            update(layerFinalName, layerFinalNameCheck)
                            break;
                        case "Group":
                            layerNameCheck = identity.includes(expression[0].trim());
                            layerFinalName = expression[0],
                                layerFinalNameCheck = layerNameCheck;
                            update(layerFinalName, layerFinalNameCheck)
                            break;
                        case "Type":
                            let naTY = expression[0] + " " + expression[1]
                            layerNameCheck = identity.includes(naTY.trim());
                            layerFinalName = naTY,
                                layerFinalNameCheck = layerNameCheck;
                            update(layerFinalName, layerFinalNameCheck)
                            break;
                        default:
                            // code block
                    }
                }

                function update(data, layerFinalNameCheck) {
                    if (layerFinalNameCheck) {
                        obj[data] = obj[data] + 1;
                        artboardSelect = artboardSelect + 1
                    }
                }

            });
        });
var test = 0;
        for (var x in obj) {
            test = test + obj[x];
            if (obj[x] > 0) {
                layersAlert = layersAlert + x + " - " + obj[x] + "\n";
            }
        }
        if (artboardSelect > 0) {
            if(test > 0){
            UI.alert("Error❓", layersAlert);
              }
            else{
            UI.alert("Success ✅", "All the layers are named properly");
            }
        } else {
            UI.alert("Info ✋", "Choose Artboard instead of layer");
        }
        layersAlert = "";
        obj = {
            "Oval": 0,
            "Rectangle": 0,
            "Path": 0,
            "Combined Shape": 0,
            "Polygon": 0,
            "Star": 0,
            "Triangle": 0,
            "Line": 0,
            "Group": 0,
            "Type something": 0,
            "Shape": 0
        };
    }

}
