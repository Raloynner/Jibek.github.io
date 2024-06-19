$( function() {
    // $( "#tabs" ).tabs();
    $( "#tabs-client, #tabs-services" ).tabs();
    // $( "#tabs-advantages" ).tabs();
    // $( ".product-block-content-left" ).tabs();
    // $( "#tab-history" ).tabs();
    $( "#faq, #faq-2, .accordion" ).accordion({
        heightStyle: "content",
        collapsible: true,
        active: false
    });
    $('.counter').counterUp({
        delay: 20,
        time: 1500
    });
} );
