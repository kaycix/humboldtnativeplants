---
layout: list                                                            
permalink: /plant_list
title: ""
---
{% assign plants_folder = site.pages | where_exp: "item" , "item.path contains '/plants/'" %}

{% assign plants_map = plants_folder | group_by:"top_level_category" | sort:"name" %}

<h5>Create a Plant List</h5>
	
<div id="intense"></div>

{% include plants.html 
	plants= plants_folder 
    show_select = true
%}

<script type="text/javascript" language="javascript" src="https://code.jquery.com/jquery-3.5.1.js"></script>
<script type="text/javascript" class="init">

   const params = new URLSearchParams(window.location.search); //parse params
   const q = params.get("q"); //get q param

    // takes an integer and returns a string
    function base64_url_encode(input) {
        var encodedData = input.toString(36);
        return(encodedData); 
        //.replace('+','.').replace('/','_').replace('=', '-'));
    }

    // takes a string and returns a base 36 integer  
    function base64_url_decode(input) {
        //var processedString = input.replace('.','+').replace('_','/').replace('-','='); 
        return parseInt(input, 36);
    }

    // Takes a string and returns a list of plant ids
    function bitwise_decode_to_plant_ids(input) {
       list = []
       for (let i = 0; i < 32; i++) {
          if ( (input >> i) & 1 ) {
             list.push(i);
          }
       }
       return list
    }

    // Takes a list of plant ids and returns a string
    function bitwise_encode_from_plant_ids(list) {
       output=0; 
       for (let i=0; i < list.length; i++) {
          output = output | (1 << list[i]);
       }
       return output 
    }

    console.log('encode 5: ', base64_url_encode(5));
    console.log('decode 5: ', base64_url_decode(base64_url_encode(5)));
    
    console.log('encode 123456: ', base64_url_encode(123456));
    console.log('decode 123456: ', base64_url_decode(base64_url_encode(123456)));
    
    console.log('encode 1000: ', base64_url_encode(1000));
    console.log('decode 1000: ', base64_url_decode(base64_url_encode(1000)));

    console.log('bitwise_encode [1, 3, 5]: ', bitwise_encode_from_plant_ids([1,3,5]));
    console.log('bitwise_decode from above [1, 3, 5]: ', bitwise_decode_to_plant_ids(bitwise_encode_from_plant_ids([1,3,5])));

    console.log('full encode of [1, 3, 5, 31]: ', base64_url_encode(bitwise_encode_from_plant_ids([1,3,5, 31])));
    console.log('full decode of [1, 3, 5, 31]: ', bitwise_decode_to_plant_ids(base64_url_decode(base64_url_encode(bitwise_encode_from_plant_ids([1,3,5, 31])))));
    
    console.log('full encode of [1, 3, 5, 8, 10, 12, 14, 15, 16, 31]: ', base64_url_encode(bitwise_encode_from_plant_ids([1,3,5,8,10,12,14,15,16,31])));
    console.log('full decode of [1, 3, 5, 8, 10, 12, 14, 15, 16, 31]: ', bitwise_decode_to_plant_ids(base64_url_decode(base64_url_encode(bitwise_encode_from_plant_ids([1,3,5,8,10,12,14,15,16,31])))));
</script>

