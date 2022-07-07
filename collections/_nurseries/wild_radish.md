---
layout: splash
classes: wide nursery-page

title: "Wild Radish Farm Stand"

header:
 overlay_color: "#000"
 overlay_filter: "0.5"
 overlay_image: /assets/images/wild_radish/farm_stand.jpg

location: Eureka

garden_tag_name: ""

tagline: "Located at Freshwater Farms Reserve in Eureka, CA" #View on <a href='https://www.instagram.com/adventures_in_ag/' target='_blank'>Instagram</a>"

website: 
    name: "Wild Radish Farm Stand"
    url: "https://www.instagram.com/adventures_in_ag/" 

icon: "/assets/images/lost_foods/icon.jpg"

gallery:
  - url: /assets/images/lost_foods/sign.jpg
    image_path: /assets/images/lost_foods/sign.jpg
    alt: "Lost Foods Native Plant Nursery"
    title: "Lost Foods Native Plant Nursery"
  - url: /assets/images/lost_foods/entrance.jpg
    image_path: /assets/images/lost_foods/entrance.jpg
    alt: "Lost Foods Native Plant Nursery. Photo by Chuck Goodwin."
    title: "Lost Foods Native Plant Nursery. Photo by Chuck Goodwin."
  - url: /assets/images/lost_foods/redwood_acres.jpg
    image_path: /assets/images/lost_foods/redwood_acres.jpg
    alt: "Lost Foods Native Plant Nursery."
    title: "Lost Foods Native Plant Nursery."

image: ""

address:
    line1: "5851 Myrtle Ave"
    line2: "Eureka, CA 95503" 
    map: "https://goo.gl/maps/RQ6yCXjFfFrzVMdU8"

hours:
    - day: "Wed"
      time: " 1:00 p.m. - 6 p.m."
    - day: "Th"
      time: " 1:00 p.m. - 6 p.m."
    - day: "Fri"
      time: " 1:00 p.m. - 6 p.m."

hours_text: "Expanded hours coming soon!"

phone: ""

feature_row:
  - image_path: /assets/images/wild_radish/native_plant_stand.jpg
    alt: "Native Plants"
    title: "Native Plants"
    excerpt: "The farm stand carries a selection of native plants grown at the neighboring <a href='/nursery/northcoast-cnps'>North Coast CNPS Nusery</a> Click below to browse native plants available at the farm stand."
    url: "/category/wildradish-220629"
    btn_label: "Browse Plants"
    btn_class: "btn--primary"

contact: 
    email: "luke@composttealab.com"
    youtube: "https://www.youtube.com/channel/UChS5TA7TuYKTJj_zHEsOw8g"
    youtube_name: "Adventures in Agriculture"
---
{% include feature_row %}

{% include business_info.html 
    address= page.address
    hours=page.hours
    hours_text=page.hours_text
    contact= page.contact
%}



