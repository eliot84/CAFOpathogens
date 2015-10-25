//Outbreak types


      google.load("visualization", "1", {packages:["corechart"]});
      google.setOnLoadCallback(drawChart);
      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Year', 'Bacterial', 'Viral', 'Toxin'],
          ['1998',  68,                19,  13],
          ['1999',  53,                33,  14],
          ['2000',  48,                40,  12],
          ['2001',  46,                40,  14],
          ['2002',  45,                42,  13],
          ['2003',  48,                37,  15],
          ['2004',  37,                55,  8],
          ['2005',  45,                44,  11],
          ['2006',  34,                57,  9],
          ['2007',  43,                49,  8],
          ['2008',  39,                54,  7],


        ]);

        var options = {
          
          hAxis: {title: 'Year',  titleTextStyle: {color: '#333'}},
          vAxis: {title: 'Percentage', minValue: 0}
        };

        var chart = new google.visualization.AreaChart(document.getElementById('outbreakTypes'));
        chart.draw(data, options);
      }

