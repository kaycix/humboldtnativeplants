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
        console.log('evaluating sun reqs', sun_req, plant);
        if (!plant) {
            console.log('returning false');
            return false;
        } 
        if (!sun_req || sun_req == "any") {
            console.log('sun_req = any, returning true');
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
        if (!plant) {
            return false;
        } 
        
        var type = plant.type.toLowerCase();
        console.log(type_req, type, plant);

        if (!type_req || type_req == "any") {
            return true;
        } else if ((type_req == "perennial_herb") && 
                   (type == "perennial herb")) {
            return true;
        } else if ((type_req == "shrub") &&
               (type == "shrub")) {
            return true;
        } else if ((type_req == "tree") &&
                (type == "tree")) {
            return true;
        } else if ((type_req == "annual_herb") &&
               (type == "annual herb")) {
            return true;
        } else if ((type_req == "grass") &&
               (type == "grass")) {
            return true;
        } else if ((type_req == "vine") &&
               (type == "vine")) {
            return true;
        } else if ((type_req == "fern") &&
               (type == "fern")) {
            return true;
        } else if ((type_req == "succulent") &&
               (type == "succulent")) {
            return true;
        } else {
            return false;
        } 	
    };

    Util.satisfies_height_req = function(height_req, plant) {
        if (!plant) {
            console.log('returning false');
            return false;
        } 
        
        console.log('evaluating height reqs', height_req, plant);
        var max_height = Math.round(plant.height[plant.height.length - 1]); 
        if (!height_req || height_req == "any") {
            return true;
        } else if ((height_req == "low") && (max_height <= 3)) {
            return true;
        } else if ((height_req == "medium") && 
                   (max_height > 3) &&
                   (max_height <= 6)) {
            return true;
        } else if ((height_req == "tall") && 
                   (max_height > 6)) { 
            return true;
        } 
        return false;
    };
    
    return Util;
}());
