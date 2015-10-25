


//Show which states have more farms than others with 1000 acres of land or greater.

google.load('visualization', '1', {'packages': ['geochart']});
google.setOnLoadCallback(drawOutbreaks);

function drawOutbreaks() {
  var data = google.visualization.arrayToDataTable([
['State', 'Farms'],
    ['Alabama', 229],
    ['Alaska', 57],
    ['Arizona', 146],
    ['Arkansas', 36],
    ['California', 1767],
    ['Colorado', 343],
    ['Conneticut', 155],
    ['Delaware', 22],
    ['Florida', 2055],
    ['Geogria', 314],
    ['Hawaii', 323],
    ['Idaho', 57],
    ['Illinois', 809],
    ['Indiana', 94],
    ['Iowa', 116],
    ['Kansas', 242],
    ['Kentucky', 31],
    ['Louisiana', 51],
    ['Maine', 192],
    ['Maryland', 697],
    ['Massachusetts', 183],
    ['Michigan', 729],
    ['Minnesota', 526],
    ['Mississippi', 39],
    ['Missouri', 96],
    ['Montana', 30],
    ['Nebraska', 24],
    ['Nevada', 56],
    ['New Hampshire', 71],
    ['New Jersey', 143],
    ['New Mexico', 34],
    ['New York', 676],
    ['North Carolina', 174],
    ['North Dakota', 42],
    ['Ohio', 883],
    ['Oklahoma', 41],
    ['Oregon', 376],
    ['Pennsylvania', 401],
    ['Rhode Island', 32],
    ['South Carolina', 85],
    ['South Dakota', 26],
    ['Tennessee', 232],
    ['Texas', 223],
    ['Utah', 57],
    ['Vermont', 48],
    ['Virginia', 167],
    ['Washington', 648],
    ['West Virginia', 38],
    ['Wisconsin', 302],
    ['Wyoming', 52]
  ]);
  
  var opts = {
    region: 'US',
    displayMode: 'regions',
    resolution: 'provinces',
      width: '100%',
        height: '100%',
 chartArea: {
            left: "1%",
            top: "1%",
            height: "94%",
            width: "94%"
        },
    colorAxis: {colors: ['#91D8F0', '#1426F0']}


  };
  var geochart = new google.visualization.GeoChart(
      document.getElementById('stateOutbreaks'));
  geochart.draw(data, opts);
};
