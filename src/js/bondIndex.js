($(function(){
    /** 点击切换 **/
    changeTap($('.nav-left'),'a');
    changeTap($('.header-center-item'),'li');
    changeTap($('.language'),'a');
    changeTap($('.notice-list'),'li');
    changeTap($('#bond-wrap .banner-nav-text'),'a');

    function changeTap(obj,opt){
        obj.on('click',opt,function(e){
            $(this).addClass('active').siblings().removeClass('active');
        })
    }

    /** 动态设置div的高度 ***/
    /** 获得单个div的高度 */
    var oLen = $('#bond-wrap .bond-detail-ctx').length;
    var oHeight = $('#bond-wrap .first').height();
    var allHeight = oLen * oHeight;
    var oDiv = $('#bond-wrap .bond-detail > div');

    $('#bond-wrap .bond-detail').css('height',allHeight);

    $('#bond-wrap .bond-nav a').each(function(i){
        $(this).on('click',function(){
            var index = $(this).index();
            var dis = index * oHeight;
            oDiv.animate({ top : -dis},100);
            var oDivDis = allHeight - dis;
            $('#bond-wrap .bond-detail').css('height',oDivDis);
            $(this).addClass('active').siblings().removeClass('active');
        });
    });

    /** 增加返回底部 **/
    $('#footer').append('<div class="backTop">');
    $('#footer .backTop').on('click',function(){
        $('body,html').animate({scrollTop:0},500);
        return false;
    });

    /*** 设置 modal 的高度 **/
    setModalHeight();
    function setModalHeight(){
        var oHeight = $(window).height();
        $('#question-modal .modal-content, #money-modal .modal-content').css('height',oHeight - 100);
    }

    window.onresize = function(){
        setModalHeight();
    }

}));