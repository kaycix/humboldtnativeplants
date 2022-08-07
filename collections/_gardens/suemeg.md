---
layout: splash

title: "Sue-Meg State Park Native Plant Garden"

header:
 overlay_color: "#000"
 overlay_filter: "0.5"
 overlay_image: /assets/images/suemeg/entrance_wide.jpeg

tagline: "Located at <a target='_blank' href=''>Sue-Meg State Park</a>" #Note: excerpt is printed twice unless tagline is specified

intro: 
    - excerpt: "Strolling through this native plant garden feels a bit like discovering a secret garden with its lush, sprawlingvegetation. Multiple walking paths meander through lush shaded walkways and past secluded sitting areas. Borders a reconstructed Yurok village for a complete time capsule effect."


icon: ""

location: Trinidad

gallery:
  - url: /assets/images/suemeg/walkway.jpeg
    image_path: /assets/images/suemeg/walkway.jpeg
    alt: ""
    title: ""
  - url: /assets/images/suemeg/sorrel.jpeg
    image_path: /assets/images/suemeg/sorrel.jpeg
    alt: ""
    title: ""
  - url: /assets/images/suemeg/tree.jpeg
    image_path: /assets/images/suemeg/tree.jpeg
    alt: ""
    title: ""
  - url: /assets/images/suemeg/bench2.jpeg
    image_path: /assets/images/suemeg/bench2.jpeg
    alt: ""
    title: ""
  - url: /assets/images/suemeg/bench.jpeg
    image_path: /assets/images/suemeg/bench.jpeg
    alt: ""
    title: ""
  - url: /assets/images/suemeg/twinberry.jpeg
    image_path: /assets/images/suemeg/twinberry.jpeg
    alt: ""
    title: ""

garden_tag_name: "suemeg"

type: "demo"
---
{% include feature_row id="intro" type="center" %}

{% include gallery caption="" %}

{% include plants_by_garden_category.html 
           garden = page.garden_tag_name %}


<!-- plant list: cow parsnip, wild cucumber (marah oreganus), rewood(sequoia sempervirens) -->
