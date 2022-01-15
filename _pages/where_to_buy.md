---
layout: home                                                            
permalink: /where_to_buy
title: "Where to Purchase Native Plants"
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
