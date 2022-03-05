---
layout: single
permalink: /plants
title: ""
classes: wide
custom_js:
    - util 
    - plant_data_table
---

{% assign plants_folder = site.plants %} 
{% assign plants_map = plants_folder | group_by:"top_level_category" | sort:"name" %}

<h5>All Plants</h5> 

<!-- populate plant_data var -->
{% include getPlantData.html %}
	
{% include plants.html 
	plants= plants_folder 
%}
