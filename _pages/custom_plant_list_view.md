---
layout: list                                                            
permalink: /custom_plant_list/view
title: ""
---
{% assign plants_folder = site.pages | where_exp: "item" , "item.path contains '/plants/'" %}

{% assign plants_map = plants_folder | group_by:"top_level_category" | sort:"name" %}

<h3 id="plant_list_title"></h3> 


<script type="text/javascript" language="javascript" src="https://code.jquery.com/jquery-3.5.1.js"></script>
<script type="text/javascript" class="init">
    const params = new URLSearchParams(window.location.search); //parse params
    console.log("window.location.search", window.location.search);
    console.log("params", params);
    const encoded_plants = params.get("encoded_plants"); //get q param
    console.log("encoded_plants:", encoded_plants);
    
    const list_title = params.get("h"); //get q param
    
    $("#plant_list_title").html(list_title);
</script>

