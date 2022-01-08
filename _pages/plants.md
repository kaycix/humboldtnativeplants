---
layout: list                                                            
permalink: /plants
title: ""
plants:
  - name: yarrow
    url: "achilleamillefolium"
  - name: fescue
    url: "festucacalifornica"
---
List of Plants:

<ul>
	{% for item in page.plants %}
	<li><a href="/{{item.url}}">{{item.name}}</a></li>
	{% endfor %}
</ul>

