//Number of Foodborne hospitalizations and deaths related specifically to meat based products in 1998 - 2008


 google.setOnLoadCallback(drawMeatHosDeath);
      function drawMeatHosDeath() {

        var data = google.visualization.arrayToDataTable([
         ['pathogens', 				            'Parent',              'Number of Hospitalizations (size)',       'Number Related Death (color)'],
         ['Foodborne Pathogens',    	  	       null,                         0,                                  0],
         ['Bacillus cereus',                     'Foodborne Pathogens',        17,                                 0],
         ['Brucella spp',                        'Foodborne Pathogens',        6,                                  0],
  		   ['Campylobacter jejuni',                'Foodborne Pathogens',        94,                                 0],
         ['Campylobacter spp',                   'Foodborne Pathogens',        35,                                 0],
	       ['Clostridium botulinum',               'Foodborne Pathogens',        88,                                 6],
         ['Clostridium perfringens',             'Foodborne Pathogens',        88,                                 8],
	       ['Escherichia coli, Enterotoxigenic',   'Foodborne Pathogens',        14,                                 0],
         ['Escherichia coli, Shiga ',            'Foodborne Pathogens',        1271,                              22],
         ['Escherichia coli, other',             'Foodborne Pathogens',        8,                                  0],
         ['Listeria',                            'Foodborne Pathogens',        216,                                48],
	       ['Salmonella',                          'Foodborne Pathogens',        4034,                               60],
	       ['Shigella flexneri',                   'Foodborne Pathogens',        56,                                 0],
	       ['Shigella sonnei',                     'Foodborne Pathogens',        121,                                1],
	       ['Shigella spp',                        'Foodborne Pathogens',        21,                                 0],
	       ['Staphylococcus',                      'Foodborne Pathogens',        333,                                3],
	      ['Norovirus',                            'Foodborne Pathogens',        1028,                               5],
        ['Hepatitis A',                          'Foodborne Pathogens',        268,                                8],
        ['Rotavirus',                            'Foodborne Pathogens',        4,                                  7]
        ]);

        tree = new google.visualization.TreeMap(document.getElementById('meatShowTwo'));

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
    generateTooltip: showFullTooltipTwo
  };

  tree.draw(data, options);

   function showFullTooltipTwo(row, size, value) {
    return '<div style="background:#fd9; padding:10px; border-style:solid">' +
           '<span style="font-family:Courier"><b>' + data.getValue(row, 0) +
           '</b>, '  + '<br /><br /> Number of Hospitalizations: ' + data.getValue(row, 2) +
           '<br /> Number of Deaths: ' + data.getValue(row, 3) 
  }

}