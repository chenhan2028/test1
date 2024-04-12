var wms_layers = [];


    var projection__0 = ol.proj.get('EPSG:3857');
    var projectionExtent__0 = projection__0.getExtent();
    var size__0 = ol.extent.getWidth(projectionExtent__0) / 256;
    var resolutions__0 = new Array(14);
    var matrixIds__0 = new Array(14);
    for (var z = 0; z < 14; ++z) {
        // generate resolutions and matrixIds arrays for this WMTS
        resolutions__0[z] = size__0 / Math.pow(2, z);
        matrixIds__0[z] = z;
    }
    var lyr__0 = new ol.layer.Tile({
                            source: new ol.source.WMTS(({
                              url: "http://maps.nlsc.gov.tw/S_Maps/wmts",
    attributions: ' ',
                                "layer": "EMAP",
                                "TILED": "true",
             matrixSet: 'EPSG:3857',
             format: 'image/jpeg',
              projection: projection__0,
              tileGrid: new ol.tilegrid.WMTS({
                origin: ol.extent.getTopLeft(projectionExtent__0),
                resolutions: resolutions__0,
                matrixIds: matrixIds__0
              }),
              style: 'default',
              wrapX: true,
                                "VERSION": "1.0.0",
                            })),
                            title: "臺灣通用電子地圖",
                            opacity: 1.0,
                            
                            
                          });
var format_112_1 = new ol.format.GeoJSON();
var features_112_1 = format_112_1.readFeatures(json_112_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_112_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_112_1.addFeatures(features_112_1);
var lyr_112_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_112_1, 
                style: style_112_1,
                popuplayertitle: "112年補助案件明細表",
                interactive: true,
    title: '112年補助案件明細表<br />\
    <img src="styles/legend/112_1_0.png" /> 10噸(不銹鋼)<br />\
    <img src="styles/legend/112_1_1.png" /> 20噸(不銹鋼)<br />\
    <img src="styles/legend/112_1_2.png" /> 20噸(鋁合金)<br />\
    <img src="styles/legend/112_1_3.png" /> 30噸(不銹鋼)<br />\
    <img src="styles/legend/112_1_4.png" /> 30噸(鋁合金)<br />\
    <img src="styles/legend/112_1_5.png" /> 30噸(RC)<br />\
    <img src="styles/legend/112_1_6.png" /> 40噸(不銹鋼)<br />\
    <img src="styles/legend/112_1_7.png" /> 40噸(鋁合金)<br />\
    <img src="styles/legend/112_1_8.png" /> 50噸(不銹鋼)<br />\
    <img src="styles/legend/112_1_9.png" /> 50噸(鋁合金)<br />\
    <img src="styles/legend/112_1_10.png" /> 50噸(RC)<br />\
    <img src="styles/legend/112_1_11.png" /> 70噸<br />\
    <img src="styles/legend/112_1_12.png" /> 90噸<br />\
    <img src="styles/legend/112_1_13.png" /> <br />'
        });

    var projection__2 = ol.proj.get('EPSG:3857');
    var projectionExtent__2 = projection__2.getExtent();
    var size__2 = ol.extent.getWidth(projectionExtent__2) / 256;
    var resolutions__2 = new Array(14);
    var matrixIds__2 = new Array(14);
    for (var z = 0; z < 14; ++z) {
        // generate resolutions and matrixIds arrays for this WMTS
        resolutions__2[z] = size__2 / Math.pow(2, z);
        matrixIds__2[z] = z;
    }
    var lyr__2 = new ol.layer.Tile({
                            source: new ol.source.WMTS(({
                              url: "http://maps.nlsc.gov.tw/S_Maps/wmts",
    attributions: ' ',
                                "layer": "LANDSECT",
                                "TILED": "true",
             matrixSet: 'EPSG:3857',
             format: 'image/png',
              projection: projection__2,
              tileGrid: new ol.tilegrid.WMTS({
                origin: ol.extent.getTopLeft(projectionExtent__2),
                resolutions: resolutions__2,
                matrixIds: matrixIds__2
              }),
              style: 'default',
              wrapX: true,
                                "VERSION": "1.0.0",
                            })),
                            title: "地段外圍圖(段籍圖)",
                            opacity: 1.0,
                            
                            
                          });

lyr__0.setVisible(true);lyr_112_1.setVisible(true);lyr__2.setVisible(true);
var layersList = [lyr__0,lyr_112_1,lyr__2];
lyr_112_1.set('fieldAliases', {'年度': '年度', '縣市': '縣市', '鄉鎮': '鄉鎮', '地段': '地段', '地號': '地號', '補助項目': '補助項目', '補助細項': '補助細項', '申請人': '申請人', '住址(通訊處)': '住址(通訊處)', 'x': 'x', 'y': 'y', '申請面積(公頃)': '申請面積(公頃)', '數量': '數量', '補助金額': '補助金額', '核撥金額': '核撥金額', });
lyr_112_1.set('fieldImages', {'年度': 'Range', '縣市': 'TextEdit', '鄉鎮': 'TextEdit', '地段': 'TextEdit', '地號': 'TextEdit', '補助項目': 'TextEdit', '補助細項': 'TextEdit', '申請人': 'TextEdit', '住址(通訊處)': 'TextEdit', 'x': 'TextEdit', 'y': 'TextEdit', '申請面積(公頃)': 'TextEdit', '數量': 'TextEdit', '補助金額': 'TextEdit', '核撥金額': 'TextEdit', });
lyr_112_1.set('fieldLabels', {'年度': 'inline label - visible with data', '縣市': 'inline label - visible with data', '鄉鎮': 'inline label - visible with data', '地段': 'inline label - visible with data', '地號': 'inline label - always visible', '補助項目': 'inline label - always visible', '補助細項': 'inline label - visible with data', '申請人': 'inline label - visible with data', '住址(通訊處)': 'inline label - visible with data', 'x': 'hidden field', 'y': 'hidden field', '申請面積(公頃)': 'hidden field', '數量': 'hidden field', '補助金額': 'hidden field', '核撥金額': 'hidden field', });
lyr_112_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});