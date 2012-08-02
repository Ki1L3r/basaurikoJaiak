App.View = (function(lng, app, undefined) {
	
	var twitt_template_code = "<li data-icon='user'>\n\
            <img src='{{profile_image_url}}' />\
            {{tweet_author}} {{tweet_date}} {{tweet_touser}}<strong>{{tweet_text}} </strong> <small> {{tweet_url}}</small> </li>";

    //Create the template
    lng.View.Template.create('twitt_template', twitt_template_code);

    //  render list & pulldown-to-refresh
    var render_list = function(tweets){
        lng.View.Template.List.create ({
            el : '#tweet_container',
            template: 'tweet_template',
            data: tweets
        });

        var markup_content = '<div id="pullDown"><span class="pullDownIcon"></span><span class="pullDownLabel">Arrastra hacia abajo para actualizar ...</span></div>';
        lng.View.Scroll.prepend('tweet_container', markup_content);
    
    }


    return{

    }

})(LUNGO, App);