
const options = {
    key: '2HKms1Uf1Q6WEcVvlflRiW1nxBlyVjdN', // REPLACE WITH YOUR KEY !!!

    // Put additional console output
    verbose: true,

    // Optional: Initial state of the map
    lat: 62.45,
    lon: 17.52,
    zoom: 5,
};

// Initialize Windy API
windyInit(options, windyAPI => {
    // windyAPI is ready, and contain 'map', 'store',
    // 'picker' and other usefull stuff

    const { map } = windyAPI;
    // .map is instance of Leaflet map

    L.popup()
        .setLatLng([50.4, 14.3])
        .setContent('Hello World')
        .openOn(map);
});



/*
//  Array of markers //
    var markers = [
        //Kalix//
            ["spot", 65.8108770,23.6116663, "id1", "name", "BREVIKEN","windDirection","S/SW"],
            ["spot", 65.8130515,23.4892165, "id2", "name", "BODÖN","windDirection","N/NW"],
        //Luleå//
            ["spot", 65.6230793,22.0222872, "id3", "name", "STORSAND","windDirection","S/SW"],
            ["spot", 65.5456349,22.1564902, "id4", "name", "LULVIKSBADET","windDirection","NW"],
            ["spot", 65.5189811,22.1522248, "id5", "name", "LULHÄLLAN","windDirection","S/SW"],
            ["spot", 65.4982979,22.3689945, "id6", "name", "KLUBBVIKEN","windDirection","S"],
        //Skellefteå//
            ["spot", 64.7742422,21.1834173, "id7", "name", "STORSNÄCK","windDirection","N/NW"],
            ["spot", 64.7408877,21.2183383, "id8", "name", "SILLSKATAN","windDirection","S/SW"],
            ["spot", 64.5184790,21.5452258, "id9", "name", "VÅNÖREN","windDirection","S/SW"],
            ["spot", 64.4348443,21.6102720, "id10", "name", "BJURÖKLUBB EAST","windDirection","SE"],
            ["spot", 64.4362105,21.5805984, "id11", "name", "BJURÖKLUBB WEST","windDirection","SW"],
        //Umeå//
            ["spot", 63.6678316,20.0246587, "id12", "name", "LILLIS","windDirection"," S/SE"],
            ["spot", 63.6504034,19.9964010, "id13", "name", "LÄNKEBO","windDirection"," NE/E"],
            ["spot", 63.4897141,19.4738929, "id14", "name", "STORÄNGET","windDirection"," N/NE"],
            ["spot", 63.4573565,19.2647473, "id15", "name", "SALUSAND","windDirection"," SW"],
        //Örnsköldsvik//
            ["spot", 62.9903104,18.5276622, "id16", "name", "STORSANDEN","windDirection","N/NE/NW"],
            ["spot", 63.2505607,18.6855082, "id17", "name", "NYÄNGET","windDirection","S/SE"],
            ["spot", 63.2150045,18.8268965, "id18", "name", "GULLVIK","windDirection","S"],
            ["spot", 63.2067795,18.8098370, "id19", "name", "VANNVIKEN","windDirection","S/SE"],
            ["spot", 63.2206414,18.9595582, "id20", "name", "STUBBSAND","windDirection","S/SW"],
        //Härnösand//
            ["spot", 62.5759766,17.9129405, "id21", "name", "SMITINGE","windDirection","S/SE"],
            ["spot", 62.5990367,18.0325180, "id22", "name", "SVARTVIK","windDirection","S/SE"],
            ["spot", 62.5847226,17.9239516, "id23", "name", "YTTREFÄLLE","windDirection","S/SE"],
            ["spot", 62.6448072,17.9683284, "id24", "name", "SÄLSTEN","windDirection","NE/NW"],
        //Sundsvall/
            ["spot", 62.4511973,17.5340607, "id25", "name", "MYCKELÄNG","windDirection","NV"],
            ["spot", 62.4490114,17.5004908, "id26", "name", "STORNÄSET","windDirection","S"],
            ["spot", 62.5095594,17.4745280, "id27", "name", "SMACKEN","windDirection","S/SW"],
            ["spot", 62.5102920,17.4833562, "id28", "name", "GULLFIBER","windDirection","S/SW"],
            ["spot", 62.0768640,17.4581468, "id29", "name", "DYRÅSAND","windDirection","E"],
            ["spot", 62.0268011,17.4232861, "id30", "name", "SÖRFJÄRDEN","windDirection","S/SE"],
            ["spot", 62.0181316,17.4144492, "id31", "name", "VARPSAND","windDirection","NE"],
            ["spot", 61.9938701,17.3965579, "id32", "name", "HÅRTE","windDirection","S/SE"],
            ["spot", 61.9201011,16.7183359, "id33", "name", "FÖNEBO","windDirection","S/SE"],
            ["spot", 61.8149679,16.8746091, "id34", "name", "HALLSBO","windDirection","NE"],
        //Hudiksvall//
            ["spot", 61.7184406,17.1726866, "id35", "name", "MALNBADET","windDirection","S/SW"],
            ["spot", 61.7011666,17.5090105, "id36", "name", "SÖRSUNDET","windDirection","N/NE"],
            ["spot", 61.6215421,17.4670460, "id37", "name", "TÅNGVIK","windDirection","S/SE"],
            ["spot", 61.6224418,17.4454898, "id38", "name", "HÖLICK SOUTH","windDirection","S/SE"],
            ["spot", 61.6297878,17.4326722, "id39", "name", "HÖLICK WEST","windDirection","S/SW"],
        //Söderhamn//
            ["spot", 61.4187314,17.1798377, "id40", "name", "SNÄCKEN","windDirection","S/SE"],
            ["spot", 61.4169583,17.1525610, "id41", "name", "KRÅKNÄS","windDirection","S/SW"],
            ["spot", 61.2468373,17.1947394, "id42", "name", "STENÖ HAVSBAD","windDirection","S/SE"],
            ["spot", 61.2406976,17.2613011, "id43", "name", "ORSUNDET","windDirection","S/SW"],
            ["spot", 61.2352256,17.2766953, "id44", "name", "ENSKÄR","windDirection","S/SE"],
        //Gävle//
            ["spot", 60.7524944,17.3534575, "id45", "name", "UTVALNÄS UDDE","windDirection","E/SE"],
            ["spot", 60.7319714,17.3182666, "id46", "name", "HOLMUDDEN","windDirection","E"],
            ["spot", 60.7154601,17.2624873, "id47", "name", "BRÄDVIKEN","windDirection","S/SE"],
            ["spot", 60.6463792,17.4264364, "id48", "name", "KLÄCKEN","windDirection","N"],
            ["spot", 60.6414841,17.4734790, "id49", "name", "RULLSAND","windDirection","N/NE"],
        //Åland//
            ["spot", 60.2174413,19.5438690, "id50", "name", "SANDMO","windDirection","W/SW"],
            ["spot", 60.1539131,19.5973999, "id51", "name", "HOLMUDDEN","windDirection","E"],
            ["spot", 60.1105197,19.9479629, "id52", "name", "SKJULET","windDirection","S/SE"],
            ["spot", 60.0894388,20.1402891, "id53", "name", "LUMPARN","windDirection","N/NW/NE"],
            ["spot", 60.2073874,20.2499844, "id54", "name", "PRÄSTÖ","windDirection","S/SW"],
        //Stockholm North//
            ["spot", 59.9054138,18.9926251, "id55", "name", "SALNÖ","windDirection","N/NE"],
            ["spot", 59.7171248,19.0650978, "id56", "name", "KAPELLSKÄR","windDirection","S/SE"],
            ["spot", 59.6283077,18.9845648, "id57", "name", "BROMSKÄR","windDirection","E/NE"],
            ["spot", 59.3769370,18.2315604, "id58", "name", "FÅGELÖUDDEN","windDirection","N/NW"],
            ["spot", 59.4258797,18.1050031, "id59", "name", "NÄSÄNG S","windDirection","S/SE"],
            ["spot", 59.4421925,18.1312813, "id60", "name", "HÄGERNÄSBADET","windDirection","S/SE"],
            ["spot", 59.3897778,18.1116807, "id61", "name", "STICKLINGE","windDirection","N/NE"],
        // Stockholm South//
            ["spot", 59.2871791,17.8915723, "id62", "name", "SÄTRASTRAND","windDirection","W"],
            ["spot", 59.2204036,18.5375894, "id63", "name", "BJÖRKVIK","windDirection","S/SE"],
            ["spot", 59.2175396,18.5288400, "id64", "name", "LILLA SAND","windDirection","S/SE'"],
            ["spot", 59.2212215,18.5501964, "id65", "name", "TORPESAND","windDirection","S/SEW"],
            ["spot", 59.2224023,18.4801033, "id66", "name", "GRÖNSKAN","windDirection","S/SE"],
            ["spot", 59.2283717,18.3567438, "id67", "name", "TRINNTORP","windDirection","N/NE"],
            ["spot", 59.1964566,18.4173426, "id68", "name", "SANDHOLMEN","windDirection","S/SE"],
            ["spot", 59.2690874,18.2649998, "id69", "name", "ERSTAVIK","windDirection","SE"],
            ["spot", 59.3145342,18.3051525, "id70", "name", "MJÖLKUDDEN","windDirection","SE"],
            ["spot", 59.1373975,18.3978376, "id71", "name", "DALARÖ","windDirection","S/SW"],
            ["spot", 59.0972660,18.3228420, "id72", "name", "GÅLÖ","windDirection","SE"],
            ["spot", 58.8043955,17.7977476, "id73", "name", "ÖRUDDEN N","windDirection","W/NW"],
            ["spot", 58.7966607,17.7912915, "id74", "name", "ÖRUDDEN V","windDirection","S/SW"],
            ["spot", 58.7988784,17.8109458, "id75", "name", "ÖRUDDEN S","windDirection","S/S"]
    ];

    // Kite spots //
    var kiteSpots = L.layerGroup([markers]);

    // source = https://leafletjs.com/examples/layers-control/
    // Layers for toggle //
    // Set the base layers for screen with layers. //

    /*
    var wind = L.tileLayer("http://api.openweathermap.org/data/2.5/forecast?", {id: "4f41d83b01c8da40f1f48c4dbc812774", tileSize: 512, zoomOffset: -1, attribution: mapboxAttribution}),
        satellite = L.tileLayer(mapboxUrl, {id: "MapID", tileSize: 512, zoomOffset: -1, attribution: mapboxAttribution});

    var map = L.map('map', {
        center: [62.45, 17.53],
        zoom: 5,
        layers: [wind, satellite]
    });

    

    // Create the 2 object layer and markers. //
    var baseMaps = {
        "Wind": wind,
        "Temperature": temperature
    };
    var overlayMaps = {
        "Kite Spots": markers
    };

    // Add it to the map. //
    L.control.layers(baseMaps,overlayMaps).addTo(map);

    // Style the baseMaps //
    var baseMaps = {
        "<span style='color: gray'>Wind</span>": wind,
        "Temperature": temperature
    };
    */ 

        var map = L.map('map').setView([62.45, 17.53], 5);

