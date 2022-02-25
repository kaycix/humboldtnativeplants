---
layout: list                                                            
permalink: /custom_plant_list
title: ""
custom_js:
    - util 
    - custom_plant_list
---
{% assign plants_folder = site.pages | where_exp: "item" , "item.path contains '/plants/'" %}

{% assign plants_map = plants_folder | group_by:"top_level_category" | sort:"name" %}

<input id="list_title" type="text" maxlength="100" placeholder="My Plant List" value="My Plant List" />
<input type="text" placeholder="Add a brief description" maxlength="140" />

<input class="shareList" id="share_list_button" type="submit" value="Share Your List" />
<div style="clear:both"></div>

<!-- plant list html will be rendered in javascript -->
<div id="custom_plant_list">
</div>

<div id="dialog" style="display:none">
    <input type="text" value="" id="listUrl"> 
</div>

<!-- This script needs to happen in this md file (not a separate js file) because it builds 
     the javascipt data using liquid. It cannot use jQuery since jQuery loads at the end of the file -->
<script type="text/javascript">
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
    {% endfor %}
    console.log("list of all plants", plant_data);
</script>

<!-- move this to top of html page -->
<link rel="stylesheet" href="https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/themes/smoothness/jquery-ui.css">



