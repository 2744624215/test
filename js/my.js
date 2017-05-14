$(function() {
	//	话logo文字开始
	var canvas = document.querySelector("#logo_title");
	//	canvas.style.border="1px solid red";
	var ctx = canvas.getContext("2d");

	ctx.font = "50px 'simsun'";
	ctx.strokeStyle = "yellow";
	ctx.strokeText("刘斌", 100 - ctx.measureText("刘斌").width / 2, 80);

	ctx.font = "30px 'microsoft yehei'";
	ctx.strokeStyle = "#fff";
	ctx.strokeText("web设计师", 100 - ctx.measureText("web设计师").width / 2, 130);

	var fontChange = false;
	setInterval(function() {
		ctx.strokeStyle = "#255625";
		ctx.strokeRect(0, 100, 200, 200);
		if(fontChange) {
			ctx.clearRect(0, 100, 200, 200);
			ctx.font = "30px 'microsoft yehei'";
			ctx.strokeStyle = "#fff";
			ctx.strokeText("web设计师", 100 - ctx.measureText("web设计师").width / 2, 130);
			fontChange = false;
		} else {
			ctx.clearRect(0, 100, 200, 200);
			ctx.font = "30px 'microsoft yehei'";
			ctx.strokeStyle = "#fff";
			ctx.strokeText("web工程师", 100 - ctx.measureText("web工程师").width / 2, 130);
			fontChange = true;
		}

	}, 1000)
	//	画logo文字结束
});
$(function() {
	//nav开始
	var dvs = $(".nav_row");
	var titleW = $("#title").width();
	var canvas1 = document.querySelector("#htitle");
	var ctx1 = canvas1.getContext("2d");
	ctx1.strokeRect(0, 0, 200, 100);
	ctx1.clearRect(0, 0, 400, 150);
	ctx1.font = "30px 'microsoft yehei'";
	ctx1.strokeStyle = "#fff";
	ctx1.strokeText("欢迎来到我的首页", 90, 100);
	dvs.each(function(index, item) {
		$(this).click(function() {
			switch(index) {
				case 0:
					ctx1.clearRect(0, 0, 400, 150);
					ctx1.font = "30px 'microsoft yehei'";
					ctx1.strokeStyle = "#fff";
					ctx1.strokeText("欢迎来到我的首页", 90, 100);
					break;
				case 1:
					ctx1.clearRect(0, 0, 400, 150);
					ctx1.font = "30px 'microsoft yehei'";
					ctx1.strokeStyle = "#fff";
					ctx1.strokeText("这是我的技能详解", 90, 100);
					break;
				case 2:
					ctx1.clearRect(0, 0, 400, 150);
					ctx1.font = "30px 'microsoft yehei'";
					ctx1.strokeStyle = "#fff";
					ctx1.strokeText("欢迎来到我的相册", 90, 100);
					break;
				case 3:
					ctx1.clearRect(0, 0, 400, 150);
					ctx1.font = "30px 'microsoft yehei'";
					ctx1.strokeStyle = "#fff";
					ctx1.strokeText("欢迎联系我", 90, 100);
					break;
			}
		})
	});
	//nav结束

})
$(function() {
	var main = $(".main");
	var navs = $(".nav_row");
	navs.each(function(index, item) {
		item.index = index;
	})
	navs.click(function() {
		var a = this.index;
		main.each(function(index, item) {
			item.style.display = "none";
		})
		main[a].style.display = "block";
		if(a == 1) {
			var stage = new Konva.Stage({
				container: "skillContainer",
				width: $(".main").width(),
				height: 100
			});
			var layer = new Konva.Layer();
			stage.add(layer);
			var text1 = new Konva.Text({
				x: 10,
				y: 10,
				width: 50,
				fontSize: 14,
				text: "HTML"
			})
			var text2 = new Konva.Text({
				x: 10,
				y: 40,
				width: 50,
				fontSize: 14,
				text: "CSS"
			})
			var text3 = new Konva.Text({
				x: 10,
				y: 70,
				width: 80,
				fontSize: 14,
				text: "Javascript"
			})
			var rect1 = new Konva.Rect({
				x: 100,
				y: 10,
				width: 0,
				height: 20,
				fill: "red"
			})
			var rect2 = new Konva.Rect({
				x: 100,
				y: 40,
				width: 0,
				height: 20,
				fill: "green"
			})
			var rect3 = new Konva.Rect({
				x: 100,
				y: 70,
				width: 0,
				height: 20,
				fill: "blue"
			})
			layer.add(rect1);
			layer.add(rect2);
			layer.add(rect3);
			layer.add(text1);
			layer.add(text2);
			layer.add(text3);
			layer.draw();

			rect1.to({
				duration: 1,
				width: ($(".main").width() - 100) / 10 * 6
			});
			var tween = new Konva.Tween({
				node: rect2,
				width: ($(".main").width() - 100) / 10 * 8,
				duration: 1,
				easing: Konva.Easings.StrongEaseIn,
				yoyo: false
			});
			tween.play();
			rect3.to({
				duration: 1,
				width: ($(".main").width() - 100) / 10 * 5
			});
			//			圆形开始
			var stage = new Konva.Stage({
				container: "otherskillContainer",
				width: $(".main").width(),
				height: 170
			})
			var layer = new Konva.Layer();
			stage.add(layer);
			var x0 = stage.width() / 2;
			var y0 = stage.height() / 2;
			var cir = new Konva.Circle({
				x: x0,
				y: y0,
				radius: stage.height() / 2 - 4,
				stroke: "green",
				strokeWidth: 2
			})
			layer.add(cir);

			var data = [{
					name: "HTML5",
					value: .25,
					color: '#e0e'
				},
				{
					name: "CSS3",
					value: .2,
					color: 'orange'
				},
				{
					name: "BootStrap",
					value: .3,
					color: 'blue'
				},
				{
					name: "Ajax",
					value: .05,
					color: 'green'
				},
				{
					name: "Jauery",
					value: .1,
					color: 'purple'
				},
				{
					name: "ASP.Net",
					value: .1,
					color: 'red'
				}
			];
			var initDeg = -90;
			data.forEach(function(item, index) {
				var angle = data[index].value * 360;
				var wedge = new Konva.Wedge({
					x: x0,
					y: y0,
					radius: stage.height() / 2 - 4,
					angle: angle,
					fill: data[index].color,
					rotation: initDeg
				});
				var textAngle = initDeg + 1 / 2 * angle;
				var text = new Konva.Text({
					x: x0 + (stage.height() / 2 + 2) * Math.cos(textAngle * Math.PI / 180),
					y: y0 + (stage.height() / 2 + 2) * Math.sin(textAngle * Math.PI / 180),
					fill: data[index].color,
					text: data[index].name
				});
				if(textAngle > 90 && textAngle < 270) {
					text.x(text.x() - text.getWidth());
				}
				layer.add(text);
				layer.add(wedge);
				initDeg += angle;
			})
			layer.draw();

			var wedges = layer.find("Wedge");
			wedges.each(function(item, index) {
				item.angle(0);
			});

			var index = 0;

			function animatePie() {
				//拿到所有的扇形
				var item = wedges[index];
				item.to({
					angle: data[index].value * 360,
					duration: data[index].value * 2,
					onFinish: function() {
						index++;
						if(index >= data.length) {
							return; //立即结束当前函数。
						}
						animatePie();
					}
				});
			}

			//执行第一个扇形的动画
			animatePie();
		} else if(a == 2) {
			//瀑布流开始
			var $objbox = $("#masonry");
			var gutter = 10;
			var centerFunc, $top0;
			$objbox.imagesLoaded(function() {
				$objbox.masonry({
					itemSelector: "#masonry > .box",
					gutter: gutter,
					isAnimated: true
				});
				centerFunc = function() {
					$top0 = $objbox.children("[style*='top: 0']");
					$objbox.css("left", ($objbox.width() - ($top0.width() * $top0.length + gutter * ($top0.length - 1))) / 2).parent().css("overflow", "hidden");
				};
				centerFunc();
			});
			var tur = true;
			$(window).resize(function() {
				if(tur) {
					setTimeout(function() {
							tur = true;
							centerFunc();
						},
						1000);
					tur = false;
				}
			});
		} else if(a == 3) {
			var canvas = document.querySelector("#line");
			var ctx = canvas.getContext("2d");
			ctx.moveTo(0, 0);
			var x = canvas.width;
			var y = canvas.height;
			ctx.lineTo(x, y);
			ctx.lineWidth = 2;
			ctx.strokeStyle = "#008000";
			ctx.stroke();
		}
	});
});
$(function() {
	var bottom1 = $(".bottom1");
	var btn = $(".tab");

	btn.click(function() {
		bottom1.each(function(index, item) {
			item.style.display = "none";
		})
		bottom1[$(this).index()].style.display = "block";
	});
})

