
$(document).ready(function(){

    /* -----------start back to tops ---------- */
    $(".btn-backtotops").hide();
    $(window).scroll(function(){
        let getscrolltop =$(this).scrollTop();
        console.log(getscrolltop);

        if(getscrolltop >= 370) {
            $(".btn-backtotops").fadeIn(1000);
        }else {
            $(".btn-backtotops").fadeOut(1000);
        }
    })
    /* -----------end back to tops ---------- */

    //---------- Start Navbar-----------------//

    $(".navbtns").click(() => {
        console.log(this);
        $(".navbtns").toggleClass("crossxs");
    })

    $(window).scroll(function() {
        let getscrolltop = $(this).scrollTop();
        console.log(getscrolltop);

        if(getscrolltop >= 200) {
            $("nav").addClass("navmenus");
        }else {
            $("nav").removeClass("navmenus");
        }
    })

    //---------- End Navbar-------------------//


    //---------- Start Properties Section -------------------------------

    $(".propertylists").click(function() {

        //for acitve items
        // $(this).addClass("activeitems");
        // $(this).siblings().removeClass("activeitems");
        $(this).addClass("activeitems").siblings().removeClass("activeitems");

        // for filter 
        let getattvalue = $(this).attr("data-filter");
        if(getattvalue === 'all') {
            $(".filters").show("slide",500);
        }else {
            $(".filters").hide();
            $(".filters").not("."+ getattvalue).hide("slide",500);
            $(".filters").filter("."+getattvalue).show("slide",500);
        }
    })

     //lightbox option
     lightbox.option({
        showImageNumberLabel : false,
        imageFadeDuration: 600
    });


    //---------- End Properties Section -------------------------------


    //---------- Start Adv Section -------------------------------
    $(window).scroll(function(){
        
        let getscrolltop = $(this).scrollTop();
        // console.log(getscrolltop);

        if( getscrolltop >= 900 ) {
            $(".advimages").addClass("fromlefts");
            $(".advtexts").addClass("fromrights");
        }else {
            $(".advimages").removeClass("fromlefts");
            $(".advtexts").removeClass("fromrights");
        }
    })

    //---------- End Adv Section -------------------------------


    //------ start Footer section----------------
    const getyear = $("#getyear");
    const getfullyear = new Date().getUTCFullYear();
    getyear.text(getfullyear);
    //------ end Footer section----------------
    

})