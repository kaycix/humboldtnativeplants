---
layout: list                                                            
permalink: /custom_plant_list
title: ""
custom_js:
    - util 
    - custom_plant_list
---
{% assign plants_folder = site.pages | where_exp: "item" , "item.path contains '/plants/'" %}

{% assign plants_map = plants_folder | group_by:"top_level_category" | sort:"name" %}

<input id="list_title" type="text" maxlength="100" placeholder="My Plant List" value="My Plant List" />
<input type="text" placeholder="Add a brief description" maxlength="140" />

<input class="shareList" id="share_list_button" type="submit" value="Share Your List" />
<div style="clear:both"></div>

<!-- plant list html will be rendered in javascript -->
<div id="custom_plant_list">
</div>

<div id="dialog" style="display:none">
    <input type="text" value="" id="listUrl"> 
</div>

<!-- populate plant_data var -->
{% include getPlantData.html %}

<!-- TODO move this to top of html page -->
<link rel="stylesheet" href="https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/themes/smoothness/jquery-ui.css">



