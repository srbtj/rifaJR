($(function(){
    /** 点击切换 **/
    changeTap($('.nav-left'),'a');
    changeTap($('.header-center-item'),'li');
    changeTap($('.language'),'a');
    changeTap($('.notice-list'),'li');
    function changeTap(obj,opt){
        obj.on('click',opt,function(e){
            $(this).addClass('active').siblings().removeClass('active');
        })
    };

    /** 增加返回底部 **/
    $('#footer').append('<div class="backTop">');
    $('#footer .backTop').on('click',function(){
        $('body,html').animate({scrollTop:0},500);
        return false;
    });
}));