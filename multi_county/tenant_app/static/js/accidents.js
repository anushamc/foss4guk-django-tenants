
      var base = new ol.layer.Tile({
        source: new ol.source.OSM()
      });

      var accident = new ol.layer.Vector({
        source: new ol.source.Vector({
          url: '/accidentsGeojson/',
          format: new ol.format.GeoJSON()
        })
      });

      var map = new ol.Map({
        layers: [base, accident],
        target: 'map',
        view: new ol.View({
          center: [0,0],
          zoom: 2
        })
      });

      var select = new ol.interaction.Select({
        layers:[accident]
      });

      map.addInteraction(select);
      select.on('select', function(e) {
        console.log(selected);
      });
