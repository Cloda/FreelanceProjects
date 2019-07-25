( function( $ ) {
    $( function() {
        $( '#my-menu' ).sliderMenu({
            back: '<span class="slider-menu__text">Назад</span>'
        });
    });
})( jQuery );

var header = new Vue({
    el: '#index',
    data: {
        headerShow: false,
        headerOpen: true,
        headerClose: false,
    },
    methods: {
        headerReverse: function(){
            this.headerOpen = !this.headerOpen;
            this.headerClose = !this.headerClose;
            if (document.getElementById("overlay").getAttribute("class") != "header-over header-over-active"){
                document.getElementById("overlay").setAttribute("class", "header-over header-over-active")
            }
            else {
                document.getElementById("overlay").setAttribute("class", "header-over")
            }   
        }
    },
})
