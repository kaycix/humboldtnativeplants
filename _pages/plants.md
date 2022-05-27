---
layout: single
permalink: /plants

title: "Native Plants"
classes: wide

intro: 
    - excerpt: "This is a searchable and sortable list of all plants listed on this website so far - seeded from multiple nursery inventory and garden lists. It is not a comprehensive list of all Humboldt County native plants."

custom_js:
    - util 
    - plant_data_table
---

{% include feature_row id="intro" type="center" %}

{% assign plant_groups = site.plants | group_by: "type" %} 

<!-- populate plant_data var -->
{% include getPlantData.html %}
	
{% include plants.html 
	plant_groups= plant_groups
%}
