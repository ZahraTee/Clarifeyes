var i, imgs, token;


//getToken();

/*function getToken()
{
	$.post("https://api.clarifai.com/v1/token/", {grant_type: "client_credentials", client_id: "AVzG9m6uM8L2wIrCWVFsUWZJMO1jdV1McDqQqJs6", client_secret: "k0-0mq-0SDdeXfFFtDFe3kZPGll114itKVvlyesp"}, function(result){
        token = result;
        console.log("HELLO");
        console.log(token.access_token);
        imgs = $('img');
		for (i = 0; i < imgs.length; i++) {
			if (imgs[i].width > 200 || imgs[i].height > 200)
			{
				var alttext = getImageTagsFromURL(imgs[i], imgs[i].src);
			}
			
		}
	});
}*/

function getImageTagsFromURL(image_element,image_url)
{
	if (image_url == null || image_url == "") { return; }
	var pic_formats = ["jpg", "jpeg", "png", "gif", "bmp", "tiff"];
	var count;
	for (var i in pic_formats) { if (endsWith(image_url, pic_formats[i])) count++; }
	if (count == 0) return;

	$.ajax({
		url: 'https://api.clarifai.com/v1/tag/',
		type: 'POST',
		beforeSend: function (xhr) {
		    xhr.setRequestHeader('Authorization', 'bearer ' + token.access_token);
		},
		data: {url: image_url},
		success: function (object) {
			console.log(object);
			for (i = 0; i < object.results.length; i++) { 
				var docid = object.results[i].docid;
				var keywords = object.results[i].result.tag.classes;
				var alttext = ""
				for (j = 0; j < keywords.length; j++) {
					alttext = alttext + " " + keywords[j];
				}
					$(image_element).attr("alt", "Clarifai Image:" + alttext);
					$(image_element).after('<div class="overlay">' + createWordButtons(docid, keywords) + '</div>');
				wordbuttons = $(".word-btn-"+docid );
				for (k=0; k < wordbuttons.length; k++) {
					wordbuttons[k].addEventListener("click", function() {
						tag = $(this).parent().text().substring(1);
						console.log(docid + " " + tag);
						removeTags(docid, tag);
						$(this).parent().remove();
					});
				//}
				$(image_element).each(function(index) {
					$(this).next(".overlay").andSelf().wrapAll("<div class='ce-container'/>")
				});
				}
				
			}
		},
		error: function (err) { console.log(err);
			return "Unreadable image."},
	});
}

function removeTags(docid, tag)
{
	$.ajax({
		url: 'https://api.clarifai.com/v1/feedback/',
		type: 'POST',
		beforeSend: function (xhr) {
		    xhr.setRequestHeader('Authorization', 'bearer ' + "kEIZsCcn6Uh1ouFACPka8HPXbKRIqY");
		},
		data: {docids: docid, remove_tags: tag},
		success: function (object) {
			console.log(tag);
		},
		error: function (err) { return "Could not remove tag."},
	});
}

function createWordButtons(docid, word_list)
{
	button_html = '<ul class="word-button-list">'
	for (i=0; i < word_list.length; i++) {
		button_html += '<li class="word-button"><button class="word-btn-' + docid + '">x</button>' + word_list[i] + '</li>'
	}
	button_html += '</ul>'
	return button_html;
}

function endsWith(str, suffix) {
    return str.indexOf(suffix, str.length - suffix.length) !== -1;
}
