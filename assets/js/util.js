var Util = (function() {

    function Util() {}
    
    // takes an integer and returns a string
    Util.base64_url_encode = function(input) {
        var encodedData = input.toString(36);
        return(encodedData); 
        //.replace('+','.').replace('/','_').replace('=', '-'));
    };

    // takes a string and returns a base 36 integer  
    Util.base64_url_decode = function(input) {
        //var processedString = input.replace('.','+').replace('_','/').replace('-','='); 
        return parseInt(input, 36);
    }

    // Takes a list of plant ids and returns a string
    Util.bitwise_encode_from_plant_ids = function(list) {
       output=0; 
       for (let i=0; i < list.length; i++) {
          output = output | (1 << list[i]);
       }
       return output 
    };
    
    // Takes a string and returns a list of plant ids
    Util.bitwise_decode_to_plant_ids = function(input) {
       list = []
       for (let i = 0; i < 32; i++) {
          if ( (input >> i) & 1 ) {
             list.push(i);
          }
       }
       return list
    };

    // 
    Util.satisfies_sun_req = function(sun_req, plant) {
        if (sun_req == "any") {
            return true;
        } else if ((sun_req == "full_sun") && 
                   (plant.sun_requirements.indexOf("Full Sun") != -1)) {
            return true;
        } else if ((sun_req == "part_shade") &&
               (plant.sun_requirements.indexOf("Part Shade") != -1)) {
            return true;
        } else if ((sun_req == "full_shade") && 
               (plant.sun_requirements.indexOf("Full Shade") != -1)) {
                return true;
        } else {
            return false;
        } 	
    };
    
    // Tests whether plant is in the selected category
    // Must match liquid logic elsewhere
    Util.satisfies_type_req = function(type_req, plant) {
        var type = plant.type.toLowerCase();
        if (type_req == "any") {
            return true;
        } else if ((type_req == "perennial_herbs") && 
                   (type.indexOf("perennial herbs") != -1)) {
            return true;
        } else if ((type_req == "shrubs") &&
               (type.indexOf("shrubs") != -1)) {
            return true;
        } else if ((type_req == "trees") &&
               (type.indexOf("trees") != -1)) {
            return true;
        } else if ((type_req == "annual_herbs") &&
               (type.indexOf("annual herbs") != -1)) {
            return true;
        } else if ((type_req == "grasses") &&
               (type.indexOf("grasses") != -1)) {
            return true;
        } else if ((type_req == "vines") &&
               (type.indexOf("vines") != -1)) {
            return true;
        } else if ((type_req == "ferns") &&
               (type.indexOf("ferns") != -1)) {
            return true;
        } else {
            return false;
        } 	
    };

    Util.satisfies_height_req = function(height_req, plant) {
        var max_height = plant.height[plant.height.length - 1]; 
        if (height_req == "any") {
            return true;
        } else if ((height_req == "very_low") && (max_height <= 1.5) ) {
            return true;
        } else if ((height_req == "low") && (max_height > 1.5) && (max_height <= 3)) {
            return true;
        } else if ((height_req == "medium") && (max_height > 3) && (max_height <= 6)) {
            return true;
        } else if ((height_req == "tall") && (max_height > 6) && (max_height <= 10)) {
            return true;
        } else if ((height_req == "very_tall") && (max_height > 10)) {
            return true;
        } 
        return false;
    };
    
    return Util;
}());
