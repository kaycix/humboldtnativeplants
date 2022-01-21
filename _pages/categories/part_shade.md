---
layout: list                                                            
permalink: /plants/part_shade
title: ""
---

{% assign plants_folder = site.pages | where_exp: "item" , "item.path contains '/plants/'" %}

{% assign plants = plants_folder | where_exp: "item", "item.sun_requirements contains 'Part Shade'" %}

{% assign plants_map = plants | group_by:"top_level_category" | sort:"name" %}

<h5>
	<a href="{{ "/plants/" | prepend:site.baseurl }}">All Plants</a> > Part Shade ({{plants.size}})
</h5>
	
{% include plants.html 
	plants= plants_map 
%}

