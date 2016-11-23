AV.initialize('bdvcKE0if1NPC916YE7efkNH-gzGzoHsz', '5Ttp1HH6rqxW93vkDw6gQsxN');
var args = window.location.href.split('?');
if (args.length >= 2) {
	for (var i = 1; i < args.length; ++i) {
		var comps = args[i].split('=');
		if (comps[0] == "fh") {
			var filehash = comps[1];
			var query = new AV.Query('Trans');
			query.equalTo('filehash', filehash);
			query.select(['fileurl']);
			query.first().then(function (result){
				window.location.replace(result.get('fileurl'));
			}, function(error){
				document.write(error.message);
			});
		} 
	}
}