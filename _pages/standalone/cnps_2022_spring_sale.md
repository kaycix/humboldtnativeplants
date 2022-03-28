---
layout: single
permalink: /cnps_2022_spring_sale/
title: ""
classes: "standalone event wide"
custom_js:
    - util
    - plant_data_table
---
<!--
<p>
This website is currently under construction! Report any issues for fixing and please check back for updates.
</p>
-->
<div class="icon_holder" style="float:left; margin-right:16px">
    <img src="{{'/assets/images/cnps_northcoast.jpg' | prepend:site.baseurl }}" />
</div>
<h1>Spring Native Plant Sale</h1>

<p>
    Date: April 30 & May 1, 2022
    <br/>
    Website: <a href="https://northcoastcnps.org/index.php/44-topmenucontent/288-plant-sale-event-page">CNPS North Coast Chapter: Spring Plant Sale</a> 
</p>

<hr/>

<h3>
Browse plants by categories: 
</h3>
<ul class="categories">
    <li>
        <a href="{{'/category/hummingbird' | prepend:site.baseurl }}">
        Hummingbird Garden
        </a>
    </li>
    <li>    
        <a href="{{'/category/butterfly' | prepend:site.baseurl }}">
       Butterfly Garden
        </a>
    </li>
    <li>    
       Containers
    </li>
    <li>    
       Edibles
    </li>
    <li>    
       CNPS Demonstration Garden
    </li>
    <li>    
       Trinidad Native Plant Garden
    </li>
    <li>
        <a href="{{'/garden/arcata-marsh' | prepend:site.baseurl }}">
        Arcata Marsh Native Plant Garden
        </a>
    </li>
    <li>
        <a href="{{'/category/hedge' | prepend:site.baseurl }}">
        Hedge Plants
        </a>
    </li>
</ul>

<div style="clear:both"></div>

<h3>View All Spring Sale Plants</h3>
<p>
Filter by sun requirements, plant type, and height to find the perfect native plants for your garden.
</p>
{% assign category = "cnps_2022_spring"  %}
{% assign plants = site.plants | where_exp: "item", 
                                 "item.categories contains category" %}
{% assign plant_groups = plants | group_by : "type" %} 

<!-- populate plant_data var -->
{% include getPlantData.html %}
	
{% include plants.html 
	plant_groups= plant_groups
    show_native_to_humboldt= true
%}
