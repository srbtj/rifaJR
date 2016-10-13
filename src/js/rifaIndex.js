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

    /** 改变标题 ***/
    $('#rifa-wrap .rifa-list').on('click','li',function(){
        var title = $(this).attr('data-title');
        //console.info(title);
        $('#rifa-wrap .refa-banner-txt').html(title);
    })
}));