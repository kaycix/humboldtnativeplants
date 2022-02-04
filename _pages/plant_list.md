---
layout: list                                                            
permalink: /plant_list
title: ""
---
{% assign plants_folder = site.pages | where_exp: "item" , "item.path contains '/plants/'" %}

{% assign plants_map = plants_folder | group_by:"top_level_category" | sort:"name" %}

<h1>All Plants</h1>
<div id="intense"></div>

{% include plants.html 
	plants= plants_folder 
    show_select = true
%}

