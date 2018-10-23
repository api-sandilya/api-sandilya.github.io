var Ajax = {
	req: function(url,data,i) {
		var defer = $.Deferred();
		var set = {method: "POST",data: data,cache: false,timeout: 5000000};
		if (i === true) {
			set = {method: "POST",data: data,cache: false,timeout: 5000000,contentType: false,processData:false};
		}
		$.ajax(url,set)
		.done(function(data,st,xhr) {
			defer.resolveWith(this,arguments);
		}).fail(function(xhr,st,et) {
			defer.rejectWith(this,arguments);
		}).always(function() {

		});
		return defer.promise();
	}
};
