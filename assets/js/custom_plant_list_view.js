$(function () {

    /** 
        @arg plant_data array of plant objects
     **/
    const params = new URLSearchParams(window.location.search); //parse params
    console.log("window.location.search", window.location.search);
    console.log("params", params);
    const encoded_plants = params.get("encoded_plants"); //get q param
    console.log("encoded_plants:", encoded_plants);
    
    const list_title = params.get("h"); //get q param
    
    $("#plant_list_title").html(list_title);
    
    // translate encoded plant ids into list of plant ids, eg [2, 6, 7, 9, 10]
    var base64 = Util.base64_url_decode(encoded_plants);
    var plant_ids = Util.bitwise_decode_to_plant_ids(base64);
    console.log("decoded plant ids", plant_ids);

     // dynamically build plant html
     for (var i = 0; i < plant_data.length; i++) {
        var current_id = parseInt(plant_data[i].id, 10);
        
        var index = plant_ids.indexOf(current_id);    
        if (index != -1) {
            console.log('plant common_name:', plant_data[i].common_name);
            var plant_info = "<div class='plant card'>" +
                                "<img src='" + plant_data[i].icon + "' />" +   
                                "<article>" + 
                                    "<h3>" + plant_data[i].common_name + "</h3>" + 
                                    "<div class='subtext'>" + plant_data[i].scientific_name + "</div>" +
                                    "<div>Sun Requirements: " + plant_data[i].sun_requirements +  "</div>" + 
                                "</article>" + 
                             "<div>";
            $("#custom_plant_list").append(plant_info);
        } 
    } 
});

