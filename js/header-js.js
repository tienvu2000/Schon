
        $(document).ready(function () {

            $(".search-click").click(function () {
                $(this).parents(".header") 
                // $(".search").slideToggle();
                $(".search").addClass("open");

                // $(this).parents("body").toggleClass("is-fixed");
            });

            $(".fa-times").click(function() {
                $(this).parents(".header") 
                $(".search").removeClass("open")
            });
            /////////////////////////////
            $(".popular").click(function () {
                $(this).parents(".popular")
                $(".popular__heart").addClass("open-1")
                $(".dark").addClass("open-1")
                $(".selec").addClass("open-1");
            });
            ////////////////////////////
            $(".bag").click(function () {
                $(this).parents(".bag")
                $(".bag__heart").addClass("open-1")
                $(".select").addClass("open-1")
                $(".dark").addClass("open-1");
            });
            ///////////////////////////
            $(".signin-click").click(function() {
                $(this).parents(".header")
                $(".signin").addClass("s-open")
                $(".dark").addClass("open-1");
            });

            $(".close-click").click(function() {
                $(this).parents(".header")
                $(".signin")
                .removeClass("s-open")
                $(".dark").removeClass("open-1");;
            });
            ///////////////////////////
            $(".dark").click(function() {
                $(this).parents(".header")
                $(".dark").removeClass();
            });

            // $(".popular").click(function () {
            //     $(this).parents(".popular")
            //     $(".popular__heart").removeClass("open-1");
            // });
    });