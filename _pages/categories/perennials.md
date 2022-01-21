---
layout: list                                                            
permalink: /plants/perennial_herbs
title: ""
---

{% assign plants_folder = site.pages | where_exp: "item" , "item.path contains '/plants/'" %}

{% comment %}TODO top_level_category compare should not be case sensitive {% endcomment %}
{% assign perennials = plants_folder | where: "top_level_category", "Perennial herbs" %}

{% assign plants_map = perennials | group_by:"top_level_category" | sort:"name" %}

<h5>
	<a href="{{ "/plants/" | prepend:site.baseurl }}">All Plants</a> > Perennial Herbs ({{perennials.size}})
</h5>
	
{% include plants.html 
	plants= plants_map 
%}


