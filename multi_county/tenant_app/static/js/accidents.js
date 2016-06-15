
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


      var container = document.getElementById('popup');
      var content = document.getElementById('popup-content');
      var closer = document.getElementById('popup-closer');

      /**
       * Create an overlay to anchor the popup to the map.
       */
      var overlay = new ol.Overlay(/** @type {olx.OverlayOptions} */ ({
        element: container,
        autoPan: true,
        autoPanAnimation: {
          duration: 250
        }
      }));

      /**
       * Add a click handler to hide the popup.
       * @return {boolean} Don't follow the href.
       */
      closer.onclick = function() {
        overlay.setPosition(undefined);
        closer.blur();
        return false;
      };
      var overlay = new ol.Overlay(/** @type {olx.OverlayOptions} */ ({
        element: container,
        autoPan: true,
        autoPanAnimation: {
          duration: 250
        }
      }));

      map.addOverlay(overlay);

      map.addInteraction(select);
      select.on('select', function(e) {
        var feature = e.target.getFeatures().getArray()[0];
        if(feature){
          var coordinates = feature.getGeometry().getFirstCoordinate();
          overlay.setPosition(coordinates);
          content.innerHTML = "Accident Stats <br/> Number of Vehicles:"+feature.get('number_of_vehicles')+"<br/> Date:"+feature.get('date');
        }
      });
