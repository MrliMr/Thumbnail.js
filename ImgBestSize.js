var ImageSize = function() {
	function FucOp(oDom,ow,oh,w,h) {
//				console.log(oDom);
//				console.log(oDom.naturalHeight);
//				var ow =  oDom.naturalHeight; //原图宽度					
//				var oh =  oDom.naturalWidth; //原图高度						
//				console.log(ow,oh);
//				console.log($(oDom));
				var sw = w ? w : parseInt($(oDom).parent().css('width')); //显示的图片的宽度
				var sh = h ? h : parseInt($(oDom).parent().css('height')); //显示的图片的高度	
//				console.log(sw,sh)
				$(oDom).parent().width(sw);
				$(oDom).parent().height(sh);
				$(oDom).parent().css({
					'display': 'inline-block',
					'overflow': 'hidden'
				});
				var quotientW = ow / sw;
				var quotientH = oh / sh;
				var quotient = quotientW > quotientH ? quotientH : quotientW; //确定倍数
				var nw = ow / quotient;
				var nh = oh / quotient;
//				console.log(nw,nh);
//				console.log(oDom);
				$(oDom).css({
					'width': nw + 'px',
					'height': nh + 'px'
				}); //图片的宽高
		
				var ml = -(nw / 2 - w / 2);
				var mt = -(nh / 2 - h / 2);
				$(oDom).css({
					'position': 'static',
					'margin-left': ml + 'px',
					'margin-top': mt + 'px',
					'opacity': '1'
				});
	}
	return {
		//居中满屏显示 默认
		cm: function(classname, w, h) {
			classname = '.' + classname;
			window.onload = this.resizeFuc(classname, w, h);
		},
		resizeFuc: function(classname, w, h) {
			$(classname).each(function() {
				var imgObj = new Image();
				imgObj.src = $(this).attr('src');
				//				imgObj.onload = FucOp(imgObj,this , w, h);
				var oDom = this;
				imgObj.onload = function() {					
					FucOp(oDom,this.width,this.height,w,h)
				}
			});
		}

	}

};