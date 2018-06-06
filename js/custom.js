$(document).ready(function(){
//    typewrite start
    var TxtType = function (el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };

    TxtType.prototype.tick = function () {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
            this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
            this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

        var that = this;
        var delta = 200 - Math.random() * 100;

        if (this.isDeleting) {
            delta /= 2;
        }

        if (!this.isDeleting && this.txt === fullTxt) {
            delta = this.period;
            this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
            this.isDeleting = false;
            this.loopNum++;
            delta = 500;
        }

        setTimeout(function () {
            that.tick();
        }, delta);
    };

    window.onload = function () {
        var elements = document.getElementsByClassName('typewrite');
        for (var i = 0; i<elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-type');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
                new TxtType(elements[i], JSON.parse(toRotate), period);
            }
        }
        // INJECT CSS
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
        document.body.appendChild(css);
    };
//    typewrite ends
    
//    skillbar strat
    jQuery(document).ready(function () {
        jQuery('.skillbar').each(function () {
            jQuery(this).find('.skillbar-bar').animate({
                width: jQuery(this).attr('data-percent')
            }, 6000);
        });
    });
//    skillbar ends
    
//    counter-js
    $('.counter').counterUp({
    delay: 10,
    time: 1000
    });
//    counter-js
    
//    testmonial_slid start
    $('.testmonial_slid').slick({
  dots: true,
  infinite: true,
  speed: 600,
//  autoplay:true,
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow:false,
  nextArrow:false,
  infinite: true,
  slidesToShow: 1,
  fade: true,
  cssEase: 'linear',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
    });
//    testmonial_slid ends
    
//    venobox start
    $(document).ready(function(){
    $('.venobox').venobox(); 
    });
//    venobox ends
    
//    navfixed & top-to start
    $navOffset=$('#navigation').offset().top;
    // navOffset ends 
        $top_offset=300;
        $('.top_to').click(function(){
            $('html,body').animate({
                scrollTop:0
            },800);
        });
        $(window).scroll(function(){
            $scrolling=$(this).scrollTop();
            
            if($scrolling > $navOffset){
                $("#navigation").addClass('navfixed');
            }else{
                $("#navigation").removeClass('navfixed');
            }
            
            if($scrolling > $top_offset){
                $('.top_to').fadeIn();
            }else{
                $('.top_to').fadeOut();
            }
        });
//    navfixed & top-to end
    
//    scrollspy start
    $('body').scrollspy({ target: '#navbarSupportedContent' })
//    scrollspy ends
    
//    smoothScroll start
   $(function () {
       // This will select everything with the class smoothScroll
       // This should prevent problems with carousel, scrollspy, etc...
       $('.smoothScroll').click(function () {
           if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
               var target = $(this.hash);
               target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
               if (target.length) {
                   $('html,body').animate({
                       scrollTop: target.offset().top
                   }, 1000); // The number here represents the speed of the scroll in milliseconds
                   return false;
               }
           }
       });
   });
//    smoothScroll ends
    
//    WOW-js start
    new WOW({
        offset: 100,
        mobile: true,
        callback: function(box){
      // the callback is fired every time an animation is started
      // the argument that is passed in is the DOM node being animated
    },
    
    }).init();
//    WOW-js ends
        
    $('.parallax').scrolly({bgParallax: true});
    
    // Remove Preloader After Load Full Site 
//	$(window).on('load', function() {
//		$('.preloader-wrap').fadeOut(500);
//	});
    
//    Preloader
     $(document).ready(function(){
    setTimeout(function(){
      $('body').addClass('loaded');
    },300)
  });
//    Preloader

    
    
});

