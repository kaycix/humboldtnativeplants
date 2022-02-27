---
layout: list                                                            
permalink: /custom_plant_list/view
title: ""
custom_js:
    - util 
    - custom_plant_list_view
---
{% assign plants_folder = site.pages | where_exp: "item" , "item.path contains '/plants/'" %}

{% assign plants_map = plants_folder | group_by:"top_level_category" | sort:"name" %}

<h3 id="plant_list_title"></h3> 

<!-- plant list html will be rendered in javascript -->
<div id="custom_plant_list">
</div>

<!-- populate plant_data var -->
{% include getPlantData.html %}

