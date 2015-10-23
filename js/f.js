
//Show which states have more farms than others with 1000 acres of land or greater.

google.load('visualization', '1', {'packages': ['geochart']});
google.setOnLoadCallback(drawVisualization);

function drawVisualization() {
  var data = google.visualization.arrayToDataTable([
    ['State', 'Farms'],
    ['Alabama', 1490],
    ['Alaska', 49],
    ['Arizona', 1100],
    ['Arkansas', 3255],
    ['California', 4474],
    ['Colorado', 5865],
    ['Conneticut', 43],
    ['Delaware', 148],
    ['Florida', 1434],
    ['Geogria', 2109],
    ['Hawaii', 127],
    ['Idaho', 2518],
    ['Illinois', 7736],
    ['Indiana', 3940],
    ['Iowa', 8242],
    ['Kansas', 12309],
    ['Kentucky', 1929],
    ['Louisiana', 1931],
    ['Maine', 212],
    ['Maryland', 379],
    ['Massachusetts', 32],
    ['Michigan', 2020],
    ['Minnesota', 6266],
    ['Mississippi', 2166],
    ['Missouri', 5788],
    ['Montana', 9252],
    ['Nebraska', 11130],
    ['Nevada', 489],
    ['New Hampshire', 37],
    ['New Jersey', 100],
    ['New Mexico', 4531],
    ['New York', 1106],
    ['North Carolina', 1696],
    ['North Dakota', 10861],
    ['Ohio', 2591],
    ['Oklahoma', 7829],
    ['Oregon', 2358],
    ['Pennsylvania', 654],
    ['Rhode Island', 4],
    ['South Carolina', 919],
    ['South Dakota', 9712],
    ['Tennessee', 1488],
    ['Texas', 21949],
    ['Utah', 1328],
    ['Vermont', 154],
    ['Virginia', 1375],
    ['Washington', 2594],
        ['West Virginia', 362],
    ['Wisconsin', 2251],
    ['Wyoming', 3154]
  
  ]);
  
  var opts = {
    region: 'US',
    displayMode: 'regions',
    resolution: 'provinces',
    width: 640, 
    height: 480
  };
  var geochart = new google.visualization.GeoChart(
      document.getElementById('visualization'));
  geochart.draw(data, opts);
};

