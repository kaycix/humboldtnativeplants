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
---

<!-- 
 This is the html template that Minimal Mistakes uses to display a Feature Row. 
 We can't use Feature Row easily because Jekyll does not support Liquid variables in front matter. 
 But to make use of the css, we will copy the struction and class names. 
 TODO A future enhancement would be to use the actual jekyll template.
  
 <div class="feature__wrapper">
     <div class="feature__item">
       <div class="archive__item">
           <div class="archive__item-teaser">
             <img src="/humboldtnativeplants/assets/splash/some-picture.jpg" alt="">
           </div>
         <div class="archive__item-body">
             <h2 class="archive__item-title">Title Goes Here</h2>
             <div class="archive__item-excerpt">
                 Some text describing this Row Item
             </div>
             <p><a href="/humboldtnativeplants/#test-link" class="btn btn--primary">Read More</a></p>
         </div>
       </div>
     </div>
--->
 <div class="feature__wrapper">
     <div class="feature__item">
       <div class="archive__item">
           <div class="archive__item-teaser">
             <img src="/humboldtnativeplants/assets/splash/some-picture.jpg" alt="">
           </div>
         <div class="archive__item-body">
             <h2 class="archive__item-title">Conservation</h2>
             <div class="archive__item-excerpt">
                 <p> 
                    Whether you are adding a strip of native plants into your existing garden, or re-wilding a larger area, view our list of places you can buy native plants today. Visit these demonstration gardens for ideas!  
                </p>
                 <ul>
                     <li>
                         <a href="{{"/where_to_buy" | prepend:site.baseurl }}">
                             Where to Purchase Native Plants
                         </a>
                     </li>
                     <li>
                        <a href="{{'/garden/cnps-demo' | prepend:site.baseurl }}">
                       North Coast CNPS Garden (Eureka)
                        </a>
                     </li>
                     <li>
                        <a href="{{'/garden/arcata-marsh' | prepend:site.baseurl }}">
                        Arcata Marsh Native Plant Garden
                        </a>
                     </li>
                 </ul>
             </div>
    <!--         <p><a href="/humboldtnativeplants/#test-link" class="btn btn--primary">Read More</a></p> -->
         </div>
       </div>
     </div>
     <div class="feature__item">
       <div class="archive__item">
           <div class="archive__item-teaser">
             <img src="/humboldtnativeplants/assets/splash/some-picture.jpg" alt="">
           </div>
         <div class="archive__item-body">
             <h2 class="archive__item-title">Connection</h2>
             <div class="archive__item-excerpt">
                 Connect with other native plant beginners and enthusiasts! Lend a hand and make a difference in our beautiful region today. 
             <ul>
                 <li>
                     <a href="{{"/connection/volunteer" | prepend:site.baseurl }}">
                     Volunteer Opportunities
                     </a>
                 </li>
                <!--
                 <li>
                     <a href="{{"/plant_list" | prepend:site.baseurl }}">
                     Create a Plant List to Share
                     </a>
                 </li>-->
             </ul>
             </div>
    <!--         <p><a href="/humboldtnativeplants/#test-link" class="btn btn--primary">Read More</a></p> -->
         </div>
       </div>
     </div>
     <div class="feature__item">
       <div class="archive__item">
           <div class="archive__item-teaser">
             <img src="/humboldtnativeplants/assets/splash/some-picture.jpg" alt="">
           </div>
         <div class="archive__item-body">
             <h2 class="archive__item-title">Landscaping</h2>
             <div class="archive__item-excerpt">
             <p>
                 Looking to plant a hedge row? Want to attract pollinators? Find the best native plants for your specific garden needs. 
             </p>
             <ul>
                 <li>
                    <a href="{{'/category/beginner' | prepend:site.baseurl }}">
                        Beginner-Friendly Native Plants
                    </a>
                     <!--<a href="{{"/plants" | prepend:site.baseurl }}">
                         Browse All Native Plants 
                     </a>-->
                 </li>
                 <li>
                    <a href="{{'/category/hummingbird' | prepend:site.baseurl }}">
                        Hummingbird Gardens
                    </a>
                 </li>
                 <li>
                    <a href="{{'/category/butterfly' | prepend:site.baseurl }}">
                        Butterfly Gardens
                     </a>
                 </li>
                 <li>
                    <a href="{{'/category/container' | prepend:site.baseurl }}">
                        Container-Gardening
                    </a>
                 </li>
                 <li>
                    <a href="{{'/category/bee' | prepend:site.baseurl }}">
                        Bee-Friendly Gardens
                    </a>
                 </li>
                 <li>
                    <a href="{{'/category/groundcover' | prepend:site.baseurl }}">
                        Groundcover Plants 
                    </a>
                 </li>
                 <li>
                    <a href="{{'/category/hedge' | prepend:site.baseurl }}">
                    Hedge Plants
                    </a>
                 </li>
                 <!--<li>
                     <a href="{{"/gardens" | prepend:site.baseurl }}">
                         Local Native Plant Gardens
                     </a>
                 </li>-->
             </ul> 
            </div>
             <!-- <p><a href="/humboldtnativeplants/#test-link" class="btn btn--primary">Read More</a></p> -->
         </div>
       </div>
     </div>
 </div>
