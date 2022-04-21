---
layout: splash

title: "Trinidad Native Plant Garden"
icon: "/assets/images/trinidad_museum.png" 

header:
 overlay_color: "#000"
 overlay_filter: "0.5"
 #overlay_image: /assets/images/cnps/garden/path_with_columbines.jpg

tagline: "Maintained by the <a href='http://www.trinidadmuseum.org/native-plant-garden/trinidad-museum-native-plant-garden-plant-list/' target='_blank'>Trinidad Museum</a>" 

location: Trinidad

garden_tag_name: "trinidad_museum"

intro: 
    - excerpt: ""

type: "demo"

garden_categories:
    - name: "Woodland"
      tag: "trinidad_museum_woodland"  
    - name: "Coastal"
      tag: trinidad_museum_coastal
    - name: "Meadow"
      tag: trinidad_museum_meadow
    - name: "Pond"
      tag: trinidad_museum_pond
---
{% include plants_by_garden_category.html 
           garden_categories = page.garden_categories 
           %}

