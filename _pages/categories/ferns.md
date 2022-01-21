---
layout: list                                                            
permalink: /plants/ferns
title: ""
---

{% assign plants_folder = site.pages | where_exp: "item" , "item.path contains '/plants/'" %}

{% comment %}TODO top_level_category compare should not be case sensitive {% endcomment %}
{% assign ferns = plants_folder | where: "top_level_category", "Ferns" %}

{% assign plants_map = ferns | group_by:"top_level_category" | sort:"name" %}

<h5>
	<a href="{{ "/plants/" | prepend:site.baseurl }}">All Plants</a> > Ferns ({{ferns.size}})
<h5>
	
{% include plants.html 
	plants= plants_map 
%}


