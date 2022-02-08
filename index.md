---
layout: splash
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
                    Learn all about the ecological benefits of native plants and start making a difference today!
                </p>
                <ul>
                    <li>
                        <a href="{{"/where_to_buy" | prepend:site.baseurl }}">
                            Where to Purchase Native Plants
                        </a>
                    </li>
                </ul>
            </div>
            <p><a href="/humboldtnativeplants/#test-link" class="btn btn--primary">Read More</a></p>
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
                Connect and knowledge share with other native plant enthusiasts - beginners and experts welcome!
            <ul>
                <li>
                    <a href="{{"/connection/volunteer" | prepend:site.baseurl }}">
                    Volunteer Opportunities
                    </a>
                </li>
                <li>
                    <a href="{{"/plant_list" | prepend:site.baseurl }}">
                    Create a Plant List to Share
                    </a>
                </li>
            </ul>
            </div>
            <p><a href="/humboldtnativeplants/#test-link" class="btn btn--primary">Read More</a></p>
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
                    <a href="{{"/plants" | prepend:site.baseurl }}">
                        Browse Native Plants 
                    </a>
                </li>
            </ul> 
           </div>
            <p><a href="/humboldtnativeplants/#test-link" class="btn btn--primary">Read More</a></p>
        </div>
      </div>
    </div>
</div>
