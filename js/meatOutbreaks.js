//Number of Foodborne outbreaks related specifically to meat based products in 1998 - 2008


 google.setOnLoadCallback(drawMeatOutbreaks);
      function drawMeatOutbreaks() {

        var data = google.visualization.arrayToDataTable([
          ['pathogen', 				'Parent',           'Number of Outbreaks (size)',       'Number Related Illness (color)'],
          ['Foodborne Pathogens',    				null,             0,                                   0],

          ['Bacillus cereus',             'Foodborne Pathogens',             6,                                   118],
          ['Brucella spp',          'Foodborne Pathogens',             4,                                  14],
  		  ['Campylobacter jejuni',          'Foodborne Pathogens',            46,                                 2690],
          ['Campylobacter spp',          'Foodborne Pathogens',            16,                                 87],
	      ['Clostridium botulinum',          'Foodborne Pathogens',            0,                                 0],
	      ['Clostridium perfringens',          'Foodborne Pathogens',            99,                                 3025],
	      ['Listeria',          'Foodborne Pathogens',            7,                                 56],
	      ['Salmonella',          'Foodborne Pathogens',            175,                               4758],
	      ['Shigella flexneri',          'Foodborne Pathogens',            2,                                 56],
	      ['Shigella sonnei',          'Foodborne Pathogens',            4,                                 56],
	      ['Shigella spp',          'Foodborne Pathogens',            1,                                 2],
	      ['Staphylococcus',          'Foodborne Pathogens',            23,                                 302],
	      ['Norovirus',          'Foodborne Pathogens',            44,                                 1321]
        ]);

        tree = new google.visualization.TreeMap(document.getElementById('meatShow'));

        tree.draw(data, {
        
          headerHeight: 15,
          fontColor: '#ffffff',
          showScale: true,

        });
          
           var options = {
           	        legend: 'none',
           	          fontColor: '#ffffff',

  minColor: '#1426F0',
          midColor: '#ddd',
          maxColor: '#F52626',
    showScale: true,
    generateTooltip: showFullTooltip
  };

  tree.draw(data, options);

   function showFullTooltip(row, size, value) {
    return '<div style="background:#fd9; padding:10px; border-style:solid">' +
           '<span style="font-family:Courier"><b>' + data.getValue(row, 0) +
           '</b>, '  + '<br /><br /> Number of Outbreaks: ' + data.getValue(row, 2) +
           '<br /> Number of Illnesses: ' + data.getValue(row, 3) 
  }

}