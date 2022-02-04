---
layout: list                                                            
permalink: /custom_plant_list
title: ""
---
{% assign plants_folder = site.pages | where_exp: "item" , "item.path contains '/plants/'" %}

{% assign plants_map = plants_folder | group_by:"top_level_category" | sort:"name" %}

<h1>Custom Created Plant List</h1>

<div id="custom_plant_list">
</div>

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
   
    // gather plant_data in json
   var plant_data = [];
   {% for plant in plants_folder %}

        // gather plant height info
        var plant_min_height = 0;
        var plant_max_height = 0;
        {% for attr in plant.plant_size %}
            // Plants with only one height will have same min and max height
            plant_min_height = '{{attr.height | first }}';
            plant_max_height = '{{attr.height | last }}';
        {% endfor %}
        
        // add plant data object
        plant_data.push({ "common_name" : "{{plant.common_name}}",
                          "id" : "{{plant.id}}",
                          "categories" : "{{plant.categories | join: ','}}",
                          "sun_requirements" : "{{plant.sun_requirements | join: ','}}",
                          "height" : [plant_min_height, plant_max_height]
                           
                         });
    {% endfor %}
    console.log('ALL PLANTS DATA:', plant_data);

    for (var i = 0; i < plant_data.length; i++) {
        var current_id = parseInt(plant_data[i].id, 10);
        
        var index = plant_ids.indexOf(current_id);    
        if (index != -1) {
            var plant_info = "<div>" + 
                                "<h5>" + plant_data[i].common_name + "</h5>" + 
                             "<div>";
            $("#custom_plant_list").append(plant_info);
        } 
    } 
    
</script>


