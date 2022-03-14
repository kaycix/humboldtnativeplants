$(function () {
  var plant_table = $('.plant_table').DataTable({
    /* No ordering applied by DataTables during initialisation */
    "order": [],
	"paging" : false,
    language: {
        search: "_INPUT_",
        searchPlaceholder: "Search plants"
    }
  });
  
  // hack? move search box dom element
  $("#new_search_location").html($(".dataTables_filter"));

    // When the plants table is updated, this function is called
    // on each plant to determine if it should appear in the list. 
    $.fn.dataTable.ext.search.push(
        function( settings, data, dataIndex, rowData, counter ) {
        
        var selected_sun_requirement = $("select.sun_requirement").val();
        var selected_height_requirement = $("select.height_requirement").val();
        var selected_type_requirement = $("select.type_requirement").val();

        var evaluating_plant_id = rowData['DT_RowId'];
        var plant = plant_data[evaluating_plant_id];
        
        console.log("search plant:", evaluating_plant_id, plant);
       
        return (Util.satisfies_sun_req(selected_sun_requirement, plant) &&
                Util.satisfies_height_req(selected_height_requirement, plant) &&
                Util.satisfies_type_req(selected_type_requirement, plant));
        }
    );

    // When Sun Requirement dropdown changes, update plants table
    $('select.sun_requirement').change(function() {
        plant_table.draw();
    });
    
    // When Height Requirement dropdown changes, update plants table
    $('select.height_requirement').change(function() {
        plant_table.draw();
    });
    
    // When Category Requirement dropdown changes, update plants table
    $('select.type_requirement').change(function() {
        plant_table.draw();
    });

    // When Create Plant List button is clicked, collect checked plants,
    // put ids in form input, and submit form
    $("#create_list_button").click(function(){     
        
        // looks for any checked inputs
        var checkboxes = $( "input:checked" );

        var plant_ids = [];
        for (var i = 0; i < checkboxes.length; i++) {
            var checkbox = checkboxes[i];
            plant_ids.push($(checkbox).val());
        }
        console.log("plants selected", plant_ids);

        // encode plant_ids
        var bitwise_encoding = Util.bitwise_encode_from_plant_ids(plant_ids);
        var encoded_url = Util.base64_url_encode(bitwise_encoding);

        $("#encoded_plants").val(encoded_url); 
        console.log("encoded input value", $("#encoded_plants").val());
       
        // submit form
        $("#myForm").submit(); // Submit the form
    });


});

