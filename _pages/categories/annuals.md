---
layout: list                                                            
permalink: /plants/annual_herbs
title: ""
---

{% assign plants_folder = site.pages | where_exp: "item" , "item.path contains '/plants/'" %}

{% comment %}TODO top_level_category compare to Annuals should not be case sensitive {% endcomment %}
{% assign annuals = plants_folder | where: "top_level_category", "Annual herbs" %}

{% assign plants_map = annuals | group_by:"top_level_category" | sort:"name" %}

<h5>
	<a href="{{ "/plants/" | prepend:site.baseurl }}">All Plants</a> > Annual Herbs ({{annuals.size}})
</h5>
	
{% include plants.html 
	plants= plants_map 
%}

