var Thumbnail = function() {
	var dom = document.getElementsByClassName('MLthumbImg');
	return {
		mode: function() {
			for (var i = 0; i < dom.length; i++) {
				dom[i].style.opacity = '0';
				dom[i].parentNode.style.overflow = 'hidden';
			}
			window.onload = function() {
				var oH = document.getElementsByTagName('h1');
				var oDiv = document.createElement('p');
				var newText = document.createTextNode('img is ok'); //创建新文本
				oDiv.appendChild(newText); //追加一个新的子结点
				document.body.insertBefore(oDiv,oH[0]);
				for (var i = 0; i < dom.length; i++) {
					var img = new Image();
					img.src = dom[i].getAttribute('src');
					if (img.width > img.height) {
						dom[i].style.height = '100%';
						dom[i].style.opacity = '1';
					} else {
						dom[i].style.width = '100%';
						dom[i].style.opacity = '1';
					}
				}
			}


		}
	}
};