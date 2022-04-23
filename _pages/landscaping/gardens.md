---
layout: list                                                            
#permalink: /gardens
title: "Local Native Plant Gardens"
---

<ul>
    <li>
{% for garden in site.gardens %}
    <a href="{{garden.url | prepend: site.baseurl }}"> {{garden.name }} </a>
{% endfor %}
    </li>
</ul>
