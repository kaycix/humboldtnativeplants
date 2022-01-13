---
layout: list                                                            
permalink: /plant_care
title: ""
---
{% assign plant_care_folder = site.pages | where_exp: "item" , "item.path contains '/plant_care/'" %}

{% assign plant_care_map = plant_care_folder | sort:"name" %}
{% for item in plant_care_map %}
   <ul>
      	<li>
		<a href="{{item.permalink | prepend:site.baseurl }}">{{item.title}}</a>
	</li>
   </ul>
{% endfor %}

