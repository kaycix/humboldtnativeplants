---
layout: list                                                            
permalink: /plants/grasses
title: ""
---

{% assign plants_folder = site.pages | where_exp: "item" , "item.path contains '/plants/'" %}

{% comment %}TODO top_level_category compare should not be case sensitive {% endcomment %}
{% assign grasses = plants_folder | where: "top_level_category", "Grasses" %}

{% assign plants_map = grasses | group_by:"top_level_category" | sort:"name" %}

<h5>
	<a href="{{ "/plants/" | prepend:site.baseurl }}">All Plants</a> > Grasses ({{grasses.size}})
</h5> 
	
{% include plants.html 
	plants= plants_map 
%}


