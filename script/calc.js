
$(function() {    
    $('#head').click(function(){
        $( "#click-hidden-list" ).toggle();
    })

    $('#0_circle').click(function(){
        $('#two_circle').removeClass("checked");
        $('#one_circle').removeClass("checked");
        $('#three_circle').removeClass("checked");
        $('#four_circle').removeClass("checked");
        $('#zero_circle').addClass("checked");
    })
    $('#1_circle').click(function(){
        $('#two_circle').removeClass("checked");
        $('#one_circle').addClass("checked");
        $('#three_circle').removeClass("checked");
        $('#four_circle').removeClass("checked");
        $('#zero_circle').removeClass("checked");
    })
    $('#2_circle').click(function(){
        $('#two_circle').addClass("checked");
        $('#one_circle').removeClass("checked");
        $('#three_circle').removeClass("checked");
        $('#four_circle').removeClass("checked");
        $('#zero_circle').removeClass("checked");
    })
    $('#3_circle').click(function(){
        $('#two_circle').removeClass("checked");
        $('#one_circle').removeClass("checked");
        $('#three_circle').addClass("checked");
        $('#four_circle').removeClass("checked");
        $('#zero_circle').removeClass("checked");
    })
    $('#4_circle').click(function(){
        $('#two_circle').removeClass("checked");
        $('#one_circle').removeClass("checked");
        $('#three_circle').removeClass("checked");
        $('#four_circle').addClass("checked");
        $('#zero_circle').removeClass("checked");
    })
    
    $('#5_circle').click(function(){
        $('#six_circle').removeClass("checked");
        $('#seven_circle').removeClass("checked");
        $('#eight_circle').removeClass("checked");
        $('#five_circle').addClass("checked");
        $('#nine_circle').removeClass("checked");
        $('#ten_circle').removeClass("checked");
    })
    $('#6_circle').click(function(){
        $('#six_circle').addClass("checked");
        $('#seven_circle').removeClass("checked");
        $('#eight_circle').removeClass("checked");
        $('#five_circle').removeClass("checked");
        $('#nine_circle').removeClass("checked");
        $('#ten_circle').removeClass("checked");
    })
    $('#7_circle').click(function(){
        $('#six_circle').removeClass("checked");
        $('#seven_circle').addClass("checked");
        $('#eight_circle').removeClass("checked");
        $('#five_circle').removeClass("checked");
        $('#nine_circle').removeClass("checked");
        $('#ten_circle').removeClass("checked");
    })
    $('#8_circle').click(function(){
        $('#six_circle').removeClass("checked");
        $('#seven_circle').removeClass("checked");
        $('#eight_circle').addClass("checked");
        $('#five_circle').removeClass("checked");
        $('#nine_circle').removeClass("checked");
        $('#ten_circle').removeClass("checked");
    })
    $('#9_circle').click(function(){
        $('#six_circle').removeClass("checked");
        $('#seven_circle').removeClass("checked");
        $('#eight_circle').removeClass("checked");
        $('#five_circle').removeClass("checked");
        $('#nine_circle').addClass("checked");
        $('#ten_circle').removeClass("checked");
    })
    $('#10_circle').click(function(){
        $('#six_circle').removeClass("checked");
        $('#seven_circle').removeClass("checked");
        $('#eight_circle').removeClass("checked");
        $('#five_circle').removeClass("checked");
        $('#nine_circle').removeClass("checked");
        $('#ten_circle').addClass("checked");
    })

    $('#rul').click(function(){
        if (!$('#venicle > .calc__option-check').hasClass('checked')){
            $('#venicle > .calc__option-check').addClass('checked')
        } else {
            $('#venicle > .calc__option-check').removeClass('checked')
        }
    })
    $('#cpp').click(function(){
        if (!$('#kpp > .calc__option-check').hasClass('checked')){
            $('#kpp > .calc__option-check').addClass('checked')
        } else {
            $('#kpp > .calc__option-check').removeClass('checked')
        }
    })
})


var calculator = new Vue({
    el: '#calc',
    data: {
        message: 'Выберите транспорт',
        circle: 0,
        circlePrice: 150,
        rul: false,
        rulPrice: 150,
        kpp: false,
        kppPrice: 150,
        mech: 1100,
        temp: 1,
    },
    methods: {
        moto: function(){
            $('#two_trans').removeClass("checked");
            $('#three_trans').removeClass("checked");
            $('#four_trans').removeClass("checked");
            $('#one_trans').addClass("checked");
            this.mech = 1100;
            this.message = "Мотоциклы";
            this.temp = 1;
            $( "#click-hidden-list" ).toggle();
        },
        auto: function(){
            this.mech = 1200;
            this.message = "Леговые авто";
            this.temp = 2;
            $( "#click-hidden-list" ).toggle();
            $('#one_trans').removeClass("checked");
            $('#three_trans').removeClass("checked");
            $('#four_trans').removeClass("checked");
            $('#two_trans').addClass("checked");
        },
        vnecar: function(){
            this.mech = 1300;
            this.message = "Внедорожник";
            this.temp = 3;
            $( "#click-hidden-list" ).toggle();
            $('#one_trans').removeClass("checked");
            $('#two_trans').removeClass("checked");
            $('#four_trans').removeClass("checked");
            $('#three_trans').addClass("checked");
        },
        transport: function(){
            this.mech = 1400;
            this.message = "Спецтехника";
            this.temp = 4;
            $( "#click-hidden-list" ).toggle();
            $('#one_trans').removeClass("checked");
            $('#two_trans').removeClass("checked");
            $('#three_trans').removeClass("checked");
            $('#four_trans').addClass("checked");
        },
    },
    computed: {
        machine: function(){
            return this.circle*this.circlePrice+
                    this.kppPrice*Number(this.kpp)+this.rulPrice*Number(this.rul)+this.mech
        },
    },
})