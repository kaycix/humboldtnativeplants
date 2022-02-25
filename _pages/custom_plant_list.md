---
layout: list                                                            
permalink: /custom_plant_list
title: ""
custom_js: 
    - custom_plant_list
---
{% assign plants_folder = site.pages | where_exp: "item" , "item.path contains '/plants/'" %}

{% assign plants_map = plants_folder | group_by:"top_level_category" | sort:"name" %}

<input id="list_title" type="text" maxlength="100" placeholder="My Plant List" value="My Plant List" />
<input type="text" placeholder="Add a brief description" maxlength="140" />

<input class="shareList" id="share_list_button" type="submit" value="Share Your List" />
<div style="clear:both"></div>

<div id="custom_plant_list">
</div>

<div id="dialog" style="display:none">
    <input type="text" value="Hello World" id="listUrl"> 
</div>

<!-- This script needs to happen in this file (not a separate js file) because it builds the javascipt data using liquid. It cannot use jQuery since jQuery loads at the end of the file -->
<script src="{{ '/assets/js/util.js' | relative_url }}"></script> 
<script type="text/javascript">
    console.log("custom plant list.md script");

    const params = new URLSearchParams(window.location.search); //parse params
    console.log("window.location.search", window.location.search);
    console.log("params", params);
    const encoded_plants = params.get("encoded_plants"); //get q param
    console.log("encoded_plants:", encoded_plants);

    var base64 = Util.base64_url_decode(encoded_plants);
    console.log("base64", base64);

    var plant_ids = Util.bitwise_decode_to_plant_ids(base64);
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
                          "scientific_name" : "{{plant.scientific_name}}",
                          "id" : "{{plant.id}}",
                          "icon" : "{{plant.icon | prepend:site.baseurl}}",
                          "categories" : "{{plant.categories | join: ','}}",
                          "sun_requirements" : "{{plant.sun_requirements | join: ','}}",
                          "height" : [plant_min_height, plant_max_height]
                           
                         });
        console.log("plant_data", plant_data);
    {% endfor %}
</script>

<link rel="stylesheet" href="https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/themes/smoothness/jquery-ui.css">



