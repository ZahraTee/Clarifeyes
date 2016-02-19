function submitKeys() {

	var c_id = document.getElementById('client_id').value;
	var c_secret = document.getElementById('client_secret').value;

  	chrome.tabs.executeScript({
	    code: "var client_details = ['" + c_id + "', '" + c_secret + "'];"
	}, function() {
	    chrome.tabs.executeScript({file: 'content.js'});
	});
}

document.getElementById('clickme').addEventListener('click', submitKeys);


