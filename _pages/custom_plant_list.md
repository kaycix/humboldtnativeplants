---
layout: list                                                            
permalink: /custom_plant_list
title: ""
---
{% assign plants_folder = site.pages | where_exp: "item" , "item.path contains '/plants/'" %}

{% assign plants_map = plants_folder | group_by:"top_level_category" | sort:"name" %}

<h1>Custom Created Plant List</h1>

<script type="text/javascript" language="javascript" src="https://code.jquery.com/jquery-3.5.1.js"></script>
<script type="text/javascript" class="init">

    // takes a string and returns a base 36 integer  
    var base64_url_decode = function(input) {
        //var processedString = input.replace('.','+').replace('_','/').replace('-','='); 
        return parseInt(input, 36);
    };

    // Takes a string and returns a list of plant ids
    var bitwise_decode_to_plant_ids = function(input) {
       list = []
       for (let i = 0; i < 32; i++) {
          if ( (input >> i) & 1 ) {
             list.push(i);
          }
       }
       return list
    };

    const params = new URLSearchParams(window.location.search); //parse params
    console.log("window.location.search", window.location.search);
    console.log("params", params);
    const encoded_plants = params.get("encoded_plants"); //get q param
    console.log("encoded_plants:", encoded_plants);


    var base64 = base64_url_decode(encoded_plants);
    console.log("base64", base64);

    var plant_ids = bitwise_decode_to_plant_ids(base64);
    console.log("decoded plant ids *fingers crossed*", plant_ids);
</script>

{% include plants.html 
	plants= plants_folder 
    show_select = false
%}

