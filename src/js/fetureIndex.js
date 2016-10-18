($(function(){
    /** 点击切换 **/
    changeTap($('.nav-left'),'a');
    changeTap($('.header-center-item'),'li');
    changeTap($('.language'),'a');
    changeTap($('.banner-nav-text'),'a');
    //changeTap($('#feture-warp .feture-nav'),'a');
    changeTap($('#feture-warp .feture-second-nav'),'a');

    changeTap($('.transfDemo-table .left-demo ul'),'li');
    function changeTap(obj,opt){
        obj.on('click',opt,function(e){
            $(this).addClass('active').siblings().removeClass('active');
        })
    }

    $('#feture-warp .feture-nav').find('a').each(function(i,item){
        var that = $(this);
        that.on('click',function(){
            var index = that.index();
            that.addClass('active').siblings().removeClass('active');
            $('#feture-warp .fetureBanner-table > div').eq(index).show()
                .siblings().hide();
        })
    });

}));
