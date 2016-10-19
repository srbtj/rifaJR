(
    /** 指向指定的tab **/
    $(function(){


        /** 跳转指定页面  切换到对应的 tab 模块**/
        function tabChange(){

            /** 获得
             *  hash value
             *  根据传入的参数指定相应的tab样式
             *
             *      tab : 切换 ul role=tablist 样式
             *
             *
             * **/
            var searchs = location.search.replace('?','');

            if(!searchs) return;

            var temp_arr = searchs.split('&');

            var temp_obj = {};

            for(var i= 0,len = temp_arr.length;i<len;i++){

                var temp = temp_arr[i];

                var arr = temp.split('=');

                temp_obj[arr[0]] = arr[1];
            }


            /** 设置 tab 样式 **/
            var val = temp_obj.tab || 0;

            $('ul[role=tablist]')
                .find('li')
                .eq(val)
                .addClass('active')
                .siblings().removeClass('active');


            $('div[role=tabpanel]')
                .eq(val).addClass('active')
                .siblings().removeClass('active');

            var text = $('ul[role=tablist]')
                .find('li')
                .eq(val).attr('data-title');

            if(!text) return;

            $('.common-title-info > span').text(text);
        }
        tabChange();


        /** 切换标题 **/
        function changeTitle(){
            $('ul[role=tablist]').on('click','li',function(){
                var me = $(this);
                var title = me.attr('data-title');
                $('.common-title-info > span').text(title);
            });
        };
        changeTitle();

        function changeTap(obj,opt){
            obj.on('click',opt,function(e){
                $(this).addClass('active').siblings().removeClass('active');
            })
        }
        /** 点击切换 **/
        changeTap($('.nav-left'),'a');
        changeTap($('.header-center-item'),'li');
        changeTap($('.language'),'a');
        changeTap($('.notice-list'),'li');
    })
)