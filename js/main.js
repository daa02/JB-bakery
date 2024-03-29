// main.js

// gnb
$(function () {
    // 마우스 오버시 메뉴 열림
    $('.depth1').mouseover(function () {
        // class추가되면 보임
        $('.depth2').addClass('show');
        $('.depth2_bg').addClass('show');
    });

    // 마우스가 나가면 메뉴 닫힘
    $('.depth1 > li').mouseout(function () {
        $('.depth2').removeClass('show');
        $('.depth2_bg').removeClass('show');
    });

});


// slider
$(function () {
    var count = 1;

    function set_slider(c) {
        $('.slider img, .indicator  a')
            .removeClass('show');

        count = c;

        $('.slider img')
            .eq(c)
            .addClass('show');

        $('.indicator  a')
            .eq(c)
            .addClass('show');
    };


    function slider() {
        setInterval(function () {
            console.log(count);
            if (count > 2) count = 0;
            // 모든 이미지 비표시
            $('.slider img').removeClass('show');
            // 현재 이미지만 표시
            $('.slider img')
                .eq(count)
                .addClass('show');

            // 인디게이터 이동
            $('.indicator > a').removeClass('show');
            $('.indicator > a')
            .eq(count)
            .addClass('show');

            count++;
        }, 4000);
    };

    set_slider(0);
    slider();

    $('#in01').click(function(){
        console.log("111")
        set_slider(0);
        return false;
    });

    $('#in02').click(function(){
        console.log("222")
        set_slider(1);
        return false;
    });

    $('#in03').click(function(){
        console.log("333")
        set_slider(2);
        return false;
    });




});


// popup
$(function(){
    //팝업창 표시(기본)
    $('.popup').addClass('show');

    //닫기 버튼 클릭시 팝업창 종료 
    $('#btn_close').click(function(){
        $('.popup').removeClass('show');
    })

});