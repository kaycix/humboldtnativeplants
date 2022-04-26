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
    - excerpt: "This non-profit volunteer-run nursery is open to the public for plant sales weekly during Volunteer Hours. The nursery additionally hosts two seasonal sales a year in the Fall and Spring in which hundreds of Humboldt County native and California native plants are offered."

location: Eureka

garden_tag_name: "northcoast_cnps"

subtext: "This nonprofit nursery is entirely by volunteers. It is open 3 days a week during Volunteer Hours and also has two large seasonal plant sales."

feature_row:
  - image_path: /assets/images/cnps/nursery_brian_7.jpg
    alt: "Plant Inventory"
    title: "Plant Inventory"
    excerpt: "<div class='notice--info' style='font-size:1rem !important; margin-top: 0px !important'>Plant sales at the nursery are currently on hold as volunteers prepare for the upcoming <a href='/cnps_2022_spring_sale/'>Spring 2022 Sale</a>.</div>Click below to browse the master inventory, an extensive list of plants that have been offered at this nursery in the recent past."
    url: "/category/cnps-master-inventory"
    btn_label: "Browse Master Inventory"
    btn_class: "btn--primary"
  - image_path: /assets/images/cnps/garden/path_with_columbines.jpg
    alt: "Demonstration Garden"
    title: "Demonstration Garden"
    excerpt: "The demonstration garden on site represents several different ecosystems of Humboldt County."
    url: "/garden/cnps-demo"
    btn_label: "See Details"
    btn_class: "btn--primary"
  - image_path: /assets/images/cnps/nurser_brian_6.jpg
    alt: "Volunteer"
    title: "Volunteer"
    excerpt: "Join us in our efforts of restoring beautiful Humboldt ecosystems by providing affordable native plants for the home gardener. There are so many ways volunteers can help, whether you prefer to be hands-on in the nursery or garden, or at home remotely."
    url: "https://northcoastcnps.org/index.php/get-involved/volunteer-at-the-nursery"
    btn_label: "See Website"
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

hours_text: "The nursery and demonstration garden are open to the public during Volunteer Hours. Plant sales are currently on hold until the <a href='/cnps_2022_spring_sale'>Spring Plant Sale</a>."

---
{% include feature_row id="intro" type="center" %}

{% include feature_row %}

{% include business_info.html 
    address= page.address
    hours=page.hours
%}
