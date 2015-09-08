var Thumbnail = function() {
	var dom = document.getElementsByClassName('MLthumbImg');
	return {
		mode: function() {
			for (var i = 0; i < dom.length; i++) {
				dom[i].style.opacity='0';
				dom[i].parentNode.style.overflow='hidden';
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
