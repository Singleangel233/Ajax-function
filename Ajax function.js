function ajax(option){
	var xhr = new XMLHttpRequest();
	if(option.type == 'get' && option.data){
			option.url += '?';
			option.url += option.data;
			option.data = null;
	}
	if(option.type == 'post' && option.data){
		xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
	}
	xhr.onreadystatechange(){
		if(xhr.readyState == 4 && xhr.status == 200){
			var filetype = xhr.getResponseHeader('Content-Type');
			if(filetype.indexof('json') != -1){
				option.success(JSON.parse(xhr.responseText));
			}
			if (filetype.indexof('xml') != -1){
				option.success(xhr.responseXML);
			}
			else{
				option.success(xhr.responseText);
			}
		}
	}
	xhr.send(option.data);
