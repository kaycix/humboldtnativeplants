---
layout: splash

title: "Sequoia Park Zoo"

header:
 overlay_color: "#000"
 overlay_filter: "0.5"
 overlay_image: /assets/images/sequoia_park_zoo/splash_image.jpg

tagline: "Maintained by the <a target='_blank' href='https://www.facebook.com/profile.php?id=100064616655462'>Eureka Sequoia Garden Club</a>" #Note: excerpt is printed twice unless tagline is specified

intro: 
    - excerpt: ""

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

garden_tag_name: "sequoia_park_zoo"

type: "demo"
---
{% include feature_row id="intro" type="center" %}

{% include plants_by_garden_category.html 
           garden = page.garden_tag_name %}

