---
layout: list                                                            
permalink: /plants
title: ""
custom_js:
    - util 
---
{% assign plants_folder = site.pages | where_exp: "item" , "item.path contains '/plants/'" %}

{% assign plants_map = plants_folder | group_by:"top_level_category" | sort:"name" %}

<h5>All Plants</h5>

<!-- populate plant_data var -->
{% include getPlantData.html %}
	
{% include plants.html 
	plants= plants_folder 
%}
