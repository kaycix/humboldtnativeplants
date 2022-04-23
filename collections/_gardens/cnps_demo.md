---
layout: splash

title: "Demonstration Garden"

header:
 overlay_color: "#000"
 overlay_filter: "0.5"
 overlay_image: /assets/images/cnps/garden/path_with_columbines.jpg

tagline: "at the <a href='/nursery/northcoast-cnps'>North Coast CNPS Nursery</a>" #Note: excerpt is printed twice unless tagline is specified

location: Eureka

intro: 
    - excerpt: "The demonstration garden occupies a corner of the CNPS nursery and is a valuable example of what homeowners can accomplish on a small suburban lot. It was created in 2019 by sustainable landscape designer Christine Kelly, with the help of CNPS and Helping Humboldt volunteers. Visitors can view the garden during Nursery Hours. Walking through the nursery also allows visitors a behind-the-scenes glimpse of this extensive native plant nursery."

map: /assets/images/cnps/garden/map.jpg

gallery:
  - url: /assets/images/cnps/garden/colorful_annuals.jpg
    image_path: /assets/images/cnps/garden/colorful_annuals.jpg
    alt: "North Coast CNPS Demonstration Garden"
    title: "North Coast CNPS Demonstration Garden"
  - url: /assets/images/cnps/garden/grass_purple_flower.jpg
    image_path: /assets/images/cnps/garden/grass_purple_flower.jpg
    alt: "North Coast CNPS Demonstration Garden"
    title: "North Coast CNPS Demonstration Garden"
  - url: /assets/images/cnps/garden/columbines.jpg
    image_path: /assets/images/cnps/garden/columbines.jpg
    alt: "North Coast CNPS Demonstration Garden"
    title: "North Coast CNPS Demonstration Garden"

garden_tag_name: "cnps_demo"

garden_categories:
    - name: "Coastal Bluffs"
      habitat_category: "coastal"
      tag: "cnps_demo_coastal"  
    - name: "Grassland & Chapparal"
      habitat_category: "meadow"
      tag: cnps_demo_grassland
    - name: "Redwood & Mixed Evergreen Forest"
      habitat_category: "woodland" 
      tag: "cnps_demo_redwood"  
    - name: "Riparian"
      habitat_category: "riparian" 
      tag: "cnps_demo_riparian"
    - name: "Container"
      habitat_category: "container"
      tag: "cnps_demo_container"  

---
{% include feature_row id="intro" type="center" %}

{% include gallery caption="Photos by Christine Kelly." %}

{% if page.map %}
<img src="{{ page.map }}" />
{% endif %}

{% include plants_by_garden_category.html 
           garden_categories = page.garden_categories 
           %}

<h3>Garden Contributors</h3>
<ul>
<li>
This garden is maintained by CNPS Nursery Directors Chris & Barbara and the CNPS nursery volunteer committee.
</li>
<li>
Garden designer: Christine
</li>
<li>
Photographer: Christine
</li>
<li>
Plant labels: <a href="https://www.kincaidplantmarkers.com">Kincaide Plant Markers</a> 
</li>
<li>
Garden signs:
</li>
<li>
Garden map diagram: Kate
</li>
</ul>
