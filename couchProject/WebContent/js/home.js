/**
 * Functions specific to homePage.html.
 */
$( document ).delegate("#homePage", "pageinit", function() {
	  		
	//$.localStorage( 'foo', {data:'bar'} );

	//localStorage( 'foo', 'bar' );
	
	//alert($.localStorage( 'foo' ));
	
	localStorage.setItem("bar", "foo");
	
	var foo = localStorage.getItem("bar");
	
	alert(foo);
	
	/*$.getJSON('../jsp/test.jsp', function(data) {				
		$("#incidentListDiv").append('<ul data-role=\"listview\" data-inset=\"true\" data-filter=\"true\" id=\"incidentList\"></ul>');
		$.each(data.rows, function(key, val) {
			$("#incidentList").append('<li><a href=\"incidentForm.html\">' + val.key + '</a></li>');		
		});		
		$("#incidentListDiv").trigger('create');
	});			*/	  		
	  		
});	

//$.localStorage( 'foo', {data:'bar'} );

//$.localStorage( 'foo' );