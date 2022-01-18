---
layout: list                                                            
permalink: /plants
title: ""
---
{% assign plants_folder = site.pages | where_exp: "item" , "item.path contains '/plants/'" %}

{% assign plants_map = plants_folder | group_by:"top_level_category" | sort:"name" %}

<h5>All Plants ({{plants_folder.size}})</h5>
	
{% include plants.html 
	plants= plants_map 
%}
