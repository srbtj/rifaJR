($(function(){
    /** 点击切换 **/
    changeTap($('.nav-left'),'a');
    changeTap($('.header-center-item'),'li');
    changeTap($('.language'),'a');
    changeTap($('.banner-nav-text'),'a');
    function changeTap(obj,opt){
        obj.on('click',opt,function(e){
            $(this).addClass('active').siblings().removeClass('active');
        })
    }

    /** 移动端 显示导航栏 **/
    $('#header .mobile-open').on('click',function(){
        $('.mobile-nav-open').show();
    });

    $('.mobile-nav-open').on('click','.closeImg',function(){
        $('.mobile-nav-open').hide();
    }).on('click','span',function(e){
        console.log(e.currentTarget);
        var target = e.currentTarget;
        var href = $(target).attr('data-href');
        //$('.mobile-nav-open').hide();
        window.location.href = href;
    });


}));

/*** 动态设置 html 字体大小 **/
(function (doc, win, undefined) {
    var docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in win? 'orientationchange' : 'resize',
        recalc = function () {
            var clientWidth = docEl.clientWidth;

            if(clientWidth > 750)  return;
            if (clientWidth === undefined) return;
            docEl.style.fontSize = 50 * (clientWidth / 750) + 'px';
        };
    if (doc.addEventListener === undefined) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false)
})(document, window);
