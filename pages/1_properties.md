---
layout: page
title: Properties
permalink: /properties/
nav: main
---

Catan Enterprises currently owns and leases 3 properties, one of which is a 3-unit triplex.

The company is currently constructing a second triplex on Gallatin Avenue in the 6th Ward district of Helena.

###All Properties
<ul class="post-list">
{% for property in site.properties %}
  <li>
    <h2>
      <a class="post-link" href="{{ property.url | prepend: site.baseurl }}">{{ property.title }}</a>
    </h2>
  </li>
{% endfor %}
</ul>