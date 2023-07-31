$(document).ready(function () {


	if ($('body.po').length > 0) {
		"use strict";
		setTimeout(function () {
			$('.filter-button-group a:first-child').trigger("click");
		}, 50);
		var $grid = $('.grid').isotope({
			itemSelector: '.grid-item',
			layoutMode: 'fitRows'
		});
		$('.filter-button-group').on('click', 'a', function () {
			$('.filter-button-group a').removeClass("current");
			$(this).addClass("current");
			var filterValue = $(this).attr('data-filter');
			$grid.isotope({
				filter: filterValue
			});
			setTimeout(function () {}, 0);
			return false;
		});
	}


	// Scrollbar 
	$("body").addClass("thin");
	// If user has Javascript disabled, the thick scrollbar is shown
	$("body").mouseover(function () {
		$(this).removeClass("thin");
	});
	$("body").mouseout(function () {
		$(this).addClass("thin");
	});
	$("body").scroll(function () {
		$("body").addClass("thin");
	});

	(function ($) {
		$('.accordion > li:eq(0) a').addClass('active').next().slideDown();

		$('.accordion a').click(function (j) {
			var dropDown = $(this).closest('li').find('p');

			$(this).closest('.accordion').find('p').not(dropDown).slideUp();

			if ($(this).hasClass('active')) {
				$(this).removeClass('active');
			} else {
				$(this).closest('.accordion').find('a.active').removeClass('active');
				$(this).addClass('active');
			}

			dropDown.stop(false, true).slideToggle();

			j.preventDefault();
		});
	})(jQuery);



	// Tab Parent height


	function height() {
		var pageImg = $('.main-img');
		pageImg.each(function () {
			$(this).css('height', ($('.page-img img').height()));
		});
	}
	window.onresize = height;

	height();
	var body = $("body");

	function remove() {
		body.removeClass("disabled-onepage-scroll");
	};

	// Prevent Scrolling
	$('html, body').css({
		'overflow': 'hidden',
		'height': '100%'
	})
	$(window).load(function () {
		// Animate loader off screen
		$("#load_screen #clip,#load_screen #clip_1_").addClass("finish")
		var loader = new TimelineMax();
		loader.staggerTo("svg.loader", .6, {
				width: "800%",
				height: "800%",
				top: "230%",
				left: '200%',
				ease: Sine.easeIn
			})
			.staggerTo("#load_screen", .6, {
				opacity: 0,
				display: "none",
				ease: Sine.easeIn
			});
		$(".pageImg").trigger("height");
		$('html, body').removeAttr('style');
		if ($("body").hasClass("xc")) {
			$(function () {
				$('[data-scrollmagic]').each(function (index, elem) {
					// Init ScrollMagic Controller
					var scrollMagicController = new ScrollMagic();

					// Create Animations
					var title = $(elem).find('h3'),
						text = $(elem).find('p'),
						btn = $(elem).find('a'),
						headerH2 = $(elem).find(".section-info h2");

					body.addClass("disabled-onepage-scroll")
					TweenLite.set("svg", {
						visibility: "visible"
					});
					TweenLite.set(".line, .lines", {
						drawSVG: "0"
					});
					TweenLite.set(".lines,.hamburger,.onepage-pagination", {
						opacity: 0
					});
					TweenLite.set("body.ct", {
						overflow: "hidden"
					});
					TweenLite.set(".nav nav a,nav ul ul", {
						opacity: 0,
						scale: 0
					});
					TweenLite.set(".logo", {
						width: "50%",
						left: "25%",
						top: "50%"
					});

					var line = new TimelineMax({});
					line.fromTo(".line", .6, {
						drawSVG: "0",
						opacity: 1
					}, {
						drawSVG: "true",
						ease: Sine.easeOut
					})

					var lineOUT = new TimelineMax();
					lineOUT.fromTo(".line", .6, {
						drawSVG: "1",
						opacity: 0
					}, {
						drawSVG: "0",
						ease: Sine.easeOut
					})

					var fill = new TimelineMax();
					fill.staggerTo(".lines", .6, {
						opacity: 1,
						scale: 1,
						ease: Sine.easeIn
					});

					var move = new TimelineMax();
					move.staggerTo(".logo", .6, {
						left: "0",
						width: "130px",
						top: "0",
						ease: Sine.easeIn
					});

					var nav = new TimelineMax();
					nav.staggerTo(".hamburger ", .6, {
							opacity: "1",
							ease: Sine.easeIn
						}, ".03")
						.staggerTo("#stroke ", .6, {
							display: "none",
							ease: Sine.easeIn
						}, ".03")
						.staggerTo("nav a,nav ul ul ", .6, {
							opacity: 1,
							scale: 1,
							ease: Sine.easeIn
						}, ".03")


					var bgshape = new TimelineMax();
					bgshape.staggerTo(".bgshape", .6, {
						opacity: 1,
						ease: Sine.easeInOut
					});

					var hello = new TimelineMax();
					hello.staggerTo(".hello", .4, {
						left: "30%",
						opacity: 1,
						ease: Sine.easeInOut
					})

					var message = new TimelineMax();
					message.staggerTo("#slogans", .4, {
						left: "-3.5vw",
						opacity: 1,
						ease: Sine.easeInOut
					});

					var mouse = new TimelineMax();
					mouse.staggerTo(".mouse", .4, {
							opacity: 1,
							ease: Sine.easeInOut
						})
						.staggerTo(".onepage-pagination", .4, {
							opacity: 1,
							ease: Sine.easeInOut
						})

					var mover = new TimelineMax({});
					mover.fromTo(".bgshape svg", 0.4, {
						y: '100px',
						opacity: 0
					}, {
						y: 0,
						opacity: 1,
						ease: Power2.EaseInOut
					}, "start")

					// master Ts
					var masterTimeline = new TimelineMax({});
					masterTimeline.add(line, "1")
						.add(lineOUT, "-1")
						.add(fill)
						.add(move)
						.add(nav)
						.add(bgshape)
						.add(hello)
						.add(remove)
						.add(message)
						.add(mouse)

					TweenLite.set("svg", {
						visibility: "visible"
					});
					TweenLite.set(".line, .lines", {
						drawSVG: "0"
					});


					//  var tl = new TimelineMax({pause: true});    
					//  tl.add("start") // add timeline label
					//    .fromTo($(".section-info h2"), 0.75, { opacity: 0 }, {opacity: 1, ease: Sine.easeOut }, ".07")
					//    .fromTo($(".section-info h1"), 0.75, { opacity: 0 }, {opacity: 1, ease: Sine.easeOut }, ".07")
					//    .fromTo(title, 0.4, { y: '40px', opacity: 0 }, { y: 0, opacity: 1, ease: Power2.EaseInOut }, "start")
					//    .fromTo(text, 0.4, { y: '60px', opacity: 0 }, { y: 0, opacity: 1, ease: Power2.EaseInOut }, "start")
					//    .fromTo(btn, 0.4, { y: '100px', opacity: 0 }, { y: 0, opacity: 1, ease: Power2.EaseInOut }, "start");
					// //.staggerTo(bgshape, .4, {transform:"matrix(1, 0, 0, 1, 755.28, -269)",width:"42%", ease:Power2.easeInOut }, "start")
					// //.staggerTo(line, .75, {drawSVG:"true", ease:Power2.easeOut}, "start" )
					// //.staggerTo(lines, .75, {opacity:1 ,scale: 1,ease:Sine.easeIn}, "start")
					// //.staggerTo(logo, .6, {left:"0",width:"115px" ,top:"0",ease:Sine.easeIn}, ".07")
					// //.staggerTo(nav, .5, {opacity:1 ,scale: 1,ease:Sine.easeIn}, ".07")
					// //.staggerTo(svg, .4, {opacity:1 ,scale: 1, ease:Sine.easeInOut }, ".07")
					// //.staggerTo(hello, .4, { left:"387px" , opacity:1 , ease:Sine.easeInOut })
					// //.staggerTo(message, .4, { left:"180px" , opacity:1 , ease:Sine.easeInOut })
					// //.staggerTo(slogans, .4, { left:"180px" , opacity:1 , ease:Sine.easeInOut })
					// //.fromTo(".bgshape svg", 0.4, { y: '100px', opacity: 0 }, { y: 0, opacity: 1, ease: Power2.EaseInOut }, "start");


					// Create the Scene and trigger when visible
					var scene = new ScrollScene({
						triggerElement: elem,
						offset: -93 /* offset the trigger Npx below scene's top */

					})
					// .setTween(tl)
					// .addTo(scrollMagicController)
					// .setPin(".header");

					// // Add debug indicators fixed on right side
					//  scene.addIndicators({name: "animate"}); 
				});
			});

			var div = $('.logo');
			div.each(function () {
				$(this).css('top', ($(window).height() - div.height()) / 3.5)
			});
		}
		if ($("body").hasClass("ct")) {
			TweenLite.set("svg", {
				visibility: "visible"
			});
			TweenLite.set(".line, .lines", {
				drawSVG: true
			});
			TweenLite.set(".page-content, .lines", {
				opacity: 1
			});
		}
	});

	var hamb = $('#hamburger'),
		sidebarContainer = $('.sidebar-container'),
		logo = $('.logo1');


	hamb.on('click', function () {
		$(this).toggleClass('active');
		sidebarContainer.toggleClass('active');
		logo.toggleClass('active');
	})


	// var mainNav = $('.med .nav a'),

	// 	mainNav.on('hover', function () {
	// 		mainNav.next().slideDown()
	// 	});

	// When reload remove Hash from the url
	window.location.replace("#");

	// slice off the remaining '#' in HTML5:    
	if (typeof window.history.replaceState == 'function') {
		history.replaceState({}, '', window.location.href.slice(0, -1));
	}
	if ($("body").hasClass("xc")) {
		$(".main").onepage_scroll({
			sectionContainer: ".page-el", // sectionContainer accepts any kind of selector in case you don't want to use section
			easing: "cubic-bezier(.78,.03,.18,.99)", // Easing options accepts the CSS3 easing animation such "ease", "linear", "ease-in",
			// "ease-out", "ease-in-out", or even cubic bezier value such as "cubic-bezier(0.175, 0.885, 0.420, 1.310)"
			animationTime: 900, // AnimationTime let you define how long each section takes to animate
			pagination: true, // You can either show or hide the pagination. Toggle true for show, false for hide.
			updateURL: false, // Toggle this true if you want the URL to be updated automatically when the user scroll to each page.
			scrollTimeout: 1000,
			beforeMove: function (index) {
				// body.addClass("disabled-onepage-scroll");
				// From 2 to 1
				if (index == '1') {
					// body.addClass("disabled-onepage-scroll");
					$('.med').addClass('active');
					//$('.bgshape').removeClass('active');
					var first = new TimelineMax();
					first.to(".itemContainer", 0, {
							opacity: 0,
							ease:Sine.easeInOut
						}, 0)
						.to(".bgshape", .7, {
							className: '+=' + 'bgshape',
							className: '-=' + 'secondred',
							ease: Sine.easeInOut,
							onComplete: paginControl
						})
						.to(".yw", .7, {
							opacity: 0,
							top: "150%",
							className: '+=' + 'yw',
							className: '-=' + 'ywsecond',
							ease: Sine.easeInOut
						}, ".07")
						.to("#upIcon",1,{
							fill:"transparent",
						},.06)
						.to("#jumpUpButton",.7,{
							cursor:"auto"
						},.06)

					var first1 = new TimelineMax();
					first1.to(".bgshape", 1.09, {
						className: '-=' + 'thirdred',
						ease: Sine.easeInOut
					})

				}

				// From 1 to 2 // From 3 to 2 opacity: 1; top: 265%; left: 90%; width: 79%; transform: matrix(0.9848, 0.17364, -0.17364, 0.9848, -157.5, -207);
				// From 2 to 3
				if (index == '2') {

					// body.addClass("disabled-onepage-scroll");
					var second = new TimelineMax();
					second.to(".bgshape", 1.09, {
							className: '+=' + 'secondred',
							ease: Sine.easeInOut
						})
						.to(".logo1 #stroke", .6, {
							opacity: 0,
							ease: Sine.easeInOut
						})
						.to("#slidingImgContainer", 0, {
							opacity: 1
						}, 0)
						.to(".bgshape .itemContainer", .2, {
							opacity: 1
						}, 1)
						.to("#upIcon",1,{
							fill:"white",
						},.06)
						.to("#jumpUpButton",.7,{
							cursor:"pointer"
						},.006);
					var second = new TimelineMax();
					second.to(".bgshape", 1.09, {
						className: '-=' + 'thirdred',
						ease: Sine.easeInOut
					})


					var seconds = new TimelineMax();
					seconds.to(".ui-layer-dot", .7, {
							opacity: 0,
							ease: Sine.easeInOut
						})
						.to(".yw", .7, {
							opacity: 0,
							ease: Sine.easeInOut
						}, ".07")

				}

				// From 2 to 3 // From 4 to 3 opacity: 1; top: 300%; left: -197%; width: 400%; transform: matrix(0.9848, 0.17364, -0.17364, 0.9848, -157.5, -207);
				if (index == '3') {
					var third = new TimelineMax();
					third.to(".bgshape", .5, {
							className: '+=' + 'thirdred',
							ease: Sine.easeInOut
						}, ".07")
						.to("#slidingImgContainer", .001, {
							opacity: 0
						}, 0)
						
						.to(".itemContainer", .007, {
							opacity: 0
						}, "0")
						.to(".ui-layer-dot", .7, {
							opacity: 1,
							ease: Sine.easeInOut
						})
						.to(".yw svg path",.5,{
							fill:"black",
							ease:Sine.easeInOut
						},.01)
						.to(".yw", .7, {
							delay: .3,
							opacity: 1,
							top: "50%",
							className: '+=' + 'yw',
							className: '-=' + 'ywsecond',
							ease: Sine.easeInOut
						}, ".07")
						.to("#upIcon",1,{
							fill:"yellow"
						},.06)
						.to(".do h1", .5, {
							y: "300px",
							opacity: 0,
							ease: Sine.easeInOut
						}, ".07")
						.to(".heart img:first-child", .5, {
							rotation: -50,
							x: "-300px",
							opacity: 0,
							ease: Sine.easeInOut
						}, ".07")
						.to(".heart img:nth-child(2)", .7, {
							rotation: 50,
							x: "300px",
							opacity: 0,
							ease: Sine.easeInOut
						}, ".07")
						.to(".welove h2", .5, {
							y: "300px",
							opacity: 0,
							ease: Sine.easeInOut
						}, ".07")
						.to(".links", .5, {
							y: "300px",
							opacity: 0,
							ease: Sine.easeInOut
						}, ".07")
						.to(".airship img", .5, {
							y: "300px",
							opacity: 0,
							ease: Sine.easeInOut
						}, ".07")
						.to(".curv-container", .7, {
							opacity: 0,
							ease: Sine.easeInOut,
							onComplete: paginControl
						}, ".07")


					var fourth = new TimelineMax();
					fourth.to(".main .page-el[data-index='4']", .7, {
							background: "none",
							ease: Sine.easeInOut
						}, ".07")
						.to(".bgshape", .5, {
							className: '+=' + 'secondred',
							ease: Sine.easeInOut
						}, ".07")
				}


				if (index == '4') {
					// body.addClass("disabled-onepage-scroll");

					var fourth = new TimelineMax();
					fourth.to(".yw svg path",.5,{
						fill:"yellow",
						ease:Sine.easeInOut
					},.01)
					.to(".yw", .5, {
							className: '+=' + 'ywsecond',
							opacity: 1,
							ease: Sine.easeInOut
						}, ".07")
						.to(".ui-layer-dot", .7, {
							opacity: 0,
							ease: Sine.easeInOut
						})
						.to(".do h1", .7, {
							y: "0",
							opacity: 1,
							ease: Sine.easeInOut
						}, ".7")
						.to(".heart img:first-child", .9, {
							rotation: 0,
							x: 0,
							opacity: 1,
							ease: Sine.easeInOut
						}, "1.4")
						.to(".heart img:nth-child(2)", .9, {
							rotation: 0,
							x: 0,
							opacity: 1,
							ease: Sine.easeInOut
						}, "1")
						.to(".welove h2", .7, {
							y: "0",
							opacity: 1,
							ease: Sine.easeInOut
						}, "1.8")
						.to(".links", .7, {
							y: "0",
							opacity: 1,
							ease: Sine.easeInOut,
							onComplete: paginControl
						}, "1.5")
						.to(".airship img", .7, {
							y: "0",
							opacity: 1,
							ease: Sine.easeInOut
						}, "1.8")
						.to("#upIcon",1,{
							fill:"#f67c96"
						},.06);




					var main = new TimelineMax();
					main.to(".rise h1,.rise h2", .6, {
							opacity: 0,
							ease: Sine.easeInOut
						}, ".07")
						// .to(".main .page-el[data-index='5'] .airship", .7 , {top: "110%"}, ".001")  // Going Down
						// .to(".curv-container", .7, {opacity: 1 , top: "120%" , ease:Sine.easeInOut }, ".001")
						// .to(".sky", .6 ,{opacity: 0,bottom: "-210px", ease:Sine.easeInOut },".07")
						.to(".curv-container", .7, {
							top: "120%",
							ease: Sine.easeInOut
						}, ".001")
						.to(".main .page-el[data-index='5'] .airship", .7, {
							top: "110%"
						}, ".0001")

				}

				if (index == '5') {
					// body.addClass("disabled-onepage-scroll");

					// var fifth = new TimelineMax();
					// 	fifth.to(".ss-style-roundedsplit", .5, {top: "30%" , ease:Sine.easeInOut }, ".07")
					//  		     .to(".ss-style-roundedsplit-1", .5, {top: "30%" , ease:Sine.easeInOut }, ".07")
					//  		     .to(".ss-style-roundedsplit-3", .5, {top: "0" , ease:Sine.easeInOut }, ".07")
					//  		     .to(".main .page-el[data-index='5'] .airship img:nth-child(4)", .5, {top: "20%" , ease:Sine.easeInOut }, ".07")
					//  		     .to(".main .page-el[data-index='5'] .airship img:nth-child(9)", .5, {bottom: "-25%" , ease:Sine.easeInOut }, ".07")
					//  		     .to(".main .page-el[data-index='5'] .airship img:nth-child(7)", .5, {bottom: "-7%" , ease:Sine.easeInOut }, ".07")


					var fifth = new TimelineMax();
					fifth //.to(".yw", .7, {top:"150%",opacity: 0, zIndex: "0",width: '13%',top: '29%', left: '43%' , ease:Sine.easeInOut }, ".07")
						.to("section[data-index='6'] h2",.3,{
							opacity:0
						})
						.to("#folioContainer",.3,{
							opacity:0
						}).to("section[class='curves ss-style-roundedsplit-2']",.7,{
							backgroundColor:"blue",
							ease:Sine.easeInOut
						},".001")
						.to(".main .page-el[data-index='4']", .7, {
							background: "yellow",
							ease: Sine.easeInOut
						}, ".0001")
						.to("section[data-index='6']",.7,{
							backgroundColor:"blue",
							ease:Sine.easeInOut
						},".001")
						// .to(".main .page-el[data-index='5']", .6 , { delay:1.8,ease:Sine.easeInOut,onComplete:paginControl}, ".0001")
						.to(".main .page-el[data-index='5'] .airship", .7, {
							top: "110%"
						}, ".0001") // Going Down
						.to(".curv-container", .7, {
							opacity: 1,
							top: "120%",
							ease: Sine.easeInOut,
							onComplete: paginControl
						}, ".0001")
						.to(".redsvg,.bulb", .7, {
							top: "100%",
							ease: Sine.easeInOut
						})
						.to("#upIcon",1,{
							fill:"white"
						},.06);
					// var eight = new TimelineMax();
					// 	eight.to(".bulb,.redsvg,.blue", .4, {top: "100%" ,ease:Sine.easeInOut})


					// var main = new TimelineMax();
					// 	main.to(".curv-container", .7, {opacity: 1 , top: "120%" , ease:Sine.easeInOut })

				}
				//from 5 to 6
				//from 7 to 6
				if (index == '6') {
					// body.addClass("disabled-onepage-scroll");

					 var six = new TimelineMax();
					 six
					 .to("section[data-index='6'] h2",.3,{
						 opacity:1
					 })
					 .to("#folioContainer",.3,{
						 opacity:1
					 }).to("section[class='curves ss-style-roundedsplit-2']",.2,{
						 backgroundColor:"#2c80af",
						 ease:Sine.easeInOut
					 },".001")
					 .to("section[data-index='6']",.2,{
						backgroundColor:"#2c80af",
						ease:Sine.easeInOut
					},".001")
					var main = new TimelineMax();
					main.to(".curv-container", .7, {
							top: "-120%",
							ease: Sine.easeInOut,
							onComplete: paginControl
						})
						// .to(".rise h1", .1 ,{opacity: 1 , ease:Sine.easeInOut },"1")
						.to(".bulb,.redsvg", .4, {
							top: "100%",
							ease: Sine.easeInOut
						})
						.to(".news", .6, {
							opacity: 0,
							top: "100%",
							ease: Sine.easeInOut
						}, ".07")
						.to("#upIcon",1,{
							fill:"#072227"
						},.06);

					var eight = new TimelineMax();
					eight.to(".blue", .6, {
							delay: .5,
							top: "200%",
							ease: Sine.easeInOut,
							onComplete: paginControl
						})
						.to(".main .page-el[data-index='5'] .airship", .7, {
							top: "-110%"
						}, ".0001") // Going Down

				}

				if (index == '7') {

					// body.addClass("disabled-onepage-scroll");

					var grad = new TimelineMax();
					grad.to("#page8",.001,{
						animation:"moveUp .7s ease-in-out"
					},".001");
					var bulb = new TimelineMax();
					bulb.to(".bulb", 2, {
						top: "-20%",
						ease: Sine.easeInOut
					})
					.to("#upIcon",1,{
						fill:"yellow"
					},.06);


					var full = new TimelineMax();
					full.to(".blue", 1, {
						top: "0",
						ease: Sine.easeInOut
					}, ".8")
					


					var redsvg = new TimelineMax();
					redsvg.to(".redsvg", 1.5, {
							top: "-60%",
							ease: Sine.easeInOut,
							onComplete: paginControl
						})
						.to(".news", .6, {
							opacity: 1,
							top: "50%",
							ease: Sine.easeInOut
						}, "1")

					var eight = new TimelineMax();
					eight.to(".blue", .6, {
						fill: "black",
						ease: Sine.easeInOut
					})

				}
				if (index == '8') {
					// body.addClass("disabled-onepage-scroll");

					var eight = new TimelineMax();
					eight.to(".blue", 1, {
							top: "50%",
							opacity: 1,
							/*fill: "black", /*#d11e46*/
							ease: Sine.easeInOut,
							onComplete: paginControl
						})
						.to("#page8",.001,{
							animation:"makeGrad .7s ease-in-out"
						},".001")
						.to(".news", .6, {
							opacity: 1,
							top: "50%",
							ease: Sine.easeInOut
						}, "1")
						.to("#upIcon",1,{
							fill:"#58c0e5"
						},.06);
				}
				if (index == '9') {

					// body.addClass("disabled-onepage-scroll");

					var nine = new TimelineMax();
					nine.to(".blue", 1, {
							fill: "black", /*#231F20*/
							top: "200%",
							ease: Sine.easeInOut,
							onComplete: paginControl
						})
						.to("#page8",.001,{
							animation:"moveDown .7s ease-in-out"
						},".001")
						.to(".news", .6, {
							opacity: 1,
							top: "50%",
							ease: Sine.easeInOut
						}, ".07")
						.to("#upIcon",1,{
							fill:"white"
						},.06);
				}

				if (index == '10') {

					// body.addClass("disabled-onepage-scroll");

					var nine = new TimelineMax();
					nine.to(".blue", 1, {
							fill: "#26313D",
							top: "300%",
							ease: Sine.easeInOut,
							onComplete: paginControl
						})
						.to(".news", .6, {
							opacity: 1,
							top: "50%",
							ease: Sine.easeInOut
						}, ".07")
						.to("#upIcon",1,{
							fill:"red"
						},.01);
				}


			}, // This option accepts a callback function. The function will be called before the page moves.
			afterMove: function (index) {
				// From 2 to 1 
				if (index == '1') {




				}

				// From 1 to 2 // From 3 to 2
				if (index == '2') {
					$('.med').removeClass('active');
					var second = new TimelineMax();
					second.add("start")
					// .to(".bgshape", .5, {width: '33%',left: '57%', top: '12%', ease:Sine.easeInOut }, ".07")

					// $('.bgshape').addClass('active')


				}


				if (index == '3') {
					var third = new TimelineMax();
					third.to(".ui-layer-dot", .7, {
							opacity: 1,
							ease: Sine.easeInOut
						})
						// .to(".bgshape", .5, {width: '230%', top: '-70%', left: '-60%' , ease:Sine.easeInOut, onComplete:remove }, ".07")
						.to(".section-image svg", .5, {
							scale: 0,
							ease: Sine.easeInOut
						}, ".00001")
						.to(".section-image img", .5, {
							scale: 0,
							ease: Sine.easeInOut
						}, ".00001")
				}

				if (index == '4') {



				}



				if (index == '5') {

					var main = new TimelineMax();
					main.to(".main .page-el[data-index='5'] .airship", 1.5, {
						top: "-100%",
						ease: Sine.easeInOut
					}) // Going up

					// var fifth = new TimelineMax();
					//    	 	fifth.to(".yw", .5, {,ease:Sine.easeInOut }, ".07")



					var main = new TimelineMax();
					main.to(".curv-container", 2, {
							top: "-120%",
							ease: Sine.easeInOut
						})
						.to(".rise h1,.rise h2", .6, {
							opacity: 1,
							ease: Sine.easeInOut
						}, ".5")
					// .to(".sky", .6 ,{opacity:.5 ,bottom: "-100px", ease:Sine.easeInOut },"3")

					// var colror = new TimelineMax();
					// 	colror.to(".main .page-el[data-index='5']", .6 ,{background:"#2C80AF"},"4.6")


				}

				if (index == '6') {

				}


				if (index == '7') {

					// var news = new TimelineMax();
					//  		news.to(".blue", .1 , {opacity: 1, ease:Sine.easeInOut})

				}
				if (index == '8') {

					//   	var eight = new TimelineMax();
					// eight.to(".blue", .7 , {top:"50%", ease:Sine.easeInOut})

				}
				if (index == '9') {



					// var asd = new TimelineMax();
					//      		asd.to(".bgshape svg", .5, {delay: .2,fill:"#000" , ease:Sine.easeInOut })



				}

			}, // This option accepts a callback function. The function will be called after the page moves.
			loop: false, // You can have the page loop back to the top/bottom when the user navigates at up/down on the first/last page.
			keyboard: true, // You can activate the keyboard controls
			responsiveFallback: false, // You can fallback to normal page scroll by defining the width of the browser in which
			// you want the responsive fallback to be triggered. For example, set this to 600 and whenever
			// the browser's width is less than 600, the fallback will kick in.
			direction: "vertical" // You can now define the direction of the One Page Scroll animation. Options available are "vertical" and "horizontal". The default value is "vertical".  
		});
	}


	$(".onepage-pagination li a").on("click", function () {
		$(".onepage-pagination").animate({
			right: "-15px"
		});
	})
	var paginat = $(".onepage-pagination");

	function paginControl() {
		paginat.animate({
			right: "10px"
		});
	};

	// // Slider words movements
	var lFollowX = 0,
		lFollowY = 0,
		x = 0,
		y = 0,
		friction = 1 / 30;

	function animate() {
		x += (lFollowX - x) * friction;
		y += (lFollowY - y) * friction;

		translate = 'translate(' + x + 'px, ' + y + 'px) scale(1.1)';

		$('.section-image .image123').css({
			'-webit-transform': translate,
			'-moz-transform': translate,
			'transform': translate
		});

		window.requestAnimationFrame(animate);
	}

	$(window).on('mousemove click', function (e) {

		var lMouseX = Math.max(-100, Math.min(100, $(window).width() / 2 - e.clientX));
		var lMouseY = Math.max(-100, Math.min(100, $(window).height() / 2 - e.clientY));
		lFollowX = (20 * lMouseX) / 100; // 100 : 12 = lMouxeX : lFollow
		lFollowY = (10 * lMouseY) / 100;

	});

	animate();



	$(function () {

		var $slogans = $("p.slogan");
		var $holder = $("#holder");

		//set via JS so they're visible if JS disabled
		$slogans.css({
			position: "absolute",
			top: "0px",
			left: "0px"
		});

		//settings
		var transitionTime = 0.5;
		var slogansDelayTime = 2;

		//internal
		var totalSlogans = $slogans.length;

		var oldSlogan = 0;
		var currentSlogan = -1;

		//initialize	
		switchSlogan();

		function switchSlogan() {

			oldSlogan = currentSlogan;

			if (currentSlogan < totalSlogans - 1) {
				currentSlogan++
			} else {
				currentSlogan = 0;
			}

			TweenLite.to($slogans.eq(oldSlogan), transitionTime, {
				top: -20,
				alpha: 0,
				rotationX: 90
			});
			TweenLite.fromTo($slogans.eq(currentSlogan), transitionTime, {
				top: 20,
				alpha: 0,
				rotationX: -90
			}, {
				top: 0,
				alpha: 1,
				rotationX: 0
			});

			TweenLite.delayedCall(slogansDelayTime, switchSlogan);
		}

	});

	// Height adjustments

	var head = $('.header');
	head.each(function () {
		$(this).css('height', ($(window).height() - $('.med').height()))
	});



	// var bgs = $('.bgshape');
	// 	bgs.each(function() {
	// 		$(this).css('top',($(window).height() - bgs.height()) / 2.5)
	// 		$(this).css('left',($(window).width() - bgs.width()) / 2.5)
	// 	});





	// DOTS
	if ($("body").hasClass("xc")) {
		var fractionOfSize = 160;

		function Dots(element) {
			this.element = document.querySelector(element);
			this.settings = {};
			this.settings.horizontal = (window.innerWidth / fractionOfSize).toFixed(0);
			this.settings.vertical = (window.innerHeight / fractionOfSize).toFixed(0);

			this.init();
		}

		Dots.prototype.init = function () {
			this.wrapper = document.createElement('div');
			this.wrapper.className = 'ui-layer-dots';
			this.quantity = this.settings.horizontal * this.settings.vertical;
			this.row = 0;
			this.column = 0;
			this.dots = [];

			this.isInitialized = false;

			this.setup();
			this.draw();

			// ideally here is supposed to be a debouncer to limit drawings and bugs
			window.addEventListener('resize', function () {
				this.draw();
			}.bind(this));
			window.addEventListener('orientationchange', function () {
				this.draw();
			}.bind(this));

			return {
				wrapper: this.wrapper
			};
		}

		Dots.prototype.random = function (limit) {
			return Math.random() * limit;
		}

		Dots.prototype.setup = function () {
			for (var i, i = 0; i < this.quantity; i++) {
				var dot = document.createElement('span');
				dot.className = 'ui-layer-dot';

				this.dots.push(dot);
				this.wrapper.appendChild(dot);
			}

			this.element.appendChild(this.wrapper);
		}

		Dots.prototype.updateDimensions = function () {
			this.width = window.innerWidth;
			this.height = window.innerHeight;
		}

		Dots.prototype.draw = function () {
			this.updateDimensions();

			this.row = 0;

			this.dots.forEach(function (dot, index) {
				this.drawDot(dot, index);
			}.bind(this));

			this.isInitialized = true;
		}

		Dots.prototype.drawDot = function (dot, index) {
			var x, y, random;

			random = this.random(100);

			if (index % this.settings.horizontal == 0) {
				// reset
				this.column = 1;
				this.row++;
			}

			/*x = this.column * (this.width / this.settings.horizontal) - this.width / this.settings.horizontal / 2;
			y = this.row * (this.height / this.settings.vertical) - this.height / this.settings.vertical / 2;*/
			x = this.random(this.width);
			y = this.random(this.height);
			this.column++;
			rand = this.random(1000) + 1000 ; 
			dot.style.webkitAnimationDuration = rand + 'ms';
			dot.style.mozAnimationDuration= rand + 'ms';
			dot.style.msAnimationDuration = rand + 'ms';
			dot.style.animationDuration = rand + 'ms';
			dot.style.mozTransitionDelay = random / 3 + 'ms';
			dot.style.webkitTransitionDelay = random / 3 + 'ms';
			dot.style.msTransitionDelay = random / 3 + 'ms';
			dot.style.transitionDelay = random / 3 + 'ms';

			if (this.isInitialized) {
				var val = 'translate3d(' + x + 'px,' + y + 'px, 0)';
				dot.style.MozTransform = val;
				dot.style.WebkitTransform = val;
				dot.style.transform = val;
				dot.style.msTransform = val;
			} else {
				var val = 'translate3d(' + Math.random() * window.innerWidth + 'px,' + Math.random() * window.innerHeight + 'px, 0)';
				dot.style.MozTransform = val;
				dot.style.WebkitTransform = val;
				dot.style.transform = val;
				dot.style.msTransform = val;

				setTimeout(function () {
					var val = 'translate3d(' + x + 'px,' + y + 'px, 0)';
					dot.style.MozTransform = val;
					dot.style.WebkitTransform = val;
					dot.style.transform = val;
					dot.style.msTransform = val;
				}, random);
			}
		}

		var layerDots = new Dots('[data-dots]');

////////SLiding images in the DOING
		var $slider = $(".slider");
		var $slides = $slider.find(".slider-item");
		var $navPrev = $(".go-prev");
		var $navNext = $(".go-next");
		var $startAutoplay = $(".start-autoplay");
		var $stopAutoplay = $(".stop-autoplay");
		var slidesNum = $slides.length;
		var prevSlideID = null;
		var currentSlideID = 0;
		var isAnimating = false;
		var isAutoPlay = false;

		function init() {
			TweenLite.set($slides, {
				left: "-100%"
			});
			$navPrev.on("click", gotoPrevSlide);
			$navNext.on("click", gotoNextSlide);
			$startAutoplay.on("click", startAutoPlay);
			$stopAutoplay.on("click", stopAutoPlay);
			gotoSlide(0, 0);
		}

		function gotoPrevSlide() {
			var slideToGo = currentSlideID - 1;
			if (slideToGo <= -1) {
				slideToGo = slidesNum - 1;
			}
			stopAutoPlay();
			gotoSlide(slideToGo, 1, "prev");
		}

		function gotoNextSlide() {
			var slideToGo = currentSlideID + 1;
			if (slideToGo >= slidesNum) {
				slideToGo = 0;
			}
			stopAutoPlay();
			gotoSlide(slideToGo, 1, "next");
		}

		function gotoSlide(slideID, _time, _direction) {
			if (!isAnimating) {
				isAnimating = true;
				prevSlideID = currentSlideID;
				currentSlideID = slideID;
				var $prevSlide = $slides.eq(prevSlideID);
				var $currentSlide = $slides.eq(currentSlideID);
				var time = 1;
				if (_time !== null) {
					time = _time;
				}
				var direction = "next";
				if (_direction != null) {
					direction = _direction;
				}
				if (direction == "next") {
					TweenLite.to($prevSlide, time, {left: "-100%",opacity: 0})
					TweenLite.fromTo($currentSlide, time, {left: "100%",opacity: 0}, {left: "0",opacity: 1});
					TweenLite.fromTo(".slider-info h2", .6, {x: "100px"}, {delay:.1,x: "0"});
					TweenLite.fromTo(".slider-info h4", .6, {x: "150px"}, {delay:.2,x: "0",ease:Sine.easeInOut});
					TweenLite.fromTo(".slider-info p", .6, {x: "200px"}, {delay:.3,x: "0",ease:Sine.easeInOut});
					TweenLite.fromTo(".slider-info a", .6, {left: "200px"}, {delay:.4,left: "0",ease:Sine.easeInOut});

				} else {
					TweenLite.to($prevSlide, time, {left: "100%",opacity: 1});
					TweenLite.fromTo($currentSlide, time, {left: "-100%",opacity: 0}, {left: "0",opacity: 1});
					TweenLite.fromTo(".slider-info h2", .6, {x: "-100px"}, {delay:.1,x: "0"});
					TweenLite.fromTo(".slider-info h4", .6, {x: "-100px"}, {delay:.1,x: "0",ease:Sine.easeInOut});
					TweenLite.fromTo(".slider-info p", .6, {x: "-50px"}, {delay:.1,x: "0",ease:Sine.easeInOut});
					TweenLite.fromTo(".slider-info a", .6, {left: "-100px"}, {delay:.1,left: "0",ease:Sine.easeInOut});
				}
				TweenLite.delayedCall(time, function() {
					isAnimating = false;
				});
			}
		}

		function play(){
		  gotoNextSlide();
		  TweenLite.delayedCall(4, play);
		}

		function startAutoPlay(immediate) {
			if (immediate != null) {
				immediate = false;
			}
		    
			if (immediate) {
				gotoNextSlide();
			}
			TweenLite.delayedCall(4, play);
		
		}
		function stopAutoPlay() {
		  isAutoPlay = false;
			TweenLite.killDelayedCallsTo(play);
		}
		init();
		startAutoPlay();
	}


		
  	if (!$('body').hasClass("xc")) {
		$('#tabs2').tabulous({
	    	effect: 'scale'
	    });
	};


});



