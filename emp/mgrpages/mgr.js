$('#mgrTabs a').click(function (e) {
	e.preventDefault();
  
	var url = $(this).attr("data-url");
  	var href = this.hash;
  	var pane = $(this);
	
	// ajax load from data-url
	$(href).load(url,function(result){      
	    pane.tab('show');
	});
});

// load first tab content
$('#mgrUser').load($('.activeA a').attr("data-url"),function(result){
  $('.activeA a').tab('show');
});