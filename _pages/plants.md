---
layout: single
permalink: /plants
title: ""
classes: wide
custom_js:
    - util 
    - plant_data_table
---

{% assign plant_groups = site.plants | group_by: "type" %} 

<h5>All Plants</h5> 

<!-- populate plant_data var -->
{% include getPlantData.html %}
	
{% include plants.html 
	plant_groups= plant_groups
%}
