---
layout: list                                                            
permalink: /custom_plant_list
title: ""
custom_js:
    - util 
    - custom_plant_list
---

{% assign plant_groups = site.plants | group_by:"type" %} 

<input id="list_title" type="text" maxlength="100" placeholder="My Plant List" value="My Plant List" />
<input type="text" placeholder="Add a brief description" maxlength="140" />

<input class="shareList" id="share_list_button" type="submit" value="Send List to Others" />
<div style="clear:both"></div>

<!-- plant list html will be rendered in javascript -->
<div id="custom_plant_list">
</div>

<div id="dialog" style="display:none">
    Anyone with this link can view your plant list. Use this link to save your list and share it with others.
    <input type="text" value="" id="listUrl"> 
</div>

<!-- populate plant_data var -->
{% include getPlantData.html %}

<!-- TODO move this to top of html page. jquery ui needed for dialog -->
<link rel="stylesheet" href="https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/themes/smoothness/jquery-ui.css">



