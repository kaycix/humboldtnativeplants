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
This is a list of all plants collected on this website so far. It is not a comprehensive list of all Humboldt County Native plants. 
</p>
<!-- populate plant_data var -->
{% include getPlantData.html %}
	
{% include plants.html 
	plant_groups= plant_groups
%}