if ($('body').hasClass('po')) {
	window.onload = function () {
		function navigation(activeClass, ulClass, imgContainerClass, sClass) {
			this.activeClass = activeClass;
			this.ulClass = ulClass;
			this.imgContainerClass = imgContainerClass;
			this.imgSingleClass = sClass;
			this.imgDefaultClass = this.imgContainerClass.children[0].className;
		};
		navigation.prototype.clearClass = function () {
			var liLength = this.ulClass.children.length;
			for (var i = 0; i < liLength; i++) {
				this.ulClass.children[i].removeAttribute("class")
			}
		};

		navigation.prototype.createClass = function (e) {
			this.clearClass();
			var c = this.activeClass,
				li = this.ulClass.children[e];
			li.setAttribute("class", c);
		};
		navigation.prototype.faded = function (i, value) {
			return i.style.opacity = value || 1;
		};
		navigation.prototype.fadedExt = function (i, value, s) {
			(s) ? i.parentNode.className = this.imgSingleClass: i.parentNode.className = this.imgDefaultClass;
			this.faded(i, value);
		};
		navigation.prototype.imgShow = function (e) {
			this.createClass(e);
			var maxImg = this.imgContainerClass.children.length;
			for (var l = 0; l < maxImg; l++) {
				var parent = this.imgContainerClass,
					image = parent.children[l].firstElementChild,
					att = image.getAttribute("title"), // title,
					nav = this.ulClass.children[e].getAttribute("data-type");

				this.fadedExt(image, 0.3, 1);
				if (nav == att) {
					this.fadedExt(image, 1, 1);
				} else if (nav == "all") {
					this.fadedExt(image);
				}
			}
		};
		navigation.prototype.sign = function (e) {
			var parent = this.ulClass,
				ths = this,
				child = parent.children[e];

			child.firstElementChild.onclick = function () {
				return false
			};
			return child.onclick = function () {
				ths.imgShow(e);
			}

		};
		navigation.prototype.render = function () {
			var liLength = this.ulClass.children.length;
			for (var k = 0; k < liLength; k++) {
				this.sign(k);
			}
		};
		/*
		 ******************************
		 *=obj creat
		 ******************************
		 */
		var ulPortfolio = document.getElementsByClassName("navigate")[0],
			imgPortfolio = document.getElementsByClassName("portfolio")[0],
			aclass = "active",
			imgFigureClass = "col-3",
			navport = new navigation(aclass, ulPortfolio, imgPortfolio, imgFigureClass);

		navport.render();
	}

}











/*This file was exported by "Export WP Page to Static HTML" plugin which created by ReCorp (https://myrecorp.com) */