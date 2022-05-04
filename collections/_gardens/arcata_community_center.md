---
layout: splash

title: "Arcata Community Center Garden"

header:
 overlay_color: "#000"
 overlay_filter: "0.5"
 overlay_image: /assets/images/arcata_community_center/splash_image.jpeg

tagline: "Maintained by the <a target='_blank' href='https://www.cityofarcata.org'>City of Arcata</a>" #Note: excerpt is printed twice unless tagline is specified

intro: 
    - excerpt: "This garden is a small strip of land located beside Health Sport and across from the Arcata Community Center."


location: Arcata

gallery:
  - url: /assets/images/arcata_community_center/walkway.jpeg
    image_path: /assets/images/arcata_community_center/walkway.jpeg
    alt: "Arcata Community Center Native Plant Garden."
    title: "Arcata Community Center Plant Garden."
  - url: /assets/images/arcata_community_center/field.jpeg
    image_path: /assets/images/arcata_community_center/field.jpeg
    alt: "Arcata Community Center Native Plant Garden."
    title: "Arcata Community Center Plant Garden."
  - url: /assets/images/arcata_community_center/sign.jpeg
    image_path: /assets/images/arcata_community_center/sign.jpeg
    alt: "Arcata Community Center Native Plant Garden."
    title: "Arcata Community Center Plant Garden."

garden_tag_name: "arcata_community_center"

type: "demo"

website: 
    name: "Friends of the Arcata Marsh"
    url: "https://www.arcatamarshfriends.org/amic-native-plant-garden/" 
---
{% include feature_row id="intro" type="center" %}

{% include gallery caption="" %}

{% include plants_by_garden_category.html 
           garden = page.garden_tag_name %}
