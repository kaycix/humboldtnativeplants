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
    overlay_image: assets/images/redwood-needles-blur.jpg
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
  - image_path: /assets/images/landscaping/hedge_small_feature.jpg
    alt: "Hedge Plants"
    title: "Hedge Plants"
    url: "/category/hedge"
  - image_path: /assets/images/landscaping/groundcover_small_feature.jpg
    alt: "Groundcovers"
    title: "Groundcover"
    url: "/category/groundcover"
  - image_path: /assets/images/landscaping/container_small_feature.jpg
    alt: "Container"
    title: "Container"
    url: "/category/container"
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
    title: "Gardens near you"
    excerpt: "Visit local native plant gardens for ideas and inspiration. These gardens demonstrate that landscaping can be both beautiful and beneficial."
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
  - image_path: /assets/images/seaside_daisy.jpeg 
    title: "Purchase native plants"
    excerpt: "Enhance your yard with drought-tolerant and pollinator-friendly native plants. Get to know our local nurseries that carry Humboldt County and California native plants."
    url: "/nurseries"
    btn_label: "READ MORE &#8594;"

education:
  - image_path: /assets/images/education/books_collage.jpg 
    title: "Education Resources"
    excerpt: "Discover books to guide you along your native plant education journey. The books listed are all available through the Humboldt County Library."
    url: "/education"
    btn_label: "READ MORE &#8594;"

volunteer:
  - image_path: /assets/images/redwoods.jpeg 
    title: "Volunteer opportunities"
    excerpt: "Learn about the natural world while saving redwoods, spreading native plants and making a positive impact on the world around us."
    url: "/connection/volunteer"
    btn_label: "READ MORE &#8594;"

---
{% include feature_row id="public_gardens" type="left" %}

{% include feature_row id="nurseries" type="right" %}

{% comment %}
<p>
&ldquo;What is nature’s best hope? <b>You.</b> There’s an Earth stewardship responsibility that we have as <b>citizens of the planet</b>. We can no longer leave conservation to the conservationists. There aren’t enough—<b>by far.</b>&rdquo;"
</p>
<p class="page__lead">— Douglas Tallemy —</p>
{% endcomment %}

{% include feature_row id="volunteer" type="left" %}

<div class="small_feature_row">
<h2>Browse Plants by</h2>
{% include feature_row id="browse_plants" %}
</div>

<div class="education-module">
{% include feature_row id="education" type="left" %}
</div>
