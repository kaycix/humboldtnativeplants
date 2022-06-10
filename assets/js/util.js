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




    // takes a list of integers and returns a string
    Util.base64_url_encode_improved = function(list) {
       var encodedData = ""

       for (let i=0; i < list.length; i++) {
          if (i > 0) {
             encodedData = encodedData + ","
          }
          if (list[i]) {
             encodedData = encodedData + list[i].toString(36);
          }
       }

       return(encodedData); 
        //.replace('+','.').replace('/','_').replace('=', '-'));
    };

    // takes a string and returns a list of integers 
    Util.base64_url_decode_improved = function(input) {
        //var processedString = input.replace('.','+').replace('_','/').replace('-','='); 

        var decodedData = [];
        var list = input.split(',');
        for (let i=0; i < list.length; i++) {
           decodedData[i] = parseInt(list[i], 36);
        }

        return decodedData;
    }




    // Takes a list of plant ids and returns a list of integers (bitflags)
    Util.bitwise_encode_from_plant_ids_improved = function(list) {

       // used for multiple 32-bit integer bitflags
       output = [];

       for (let i=0; i < list.length; i++) {
          var quotient = Math.floor(list[i] / 32);
          var remainder = list[i] % 32;

          output[quotient] = output[quotient] | (1 << remainder);
       }
       return output 
    };

    Util.bitwise_decode_to_plant_ids_improved = function(input) {
       output = [];

       for (let multiple=0; multiple < input.length; multiple++) {
          for (let i = 0; i < 32; i++) {
             if ( (input[multiple] >> i) & 1 ) {
                output.push(multiple*32 + i);
             }
          }
       }
       return output;
    };


    // Takes a list of plant ids and returns an integer (bitflag)
    Util.bitwise_encode_from_plant_ids = function(list) {
       output=0;
       for (let i=0; i < list.length; i++) {
          output = output | (1 << list[i]);
       }
       return output 
    };
    
    // Takes a integer (bitflag) and returns a list of plant ids
    Util.bitwise_decode_to_plant_ids = function(input) {
       list = []
       for (let i = 0; i < 32; i++) {
          if ( (input >> i) & 1 ) {
             list.push(i);
          }
       }
       return list
    };

    Util.testEncode = function () {
        var plant_ids = [4, 25];
        console.log("Encode and Decode with plant_ids:", plant_ids);
        
        var bitwise_encoding =  Util.bitwise_encode_from_plant_ids(plant_ids);
        console.log("bitwise encoding", bitwise_encoding);
        var encoded_plants = Util.base64_url_encode(bitwise_encoding);
        console.log("encoded url", encoded_plants);

        var base64 = Util.base64_url_decode(encoded_plants);
        console.log("decoded url", base64);
        var plant_ids = Util.bitwise_decode_to_plant_ids(base64);
        console.log("decoded plant ids", plant_ids);

        
        var plant_ids_improved = [270, 4, 25, 32, 33, 42, 63, 72];
        console.log("Improved: Encode and Decode with plant_ids:", plant_ids_improved);

        var bitwise_encoding_improved =  Util.bitwise_encode_from_plant_ids_improved(plant_ids_improved);
        var base64_encoding_improved = Util.base64_url_encode_improved(bitwise_encoding_improved);

        console.log("Improved: base64 encoding of plant ids: ", base64_encoding_improved);

        var base64_decoding_improved = Util.base64_url_decode_improved(base64_encoding_improved);
        var plant_ids_decoded = Util.bitwise_decode_to_plant_ids_improved(base64_decoding_improved);

        console.log("Improved: decoded base64 plant ids", plant_ids_decoded );
        
 
    };

    // 
    Util.satisfies_sun_req = function(sun_req, plant) {
        console.log('evaluating sun reqs', sun_req, plant);
        if (!plant) {
            return false;
        } 
        
        if (!plant.sun_requirements) {
            return false;
        }
        // TOFIX: don't depend on proper casing of reqs from md file 
        if (!sun_req || sun_req == "any") {
            return true;
        } else if ((sun_req == "full_sun_only") && 
                   (plant.sun_requirements.indexOf("Full Sun") != -1) &&
                   (plant.sun_requirements.split(",").length == 1)) {
            return true;
        } else if ((sun_req == "full_sun") && 
                   (plant.sun_requirements.indexOf("Full Sun") != -1)) {
            return true;
        } else if ((sun_req == "part_shade_only") &&
               (plant.sun_requirements.indexOf("Part Shade") != -1) &&
               (plant.sun_requirements.split(",").length == 1)) {
            return true;
        } else if ((sun_req == "part_shade") &&
               (plant.sun_requirements.indexOf("Part Shade") != -1)) {
            return true;
        } else if ((sun_req == "full_shade_only") && 
               (plant.sun_requirements.indexOf("Full Shade") != -1) &
               (plant.sun_requirements.split(",").length == 1)) {
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
