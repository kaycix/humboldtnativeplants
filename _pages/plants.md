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

<h2>All Plants</h2> 
<p>
These are a list of all the plants we have collected on this website so far. It is by no means a comprhensive list of all Humboldt County Native plants (maybe one day!). 
</p>
<!-- populate plant_data var -->
{% include getPlantData.html %}
	
{% include plants.html 
	plant_groups= plant_groups
%}
