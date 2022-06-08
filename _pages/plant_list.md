---
layout: single                                                            
permalink: /plant_list
title: ""
classes: wide
custom_js:
    - util
    - plant_data_table
---

{% assign plant_groups = site.plants | group_by:"type" %}

<h1>Create a Plant List</h1>
<div id="intense"></div>

<!-- populate plant_data var -->
{% include getPlantData.html %}

{% include plants.html 
	plant_groups= plant_groups
    show_select = true
%}

