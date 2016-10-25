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


    changeStyle();

    function changeStyle(){
        var searchs = location.search.replace('?','');

        if(!searchs) return;

        var temp_arr = searchs.split('&');

        var temp_obj = {};

        for(var i= 0,len = temp_arr.length;i<len;i++){

            var temp = temp_arr[i];

            var arr = temp.split('=');

            temp_obj[arr[0]] = arr[1];
        }

        var tVal = temp_obj.tab || 0;
        var bVal = temp_obj.bannerTab || 0;

        console.log(bVal)

        $('div[role=tablist]').find('a').eq(tVal)
            .addClass('active').siblings().removeClass('active');

        $('.p-panel').eq(tVal).addClass('active').siblings().removeClass('active');

        $('ul[role=tablist]').find('li').eq(bVal)
            .addClass('active').siblings().removeClass('active');

        $('.c-panel').eq(bVal).addClass('active').siblings().removeClass('active');
    }


    /** 增加返回底部 **/
    $('#footer').append('<div class="backTop">');
    $('#footer .backTop').on('click',function(){
        $('body,html').animate({scrollTop:0},500);
        return false;
    });

}));
