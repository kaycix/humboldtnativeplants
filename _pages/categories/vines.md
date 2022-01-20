---
layout: list                                                            
permalink: /plants/vines
title: ""
---

{% assign plants_folder = site.pages | where_exp: "item" , "item.path contains '/plants/'" %}

{% comment %}TODO top_level_category compare should not be case sensitive {% endcomment %}
{% assign vines = plants_folder | where: "top_level_category", "Vine" %}

{% assign plants_map = vines | group_by:"top_level_category" | sort:"name" %}

<h5>
	<a href="{{ "/plants/" | prepend:site.baseurl }}">All Plants</a> > 
	Vines ({{vines.size}})
</h5>
	
{% include plants.html 
	plants= plants_map 
%}

