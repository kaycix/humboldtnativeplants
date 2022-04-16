---
layout: splash

title: "CNPS Demonstration Garden"

header:
 overlay_color: "#000"
 overlay_filter: "0.5"
 overlay_image: /assets/images/cnps/garden/path_with_columbines.jpg

tagline: "" #Hack: excerpt is printed twice unless tagline is specified

location: Eureka

intro: 
    - excerpt: "The demonstration garden was created in 2019 by sustainable landscape designer Christine Kelly, with the help of CNPS nursery and Helping Humboldt volunteers. It occupies a corner of the CNPS nursery and represents several different ecosystems of Humboldt County. It is a valuable demonstration of what homeowners can accomplish on a small suburban lot. Visitors can view the garden during Volunteer Hours. Walking through the nursery also allows visitors a behind-the-scenes glimpse of this extensive native plant nursery.
<br/>*The plant list is currently being updated. Check back soon!*" 

gallery:
  - url: /assets/images/cnps/garden/colorful_annuals.jpg
    image_path: /assets/images/cnps/garden/colorful_annuals.jpg
    alt: "Colorful Annuals"
    title: "Colorful Annuals"
  - url: /assets/images/cnps/garden/grass_purple_flower.jpg
    image_path: /assets/images/cnps/garden/grass_purple_flower.jpg
    alt: "Iris"
    title: "Iris"
  - url: /assets/images/cnps/garden/columbines.jpg
    image_path: /assets/images/cnps/garden/columbines.jpg
    alt: "Columbines"
    title: "Columbines"

garden_tag_name: "cnps_demo"

garden_categories:
    - name: "Coastal"
      tag: "cnps_demo_coastal"  
    - name: "Grassland"
      tag: cnps_demo_grassland
    - name: "Mixed Evergreen"
      tag: "cnps_demo_evergreen"  
    - name: "Chaparral"
      tag: "cnps_demo_chaparral"  
    - name: "Container"
      tag: "cnps_demo_container"  
    - name: "Redwood Forest"
      tag: "cnps_demo_redwood"  
    - name: "Riparian"
      tag: "cnps_demo_riparian"

---
{% include feature_row id="intro" type="center" %}

{% include gallery caption="" %}

{% if page.garden_categories %}
<section class="browse">
    <h3>Browse plants  by habitat:</h3>
    <div class="list_categories">
        {% for garden_category in page.garden_categories %}
        <div class="list_category">
            <a href="#{{garden_category.tag}}">{{garden_category.name}}</a>
        </div>
        {% endfor %}
    </div>
    <div style="clear:both"></div>
</section>
<h3>View all plants:</h3>
{% for garden_category in page.garden_categories %}
    {% assign tag = garden_category.tag %}
    {% assign plants = site.plants | where_exp: "item", 
                                     "item.gardens contains tag" %}
    {% assign plant_groups = plants | group_by : "type" %} 

<h3 id="{{garden_category.tag}}" class="{{garden_category.name | downcase | replace: " ", "_"  }}">{{ garden_category.name }}</h3>

{% include plant_cards.html 
    plants = plants
%}
{% endfor %}
{% else %}
    {% assign plants = site.plants | where_exp: "item", 
                                     "item.gardens contains garden" %}
    {% assign plant_groups = plants | group_by : "type" %} 

    {{ garden_category.name }}

    {% include plant_cards.html 
        plants = plants
    %}
{% endif %}

