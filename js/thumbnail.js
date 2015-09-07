var Thumbnail = function() {
	var dom = document.getElementsByClassName('thumbImg');
	return {
		mode: function() {
			//				console.log(dom[1].offsetWidth,dom[1].offsetHeight)
			for (var i = 0; i < dom.length; i++) {
				dom[i].style.opacity='0';
			}
			window.onload = function() {
				for (var i = 0; i < dom.length; i++) {
					var img = new Image();
					img.src = dom[i].getAttribute('src');
					if (img.width > img.height) {
						dom[i].style.height = '100%';
						dom[i].style.opacity='1';
					} else {
						dom[i].style.width = '100%';
						dom[i].style.opacity='1';
					}
				}
			}


		}
	}
};
var test = new Thumbnail();
test.mode();