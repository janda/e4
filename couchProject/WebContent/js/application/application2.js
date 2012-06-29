$('#map_canvas').gmap().bind('init', function(event, map) { 
	$(map).click( function(event) {
		$('#map_canvas').gmap('addMarker', {
			'position': event.latLng, 
			'draggable': true, 
			'bounds': false
		}, function(map, marker) {
			$('#dialog').append('<form id="dialog'+marker.__gm_id+'" method="get" action="/" style="display:none;"><p><label for="country">Country</label><input id="country'+marker.__gm_id+'" class="txt" name="country" value=""/></p><p><label for="state">State</label><input id="state'+marker.__gm_id+'" class="txt" name="state" value=""/></p><p><label for="address">Address</label><input id="address'+marker.__gm_id+'" class="txt" name="address" value=""/></p><p><label for="comment">Comment</label><textarea id="comment" class="txt" name="comment" cols="40" rows="5"></textarea></p></form>');
			findLocation(marker.getPosition(), marker);
		}).dragend( function(event) {
			findLocation(event.latLng, this);
		}).click( function() {
			openDialog(this);
		});
	});
});

function findLocation(location, marker) {
	$('#map_canvas').gmap('search', {'location': location}, function(results, status) {
		if ( status === 'OK' ) {
			$.each(results[0].address_components, function(i,v) {
				if ( v.types[0] == "administrative_area_level_1" || 
					 v.types[0] == "administrative_area_level_2" ) {
					$('#state'+marker.__gm_id).val(v.long_name);
				} else if ( v.types[0] == "country") {
					$('#country'+marker.__gm_id).val(v.long_name);
				}
			});
			marker.setTitle(results[0].formatted_address);
			$('#address'+marker.__gm_id).val(results[0].formatted_address);
			openDialog(marker);
		}
	});
}

function openDialog(marker) {
	$('#dialog'+marker.__gm_id).dialog({'modal':true, 'title': 'Edit and save point', 'buttons': { 
		"Remove": function() {
			$(this).dialog( "close" );
			marker.setMap(null);
		},
		"Save": function() {
			$(this).dialog( "close" );
		}
	}});
}

String.prototype.format = function() { a = this; for ( k in arguments ) { a = a.replace("{" + k + "}", arguments[k]); } return a; };
window.demo = { 
	'version': '3.0-rc1',
	'ga': 'UA-17614686-5',
	'primaryUrl': 'http://code.google.com/p/jquery-ui-map/',
	'url': 'http://jquery-ui-map.googlecode.com/', 
	'forum': 'http://groups.google.com/group/jquery-ui-map-discuss/feed/rss_v2_0_msgs.xml', 
	'subscribe': 'http://groups.google.com/group/jquery-ui-map-discuss/boxsubscribe', 
	'exception': 'Unable to load due to either poor internet connection or some CDN\'s aren\'t as responsive as we would like them to be. Try refreshing the page :D.', 
	'init': function() {
		window._gaq = [['_setAccount', this.ga], ['_trackPageview'], ['_trackPageLoadTime']];		
		this.test('Backbone', function() {
			$('#forum').append('<h2>Forum</h2><ul id="forum_posts"></ul><h2>Subscribe</h2><form id="forum_subscribe" class="subscribe" action="#"><label for="email">E-mail:</label><input id="email" type="text" name="email" /><input type="submit" name="sub" value="Subscribe" /></form>');
			ForumCollection = Backbone.Collection.extend({ 'url': 'http://ajax.googleapis.com/ajax/services/feed/load?v=1.0&callback=?&q={0}'.format(encodeURIComponent(demo.forum)), 'parse': function(response) { return response.responseData.feed.entries; } });
			ForumPost = Backbone.View.extend({ 'tagName': 'li', 'className': 'group-item', 'template': _.template('<a href="<%=link%>"><%=title%></a></h3>'), 'render': function() { $(this.el).html(this.template(this.model.toJSON())); return this; } }); 
			Forum = Backbone.View.extend({ 'el': $("#forum"), 'initialize': function() { this.col = new ForumCollection(); this.col.bind('reset', this.load, this); this.col.fetch(); }, 'add': function(post) { var view = new ForumPost({'model': post}); $('#forum_posts').append(view.render().el); }, 'load': function () { this.col.each(this.add); $('#forum_subscribe').attr('action', demo.subscribe); $(this.el).show(); } });
		});
		this.test('prettyPrint', function() { prettyPrint(); });
		$('#version').text(this.version);
	},
	'redirect': function(url) { alert('This page is deprecated. Please update your URL. Redirecting to new page.'); window.location = url; },
	'col': [], 
	'tests': [],
	'test': function(a, b) { if ( window[a] ) { b(); } },
	'add': function(a, b) { if (b) { this.col[a] = b; } else { this.col.push(a); } return this; },
	'load': function(a) { var self = this; if (a) { self.col[a](); } else { $.each(self.col, function(i,d) { try { d(); } catch (err) { alert(self.exception); } }); } },
	'timeStart': function(key, desc) { this.tests[key] = { 'start': new Date().getTime(), 'desc': desc }; },
	'timeEnd': function(key) { this.tests[key].elapsed = new Date().getTime(); },
	'report': function(id) { var i = 1; for ( var k in this.tests ) { var t = this.tests[k]; $(id).append('<div class="benchmark rounded"><div class="benchmark-result lt">' + (t.elapsed - t.start) + ' ms</div><div class="lt"><p class="benchmark-iteration">Benchmark case ' + i + '</p><p class="benchmark-title">' + t.desc + '</p></div></div>'); i++; }; }
};
	
demo.init();