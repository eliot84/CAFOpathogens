//Outbreak types


      google.load("visualization", "1", {packages:["corechart"]});
      google.setOnLoadCallback(drawcafoClass);
      function drawcafoClass() {
        var data = google.visualization.arrayToDataTable([
          ['', 'Cattle, Veal and Calf', 'Mature Dairy Cattle', 'Swine +55 LBS', 'Swine -55 LBS', 'Sheep, Lamb', 'Horses', 'Turkeys', 'Laying Hens', 'Chickens', 'Ducks'],
          ['Livestock',  1000,        700,        2500, 10000, 500, 55000, 30000, 125000, 82000, 5000]
    

        ]);

        var options = {
          
          
          vAxis: {title: 'Livestock Count', minValue: 0, maxValue: 125000},
          pointSize: 10

        };

        var chart = new google.visualization.AreaChart(document.getElementById('classlist'));
        chart.draw(data, options);
      }

