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
  - url: /assets/images/sequoia_park_zoo/sign.jpeg
    image_path: /assets/images/sequoia_park_zoo/sign.jpeg
    alt: ""
    title: ""
  - url: /assets/images/sequoia_park_zoo/silk_tassel.jpeg
    image_path: /assets/images/sequoia_park_zoo/silk_tassel.jpeg
    alt: "Coast Silk Tassel in bloom"
    title: "Coast Silk Tassel in bloom "
  - url: /assets/images/sequoia_park_zoo/oregon_grape.jpeg
    image_path: /assets/images/sequoia_park_zoo/oregon_grape.jpeg
    alt: "Ferns and Oregon Grape along the otter exhibit."
    title: "Ferns and Oregon Grape along the otter exhibit."

garden_tag_name: "sequoia_park_zoo"

type: "demo"
---
{% include feature_row id="intro" type="center" %}

{% include gallery caption="" %}

{% include plants_by_garden_category.html 
           garden = page.garden_tag_name %}

