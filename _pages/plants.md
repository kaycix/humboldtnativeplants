---
layout: list                                                            
permalink: /plants
title: ""
---
<h5>All Plants</h5>

{% assign plants_folder = site.pages | where_exp: "item" , "item.path contains '/plants/'" %}

{% assign plants_map = plants_folder | group_by:"top_level_category" | sort:"name" %}
{% for category in plants_map %}
   <h6> {{ category.name }} </h6>
   <ul>
      {% for item in category.items %}
         <li><a href="{{ item.permalink }}" target="_blank">{{item.common_name}}</a></li>
      {% endfor %}
   </ul>
{% endfor %}
