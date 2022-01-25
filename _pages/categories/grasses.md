---
layout: list                                                            
permalink: /plants/grasses
title: ""
---

{% assign plants_folder = site.pages | where_exp: "item" , "item.path contains '/plants/'" %}

{% comment %}TODO category compare should not be case sensitive {% endcomment %}
{% assign category = "Grasses" %}

{% assign plants_map = plants_folder | where_exp: "item" , "item.categories contains category" %} 

<h5>
	<a href="{{ "/plants/" | prepend:site.baseurl }}">All Plants</a> > {{category}} ({{plants_map.size}})
</h5>
	
{% include plants.html 
	plants= plants_map 
%}

