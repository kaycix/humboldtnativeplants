---
layout: list                                                            
permalink: /plants/shade_loving_perennials
title: ""
---

{% assign plants_folder = site.pages | where_exp: "item" , "item.path contains '/plants/'" %}

{% comment %}TODO top_level_category compare should not be case sensitive {% endcomment %}
{% assign plants_in_category = plants_folder | where: "top_level_category", "Shade-loving Perennials" %}

{% assign plants_map = plants_in_category | group_by:"top_level_category" | sort:"name" %}

<h5>
	<a href="{{ "/plants/" | prepend:site.baseurl }}">All Plants</a> > 
	Shade-Loving Perennials ({{plants_in_category.size}})
</h5>
	
{% include plants.html 
	plants= plants_map 
%}


