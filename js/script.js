$(document).ready(function() {

    $(".burger").click(function(event) {
        $(".burger, .nav").toggleClass("active");
        $("body").toggleClass("lock");
    });

    $('.nav').click(function(event) {
        $('.burger,.nav').removeClass('active');
        $('body').removeClass('lock');
    });
   
    // fixed header ===============================================
    
    var header = $("#header"),
        scrollOffset = $(window).scrollTop();
    
    checkScroll(scrollOffset);
    
    $(window).on("scroll", function () {
        scrollOffset = $(this).scrollTop();
        
        checkScroll(scrollOffset);
        
    });
    
    function checkScroll(scrollOffset) {
        if( scrollOffset > 0 ) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    };
    
    // smooth scroll
    
    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();
        
        var $this = $(this);
        var blockId = $(this).data("scroll");
        var blockOffset = $(blockId).offset().top -96; //-963 это высота header (если он фиксед)
        
        $("#nav a").removeClass("active");
        $this.addClass("active");
        
        $("html, body").animate({
            scrollTop: blockOffset
        }, 500);  // 500 - скорость анимации (0.5 сек)
    });



});
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
