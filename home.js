function HomeIndex() {
    const heightFromTop = 300;
    this.initialiseScrollToTopButton = function () {
        $(window).scroll (function () {
            var vertHeight = $(this).scrollToTop();
            if (vertHeight > heightFromTop) {
                $("#scrollToTop").fadeIn();
            }
            else {
                $("#scrollToTop").fadeOut();
            }
        });
         // click event handler
         $("#scrollToTop").click(function () {
            $("html, body").animate({ scrollTop: 0}, "slow");
        });
    }
}
//instantiating home 
$(document).ready(function () {
    app.homeIndex = new HomeIndex();
    app.homeIndex.initalizeScrollToTopButton();
});