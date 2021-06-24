$('.hero').owlCarousel({
    loop:true,
    dots:true,
    nav:false,
    slideTransition:'ease-out',
    items:1
});
var owl = $('.hero')
owl.owlCarousel();
$('.customNextBtn').click(function() {
    owl.trigger('next.owl.carousel', [300]);
})
$('.customPrevBtn').click(function() {
    owl.trigger('prev.owl.carousel', [300]);
})
/////////////////////////////////////////////
$('.banner-slider').owlCarousel({
    loop:true,
    dots:true,
    nav:false,
    slideTransition:'ease-out',
    items:1
});
var owl2 = $('.banner-slider')
owl2.owlCarousel();
$('.customNextBtnBanner').click(function() {
    owl2.trigger('next.owl.carousel', [300]);
})
$('.customPrevBtnBanner').click(function() {
    owl2.trigger('prev.owl.carousel', [300]);
})
/////////////////////////////////////////////
$('.promotion-product-slider').owlCarousel({
    loop:true,
    dots:false,
    nav:false,
    margin:20,
    slideTransition:'ease-out',
    items:5,
    responsive : {
        0 : {
            items:1
        },
        768 : {
            items:2
        },
        1020 : {
            items:2
        },
        1300 : {
            items:4
        },
        1400 : {
            items:4
        }
    }
});
var owl3 = $('.promotion-product-slider')
owl3.owlCarousel();
$('.customNextBtnPromotion').click(function() {
    owl3.trigger('next.owl.carousel', [300]);
})
$('.customPrevBtnPromotion').click(function() {
    owl3.trigger('prev.owl.carousel', [300]);
})
/////////////////////////////////////////////
$('.promotion-product-slider2').owlCarousel({
    loop:true,
    dots:false,
    nav:false,
    margin:20,
    slideTransition:'ease-out',
    items:5,
    responsive : {
        0 : {
            items:1
        },
        768 : {
            items:2
        },
        1020 : {
            items:2
        },
        1300 : {
            items:4
        },
        1400 : {
            items:4
        }
    }
});
var owl4 = $('.promotion-product-slider2')
owl4.owlCarousel();
$('.customNextBtnPromotion2').click(function() {
    owl4.trigger('next.owl.carousel', [300]);
})
$('.customPrevBtnPromotion2').click(function() {
    owl4.trigger('prev.owl.carousel', [300]);
})
/////////////////////////////////////////////
function chng(e,event,img1,img2,img3,img4) {
    var elWidth = e.offsetWidth;
    var boyut = elWidth / 4;
    var el1 = boyut * 2;
    var el2 = boyut * 3;
    var el3 = boyut * 4;
    var rect = event.target.getBoundingClientRect();
    var xSet = event.clientX - rect.left;
    e.style.backgroundImage = `url(${img1})`;
    if(xSet < boyut) {
        e.style.backgroundImage = `url(${img1})`
    }else if(xSet > boyut && xSet < el1) {
        e.style.backgroundImage = `url(${img2})`
    }else if(xSet > el1 && xSet < el2) {
        e.style.backgroundImage = `url(${img3})`
    }else if(xSet > el2 && xSet < el3) {
        e.style.backgroundImage = `url(${img4})`
    }
    e.addEventListener('mouseout', () => {
        e.style.backgroundImage = `url(${img1})`
    },false)
}
/////////////// Anasayfa Ürün Kategori Tabs /////////////
$(function () {
    $('.tab-content').hide();
    $('#th-tab-one').fadeIn('slow');
    $('#one').click(function() {
        $('.tab-content').hide();
        $('#th-tab-one').fadeIn('slow');
        $('#one').addClass("active");
        $('#two').removeClass("active")
        $('#three').removeClass("active")
    })
    
    $('#two').click(function() {
        $('.tab-content').hide();
        $('#th-tab-two').fadeIn('slow');
        $('#two').addClass("active");
        $('#one').removeClass("active")
        $('#three').removeClass("active")
    })
    
    $('#three').click(function() {
        $('.tab-content').hide();
        $('#th-tab-three').fadeIn('slow');
        $('#three').addClass("active");
        $('#one').removeClass("active")
        $('#two').removeClass("active")
    })
    
  });
/////////////// Side Menu Tabs ///////////////////
$(function () {
    $('#th-tab-first').fadeIn('slow');
    $('#first').click(function() {
        $('.content-side').hide();
        $('#th-tab-first').fadeIn('slow');
        $('#first').addClass("active");
        $('#second').removeClass("active")
        $('#third').removeClass("active")
    })
    
    $('#second').click(function() {
        $('.content-side').hide();
        $('#th-tab-second').fadeIn('slow');
        $('#second').addClass("active");
        $('#first').removeClass("active")
        $('#third').removeClass("active")
    })
    
    $('#third').click(function() {
        $('.content-side').hide();
        $('#th-tab-third').fadeIn('slow');
        $('#third').addClass("active");
        $('#first').removeClass("active")
        $('#second').removeClass("active")
    })
    
  });
//////////////////////////////////////////////////
function tabOpener(e) {
    var sideTabs = document.querySelector('.side-tabs')
    sideTabs.classList.toggle('hs-100')
}
function sideOpener() {
    var sideMenu = document.querySelector('.side-menu')
    sideMenu.classList.add('side-active')
}
function sideCloser() {
    var sideMenu = document.querySelector('.side-menu')
    sideMenu.classList.remove('side-active')
}
//////////////////////////////////////////////////
function heart(e) {
    e.classList.toggle('heart-active')
}
////////////// Sticky Header /////////////////////////
window.onscroll = function() {myFunction()};
var header = document.querySelector('.sticky-header')
var sticky = header.offsetTop;
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
//////////////////////////////////////////////////