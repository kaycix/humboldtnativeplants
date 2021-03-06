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
<div class="main_icon_holder">
    <img class="title_icon" src="{{'/assets/images/lupinus_rivularis.jpg' | prepend:site.baseurl }}">
</div>

<h1>Spring Native Plant Sale</h1>

<p>
    Saturday April 30, 9a - 4p & Sunday May 1, 9a - 3p.
    <br/>
    <a href="https://www.signupgenius.com/go/904054da5a823a2f94-spring" target="_blank">Sign Up to Shop</a> via SignUp Genius. 25 Spots per half-hour time slots.
    <br/>
    <br/>
     Pricing: $5 for 4-inch pots, $10-$12 for 1 gallon pots, $15 for 2 gallon pots.
    <br/>
     Website: <a href="https://northcoastcnps.org/index.php/44-topmenucontent/288-plant-sale-event-page" target="_blank">North Coast CNPS: Spring Plant Sale</a> 
</p>
<p>
Public event by <a href="{{'/nursery/northcoast-cnps' | prepend:site.baseurl }}">North Coast CNPS Nursery</a>
</p>

<div style="clear:both"></div>
<hr/>
<section class="browse">
    <h3>
    Browse categories: 
    </h3>
    <p>Not sure where to start? Check out these plant lists for ideas.</p>  
    <div class="list_categories">
        <div class="list_category">
            <a href="{{'/category/beginner' | prepend:site.baseurl }}">
           Beginner-Friendly Native Plants
            </a>
        </div>
        <div class="list_category">
            <a href="{{'/category/hummingbird' | prepend:site.baseurl }}">
            Hummingbird Gardens
            </a>
        </div>
        <div class="list_category">
            <a href="{{'/category/butterfly' | prepend:site.baseurl }}">
           Butterfly Gardens
            </a>
        </div>
        <div class="list_category">
            <a href="{{'/category/container' | prepend:site.baseurl }}">
            Container-Gardening
            </a>
        </div>
        <div class="list_category">
            <a href="{{'/category/bee' | prepend:site.baseurl }}">
                Bee-Friendly Gardens
            </a>
        </div>
        <div class="list_category">
            <a href="{{'/category/groundcover' | prepend:site.baseurl }}">
                Groundcover Plants 
            </a>
        </div>
        <div class="list_category">
            <a href="{{'/category/hedge' | prepend:site.baseurl }}">
            Hedge Plants
            </a>
        </div>
        <!--
        <li>    
            <a href="{{'/category/edible' | prepend:site.baseurl }}">
                Edibles
            </a>
        </li>-->
        <div class="list_category">
            <a href="{{'/gardens' | prepend:site.baseurl }}">
            Local Native Plant Gardens
            </a>
        </div>
    </div>
</section>
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
