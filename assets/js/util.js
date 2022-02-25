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

    return Util;
}());