// Map from https://cloud.maptiler.com/maps/hybrid/ //
L.tileLayer('https://api.maptiler.com/maps/hybrid/{z}/{x}/{y}.jpg?key=Eq1wRludzR4Xg059gxvk', {
    attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
}).addTo(map);

     // Add Markers to map in Leaflet//
   
    for (var i = 0; i < markers.length; i++) {
        spots = new L.marker([markers[i][1],markers[i][2]])
            .bindPopup(markers[i][5])
            .addTo(map);
    }
   
/*

addSpots() {
    const markers = L.markers(coords{lat, lon})
    markers.bindPopup(content(), {
        closeButton:true
    })


        //  Array of markers
            var markers = [
        //Kalix//
            {coords: {lat: 65.8108770, lng: 23.6116663}, id: 1, content:'BREVIKEN', windDirection: 'S/SW'},  // Breviken SSV //
            {coords: {lat: 65.8130515, lng: 23.4892165}, id: 2, content:'BODÖN', windDirection: 'N/NW'},  // Bodön NNV //
        //Luleå//
            {coords: {lat: 65.6230793, lng: 22.0222872}, id: 3, content:'STORSAND', windDirection: 'S/SW'},      // Storsand SSW //
            {coords: {lat: 65.5456349, lng: 22.1564902}, id: 4, content:'LULVIKSBADET', windDirection: 'NW'},  // Lulviksbadet NW //
            {coords: {lat: 65.5189811, lng: 22.1522248}, id: 5, content:'LULHÄLLAN', windDirection: 'S/SW'}, // Lulhällan SSW //
            {coords: {lat: 65.4982979, lng: 22.3689945}, id: 6, content:'KLUBBVIKEN', windDirection: 'S'},  // Klubbviken S //
        //Skellefteå//
            {coords: {lat: 64.7742422, lng: 21.1834173}, id: 7, content:'STORSNÄCK', windDirection: 'N/NW'},     // Storsnäck NNW //
            {coords: {lat: 64.7408877, lng: 21.2183383}, id: 8, content:'SILLSKATAN', windDirection: 'S/SW'},// Sillskatan SW//
            {coords: {lat: 64.5184790, lng: 21.5452258}, id: 9, content:'VÅNÖREN', windDirection: 'S/SW'},   // Vånören SSW //
            {coords: {lat: 64.4348443, lng: 21.6102720}, id: 10, content:'BJURÖKLUBB EAST', windDirection: 'SE'}, // Bjuröklubb SE //
            {coords: {lat: 64.4362105, lng: 21.5805984}, id: 11, content:'BJURÖKLUBB WEST', windDirection: 'SW'}, // Bjuröklubb SW //
        //Umeå//
            {coords: {lat: 63.6678316, lng: 20.0246587}, id: 12, content:'LILLIS', windDirection: ' S/SE'},        // Lillis SSE //
            {coords: {lat: 63.6504034, lng: 19.9964010}, id: 13, content:'LÄNKEBO', windDirection: ' NE/E'},       // Länkebo NEE //
            {coords: {lat: 63.4897141, lng: 19.4738929}, id: 14, content:'STORÄNGET', windDirection: ' N/NE'}, // Storänget NNE //
            {coords: {lat: 63.4573565, lng: 19.2647473}, id: 15, content:'SALUSAND', windDirection: ' SW'},      // Salusand SW //
        //Örnsköldsvik//
            {coords: {lat: 62.9903104, lng: 18.5276622}, id: 16, content:'STORSANDEN', windDirection: 'N/NE/NW'},  // Storsanden NNE NW //
            {coords: {lat: 63.2505607, lng: 18.6855082}, id: 17, content:'NYÄNGET', windDirection: 'S/SE'},       // Nyänget SSE//
            {coords: {lat: 63.2150045, lng: 18.8268965}, id: 18, content:'GULLVIK', windDirection: 'S'},       // Gullvik S//
            {coords: {lat: 63.2067795, lng: 18.8098370}, id: 19, content:'VANNVIKEN', windDirection: 'S/SE'},     // Vannviken SSE//
            {coords: {lat: 63.2206414, lng: 18.9595582}, id: 20, content:'STUBBSAND', windDirection: 'S/SW'},     // Stubbsand SSW//
        //Härnösand//
            {coords: {lat: 62.5759766, lng: 17.9129405 }, id: 21, content:'SMITINGE', windDirection: 'S/SE'},        // Smitingen SSE//
            {coords: {lat: 62.5990367, lng: 18.0325180 }, id: 22, content:'SVARTVIK', windDirection: 'S/SE'},        // Svartvik SSE//
            {coords: {lat: 62.5847226, lng: 17.9239516 }, id: 23, content:'YTTREFÄLLE', windDirection: 'S/SE'},      // Ytterfälle SSE //
            {coords: {lat: 62.6448072, lng: 17.9683284 }, id: 24, content:'SÄLSTEN', windDirection: 'NE/NW'},         // Sälsten NW NE//
        //Sundsvall/
            {coords: {lat: 62.4511973, lng: 17.5340607 }, id: 25, content:'MYCKELÄNG', windDirection: 'NV'},    // Myckeläng NW //
            {coords: {lat: 62.4490114, lng: 17.5004908 }, id: 26, content:'STORNÄSET', windDirection: 'S'},     // Stornäset S //
            {coords: {lat: 62.5095594, lng: 17.4745280 }, id: 27, content:'SMACKEN', windDirection: 'S/SW'},     // Smackken SSW //
            {coords: {lat: 62.5102920, lng: 17.4833562 }, id: 28, content:'GULLFIBER', windDirection: 'S/SW'},   // Gullfiber SSW//
            {coords: {lat: 62.0768640, lng: 17.4581468 }, id: 29, content:'DYRÅSAND', windDirection: 'E'},        // Dyråsand E//
            {coords: {lat: 62.0268011, lng: 17.4232861 }, id: 30, content:'SÖRFJÄRDEN', windDirection: 'S/SE'},      // Sörfjärden SSE//
            {coords: {lat: 62.0181316, lng: 17.4144492 }, id: 31, content:'VARPSAND', windDirection: 'NE'},        // Varpsand NE//
            {coords: {lat: 61.9938701, lng: 17.3965579 }, id: 32, content:'HÅRTE', windDirection: 'S/SE'},           // Hårte SSE//
            {coords: {lat: 61.9201011, lng: 16.7183359 }, id: 33, content:'FÖNEBO', windDirection: 'S/SE'},          // Fönebo SSE //
            {coords: {lat: 61.8149679, lng: 16.8746091 }, id: 34, content:'HALLSBO', windDirection: 'NE'},         // Hallsbo NE //
        //Hudiksvall//
            {coords: {lat: 61.7184406, lng: 17.1726866 }, id: 35, content:'MALNBADET', windDirection: 'S/SW'},       // Malnbaden SSW//
            {coords: {lat: 61.7011666, lng: 17.5090105 }, id: 36, content:'SÖRSUNDET', windDirection: 'N/NE'},       // Sörsundet NNE //
            {coords: {lat: 61.6215421, lng: 17.4670460 }, id: 37, content:'TÅNGVIK', windDirection: 'S/SE'},         // Tångvik SSO//
            {coords: {lat: 61.6224418, lng: 17.4454898 }, id: 38, content:'HÖLICK SOUTH', windDirection: 'S/SE'},    // Hölick SOUTH SSE  //
            {coords: {lat: 61.6297878, lng: 17.4326722 }, id: 39, content:'HÖLICK WEST', windDirection: 'S/SW'},     // Hölick WEST SSW //
        //Söderhamn//
            {coords: {lat: 61.4187314, lng: 17.1798377 }, id: 40, content:'SNÄCKEN', windDirection: 'S/SE'},     // Snäcken SSE//
            {coords: {lat: 61.4169583, lng: 17.1525610 }, id: 41, content:'KRÅKNÄS', windDirection: 'S/SW'},     // Kråknäs SSW//
            {coords: {lat: 61.2468373, lng: 17.1947394 }, id: 42, content:'STENÖ HAVSBAD', windDirection: 'S/SE'},   // Stenö Havsbad SSE //
            {coords: {lat: 61.2406976, lng: 17.2613011 }, id: 43, content:'ORSUNDET', windDirection: 'S/SW'},        // Orsundet SSW NNE//
            {coords: {lat: 61.2352256, lng: 17.2766953 }, id: 44, content:'ENSKÄR', windDirection: 'S/SE'},          // Enskär SSE //
        //Gävle//
            {coords: {lat: 60.7524944, lng: 17.3534575 }, id: 45, content:'UTVALNÄS UDDE', windDirection: 'E/SE'},     // Snäcken SSE//
            {coords: {lat: 60.7319714, lng: 17.3182666 }, id: 46, content:'HOLMUDDEN', windDirection: 'E'},     // Kråknäs SSW//
            {coords: {lat: 60.7154601, lng: 17.2624873 }, id: 47, content:'BRÄDVIKEN', windDirection: 'S/SE'},   // Stenö Havsbad SSE //
            {coords: {lat: 60.6463792, lng: 17.4264364 }, id: 48, content:'KLÄCKEN', windDirection: 'N'},        // Orsundet SSW NNE//
            {coords: {lat: 60.6414841, lng: 17.4734790 }, id: 49, content:'RULLSAND', windDirection: 'N/NE'},          // Enskär SSE //
        //Åland//
            {coords: {lat: 60.2174413, lng: 19.5438690 }, id: 50, content:'SANDMO', windDirection: 'W/SW'},     // Snäcken SSE//
            {coords: {lat: 60.1539131, lng: 19.5973999 }, id: 51, content:'HOLMUDDEN', windDirection: 'E'},     // Kråknäs SSW//
            {coords: {lat: 60.1105197, lng: 19.9479629 }, id: 52, content:'SKJULET', windDirection: 'S/SE'},   // Stenö Havsbad SSE //
            {coords: {lat: 60.0894388, lng: 20.1402891 }, id: 53, content:'LUMPARN', windDirection: 'N/NW/NE'},        // Orsundet SSW NNE//
            {coords: {lat: 60.2073874, lng: 20.2499844 }, id: 54, content:'PRÄSTÖ', windDirection: 'S/SW'},          // Enskär SSE //
        //Stockholm North//
            {coords: {lat: 59.9054138, lng: 18.9926251 }, id: 55, content:'SALNÖ', windDirection: 'N/NE'},     // Snäcken SSE//
            {coords: {lat: 59.7171248, lng: 19.0650978 }, id: 56, content:'KAPELLSKÄR', windDirection: 'S/SE'},     // Kråknäs SSW//
            {coords: {lat: 59.6283077, lng: 18.9845648 }, id: 57, content:'BROMSKÄR', windDirection: 'E/NE'},   // Stenö Havsbad SSE //
            {coords: {lat: 59.3769370, lng: 18.2315604 }, id: 58, content:'FÅGELÖUDDEN', windDirection: 'N/NW'},        // Orsundet SSW NNE//
            {coords: {lat: 59.4258797, lng: 18.1050031 }, id: 59, content:'NÄSÄNG S', windDirection: 'S/SE'}, 
            {coords: {lat: 59.4421925, lng: 18.1312813 }, id: 60, content:'HÄGERNÄSBADET', windDirection: 'S/SE'},     // Snäcken SSE//
            {coords: {lat: 59.3897778, lng: 18.1116807 }, id: 61, content:'STICKLINGE', windDirection: 'N/NE'},     // Kråknäs SSW//
            // Stockholm South//
            {coords: {lat: 59.2871791, lng: 17.8915723 }, id: 62, content:'SÄTRASTRAND', windDirection: 'W'},   // Stenö Havsbad SSE //
            {coords: {lat: 59.2204036, lng: 18.5375894 }, id: 63, content:'BJÖRKVIK', windDirection: 'S/SE'},        // Orsundet SSW NNE//
            {coords: {lat: 59.2175396, lng: 18.5288400 }, id: 64, content:'LILLA SAND', windDirection: 'S/SE'}, 
            {coords: {lat: 59.2212215, lng: 18.5501964 }, id: 65, content:'TORPESAND', windDirection: 'S/SEW'},   // Stenö Havsbad SSE //
            {coords: {lat: 59.2224023, lng: 18.4801033 }, id: 66, content:'GRÖNSKAN', windDirection: 'S/SE'},        // Orsundet SSW NNE//
            {coords: {lat: 59.2283717, lng: 18.3567438 }, id: 67, content:'TRINNTORP', windDirection: 'N/NE'}, 
            {coords: {lat: 59.1964566, lng: 18.4173426 }, id: 68, content:'SANDHOLMEN', windDirection: 'S/SE'}, 
            {coords: {lat: 59.2690874, lng: 18.2649998 }, id: 69, content:'ERSTAVIK', windDirection: 'SE'},   // Stenö Havsbad SSE //
            {coords: {lat: 59.3145342, lng: 18.3051525 }, id: 70, content:'MJÖLKUDDEN', windDirection: 'SE'},        // Orsundet SSW NNE//
            {coords: {lat: 59.1373975, lng: 18.3978376 }, id: 71, content:'DALARÖ', windDirection: 'S/SW'}, 
            {coords: {lat: 59.0972660, lng: 18.3228420 }, id: 72, content:'GÅLÖ', windDirection: 'SE'},   // Stenö Havsbad SSE //
            {coords: {lat: 58.8043955, lng: 17.7977476 }, id: 73, content:'ÖRUDDEN N', windDirection: 'W/NW'},        // Orsundet SSW NNE//
            {coords: {lat: 58.7966607, lng: 17.7912915 }, id: 74, content:'ÖRUDDEN V', windDirection: 'S/SW'}, 
            {coords: {lat: 58.7988784, lng: 17.8109458 }, id: 75, content:'ÖRUDDEN S', windDirection: 'S/SW'},
    ];
}

/*
        //  Api for retreiving json data from OpenWeatherMap with celcius and metricsystem. 'http://api.openweathermap.org/data/2.5/weather?lat=63.213051&lon=18.4892165&appid=adaea23e7d3d3d7282deac8f1df59056&units=metric'   //    
const owm_api = 'http://api.openweathermap.org/data/2.5/weather?lat=63.213051&lon=18.4892165&appid=adaea23e7d3d3d7282deac8f1df59056&units=metric'

    async function getWeatherInfo() {
        const response = await fetch(owm_api);
        const data = await response.json();
        const {lat, log, temp, wind} = data


    }
    getWeatherInfo();
    */