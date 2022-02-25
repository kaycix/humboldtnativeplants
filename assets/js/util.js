var Util = (function() {

    function Util() {}

    // takes a string and returns a base 36 integer  
    Util.base64_url_decode = function(input) {
        //var processedString = input.replace('.','+').replace('_','/').replace('-','='); 
        return parseInt(input, 36);
    }
    
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

    return Util;
}());
