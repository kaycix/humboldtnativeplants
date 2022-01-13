---
layout: "home"
title: ""
---

<div class="mission">
Mission Statement
To empower individuals to start conservation in our own yards simply by planting native plants.
<br/>
<br/>
</div>
<div>
"We can no longer leave conservation to professional conservationists; there simply are not enough of them. Along with land ownership comes responsibility for stewarding the life associated with that land. The task is not as enormous as it seems. Just take care of the life on your property. It seems a lot easier than trying to save the entire planet, but they’re really the same thing. You can’t reverse insect declines by yourself, but if we each do our own small part, not only can we restore insect populations, we will create the largest collective conservation effort in history — one that can and must succeed, for our own good." - <a href="https://www.washingtonpost.com/outlook/welcome-bugs-into-your-yard-you-might-just-save-the-world/2020/02/20/62b0a12c-4d18-11ea-b721-9f4cdc90bc1c_story.html" target="_blank">Douglas Tallemy</a>
</div>
<div class="nurseries">
<h3>Where to Purchase Native Plants</h3>

{% assign nurseries_folder = site.pages | where_exp: "item" , "item.path contains '/nurseries/'" %}
{% assign nurseries_map = nurseries_folder | sort:"name" %}

<ul>
{% for nursery in nurseries_map %}
<li>{{nursery.business_name}}
<br/>
{{nursery.address}}
</li>
{% endfor %}
</ul>
</div>

<div class="nurseries">
<h3>Where to Purchase Seeds</h3>

{% assign seeds_folder = site.pages | where_exp: "item" , "item.path contains '/seed_sources/'" %}
{% assign seeds_map = seeds_folder | sort:"name" %}

<ul>
{% for seeds in seeds_map %}
<li>{{seeds.business_name}}
<br/>
<a href="{{seeds.website}}" target="_blank">{{seeds.website}}</a>
</li>
{% endfor %}
</ul>
</div>
