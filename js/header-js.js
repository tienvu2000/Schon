
        $(document).ready(function () {

            $(".search-click").click(function () {
                $(this).parents(".header") 
                // $(".search").slideToggle();
                $(".search").toggleClass("open");

                // $(this).parents("body").toggleClass("is-fixed");
            });

            $(".fa-times").click(function() {
                $(this).parents(".header") 
                $(".search").removeClass("open")
            });
            /////////////////////////////
            $(".popular").click(function () {
                $(this).parents(".popular")
                $(".popular__heart").toggleClass("open-1")
                $(".dark").toggleClass("open-1")
                $(".popular").toggleClass("zindex");
            });
            ////////////////////////////
            $(".bag").click(function () {
                $(this).parents(".bag")
                $(".bag__heart").toggleClass("open-1")
                $(".dark").toggleClass("open-1")
                $(".bag").toggleClass("zindex");
            });
            ///////////////////////////
            $(".signin-click").click(function() {
                $(this).parents(".header")
                $(".signin").toggleClass("s-open")
                $(".dark").toggleClass("open-1");
            });

            $(".close-click").click(function() {
                $(this).parents(".header")
                $(".signin")
                .removeClass("s-open")
                $(".dark").removeClass("open-1");;
            });
            // ///////////////////////////
            // $(".dark").click(function() {
            //     $(this).parents(".header")
            //     $(".dark").removeClass();
            // });


            // $(".popular").click(function () {
            //     $(this).parents(".popular")
            //     $(".popular__heart").removeClass("open-1");
            // });
            ///////////////////////////////////
            $(".bar-menu").click(function() {
                $(this).parents(".header")
                .find(".header__nav").toggleClass("h-open");
                // $(this).parents("body").toggleClass("is-fixed");
            });

            $(".drop-link").click(function() {
                $(this).parents(".header__list")
                .find(".header__drop").toggleClass("h-open");
            });
            $(".drop-link").click(function() {
                $(this).parents(".page")
                .find(".page__drop").toggleClass("h-open");
            });
            //////////////////
            $(".page__title").click(function(){
                $(this).parents(".page__detail")
                $(".page__detail").toggleClass("h-open");
            });
    });