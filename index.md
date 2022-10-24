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
           url: /intro
    excerpt: Native plants are beautiful, easy to grow, and provide a critical foundation for our local ecosystem. 
seo_title: Humboldt Native Plants is your guide to finding beautiful and ecologically-important native plants for your yard. Help our planet today by planting native.

browse_plants:
  - image_path: /assets/images/currant_small_feature_item.jpg 
    image_caption: ""
    alt: "Habitat" 
    alt: "Coming Soon" 
    title: "Basic Requirements"
    url: "/plants" 
  - image_path: /assets/images/wildlife/butterfly/swallowtail_small_feature.jpg
    image_caption: "Photo by PixaBay"
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
  - image_path: /assets/images/habitat/meadow_small_feature_item.jpg 
    image_caption: "Photo by PixaBay"
    alt: "Habitat" 
    title: "Habitat"
    url: "/habitat" 

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

nurseries:
  - image_path: /assets/images/cnps_northcoast_nursery.jpg 
    title: "Where to Buy Native Plants"
    excerpt: "Get to know local nurseries that carry native plants and online sources for native seeds and plants."
    url: "/nurseries"
    btn_label: "READ MORE &#8594;"

education:
  - image_path: /assets/images/education/book.jpg 
    title: "Education Resources"
    excerpt: "Books, videos, apps ... there are so many ways to learn about native plants. Watch a video, reserve a book at the library - your native plant education can start (or continue) at any moment."
    url: "/education"
    btn_label: "READ MORE &#8594;"

volunteer:
  - image_path: /assets/images/redwoods.jpeg 
    title: "Join the Conservation Movement"
    excerpt: "There are so many opportunities for people of all ages and backgrounds to make a difference through volunteer programs. Learn about the natural world, save redwoods, spread native plants and make a positive impact on the world around us. Help to be a part of the change you want to see!"
    url: "/connection/volunteer"
    btn_label: "READ MORE &#8594;"

---
<div class="small_feature_row">
<h2>Browse Plants by</h2>
{% include feature_row id="browse_plants" %}
</div>

{% include feature_row id="public_gardens" type="left" %}

{% include feature_row id="nurseries" type="right" %}

{% comment %}
<p>
&ldquo;What is nature’s best hope? <b>You.</b> There’s an Earth stewardship responsibility that we have as <b>citizens of the planet</b>. We can no longer leave conservation to the conservationists. There aren’t enough—<b>by far.</b>&rdquo;"
</p>
<p class="page__lead">— Douglas Tallemy —</p>
{% endcomment %}

{% include feature_row id="volunteer" type="left" %}

{% comment %}
{% include feature_row id="education" type="right" %}
{% endcomment %}
