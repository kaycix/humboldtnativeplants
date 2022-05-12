---
layout: splash
classes: "index-page"
title: "Native plants are <span class='animate'>better</span> for 
         <div id='container'>
             <div id='flip'><div>
             <div>pollinators.</div></div>
             <div><div>drought.</div></div>
             <div><div>the planet.</div></div>
         </div></div>"    
header:
    overlay_color: "#ebf1f4"
    overlay_filter: "0"
    actions:
         - label: "Learn More"
           url: /learn_more
    excerpt: Native plants are beautiful, easy to grow, and provide a critical foundation for our local ecosystem. 

browse_plants:
  - image_path: /assets/images/wildlife/butterfly/swallowtail_small_feature.jpg
    alt: "Wildlife"
    title: "Wildlife"
    url: "/wildlife"
  - image_path: /assets/images/landscaping/groundcover_small_feature.jpg 
    image_caption: "Trinidad Museum"
    alt: "Landscaping Needs" 
    title: "Landscaping Needs"
    url: "/landscaping" 
  - image_path: /assets/images/arcata_marsh/garden/flower_small_feature_row.jpg 
    image_caption: "LJ Photography"
    alt: "Beginner-Friendly" 
    title: "Beginner-Friendly"
    url: "/category/beginner" 
  - image_path: /assets/images/icons/coming-soon.jpg 
    alt: "Coming Soon" 
    title: "Light Requirements"
  - image_path: /assets/images/icons/coming-soon.jpg 
    alt: "Coming Soon" 
    title: "Habitat"

public_gardens:
  - image_path: /assets/images/cnps/garden/flower.jpg
    image_caption: CK Photography
    title: "Visit Native Plant Gardens"
    excerpt: "Browse pictures and plant lists from local native plant gardens for ideas and inspiration - from Eureka to Trinidad. Explore the wide variety of native plant landscapes that are sustainable and promote biodiversity, while still reflecting the unique preferences  of their creators."
    url: "/gardens"
    btn_label: "READ MORE &#8594;"

wildlife_gardens:
  - image_path: /assets/images/cnps/garden/ladybug.jpg
    image_caption: CK Photography
    title: "Gardening for Wildlife"
    excerpt: "Discover native plants that will attract pollinators and benefit other wildlife in your area. Pristine lawns and exotic gardens are beautiful but often otherwise lifeless. A native plant garden will be alive with the sounds and movements of bees, butterflies and birds."
    url: "/wildlife"
    btn_label: "READ MORE &#8594;"

landscaping:
  - image_path: /assets/images/arcata_marsh/garden/flower_feature_row.jpg
    image_caption: LJ Photography
    title: "Practical Landscaping with Natives"
    excerpt: "Native plants can fulfill traditional landscaping requirements - while also being practical, drought-tolerant and low-maintenance."
    url: "/landscaping"
    btn_label: "READ MORE &#8594;"

where_to_buy:
  - image_path: /assets/images/cnps_northcoast_nursery.jpg 
    title: "Where to Buy Native Plants"
    excerpt: "Get to know local nurseries that carry native plants and online sources for native seeds and plants."
    url: "/where_to_buy"
    btn_label: "READ MORE &#8594;"

volunteer:
  - image_path: /assets/images/cnps/garden/volunteers_feature.jpg 
    title: "Join the Conservation Movement"
    excerpt: "If you are interested in making a difference, consider lending your time and talents to a local volunteer organization. These organizations have such important missions but need the extra hands to enact them. Help to be a part of the change you want to see!"
    url: "/connection/volunteer"
    btn_label: "READ MORE &#8594;"

---
<div class="small_feature_row">
<h2>Browse Plants by</h2>
{% include feature_row id="browse_plants" %}
</div>

{% include feature_row id="public_gardens" type="left" %}

{% include feature_row id="where_to_buy" type="right" %}

<!--
<div class="page__hero--overlay" style="background-color: #ebf1f4; background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), url('');">
    <div class="wrapper">
      <h1 id="page-title" class="page__title" itemprop="headline">
&ldquo;What is nature’s best hope? <b>You.</b> There’s an Earth stewardship responsibility that we have as <b>citizens of the planet</b>. We can no longer leave conservation to the conservationists. There aren’t enough—<b>by far.</b>&rdquo;"
        
      </h1>
        <p class="page__lead">— Douglas Tallemy —
</p>
    </div>
</div>
-->

{% include feature_row id="volunteer" type="left" %}
