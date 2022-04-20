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
    alt: "Colorful Annuals"
    title: "Photo by Christine Kelly"
  - url: /assets/images/cnps/garden/grass_purple_flower.jpg
    image_path: /assets/images/cnps/garden/grass_purple_flower.jpg
    alt: "Iris"
    title: "Photo by Christine Kelly"
  - url: /assets/images/cnps/garden/columbines.jpg
    image_path: /assets/images/cnps/garden/columbines.jpg
    alt: "Columbines"
    title: "Photo by Christine Kelly"

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

{% include gallery caption="" %}

{% if page.map %}
<img src="{{ page.map }}" />
{% endif %}

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

<h3 id="{{garden_category.tag}}" class="{{garden_category.habitat_category}}">{{ garden_category.name }}</h3>

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

