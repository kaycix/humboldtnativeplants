---
layout: splash
classes: wide nursery-page

title: "North Coast CNPS Nursery"

header:
 overlay_color: "#000"
 overlay_filter: "0.5"
 overlay_image: /assets/images/cnps_nursery.jpg

tagline: "California Native Plant Society, North Coast Chapter: <a href='https://northcoastcnps.org'>See Website</a>"

intro: 
    - excerpt: "This non-profit volunteer-run nursery is open to the public for plant sales weekly during Volunteer Hours. The nursery hosts two seasonal sales a year in the Fall and Spring in which hundreds of Humboldt County native and California native plants are offered. A smaller selection of their native plants can be found year-round at the neighboring <a href='/nursery/wild-radish'>Wild Radish Farm Stand</a>."

location: Eureka

garden_tag_name: "northcoast_cnps"

subtext: "This nonprofit nursery is entirely by volunteers. It is open 3 days a week during Volunteer Hours and also has two large seasonal plant sales."

feature_row:
  - image_path: /assets/images/cnps/nursery_brian_7.jpg
    alt: "Browse Plants"
    title: "Browse Plants"
    excerpt: "The nursery is open for shopping weekly during Volunteer Hours.<br/>Pricing is $5 for a 4-inch pot, $10-$12 for 1-gallon pots, or unless otherwise marked. Cash or check only."
    url: "/category/inventory-cnps-2022-05"
    #url: "/category/cnps-master-inventory"
    btn_label: "Browse Plants"
    btn_class: "btn--primary"
  - image_path: /assets/images/cnps/garden/path_with_columbines.jpg
    alt: "Demonstration Garden"
    title: "Demonstration Garden"
    excerpt: "The demonstration garden occupies a corner of the CNPS nursery and is a valuable example of what homeowners can accomplish on a small suburban lot."
    url: "/garden/cnps-demo"
    btn_label: "More Information"
    btn_class: "btn--primary"
  - image_path: /assets/images/cnps/nurser_brian_6.jpg
    alt: "Volunteer"
    title: "Volunteer"
    excerpt: "Join the CNPS in their efforts of restoring beautiful Humboldt ecosystems by providing affordable native plants for the home gardener."
    url: "/volunteer/cnps"
    btn_label: "More Information"
    btn_class: "btn--primary"

website: 
    name: "North Coast CNPS Nursery"
    url: "https://northcoastcnps.org/index.php/nursery/native-plant-nursery"

icon: "/assets/images/cnps_northcoast.jpg" 

image: "/assets/images/cnps_nursery.jpg"

address:
    line1: "5851 Myrtle Ave"
    line2: "Eureka, CA 95503" 
    map: "https://goo.gl/maps/RQ6yCXjFfFrzVMdU8"

hours:
    - day: "Wed"
      time: " 10:00 a.m. - 1:00 p.m."
    - day: "Fri"
      time: "10:00 a.m. - 1:00 p.m."
    - day: "Sun"
      time: "10:00 a.m. - 1:00 p.m."

hours_text: "The nursery and demonstration garden are open to the public during Volunteer Hours."

contact:
    email: "northcoastcnps@gmail.com"
    default_subject: "Nursery Inquiry"
    website: "https://northcoastcnps.org/index.php/nursery/native-plant-nursery"
    website_name: "https://northcoastcnps.org"
---
{% include feature_row id="intro" type="center" %}

{% include feature_row %}

{% include business_info.html 
    address= page.address
    hours=page.hours
    hours_text=page.hours_text
    contact= page.contact
%}
