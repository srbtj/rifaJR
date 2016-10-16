($(function(){
    /** 点击切换 **/
    changeTap($('.nav-left'),'a');
    changeTap($('.header-center-item'),'li');
    changeTap($('.language'),'a');
    changeTap($('.banner-nav-text'),'a');
    changeTap($('#feture-warp .feture-nav'),'a');
    changeTap($('#feture-warp .feture-second-nav'),'a');
    function changeTap(obj,opt){
        obj.on('click',opt,function(e){
            $(this).addClass('active').siblings().removeClass('active');
        })
    }
}));
