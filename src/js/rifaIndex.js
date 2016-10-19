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
    });


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

        $('ul[role=tablist]').find('li').eq(tVal)
            .addClass('active').siblings().removeClass('active');

        $('.rifa-item > div').eq(tVal).addClass('active').siblings().removeClass('active');

        var text = $('ul[role=tablist]').find('li').eq(tVal).attr('data-title');
        $('.rifa-title > span').text(text);
    }
}));