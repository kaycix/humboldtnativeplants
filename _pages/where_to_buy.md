---
layout: home                                                            
permalink: /where_to_buy
title: "Where to Purchase Native Plants"
---
<div class="nurseries">
	<h3>Where to Purchase Native Plants</h3>

	{% include nursery.html 
		business_name= "Lost Foods Nursery"
		address= "3750 Harris Street, Gate 3. Eureka, CA 95503." 
		link= ""
	%}
	
	{% include nursery.html 
		business_name= "Mattole Restoration Council Native Plant Nursery"
		address= "Located on the corner of Old Coast Wagon Road and the Mattole road between the Mattole river and downtown Petrolia." 
		link= ""
	%}

	
	{% include nursery.html 
		business_name= "California Native Plant Society (CNPS) North Coast Chapter Nursery"
		address= "5851 Mrytle Ave, Eureka, CA 95503"
		link= ""
	%}
	
	{% include nursery.html 
		business_name= "Samara Restoration"
		address= "5260 Dows Prairie Road, McKinleyville, CA 95519"
		link= ""
	%}
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
