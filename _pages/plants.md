---
layout: list                                                            
permalink: /plants
title: ""
---
<script type="text/javascript" language="javascript" src="https://code.jquery.com/jquery-3.5.1.js"></script>
<script type="text/javascript" language="javascript" src="https://cdn.datatables.net/1.11.3/js/jquery.dataTables.min.js" defer></script>
<link rel="stylesheet" href="https://cdn.datatables.net/1.11.3/css/jquery.dataTables.min.css">
<script type="text/javascript" class="init">
	

$(document).ready(function() {
	$('.plant_table').DataTable({
		"pageLength" : 50
	});
} );

</script>

<h5>All Plants</h5>

{% assign plants_folder = site.pages | where_exp: "item" , "item.path contains '/plants/'" %}

{% assign plants_map = plants_folder | group_by:"top_level_category" | sort:"name" %}
<table class="plant_table" style="width:100%">
	<thead>
		<tr>
			<th>Common Name</th>
			<th>Scientific Name</th>
			<th>Category</th>
			<th>Calscape</th>
		</tr>
	</thead>
	<tbody>
{% for category in plants_map %}
      {% for item in category.items %}
      	<tr>
		<td>
		<a href="{{ item.permalink | prepend:site.baseurl }}">{{item.common_name}}</a>
		</td>
		<td>
		<span class="scientific_name">{{item.scientific_name}}</span>
		</td>
		<td>{{category.name}}</td>
		<td><a href="{{item.calscape_link}}" target="_blank">View on Calscape</a></td>
	</tr>
      {% endfor %}
{% endfor %}
	</tbody>
</table>
