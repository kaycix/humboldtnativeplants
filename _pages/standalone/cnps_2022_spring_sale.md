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
<div class="icon_holder" style="float:left; margin-right:16px; border-radius: 100px">
    <img src="{{'/assets/images/lupinus_rivularis.jpg' | prepend:site.baseurl }}" style="border-radius: 100px; margin-bottom: 15px" />
</div>
<h1>Spring Native Plant Sale</h1>

<p>
    Date: April 30 & May 1, 2022. Saturday & Sunday
    <br/>
    Time: 10am - 5pm, both days
    <br/>
    <br/>
    Event Website: <a href="https://northcoastcnps.org/index.php/44-topmenucontent/288-plant-sale-event-page">North Coast CNPS: Spring Plant Sale</a> 
</p>
<p>
This event is sponsored by:
<br/>
<a href="https://northcoastcnps.org">North Coast Califonia Native Plant Society</a>
</p>

<div style="clear:both"></div>
<hr/>
<section class="categories">
    <h3>
    Browse plants by categories: 
    </h3>
    <ul class="categories">
        <li>    
            <a href="{{'/category/beginner' | prepend:site.baseurl }}">
           Beginner-Friendly Native Plants
            </a>
        </li>
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
            <a href="{{'/category/container' | prepend:site.baseurl }}">
            Container-Gardening
            </a>
        </li>
        <li>    
            <a href="{{'/category/bee' | prepend:site.baseurl }}">
                Bee
            </a>
        </li>
        <!--
        <li>    
            <a href="{{'/category/edible' | prepend:site.baseurl }}">
                Edibles
            </a>
        </li>-->
        <li>    
            <!--    
           North Coast CNPS Garden (Eureka)
            -->
        </li>
        <li>
            <!--    
           Trinidad Native Plant Garden
            -->
         </li>
        <li>
            <a href="{{'/garden/arcata-marsh' | prepend:site.baseurl }}">
            Arcata Marsh Native Plant Garden
            </a>
        </li>
        <li>
            <a href="{{'/category/groundcover' | prepend:site.baseurl }}">
                Ground Covers 
            </a>
        </li>
        <li>
            <a href="{{'/category/hedge' | prepend:site.baseurl }}">
            Hedge Plants
            </a>
        </li>
    </ul>
    <div style="clear:both"></div>
</section>

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
