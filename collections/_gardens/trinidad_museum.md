---
layout: splash

title: "Trinidad Native Plant Garden"
icon: "/assets/images/trinidad_museum.png" 

header:
 overlay_color: "#000"
 overlay_filter: "0.5"
 overlay_image: /assets/images/trinidad_museum/garden_pond_splash_image.jpeg

tagline: "Maintained by the <a href='http://www.trinidadmuseum.org/native-plant-garden/trinidad-museum-native-plant-garden-plant-list/' target='_blank'>Trinidad Museum</a>" 

intro: 
    - excerpt: "The Trinidad Museum garden includes a small pond, bee hotel and meandering paths. The beauty and tranquility of this natural landscaping, coupled with the gentle chirps and buzzes of wildlife, makes a gentle but persuasive case for native landscaping."


location: Trinidad

garden_tag_name: "trinidad_museum"

type: "demo"

gallery:
  - url: /assets/images/trinidad_museum/garden_pond.jpeg
    image_path: /assets/images/trinidad_museum/garden_pond.jpeg
    alt: "Trindad Museum Native Plant Garden"
    title: "Trinidad Museum Native Plant Garden"
  - url: /assets/images/trinidad_museum/bee_hotel.jpeg
    image_path: /assets/images/trinidad_museum/bee_hotel.jpeg
    alt: "Trindad Museum Native Plant Garden"
    title: "Trinidad Museum Native Plant Garden"
  - url: /assets/images/trinidad_museum/rock_entrance.jpeg
    image_path: /assets/images/trinidad_museum/rock_entrance.jpeg
    alt: "Trindad Museum Native Plant Garden"
    title: "Trinidad Museum Native Plant Garden"

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
{% include feature_row id="intro" type="center" %}

{% include gallery caption="Photos taken April 2022" %}

{% include plants_by_garden_category.html 
           garden_categories = page.garden_categories 
           %}

