---
layout: "home"
title: ""
---
<div class="nurseries">
<h3>Where to Purchase Native Plants</h3>

{% assign nurseries_folder = site.pages | where_exp: "item" , "item.path contains '/nurseries/'" %}
{% assign nurseries_map = nurseries_folder | sort:"name" %}

<ul>
{% for nursery in nurseries_map %}
<li>{{nursery.business_name}}
<br/>
{{nursery.address}}
</li>
{% endfor %}
</ul>
</div>

<div class="nurseries">
<h3>Where to Purchase Seeds</h3>

{% assign seeds_folder = site.pages | where_exp: "item" , "item.path contains '/seed_sources/'" %}
{% assign seeds_map = seeds_folder | sort:"name" %}

<ul>
{% for seeds in seeds_map %}
<li>{{seeds.business_name}}
<br/>
<a href="{{seeds.website}}" target="_blank">{{seeds.website}}</a>
</li>
{% endfor %}
</ul>
</div>

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. 
