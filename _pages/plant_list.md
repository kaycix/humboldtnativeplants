---
layout: single                                                            
permalink: /plant_list
title: ""
classes: wide
custom_js:
    - util 
---
{% assign plants_folder = site.pages | where_exp: "item" , "item.path contains '/plants/'" %}

{% assign plants_map = plants_folder | group_by:"top_level_category" | sort:"name" %}

<h1>Create a Plant List</h1>
<div id="intense"></div>

<!-- populate plant_data var -->
{% include getPlantData.html %}

{% include plants.html 
	plants= plants_folder 
    show_select = true
%}

