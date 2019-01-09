// Dont't load variable until after page loads
$(window).bind("load", function() {
    // Sticky Header
    window.onscroll = function() {stickyHeader()};

    var topHeader = document.getElementById("header");

    var sticky = topHeader.offsetTop;

    function stickyHeader() {

        console.log(topHeader);
    
        if (window.pageYOffset > sticky) {
            topHeader.classList.add("sticky");
        } else {
            topHeader.classList.remove("sticky");
        }
    }

});