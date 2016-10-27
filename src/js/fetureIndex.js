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

            if(i == 4){
                $('.fetureBanner-table').addClass('fetureBanner-bg');
            }else{
                $('.fetureBanner-table').removeClass('fetureBanner-bg');
            }
        })
    });

    /** 增加返回底部 **/
    $('#footer').append('<div class="backTop">');
    $('#footer .backTop').on('click',function(){
        $('body,html').animate({scrollTop:0},500);
        return false;
    });

    /*** 环球期货 表格数据**/
    var p_hqTab1 = '<tr>' +
                '<td>恒指<br/>(Hang Seng Index)</td><td>HSI</td><td>HKEX</td><td>港币</td><td rowspan="4">电子盘 09:15-12:00; 13:00-16:30<br/>(T+1)17:15-23:45</td><td>1点 = HKD 50</td><td>HKD50 x 指数</td><td>现月、下月及之后2个季月</td>' +
            '</tr>' +
            '<tr>' +
                '<td>小型恒指<br/>(Mini Hang Seng Index)</td><td>MHI</td><td>HKEX</td><td>港币</td><td>1点 = HKD 10</td><td>HKD10 x 指数</td><td>现月、下月及之后2个季月</td>' +
            '</tr>' +
            '<tr>' +
                '<td>国企H股指数<br/>(H-shares Index)</td><td>HHI</td><td>HKEX</td><td>港币</td><td>1点 = HKD 50</td><td>HKD50 x 指数</td><td>现月、下月及之后2个季月</td>' +
            '</tr>' +
            '<tr>' +
                '<td>小型国企H股指数<br/>(Mini H-shares Index)</td><td>MCH</td><td>HKEX</td><td>港币</td><td>1点 = HKD 10</td><td>HKD10 x 指数</td><td>现月、下月及之后2个季月</td>' +
            '</tr>' +
            '<tr>' +
                '<td>恒指波幅<br/>(HSI Volatility Index)</td><td>VHS</td><td>HKEX</td><td>港币</td><td>电子盘 09:30-12:00; 13:00-16:15</td><td>0.05点 = HKD 250</td><td>HKD5000 x 指数</td><td>最近3个月</td>' +
            '</tr>' +
            '<tr>' +
                '<td>中华交易服务中国120指数<br/>CES China 120 Index(CES 120)</td><td>CHH</td><td>HKEX</td><td>港币</td><td>电子盘 09:15-12:00; 13:00-16:15</td><td>0.5点 = HKD 25</td><td>HKD50 x 指数</td><td>现月、下月及之后2个季月</td>' +
            '</tr>' +
            '<tr>' +
                '<td>日经225<br/>(Nikkei 225)</td><td>NK</td><td>SGX</td><td>日元</td><td>电子盘 07:45-14:25; (T+1) 15:15-02:00</td><td>5点 = JPY 2,500</td><td>JPY500 x 指数</td><td>现月、下2个月及之后12个季月</td>' +
            '</tr>' +
            '<tr>' +
                '<td>小型日经225<br/>(Mini Nikkei 225)</td><td>NS</td><td>SGX</td><td>日元</td><td>电子盘 07:45-15:25; (T+1) 16:15-02:00</td><td>1点 = JPY 100</td><td>JPY100 x 指数</td><td>最近4个季月</td>' +
            '</tr>' +
            '<tr>' +
                '<td>新华富时中国A50<br/>(FTSE/Xinhua China A50)</td><td>CN</td><td>SGX</td><td>美元</td><td>电子盘 09:00-15:55; (T+1) 16:40-02:00</td><td>2.5点 = USD 2.5</td><td>USD1 x 指数</td><td>现月、下月及之后季月以1年为限</td>' +
            '</tr>'+
            '<tr>' +
                '<td>印度50指数<br/>(CNX Nifty Index)</td><td>SIN</td><td>SGX</td><td>美元</td><td>电子盘 09:00-18:10; (T+1) 19:15-02:00</td><td>0.5点 = USD 1</td><td>USD2 x 指数</td><td>最近2个月及之后4个季月j9</td>' +
            '</tr>'+
                '<td>新加坡指数<br/>(MSCI Singapore Stock Index)</td><td>SSG</td><td>SGX</td><td>新加坡元</td><td>电子盘 08:30-17:10; (T+1) 18:15-02:00</td><td>0.1点 = SGD 20</td><td>SGD200 x 指数</td><td>最近2个月及之后4个季月</td>' +
            '</tr>'+
                '<td>摩根台股指数<br/>(MSCI Taiwan Index)</td><td>STW</td><td>SGX</td><td>美元</td><td>电子盘 08:45-13:45; (T+1) 14:35-02:00</td><td>0.1点 = USD 10</td><td>USD 100 x 指数</td><td>最近2个月及之后12个季月</td>' +
            '</tr>'+
                '<td>小型道指<br/>(Mini Dow Jones)</td><td>YM</td><td>CME-CBOT</td><td>美元</td><td rowspan="3">电子盘(Globex) 06:00-04:15 & 04:30-05:00</td><td>0.1点 = USD 10</td><td>USD 100 x 指数</td><td>最近2个月及之后12个季月</td>' +
            '</tr>'+
            '<tr>' +
                '<td>小型标普500<br/>(Mini S&P500)</td><td>ES</td><td>CME</td><td>美元</td><td>0.25点 = USD 12.5</td><td>USD50 x 指数</td><td>最近5个季月</td>' +
            '</tr>' +
            '<tr>' +
                '<td>小型纳斯达克100<br/>(Mini Nasdaq 100)</td><td>NQ</td><td>CME</td><td>美元</td><td>0.25点 = USD 5</td><td>USD20 x 指数</td><td>最近5个季月</td>' +
            '</tr>' +
            '<tr>' +
                '<td>日经225平均股价指数<br/>(CME Nikkei 225 Yen)</td><td>NIY</td><td>CME</td><td>日元</td><td>电子盘(Globex) 06:00-05:15</td><td>5点 = JPY 2,500</td><td>JPY500 x 指数</td><td>最近3个月及之后12个季月</td>' +
            '</tr>'+
            '<tr>' +
                '<td>法国CAC<br/>(CAC)</td><td>FCE</td><td>NYSE-Liffe</td><td>欧元</td><td>电子盘 14:00-04:00</td><td>0.5点 = EUR 5</td><td>EUR10 x 指数</td><td>最近3个连续月及之后3个季月及之后8个6月,12月</td>' +
            '</tr>'+
            '<tr>' +
                '<td>伦敦富时100<br/>(FTSE 100)</td><td>FFI</td><td>NYSE-Liffe</td><td>英镑</td><td>电子盘 08:00-04:00</td><td>0.5点 = GBP 5</td><td>GBP10 x 指数</td><td>最近4个季月</td>' +
            '</tr>'+
            '<tr>' +
                '<td>德国DAX<br/>(DAX)</td><td>FDAX</td><td>EUREX</td><td>欧元</td><td>电子盘 13:50-04:00</td><td>0.5点 = EUR 12.5</td><td>EUR25 x 指数</td><td>最近3个季月</td>' +
            '</tr>'+
            '<tr>' +
                '<td>道琼欧盟50指数<br/>(EURO STOXX 50)</td><td>FESX</td><td>EUREX</td><td>欧元</td><td>电子盘 13:50-04:00</td><td>1 点 = EUR 10</td><td>EUR10 X 指数</td><td>最近3个季月</td>' +
            '</tr>';

    //var p_hqTab2 = '<tr><td>CME</td><td>芝加哥商业交易所</td><td>1月</td><td>F</td></tr>' +
    //    '<tr><td>CME-CBOT</td><td>芝加哥商业交易所辖下芝加哥期货交易所</td><td>2月</td><td>G</td></tr>' +
    //    '<tr><td>CME-NYMEX</td><td>芝加哥商业交易所辖下纽约商业交易所</td><td>3月</td><td>H</td></tr>' +
    //    '<tr><td>EUREX</td><td>欧洲期货交易所</td><td>4月</td><td>J</td></tr>' +
    //    '<tr><td>HKEX</td><td>香港交易所</td><td>5月</td><td>K</td></tr>' +
    //    '<tr><td>ICE-IPE</td><td>洲际交易所辖下国际石油交易所</td><td>6月</td><td>M</td></tr>' +
    //    '<tr><td>ICE-NYBOT</td><td>洲际交易所辖下纽约期货交易所</td><td>7月</td><td>N</td></tr>' +
    //    '<tr><td>LME</td><td>伦敦金属交易所</td><td>8月</td><td>Q</td></tr>' +
    //    '<tr><td>NYSE-Liffe</td><td>纽约泛欧交易所辖下欧洲衍生品市场</td><td>9月</td><td>U</td></tr>' +
    //    '<tr><td>ICE-US</td><td>洲际交易所</td><td>10月</td><td>V</td></tr>' +
    //    '<tr><td>SGX</td><td>新加坡交易所</td><td>11月</td><td>X</td></tr>' +
    //    '<tr><td>TOCOM</td><td>东京工业品交易所</td><td>12月</td><td>Z</td></tr>' +
    //    '<tr><td>MYX</td><td>马来西亚衍生品交易所</td><td></td><td></td></tr>';
    var p_lcbTab1 = '<tr><td>玉米<br/>(Corn)</td><td>ZC</td><td>CME-CBOT</td><td>美元</td><td>电子盘 08:00 - 20:45 & 21:30 - 02:20</td><td>0.25 美分 = USD 12.5</td><td>5,000蒲式耳</td><td>3月、5月、7月、9月、12月</td></tr>'+
        '<tr><td>小型玉米<br/>(Mini Corn)</td><td>XC</td><td>CME-CBOT</td><td>美元</td><td>电子盘 08:00 - 20:45 & 21:30 - 02:45</td><td>0.125 美分 = USD 1.25</td><td>1,000蒲式耳</td><td>3月、5月、7月、9月、12月</td></tr>'+
        '<tr><td>小麦<br/>(Wheat)</td><td>ZW</td><td>CME-CBOT</td><td>美元</td><td>电子盘 08:00 - 20:45 & 21:30 - 02:20</td><td>0.25 美分 = USD 12.5</td><td>5,000蒲式耳</td><td>3月、5月、7月、9月、12月</td></tr>'+
        '<tr><td>小型小麦<br/>(Mini Wheat)</td><td>XW</td><td>CME-CBOT</td><td>美元</td><td>电子盘 08:00 - 20:45 & 21:30 - 02:45</td><td>0.125 美分 = USD 1.25</td><td>1,000蒲式耳</td><td>3月、5月、7月、9月、12月</td></tr>'+
        '<tr><td>大豆<br/>(Soybeans)</td><td>ZS</td><td>CME-CBOT</td><td>美元</td><td>电子盘 08:00 - 20:45 & 21:30 - 02:20</td><td>0.25 美分 = USD 12.5</td><td>5,000蒲式耳</td><td>1月、3月、5月、7月、8月、9月、11月</td></tr>'+
        '<tr><td>小型大豆<br/>(Mini Soybeans)</td><td>XK</td><td>CME-CBOT</td><td>美元</td><td>电子盘 08:00 - 21:45 & 21:30 - 02:45</td><td>0.125 美分 = USD 1.25</td><td>1,000蒲式耳</td><td>1月、3月、5月、7月、8月、9月、11月</td></tr>'+
        '<tr><td>豆油<br/>(Soybean Oil)</td><td>ZL</td><td>CME-CBOT</td><td>美元</td><td rowspan="4">电子盘 08:00 - 20:45 & 21:30 - 02:20</td><td>0.01 美分 = USD 6</td><td>60,000磅</td><td>1月、3月、5月、7月、8月、9月、10月、12月</td></tr>'+
        '<tr><td>豆粉<br/>(Soybean Meal)</td><td>ZM</td><td>CME-CBOT</td><td>美元</td><td>0.1 美元 = USD 10</td><td>100短吨</td><td>1月、3月、5月、7月、8月、9月、10月、12月</td></tr>'+
        '<tr><td>燕麦<br/>(Oats)</td><td>ZO</td><td>CME-CBOT</td><td>美元</td><td>0.25 美分 = USD 12.5</td><td>5,000蒲式耳</td><td>3月、5月、7月、9月、12月</td></tr>'+
        '<tr><td>糙米<br/>(Rough Rice)</td><td>ZR</td><td>CME-CBOT</td><td>美元</td><td>0.005美元 = USD 10</td><td>2,000英担</td><td>1月、3月、5月、7月、 9月、11月</td></tr>'+
        '<tr><td>可可<br/>(Cocoa)</td><td>CC</td><td>ICE-NYBOT</td><td>美元</td><td>电子盘 16:45-01:30</td><td>1 美元 = USD 10</td><td>10公吨</td><td>3月、5月、7月、 9月、 12月</td></tr>'+
        '<tr><td>咖啡<br/>(Coffee)</td><td>KC</td><td>ICE-NYBOT</td><td>美元</td><td>电子盘 16:15-01:30</td><td>0.05 美分 =  USD 18.75</td><td>37,500磅</td><td>3月、5月、7月、9月、 12月</td></tr>'+
        '<tr><td>橙汁<br/>(Orange Juice-FCOJ)</td><td>OJ</td><td>ICE-NYBOT</td><td>美元</td><td>电子盘 20:00-02:00</td><td>0.05 美分 = USD 7.5</td><td>15,000磅</td><td>1月、3月、5月、7月、9月、11月</td></tr>'+
        '<tr><td>棉花<br/>(Cotton)</td><td>CT</td><td>ICE-NYBOT</td><td>美元</td><td>电子盘 09:00-02:20</td><td>0.01美分 = USD 5</td><td>50,000磅</td><td>3月、5月、7月、10月、12月</td></tr>'+
        '<tr><td>原糖No.11<br/>(Sugar No.11)</td><td>SB</td><td>ICE-NYBOT</td><td>美元</td><td>电子盘 15:30-01:00</td><td>0.01 美分 = USD 11.2</td><td>112,000磅</td><td>3月、5月、7月、10月</td></tr>'+
        '<tr><td>瘦猪肉<br/>(Lean Hog)</td><td>HE</td><td>CME</td><td>美元</td><td rowspan="3">电子盘 22:00-03:05</td><td>0.025 美分 = USD 10</td><td>40,000磅</td><td>2月、4月、6月、8月、10月、12月</td></tr>'+
        '<tr><td>肉牛<br/>(Feeder Cattle)</td><td>GF</td><td>CME</td><td>美元</td><td>0.025美分= USD 12.5</td><td>50,000磅</td><td>1月、3月、4月、5月、8月、 9月、10月、11月</td></tr>'+
        '<tr><td>活牛<br/>(Live Cattle)</td><td>LE</td><td>CME</td><td>美元</td><td>0.025美分= USD 10</td><td>40,000磅</td><td>2月、4月、6月、8月、10月、 12月</td></tr>'+
        '<tr><td>棕榈油<br/>(Crude Palm Oil)</td><td>KPO</td><td>MYX</td><td>马币</td><td>电子盘 10:30-12:30; 15:00-18:00</td><td>1点 = MYR 25</td><td>25公吨</td><td>现月、下5个月及之后24个隔月</td></tr>'+
        '<tr><td>东京工交所橡胶<br/>(Rubber)</td><td>JRU</td><td>TOCOM</td><td>日元</td><td>电子盘 08:00-14:15; 15:30-18:00</td><td>0.1日元= JPY 500</td><td>5,000公斤</td><td>连续6个月</td></tr>';

    var p_whTab1 = '<tr><td>欧元<br/>(Euro Currencies)</td><td>EUR</td><td>CME</td><td>美元</td><td>电子盘 06:00-05:00 <br/>公开叫价 21:20 - 04:00	</td><td>0.0001 = USD 12.5</td><td>EUR 125,000</td><td>连续20个季月</td></tr>'+
        '<tr><td>小型欧元<br/>(Mini Euro Currencies))</td><td>E7</td><td>CME</td><td>美元</td><td>电子盘 06:00-05:00	</td><td>0.0001 = USD 6.25	</td><td>EUR 62,500	</td><td>连续2个季月 </td></tr>'+
        '<tr><td>日元<br/>(Japanese Yen)</td><td>JPY</td><td>CME</td><td>美元</td><td>电子盘 06:00-05:00 <br/>公开叫价 20:20 - 03:00	</td><td>0.000001 = USD 12.5	</td><td>JPY 12.5M	</td><td>连续20个季月</td></tr>'+
        '<tr><td>小型日元<br/>(Mini Japanese Yen)</td><td>J7</td><td>CME</td><td>美元</td><td>电子盘 06:00-05:00	</td><td>0.0001 = USD 6.25</td><td>JPY 6.25M</td><td>连续2个季月</td></tr>'+
        '<tr><td>澳元 <br/>(Australian Dollar)</td><td>AUD</td><td>CME</td><td>美元</td><td rowspan="5">电子盘 06:00-05:00 <br/>公开叫价 20:20 - 03:00	</td><td>0.0001 = USD 10</td><td>AUD 100,000</td><td>连续20个季月</td></tr>'+
        '<tr><td>英镑<br/>(British Pound)</td><td>GBP</td><td>CME</td><td>美元</td><td>0.0001 = USD 6.25	</td><td>GBP 62,500	</td><td>连续20个季月</td></tr>'+
        '<tr><td>加元<br/>(Canadian Dollar)</td><td>CAD</td><td>CME</td><td>美元</td><td>0.0001 = USD 10	</td><td>CAD 100,000	</td><td>连续20个季月</td></tr>'+
        '<tr><td>纽元<br/>(New Zealand Dollar)</td><td>NZD</td><td>CME</td><td>美元</td><td>0.0001 = USD 10</td><td>NZD 100,000	</td><td>连续6个季月</td></tr>'+
        '<tr><td>瑞士法郎<br/>(Swiss Franc)</td><td>CHF</td><td>CME</td><td>美元</td><td>0.0001 = USD 12.5</td><td>CHF 125,000	</td><td>连续20个季月 </td></tr>'+
        '<tr><td>美元/人民币<br/>(Chinese Renminbi)</td><td>CUS</td><td>HKEX</td><td>人民币</td><td>电子盘 09:00-16:15<br/>(T+1)17:00-23:00	</td><td>0.0001 = RMB 10</td><td>USD 100,000	</td><td>现月、下月3个月及下3个季月 </td></tr>'+
        '<tr><td>人民币<br/>(Chinese Renminbi)</td><td>RMB</td><td>CME</td><td>美元</td><td>电子盘 06:00-05:00	</td><td>0.00001 = USD 10</td><td>RMB 1,000,000	</td><td>连续13个月及之后2个季月 </td></tr>'+
        '<tr><td>美元指数<br/>(U.S. Dollar Index)</td><td>DX</td><td>ICE-NYBO</td><td>美元</td><td>电子盘 08:00-05:00 <br/>星期一 06:00 开市</td><td>0.005 = USD 5	</td><td>USD1,000 x 指数	</td><td>最近4个季月 </td></tr>';

    var p_powTab1 = '<tr><td>纽约原油<br/>(Light Crude Oil)</td><td>CL</td><td>CME-NYMEX</td><td>美元</td><td>电子盘 06:00-05:00 <br/>公开叫价 21:00 - 02:30</td><td>0.01 美元 = USD 10	</td><td>1,000桶	</td><td>最近6年之连续月及之后6个6月,12月季月</td></tr>'+
            '<tr><td>小型纽约原油 <br/>(Mini Light Crude Oil))</td><td>QM</td><td>CME-NYMEX	</td><td>美元</td><td>电子盘 06:00-05:00 <br/>公开叫价 21:00 - 02:30</td><td>0.025 美元 = USD 12.5	</td><td>500桶</td><td>最近6年之连续月 </td></tr>'+
            '<tr><td>布伦特原油<br/>(Brent Crude Oil)</td><td>COIL</td><td>ICE-IPE</td><td>美元</td><td>电子盘 08:00-06:00</td><td>0.01 美元 = USD 10</td><td>1,000桶	</td><td>72个连续月及之后6个6月及12月季月 </td></tr>'+
            '<tr><td>取暖油 <br/>(Heating Oil)</td><td>HO</td><td>CME-NYMEX</td><td>美元</td><td>电子盘 06:00-05:00 <br/>公开叫价 21:00 - 02:30</td><td>0.0001 美元 = USD 4.2</td><td>42,000加仑	</td><td>49个连续月</td></tr>'+
            '<tr><td>天然气 <br/>(Natural Gas)</td><td>NG</td><td>CME-NYMEX</td><td>美元</td><td>电子盘 06:00-05:00 <br/>公开叫价 21:00 - 02:30</td><td>0.001 美元 = USD 10</td><td>10,000 mmBtu	</td><td>最近9年之连续月 </td></tr>'+
            '<tr><td>小型天然气 <br/>(Mini Natural Gas)</td><td>QG</td><td>CME-NYMEX</td><td>美元</td><td>电子盘 06:00-05:00</td><td>0.005 美元 = USD 12.5</td><td>2,500 mmBtu	</td><td>最近6年之连续月 </td></tr>'+
            '<tr><td>汽油<br/>(RBOB Gasoline)</td><td>RB</td><td>CME-NYMEX</td><td>美元</td><td>电子盘 06:00-05:00 <br/>公开叫价 21:00 - 02:30</td><td>0.0001 美元 = USD 4.2</td><td>42,000加仑	</td><td>36个连续月 </td></tr>';

    var p_gjsTab1 = '<tr><td>Comex黄金 <br/>(Comex Gold)</td><td>GC</td><td>CME-NYMEX (COMEX)</td><td>美元</td><td>电子盘 06:00-05:00 <br/>公开叫价 21:00 - 02:30</td><td>0.1 美元 = USD 10</td><td>100盎司	</td><td>现月、下2个月及23个月内之双数月份及60个月内之6月,12月</td></tr>'+
        '<tr><td>Comex白银 <br/>(Comex Silver)</td><td>SI</td><td>CME-NYMEX (COMEX)</td><td>美元</td><td>电子盘 06:00-05:00 <br/>公开叫价 21:00 - 02:30</td><td>0.005 美元 = USD 25</td><td>5,000盎司</td><td>现月、下2个月及23个月内之1月,3月,5月,7月,9月,12月及60个月内之7月,12月</td></tr>'+
        '<tr><td>纽交所小黄金<br/>(Mini-sized Gold)</td><td>YG</td><td>ICE-US	</td><td>美元</td><td>电子盘 08:00-06:00</td><td>0.1 美元 = USD 3.32</td><td>33.2盎司</td><td>现月、下2个月及23个月内之双数月份及60个月内之6月,12月</td></tr>'+
        '<tr><td>纽交所小白银 <br/>(Mini-sized Silver)</td><td>YI	</td><td>ICE-US</td><td>美元</td><td>电子盘 06:00-05:00 <br/>公开叫价 21:00 - 02:30</td><td>0.001 美元 = USD 1</td><td>1,000盎司</td><td>现月、下2个月及23个月内之1月,3月,5月,7月,9月,12月及60个月内之7月,12月 </td></tr>'+
        '<tr><td>钯金 <br/>(Palladium)</td><td>PA</td><td>CME-NYMEX</td><td>美元</td><td>电子盘 06:00-05:00 <br/>公开叫价 21:00 - 02:30</td><td>0.05 美元 = USD 5</td><td>100盎司	</td><td>现月、下2个月及15个月内之季月 </td></tr>'+
        '<tr><td>铂金 <br/>(Platinum)</td><td>PL</td><td>CME-NYMEX</td><td>美元</td><td>电子盘 06:00-05:00 <br/>公开叫价 21:00 - 02:30</td><td>0.1 美元 = USD 5</td><td>50盎司</td><td>现月、下2个月及15个月内之1月,4月,7月,10月</td></tr>'+
        '<tr><td>东京工交所黄金 <br/>(TOCOM Gold)</td><td>JAU</td><td>TOCOM</td><td>日元</td><td>T时段:8:00 a.m. - 2:15 p.m. <br/>T+1时段:3:30 p.m. - 3:00 a.m.</td><td>1日元 = JPY 1000	</td><td>1000克	</td><td>一年之内的所有偶数月份</td></tr>';

    var p_baseTab1 =
        '<tr><td>Comex铜 <br/>(Comex Copper)</td><td>HG</td><td>CME-NYMEX (COMEX)</td><td>美元</td><td>电子盘 06:00-05:00 <br/>公开叫价 20:10 - 01:00</td><td>0.05 美分 = USD 12.5</td><td>25,000磅</td><td>现月及23个连续月</td></tr>'+
        '<tr><td>LME铜 <br/>(LME Copper)</td><td>LCA</td><td>LME</td><td>美元</td><td rowspan="6">电子盘 08:00-02:00 <br/>公开叫价 18:40 - 00:00</td><td>0.25 美元 = USD 6.25	</td><td>25吨</td><td>3个月远期</td></tr>'+
        '<tr><td>LME铝 <br/>(LME Aluminium)</td><td>LAH</td><td>LME</td><td>美元</td><td>0.25 美元 = USD 6.25	</td><td>25吨</td><td>3个月远期</td></tr>'+
        '<tr><td>LME锌 <br/>(LME Zinc)</td><td>LZS</td><td>LME</td><td>美元</td><td>0.25 美元 = USD 6.25	</td><td>25吨</td><td>3个月远期</td></tr>'+
        '<tr><td>LME铅 <br/>(LME Lead)</td><td>LPB</td><td>LME</td><td>美元</td><td>0.25 美元 = USD 6.25	</td><td>25吨	</td><td>3个月远期</td></tr>'+
        '<tr><td>LME镍 <br/>(LME Nickel)</td><td>LNI</td><td>LME</td><td>美元</td><td>1 美元 = USD 6	</td><td>6吨</td><td>3个月远期</td></tr>'+
        '<tr><td>LME锡 <br/>(LME Tin)</td><td>LSN</td><td>LME</td><td>美元</td><td>1 美元 = USD 5	</td><td>5吨</td><td>3个月远期 </td></tr>';

    var p_llTab1 =
        '<tr><td>三十年美国国库券<br/>(30 Yr U.S. Treasury Bonds)</td><td>ZB</td><td>CME-CBOT</td><td>美元</td><td rowspan="6">电子盘 06:00-05:00 <br/>公开叫价 20:20 - 03:00</td><td>1/32 = USD 31.25</td><td>USD 100,000</td><td>连续3个季月</td></tr>'+
        '<tr><td>十年美国国库债券<br/>(10 Yr U.S. Treasury Notes)</td><td>ZN</td><td>CME-CBOT</td><td>美元</td><td>0.5/32 = USD 15.625		</td><td>USD 100,000</td><td>连续5个季月</td></tr>'+
        '<tr><td>五年美国国库债券<br/>(5 Yr U.S. Treasury Notes)</td><td>ZF</td><td>CME-CBOT</td><td>美元</td><td>0.25/32 = USD 7.8125		</td><td>USD 100,000</td><td>连续5个季月</td></tr>'+
        '<tr><td>两年美国国库债券<br/>(2 Yr U.S. Treasury Notes)</td><td>ZT</td><td>CME-CBOT</td><td>美元</td><td>0.25/32 = USD 15.625</td><td>USD 200,000</td><td>连续5个季月</td></tr>';


    var p_hqTab2 = p_lcbTab2 = p_whTab2=
            '<tr><td>CME</td><td>芝加哥商业交易所	</td><td>1月</td><td>F</td></tr>'+
            '<tr><td>CME-CBOT</td><td>芝加哥商业交易所辖下芝加哥期货交易所</td><td>2月</td><td>G</td></tr>'+
            '<tr><td>CME-NYMEX</td><td>芝加哥商业交易所辖下纽约商业交易所</td><td>3月</td><td>H</td></tr>'+
            '<tr><td>EUREX</td><td>欧洲期货交易所</td><td>4月</td><td>J</td></tr>'+
            '<tr><td>HKEX</td><td>香港交易所</td><td>5月</td><td>K</td></tr>'+
            '<tr><td>ICE-IPE</td><td>洲际交易所辖下国际石油交易所</td><td>6月</td><td>M</td></tr>'+
            '<tr><td>ICE-NYBOT</td><td>洲际交易所辖下纽约期货交易所	</td><td>7月</td><td>N</td></tr>'+
            '<tr><td>LME</td><td>伦敦金属交易所</td><td>8月</td><td>Q</td></tr>'+
            '<tr><td>NYSE-Liffe</td><td>纽约泛欧交易所辖下欧洲衍生品市场	</td><td>9月</td><td>U</td></tr>'+
            '<tr><td>ICE-US</td><td>洲际交易所</td><td>10月</td><td>V</td></tr>'+
            '<tr><td>SGX</td><td>新加坡交易所</td><td>11月</td><td>X</td></tr>'+
            '<tr><td>TOCOM</td><td>东京工业品交易所</td><td>12月</td><td>Z</td></tr>'+
            '<tr><td>MYX</td><td>马来西亚衍生品交易所</td><td></td><td></td></tr>';



    /** 保证金 **/
    var d_hqTab =
        '<tr><td>恒指<br/>(Hang Seng Index)</td><td>HSI</td><td>HKEX</td><td>港币</td><td>HKD50 x 指数</td><td>HKD 74,000	</td><td>HKD 59,200</td></tr>' +
        '<tr><td>小型恒指<br/>(Mini Hang Seng Index)</td><td>MHI</td><td>HKEX</td><td>港币</td><td>HKD10 x 指数</td><td>HKD 14,800</td><td>HKD 11,840</td></tr>' +
        '<tr><td>国企H股指数<br/>(H-shares Index)</td><td>HHI</td><td>HKEX</td><td>港币</td><td>HKD50 x 指数</td><td>HKD 30,650</td><td>HKD 24,550</td></tr>' +
        '<tr><td>小型国企H股指数<br/>(Mini H-shares Index)</td><td>MCH</td><td>HKEX</td><td>港币</td><td>HKD10 x 指数</td><td>HKD 6,130</td><td>HKD 4,910</td></tr>' +
        '<tr><td>恒指波幅<br/>(HSI Volatility Index)</td><td>VHS</td><td>HKEX</td><td>港币</td><td>HKD5000 x 指数</td><td>HKD 28,960</td><td>HKD 23,170</td></tr>' +
        '<tr><td>中华交易服务中国120指<br/>CES China 120 Index(CES 120)</td><td>CHH</td><td>HKEX</td><td>港币</td><td>HKD50 x 指数</td><td>HKD 15,960</td><td>HKD 12,770</td></tr>' +
        '<tr><td>日经225<br/>(Nikkei 225)</td><td>NK</td><td>SGX</td><td>日元</td><td>JPY500 x 指数</td><td>JPY 396,000</td><td>JPY 360,000</td></tr>' +
        '<tr><td>小型日经225<br/>(Mini Nikkei 225)</td><td>NS</td><td>SGX</td><td>日元</td><td>JPY100 x 指数</td><td>JPY 79,200</td><td>JPY 72,000</td></tr>' +
        '<tr><td>新华富时中国A50<br/>(FTSE/Xinhua China A50)</td><td>CN</td><td>SGX</td><td>美元</td><td>USD1 x 指数</td><td>USD 605</td><td>USD 550</td></tr>' +
        '<tr><td>印度50指数<br/>(CNX Nifty Index)</td><td>SIN</td><td>SGX</td><td>美元</td><td>USD2 x 指数</td><td>USD 660</td><td>USD 600</td></tr>' +
        '<tr><td>新加坡指数<br/>(MSCI Singapore Stock Index)</td><td>SSG</td><td>SGX</td><td>新加坡元</td><td>SGD200 x 指数</td><td>SGD 1,320</td><td>SGD 1,200</td></tr>' +
        '<tr><td>摩根台股指数<br/>(MSCI Taiwan Index)</td><td>STW</td><td>SGX</td><td>美元</td><td>USD x 指数</td><td>USD 1,540</td><td>USD 1,400</td></tr>' +
        '<tr><td>小型道指<br/>(Mini Dow Jones)</td><td>YM</td><td>CME-CBOT</td><td>美元</td><td>USD5 x 指数</td><td>USD 3,905</td><td>USD 3,550</td></tr>' +
        '<tr><td>小型标普500<br/>(Mini S&P500)</td><td>ES</td><td>CME</td><td>美元</td><td>USD50 x 指数</td><td>USD 4,950</td><td>USD 4,500</td></tr>' +
        '<tr><td>小型纳斯达克100<br/>(Mini Nasdaq 100)</td><td>NQ</td><td>CME</td><td>美元</td><td>USD20 x 指数</td><td>USD 3,960</td><td>USD 3,600</td></tr>' +
        '<tr><td>日经225平均股价指数<br/>(CME Nikkei 225 Yen)</td><td>NIY</td><td>CME</td><td>日元	</td><td>JPY500 x 指数</td><td>JPY 522,500</td><td>JPY 475,000</td></tr>' +
        '<tr><td>法国CAC<br/>(CAC)</td><td>FCE</td><td>NYSE-Liffe</td><td>欧元</td><td>EUR10 x 指数</td><td>EUR 3,630</td><td>EUR 3,630</td></tr>' +
        '<tr><td>伦敦富时100<br/>(FTSE 100)</td><td>FFI</td><td>NYSE-Liffe</td><td>英镑</td><td>GBP10 x 指数</td><td>GBP 4,508</td><td>GBP 4,098</td></tr>' +
        '<tr><td>德国DAX<br/>(DAX)</td><td>FDAX</td><td>EUREX</td><td>欧元</td><td>EUR25 x 指数</td><td>EUR 19,495</td><td>EUR 19,495</td></tr>' +
        '<tr><td>道琼欧盟50指数<br/>(EURO STOXX 50)</td><td>FESX</td><td>EUREX</td><td>欧元</td><td>EUR10 x 指数</td><td>EUR 2,300</td><td>EUR 2,300</td></tr>';


    var d_lcpTab =
        '<tr><td>玉米<br/>(Corn)</td><td>ZC</td><td>CME-CBOT</td><td>美元</td><td>5,000蒲式耳</td><td>USD 990</td><td>USD 900</td></tr>' +
        '<tr><td>小型玉米<br/>(Mini Corn)<br/></td><td>XC</td><td>CME-CBOT</td><td>美元</td><td>1,000蒲式耳</td><td>USD 198</td><td>USD 180</td></tr>' +
        '<tr><td>小麦<br/>(Wheat)</td><td>ZW</td><td>CME-CBOT</td><td>美元</td><td>5,000蒲式耳</td><td>USD 1,100</td><td>USD 1,000</td></tr>' +
        '<tr><td>小型小麦<br/>(Mini Wheat)</td><td>XW</td><td>CME-CBOT</td><td>美元</td><td>1,000蒲式耳</td><td>USD 220</td><td>USD 200</td></tr>' +
        '<tr><td>大豆<br/>(Soybeans)</td><td>ZS</td><td>CME-CBOT</td><td>美元</td><td>5,000蒲式耳</td><td>USD 2,640</td><td>USD 2,400</td></tr>' +
        '<tr><td>小型大豆<br/>(Mini Soybeans)</td><td>XK</td><td>CME-CBOT</td><td>美元</td><td>1,000蒲式耳</td><td>USD 528</td><td>USD 480</td></tr>' +
        '<tr><td>豆油<br/>(Soybean Oil)</td><td>ZL</td><td>CME-CBOT</td><td>美元</td><td>60,000磅</td><td>USD 715</td><td>USD 650</td></tr>' +
        '<tr><td>豆粉<br/>(Soybean Meal)</td><td>ZM</td><td>CME-CBOT</td><td>美元</td><td>100短吨</td><td>USD 1,980</td><td>USD 1,800</td></tr>' +
        '<tr><td>燕麦<br/>(Oats)</td><td>ZO</td><td>CME-CBOT</td><td>美元</td><td>5,000蒲式耳</td><td>USD 660</td><td>USD 600</td></tr>' +
        '<tr><td>糙米<br/>(Rough Rice)</td><td>ZR</td><td>ICE-NYBOT</td><td>美元</td><td>2,000英担</td><td>USD 1,045</td><td>USD 950</td></tr>' +
        '<tr><td>可可<br/>(Cocoa)</td><td>CC</td><td>ICE-NYBOT</td><td>美元</td><td>10公吨</td><td>USD 1,430</td><td>USD 1,300</td></tr>' +
        '<tr><td>咖啡<br/>(Coffee)</td><td>KC</td><td>ICE-NYBOT</td><td>美元</td><td>37,500磅</td><td>USD 6,050</td><td>USD 5,500</td></tr>' +
        '<tr><td>橙汁<br/>(Orange Juice-FCOJ)</td><td>OJ</td><td>ICE-NYBOT</td><td>美元</td><td>15,000磅</td><td>USD 1,320</td><td>USD 1,200</td></tr>' +
        '<tr><td>棉花<br/>(Cotton)</td><td>CT</td><td>ICE-NYBOT</td><td>美元</td><td>50,000磅</td><td>USD 1,320</td><td>USD 1,200</td></tr>' +
        '<tr><td>原糖No.11<br/>(Sugar No.11)</td><td>SB</td><td>ICE-NYBOT</td><td>美元</td><td>112,000磅</td><td>USD 1,848</td><td>USD 1,680</td></tr>' +
        '<tr><td>瘦猪肉<br/>(Lean Hog)</td><td>HE</td><td>CME</td><td>美元</td><td>40,000磅</td><td>USD 1,320</td><td>USD 1,200</td></tr>' +
        '<tr><td>肉牛<br/>(Feeder Cattle)</td><td>GF</td><td>CME</td><td>美元</td><td>50,000磅</td><td>USD 3,713</td><td>USD 3,375</td></tr>' +
        '<tr><td>活牛<br/>(Live Cattle)</td><td>LE</td><td>CME</td><td>美元</td><td>40,000磅</td><td>USD 1,980</td><td>USD 1,800</td></tr>' +
        '<tr><td>棕榈油<br/>(Crude Palm Oil)</td><td>KPO</td><td>MYX</td><td>马币</td><td>25 公吨</td><td>MYR 6,000</td><td>/</td></tr>' +
        '<tr><td>东京工交所橡胶<br/>(Rubber)</td><td>JRU</td><td>TOCOM</td><td>日元</td><td>5,000公斤</td><td>JPY 45,000</td><td>/</td></tr>';

    var d_whTab =
        '<tr><td>欧元<br/>(Euro Currencies)</td><td>EUR</td><td>CME</td><td>美元</td><td>EUR 125,000</td><td>USD 3,685</td><td>USD 3,350</td></tr>' +
        '<tr><td>小型欧元<br/>(Mini Euro Currencies)</td><td>E7</td><td>CME</td><td>美元</td><td>EUR 62,500</td><td>USD 1,843</td><td>USD 1,675</td></tr>' +
        '<tr><td>日元<br/>(Japanese Yen)</td><td>JPY</td><td>CME</td><td>美元</td><td>JPY 12.5M</td><td>USD 4,950</td><td>USD 4,500</td></tr>' +
        '<tr><td>小型日元<br/>(Mini Japanese Yen)</td><td>J7</td><td>CME</td><td>美元</td><td>JPY 6.25M</td><td>USD 2,475</td><td>USD 2,500</td></tr>' +
        '<tr><td>澳元<br/>(Australian Dollar)</td><td>AUD</td><td>CME</td><td>美元</td><td>AUD 100,000</td><td>USD 1,980</td><td>USD 1,800</td></tr>' +
        '<tr><td>英镑<br/>(British Pound)</td><td>GBP</td><td>CME</td><td>美元</td><td>GBP 62,500</td><td>USD 3,960</td><td>USD 3,600</td></tr>' +
        '<tr><td>加元<br/>(Canadian Dollar)</td><td>CAD</td><td>CME</td><td>美元</td><td>CAD 100,000</td><td>USD 1,705</td><td>USD 1,550</td></tr>' +
        '<tr><td>纽元<br/>(New Zealand Dollar)</td><td>NZD</td><td>CME</td><td>美元</td><td>NZD 100,000</td><td>USD 2,090</td><td>USD 1,900</td></tr>' +
        '<tr><td>瑞士法郎<br/>(Swiss Franc)</td><td>CHF</td><td>CME</td><td>美元</td><td>CHF 125,000</td><td>USD 3,960</td><td>USD 3,600</td></tr>' +
        '<tr><td>美元/人民币<br/>(Chinese Renminbi)</td><td>CUS</td><td>HKEX</td><td>人民币</td><td>USD 100,000</td><td>RMB 17,010</td><td>RMB 13,610</td></tr>' +
        '<tr><td>人民币<br/>(Chinese Renminbi)</td><td>RMB</td><td>CME</td><td>美元</td><td>RMB 1,000,000</td><td>USD 4,400</td><td>USD 4,000</td></tr>' +
        '<tr><td>美元指数<br/>(U.S. Dollar Index)</td><td>DX</td><td>ICE-NYBOT</td><td>美元</td><td>USD 1,000 x 指数</td><td>USD 1,980</td><td>USD 1,800</td></tr>';

    var d_powTab =
        '<tr><td>纽约原油<br/>(Light Crude Oil)</td><td>CL</td><td>CME-NYMEX</td><td>美元</td><td>1,000桶</td><td>USD 3,190</td><td>USD 2,900</td></tr>' +
        '<tr><td>小型纽约原油<br/>(Mini Light Crude Oil)</td><td>QM</td><td>CME-NYMEX</td><td>美元</td><td>500桶</td><td>USD 1,595</td><td>USD 1,450</td></tr>' +
        '<tr><td>布伦特原油<br/>(Brent Crude Oil)</td><td>COIL</td><td>ICE-IPE</td><td>美元</td><td>1,000桶</td><td>USD 4,400</td><td>USD 4,000</td></tr>' +
        '<tr><td>取暖油<br/>(Heating Oil)</td><td>HO</td><td>CME-NYMEX</td><td>美元</td><td>42,000加仑</td><td>USD 4,125</td><td>USD 3,750</td></tr>' +
        '<tr><td>天然气汽油<br/>(Natural Gas)</td><td>NG</td><td>CME-NYMEX</td><td>美元</td><td>10,000 mmBtu</td><td>USD 2,585</td><td>USD 2,350</td></tr>' +
        '<tr><td>小型天然气汽油<br/>(Mini Natural Gas)</td><td>QG</td><td>CME-NYMEX</td><td>美元</td><td>2,500 mmBtu</td><td>USD 646</td><td>USD 587</td></tr>' +
        '<tr><td>汽油<br/>(RBOB Gasoline)</td><td>RB</td><td>CME-NYMEX</td><td>美元</td><td>42,000加仑</td><td>USD 4,620</td><td>USD 4,200</td></tr>';


    var d_gjsTab =
        '<tr><td>Comex黄金<br/>(Comex Gold)</td><td>GC</td><td>CME-NYMEX(COMEX)</td><td>美元</td><td>100盎司</td><td>USD 5,940</td><td>USD 5,400</td></tr>' +
        '<tr><td>Comex白银<br/>(Comex Silver)</td><td>SI</td><td>CME-NYMEX(COMEX)</td><td>美元</td><td>5,000盎司</td><td>USD 5,775</td><td>USD 5,250</td></tr>' +
        '<tr><td>纽交所小黄金<br/>(Mini-sized Gold)</td><td>YG</td><td>NYSE-Liffe US(CBOT)</td><td>美元</td><td>33.2盎司</td><td>USD 2,122</td><td>USD 1,929</td></tr>' +
        '<tr><td>纽交所小白银<br/>(Mini-sized Silver)</td><td>YI</td><td>NYSE-Liffe US(CBOT)</td><td>美元</td><td>1,000盎司</td><td>USD 1,628</td><td>USD 1,480</td></tr>' +
        '<tr><td>钯金<br/>(Palladium)</td><td>PA</td><td>CME-NYMEX</td><td>美元</td><td>100盎司</td><td>USD 3,850</td><td>USD 3,500</td></tr>' +
        '<tr><td>铂金<br/>(Platinum)</td><td>PL</td><td>CME-NYMEX</td><td>美元</td><td>50盎司</td><td>USD 2,640</td><td>USD 2,400</td></tr>' +
        '<tr><td>东京工交所黄金<br/>(TOCOM Gold)</td><td>JAU</td><td>TOCOM</td><td>日元</td><td>1000克</td><td>JPY 90,000</td><td>/</td></tr>';


    var d_baseTab =
        '<tr><td>Comex铜<br/>(Comex Copper)</td> <td>HG</td> <td>CME-NYMEX(COMEX)</td> <td>美元</td> <td>25,000磅</td> <td>USD 2,090</td> <td>USD 1,900</td></tr>' +
        '<tr><td>LME铜<br/>(LME Copper)</td> <td>LCA</td> <td>LME</td> <td>美元</td> <td>25吨</td> <td>USD 12,800</td> <td>/</td></tr>' +
        '<tr><td>LME铝<br/>(LME Aluminium)</td> <td>LAH</td> <td>LME</td> <td>美元</td> <td>25吨</td> <td>USD 3,400</td> <td>/</td></tr>' +
        '<tr><td>LME锌<br/>(LME Zinc)</td> <td>LZS</td> <td>LME</td> <td>美元</td> <td>25吨</td> <td>USD 3,900</td> <td>/</td></tr>' +
        '<tr><td>LME铅<br/>(LME Lead)</td> <td>LPB</td> <td>LME</td> <td>美元</td> <td>25吨</td> <td>USD 4,000</td> <td>/</td></tr>' +
        '<tr><td>LME镍<br/>(LME Nickel)</td> <td>LNI</td> <td>LME</td> <td>美元</td> <td>6吨</td> <td>USD 8,328</td> <td>/</td></tr>' +
        '<tr><td>LME锡<br/>(LME Tin)</td> <td>LSN</td> <td>LME</td> <td>美元</td> <td>5吨</td> <td>USD 8,740</td> <td>/</td></tr>';


    var d_llTab1 =
        '<tr><td>三十年美国国库券<br/>(30 Yr U.S. Treasury Bonds)</td><td>ZB</td><td>CME-CBOT</td><td>美元</td><td>USD 100,000</td><td>USD 4,125</td><td>USD 3,750</td></tr>'+
        '<tr><td>十年美国国库债券<br/>(10 Yr U.S. Treasury Notes)</td><td>ZN</td><td>CME-CBOT</td><td>美元</td><td>USD 100,000</td><td>USD 1,485</td><td>USD 1,350</td></tr>'+
        '<tr><td>五年美国国库债券<br/>(5 Yr U.S. Treasury Notes)</td><td>ZF</td><td>CME-CBOT</td><td>美元</td><td>USD 100,000</td><td>USD 880</td><td>USD 800</td></tr>'+
        '<tr><td>两年美国国库债券<br/>(2 Yr U.S. Treasury Notes)</td><td>ZT</td><td>CME-CBOT</td><td>美元</td><td>USD 200,000</td><td>USD 605</td><td>USD 550</td></tr>';


    /** 平仓需知 **/
    var pc_hqTab = '<tr>' +
        '<td rowspan="4">恒指<br/>(Hang Seng Index)</td><td rowspan="4">現金</td><td rowspan="4">HKEX</td><td>HSIU6</td><td>9</td><td>29/9/2016</td><td>-</td></tr>' +
        '<tr><td>HSIV6</td><td>10</td><td>29/10/2016</td><td>-</td></tr>'+
        '<tr><td>HSIX6</td><td>11</td><td>29/11/2016</td><td>-</td></tr>'+
        '<tr><td>HSIZ6</td><td>12</td><td>29/12/2016</td><td>-</td></tr>'+
        '<tr><td rowspan="4">小型恒指<br/>(Mini Hang Seng Index)</td><td rowspan="4">現金</td><td rowspan="4">HKEX</td><td>MHIU6</td><td>9</td><td>29/9/2016</td><td>-</td></tr>' +
        '<tr><td>MHIV6</td><td>10</td><td>28/10/2016</td><td>-</td></tr>'+
        '<tr><td>MHIX6</td><td>11</td><td>29/11/2016</td><td>-</td></tr>'+
        '<tr><td>MHIZ6</td><td>12</td><td>29/12/2016</td><td>-</td></tr>'+
        '<tr><td rowspan="4">国企H股指数<br/>(H-shares Index)</td><td rowspan="4">现金</td><td rowspan="4">HKEX</td><td>HHIU6</td><td>9</td><td>29/9/2016</td><td>-</td></tr>' +
        '<tr><td>MCHV6</td><td>10</td><td>28/10/2016</td><td>-</td></tr>'+
        '<tr><td>MCHX6</td><td>11</td><td>29/11/2016</td><td>-</td></tr>'+
        '<tr><td>MCHZ6</td><td>12</td><td>29/12/2016</td><td>-</td></tr>'+
        '<tr><td rowspan="4">小型国企H股指数<br/>(Mini H-shares Index)</td><td rowspan="4">現金</td><td rowspan="4">HKEX</td><td>MCHU6</td><td>9</td><td>29/9/2016	</td><td>-</td></tr>' +
        '<tr><td>MCHV6</td><td>10</td><td>28/10/2016	</td><td>-</td></tr>'+
        '<tr><td>MCHX6</td><td>11</td><td>29/11/2016	</td><td>-</td></tr>'+
        '<tr><td>MCHZ6</td><td>12</td><td>29/12/2016	</td><td>-</td></tr>'+

        '<tr><td rowspan="3">恒指波幅<br/>(HSI Volatility Index)</td><td rowspan="3">現金</td><td rowspan="3">HKEX</td><td>VHSU6</td><td>9</td><td>30/9/2016	</td><td>-</td></tr>' +
        '<tr><td>VHSU6</td><td>10</td><td>31/10/2016	</td><td>-</td></tr>'+
        '<tr><td>VHSV6</td><td>11</td><td>31/12/2016	</td><td>-</td></tr>'+

        '<tr><td rowspan="4">中华交易服务中国120指数<br/>CES China 120 Index(CES 120)</td><td rowspan="4">現金</td><td rowspan="4">HKEX</td><td>CHHU6</td><td>9	</td><td>29/9/2016</td><td>-</td></tr>' +
        '<tr><td>CHHV6</td><td>10</td><td>28/10/2016	</td><td>-</td></tr>'+
        '<tr><td>CHHX6</td><td>11</td><td>29/11/2016	</td><td>-</td></tr>'+
        '<tr><td>CHHZ6</td><td>12</td><td>29/12/2016	</td><td>-</td></tr>'+

        '<tr><td rowspan="4">日经225<br/>(Nikkei 225)</td><td rowspan="4">現金</td><td  rowspan="4">SGX</td><td>SSIM6</td><td>6</td><td>9/6/2016</td><td>-</td></tr>' +
        '<tr><td>SSIU6</td><td>9</td><td>8/9/2016</td><td>-</td></tr>'+
        '<tr><td>SSIZ6</td><td>12</td><td>8/12/2016	</td><td>-</td></tr>'+
        '<tr><td>SSIH7</td><td>Mar-2017</td><td>9/3/2017</td><td>-</td></tr>'+

        '<tr><td rowspan="4">小型日经225<br/>(Mini Nikkei 225)</td><td rowspan="4">NS</td><td rowspan="4">SGX</td><td>SNSM6</td><td>6</td><td>9/6/2016</td><td>-</td></tr>' +
        '<tr><td>SNSU6</td><td>9</td><td>8/9/2016</td><td>-</td></tr>'+
        '<tr><td>SNSZ6</td><td>12</td><td>8/12/2016	</td><td>-</td></tr>'+
        '<tr><td>SNSH7</td><td>Mar-2017</td><td>9/3/2017</td><td>-</td></tr>'+

        '<tr><td rowspan="7">新华富时中国A50<br/>(FTSE/Xinhua China A50)</td><td rowspan="7">現金</td><td rowspan="7">SGX</td><td>CNM6</td><td>6</td><td>29/6/2016</td><td>-</td></tr>' +
        '<tr><td>CNN6</td><td>7</td><td>28/7/2016</td><td>-</td></tr>'+
        '<tr><td>CNQ6</td><td>8</td><td>30/8/2016</td><td>-</td></tr>'+
        '<tr><td>CNU6</td><td>8</td><td>29/9/2016</td><td>-</td></tr>'+
        '<tr><td>CNV6</td><td>10</td><td>28/10/2016</td><td>-</td></tr>'+
        '<tr><td>CNX6</td><td>11</td><td>29/11/2016</td><td>-</td></tr>'+
        '<tr><td>CNZ6</td><td>12</td><td>29/12/2016</td><td>-</td></tr>'+

        '<tr><td rowspan="7">印度50指数<br/>(CNX Nifty Index)</td><td rowspan="7">現金</td><td rowspan="7">SGX</td><td>SINM6</td><td>6</td><td>30/6/2016</td><td>-</td></tr>' +
        '<tr><td>SINN6</td><td>7</td><td>28/7/2016</td><td>-</td></tr>'+
        '<tr><td>SINQ6</td><td>8</td><td>25/8/2016</td><td>-</td></tr>'+
        '<tr><td>SINU6</td><td>8</td><td>29/9/2016</td><td>-</td></tr>'+
        '<tr><td>SINV6</td><td>10</td><td>27/10/2016</td><td>-</td></tr>'+
        '<tr><td>SINX6</td><td>11</td><td>24/11/2016</td><td>-</td></tr>'+
        '<tr><td>SINZ6</td><td>12</td><td>29/12/2016</td><td>-</td></tr>'+

        '<tr><td rowspan="7">新加坡指数<br/>(MSCI Singapore Stock Index)</td><td rowspan="7">現金</td><td rowspan="7">SGX</td><td>SGPM6</td><td>6</td><td>29/6/2016</td><td>-</td></tr>'+
        '<tr><td>SGPN6</td><td>7</td><td>28/7/2016</td><td>-</td></tr>'+
        '<tr><td>SGPQ6</td><td>8</td><td>30/8/2016</td><td>-</td></tr>'+
        '<tr><td>SGPU6</td><td>8</td><td>29/9/2016</td><td>-</td></tr>'+
        '<tr><td>SGPV6</td><td>10</td><td>28/10/2016</td><td>-</td></tr>'+
        '<tr><td>SGPX6</td><td>11</td><td>29/11/2016</td><td>-</td></tr>'+
        '<tr><td>SGPZ6</td><td>12</td><td>29/12/2016</td><td>-</td></tr>'+

        '<tr><td rowspan="7">摩根台股指数<br/>(MSCI Taiwan Index)</td><td rowspan="7">現金</td><td rowspan="7">SGX</td><td>STWM6</td><td>6</td><td>29/6/2016</td><td>-</td></tr>' +
        '<tr><td>STWN6</td><td>7</td><td>28/7/2016</td><td>-</td></tr>'+
        '<tr><td>STWQ6</td><td>8</td><td>30/8/2016</td><td>-</td></tr>'+
        '<tr><td>STWU6</td><td>8</td><td>29/9/2016</td><td>-</td></tr>'+
        '<tr><td>STWV6</td><td>10</td><td>28/10/2016</td><td>-</td></tr>'+
        '<tr><td>STWX6</td><td>11</td><td>29/11/2016</td><td>-</td></tr>'+
        '<tr><td>STWZ6</td><td>12</td><td>29/12/2016</td><td>-</td></tr>'+

        '<tr><td rowspan="4">小型道指<br/>(Mini Dow Jones)</td><td rowspan="4">現金</td><td rowspan="4">CME-CBOT</td><td>YMM6</td><td>6</td><td>17/6/2016	</td><td>-</td></tr>' +
        '<tr><td>YMU6</td><td>9</td><td>16/9/2016</td><td>-</td></tr>'+
        '<tr><td>YMZ6</td><td>12</td><td>16/12/2016</td><td>-</td></tr>'+
        '<tr><td>YMH7</td><td>Mar-17</td><td>17/3/2017</td><td>-</td></tr>'+

        '<tr><td rowspan="4">小型标普500<br/>(Mini S&P500)</td><td rowspan="4">現金</td><td rowspan="4">CME</td><td>ESM6</td><td>6</td><td>17/6/2016</td>-</tr>' +
        '<tr><td>ESU6</td><td>9</td><td>16/9/2016</td><td>-</td></tr>'+
        '<tr><td>ESZ6</td><td>12</td><td>16/12/2016</td><td>-</td></tr>'+
        '<tr><td>ESH7</td><td>Mar-17</td><td>17/3/2017</td><td>-</td></tr>'+

        '<tr><td rowspan="4">小型纳斯达克100<br/>(Mini Nasdaq 100)</td><td rowspan="4">現金</td><td rowspan="4">CME</td><td>NQM6</td><td>6</td><td>17/6/2016</td><td>-</td></tr>' +
        '<tr><td>NQU6</td><td>9</td><td>16/9/2016</td><td>-</td></tr>'+
        '<tr><td>NQZ6</td><td>12</td><td>16/12/2016</td><td>-</td></tr>'+
        '<tr><td>NQH7</td><td>Mar-17</td><td>17/3/2017</td><td>-</td></tr>'+

        '<tr><td rowspan="4">日经225平均股价指数<br/>(CME Nikkei 225 Yen)</td><td rowspan="4">現金</td><td rowspan="4">CME</td><td>NIYM6</td><td>6</td><td>9/6/2016</td><td>-</td></tr>' +
        '<tr><td>NIYU6</td><td>9</td><td>8/9/2016</td><td>-</td></tr>'+
        '<tr><td>NIYZ6</td><td>12</td><td>8/12/2016</td><td>-</td></tr>'+
        '<tr><td>NIYH7</td><td>Mar-17</td><td>9/3/2017</td><td>-</td></tr>';


    var pc_lcpTab =
        '<tr><td rowspan="5">玉米<br/>(Corn)</td><td rowspan="5">實物</td><td rowspan="5">CME-CBOT</td><td>ZCK6</td><td>5</td><td>13/5/2016</td><td>29/4/2016</td></tr>' +
        '<tr><td>ZCN6</td><td>7</td><td>14/7/2016	6</td><td>30/6/2016</td></tr>'+
        '<tr><td>ZCU6</td><td>9</td><td>14/9/2016</td><td>31/8/2016</td></tr>'+
        '<tr><td>ZCZ6</td><td>12</td><td>14/12/2016</td><td>30/11/2016</td></tr>'+
        '<tr><td>ZCH7</td><td>Mar-17</td><td>14/3/2017</td><td>28/2/2017</td></tr>'+

        '<tr><td rowspan="5">小型玉米<br/>(Mini Corn)<br/></td><td rowspan="5">實物</td><td rowspan="5">CME-CBOT</td><td>XCK6</td><td>5</td><td>13/5/2016</td><td>29/4/2016</td></tr>' +
        '<tr><td>XCN6</td><td>7</td><td>14/7/2016</td><td>30/6/2016</td></tr>'+
        '<tr><td>XCU6</td><td>9</td><td>14/9/2016</td><td>31/8/2016</td></tr>'+
        '<tr><td>XCZ6</td><td>12</td><td>14/12/2016</td><td>30/11/2016</td></tr>'+
        '<tr><td>XCH7</td><td>Mar-17</td><td>14/3/2017</td><td>28/2/2017</td></tr>'+

        '<tr><td rowspan="5">小麦<br/>(Wheat)</td><td rowspan="5">實物</td><td rowspan="5">CME-CBOT</td><td>ZWK6</td><td>5</td><td>13/5/2016</td><td>29/4/2016</td></tr>' +
        '<tr><td>ZWN6</td><td>7</td><td>14/7/2016</td><td>30/6/2016</td></tr>'+
        '<tr><td>ZWU6</td><td>9</td><td>14/9/2016</td><td>31/8/2016</td></tr>'+
        '<tr><td>ZWZ6</td><td>12</td><td>14/12/2016</td><td>30/11/2016</td></tr>'+
        '<tr><td>ZWH7</td><td>Mar-17</td><td>14/3/2017</td><td>28/2/2017</td></tr>'+

        '<tr><td rowspan="5">小型小麦<br/>(Mini Wheat)</td><td rowspan="5">實物</td><td rowspan="5">CME-CBOT</td><td>XWK6</td><td>5</td><td>13/5/2016</td><td>29/4/2016</td></tr>' +
        '<tr><td>XWN6</td><td>7</td><td>14/7/2016</td><td>30/6/2016</td></tr>'+
        '<tr><td>XWU6</td><td>9</td><td>14/9/2016</td><td>31/8/2016</td></tr>'+
        '<tr><td>XWZ6</td><td>12</td><td>14/12/2016</td><td>30/11/2016</td></tr>'+
        '<tr><td>XWH7</td><td>Mar-17</td><td>14/3/2017</td><td>28/2/2017</td></tr>'+

        '<tr><td rowspan="7">大豆<br/>(Soybeans)</td><td rowspan="7">實物</td><td rowspan="7">CME-CBOT</td><td>ZSK6</td><td>5</td><td>13/5/2016</td><td>29/4/2016</td></tr>' +
        '<tr><td>ZSN6</td><td>7</td><td>14/7/2016</td><td>30/6/2016</td></tr>'+
        '<tr><td>ZSQ6</td><td>8</td><td>12/8/2016</td><td>29/7/2016</td></tr>'+
        '<tr><td>ZSU6</td><td>9</td><td>14/9/2016</td><td>31/8/2016</td></tr>'+
        '<tr><td>ZSX6</td><td>11</td><td>14/11/2016</td><td>31/10/2016</td></tr>'+
        '<tr><td>ZSF7</td><td>Jan-17</td><td>12/1/2016</td><td>30/12/2016</td></tr>'+
        '<tr><td>ZSH7</td><td>Mar-17</td><td>14/3/2017</td><td>28/2/2017</td></tr>'+

        '<tr><td rowspan="7">小型大豆<br/>(Mini Soybeans)</td><td rowspan="7">實物</td><td rowspan="7">CME-CBOT</td><td>XKK6</td><td>5</td><td>13/5/2016</td><td>29/4/2016</td></tr>' +
        '<tr><td>XKN6</td><td>7</td><td>14/7/2016</td><td>30/6/2016</td></tr>'+
        '<tr><td>XKQ6</td><td>8</td><td>12/8/2016</td><td>29/7/2016</td></tr>'+
        '<tr><td>XKU6</td><td>9</td><td>14/9/2016</td><td>31/8/2016</td></tr>'+
        '<tr><td>XKX6</td><td>11</td><td>14/11/2016</td><td>31/10/2016</td></tr>'+
        '<tr><td>XKF7</td><td>Jan-17</td><td>12/1/2016</td><td>30/12/2016</td></tr>'+
        '<tr><td>XKH7</td><td>Mar-17</td><td>14/3/2017</td><td>28/2/2017</td></tr>'+

        '<tr><td rowspan="8">豆油<br/>(Soybean Oil)</td><td rowspan="8">實物</td><td rowspan="8">CME-CBOT</td><td>ZLK6</td><td>5</td><td>13/5/2016</td><td>29/4/2016</td></tr>' +
        '<tr><td>ZLN6</td><td>7</td><td>14/7/2016</td><td>30/6/2016</td></tr>'+
        '<tr><td>ZLQ6</td><td>8</td><td>12/8/2016</td><td>29/7/2016</td></tr>'+
        '<tr><td>ZLU6</td><td>9</td><td>14/9/2016</td><td>31/8/2016</td></tr>'+
        '<tr><td>ZLV6</td><td>10</td><td>14/10/2016</td><td>30/9/2016</td></tr>'+
        '<tr><td>ZLZ6</td><td>12</td><td>14/12/2016</td><td>30/11/2016</td></tr>'+
        '<tr><td>ZLF7</td><td>Jan-17</td><td>12/1/2016</td><td>30/12/2016</td></tr>'+
        '<tr><td>ZLH7</td><td>Mar-17</td><td>14/3/2017</td><td>28/2/2017</td></tr>'+

        '<tr><td rowspan="8">豆粉<br/>(Soybean Meal)</td><td rowspan="8">實物</td><td rowspan="8">CME-CBOT</td><td>ZMK6</td><td>5</td><td>13/5/2016</td><td>29/4/2016</td></tr>' +
        '<tr><td>ZMN6</td><td>7</td><td>14/7/2016</td><td>30/6/2016</td></tr>'+
        '<tr><td>ZMQ6</td><td>8</td><td>12/8/2016</td><td>29/7/2016</td></tr>'+
        '<tr><td>ZMU6</td><td>9</td><td>14/9/2016</td><td>31/8/2016</td></tr>'+
        '<tr><td>ZMV6</td><td>10</td><td>14/10/2016</td><td>30/9/2016</td></tr>'+
        '<tr><td>ZMZ6</td><td>12</td><td>14/12/2016</td><td>30/11/2016</td></tr>'+
        '<tr><td>ZMF7</td><td>Jan-17</td><td>12/1/2016</td><td>30/12/2016</td></tr>'+
        '<tr><td>ZMH7</td><td>Mar-17</td><td>14/3/2017</td><td>28/2/2017</td></tr>'+

        '<tr><td rowspan="5">燕麦<br/>(Oats)</td><td rowspan="5">實物</td><td rowspan="5">CME-CBOT</td><td>ZOK6</td><td>5</td><td>13/5/2016</td><td>29/4/2016</td></tr>' +
        '<tr><td>ZON6</td><td>7</td><td>14/7/2016</td><td>30/6/2016</td></tr>'+
        '<tr><td>ZO96</td><td>9</td><td>14/9/2016</td><td>31/8/2016</td></tr>'+
        '<tr><td>ZOZ6</td><td>12</td><td>14/12/2016</td><td>30/11/2016</td></tr>'+
        '<tr><td>ZOH7</td><td>Mar-17</td><td>14/3/2017</td><td>28/2/2017</td></tr>'+

        '<tr><td rowspan="6">糙米<br/>(Rough Rice)</td><td rowspan="6">實物</td><td rowspan="6">ICE-NYBOT</td><td>ZRK6</td><td>5</td><td>13/5/2016</td><td>29/4/2016</td></tr>' +
        '<tr><td>ZRN6</td><td>7</td><td>14/7/2016</td><td>30/6/2016</td></tr>'+
        '<tr><td>ZRU6</td><td>9</td><td>14/9/2016</td><td>31/8/2016</td></tr>'+
        '<tr><td>ZRX6</td><td>11</td><td>14/11/2016</td><td>31/10/2016</td></tr>'+
        '<tr><td>ZRF7</td><td>Jan-17</td><td>12/1/2016</td><td>30/12/2016</td></tr>'+
        '<tr><td>ZRH7</td><td>Mar-17</td><td>14/3/2017</td><td>28/2/2017</td></tr>'+

        '<tr><td rowspan="8">瘦猪肉<br/>(Lean Hog)</td><td rowspan="8">實物</td><td rowspan="8">CME</td><td>HEJ6</td><td>4</td><td>14/4/2016</td><td>-</td></tr>' +
        '<tr><td>ZRN6</td><td>5</td><td>13/5/2016</td><td>-</td></tr>'+
        '<tr><td>ZRU6</td><td>6</td><td>14/6/2016</td><td>-</td></tr>'+
        '<tr><td>ZRX6</td><td>7</td><td>15/7/2016</td><td>-</td></tr>'+
        '<tr><td>ZRF7</td><td>8</td><td>12/8/2016</td><td>-</td></tr>'+
        '<tr><td>ZRH7</td><td>10</td><td>14/10/2017</td><td>-</td></tr>'+
        '<tr><td>ZRF7</td><td>12</td><td>14/12/2016</td><td>-</td></tr>'+
        '<tr><td>ZRH7</td><td>Feb-17</td><td>24/2/2017</td><td>-</td></tr>'+

        '<tr><td rowspan="8">肉牛<br/>(Feeder Cattle)</td><td rowspan="8">實物</td><td rowspan="8">CME</td><td>GFH6</td><td>3</td><td>24/3/2016</td><td>-</td></tr>' +
        '<tr><td>GFJ6</td><td>4</td><td>28/4/2016</td><td>-</td></tr>'+
        '<tr><td>GFK6</td><td>5</td><td>26/6/2016</td><td>-</td></tr>'+
        '<tr><td>GFQ6</td><td>8</td><td>25/8/2016</td><td>-</td></tr>'+
        '<tr><td>GFU6</td><td>9</td><td>29/9/2016</td><td>-</td></tr>'+
        '<tr><td>GFV6</td><td>10</td><td>27/10/2017</td><td>-</td></tr>'+
        '<tr><td>GFX6</td><td>11</td><td>27/11/2016</td><td>-</td></tr>'+
        '<tr><td>GFF7</td><td>Jan-17</td><td>26/1/2017</td><td>-</td></tr>'+

        '<tr><td rowspan="6">活牛<br/>(Live Cattle)</td><td rowspan="6">實物</td><td rowspan="6">CME</td><td>LEJ6</td><td>4</td><td>29/4/2016</td><td>4/4/2016</td></tr>' +
        '<tr><td>LEM6</td><td>6</td><td>30/6/2016</td><td>6/6/2016</td></tr>'+
        '<tr><td>LEQ6</td><td>8</td><td>31/8/2016</td><td>8/8/2016</td></tr>'+
        '<tr><td>LEV6</td><td>10</td><td>31/10/2016</td><td>10/10/2016</td></tr>'+
        '<tr><td>LEZ6</td><td>12</td><td>30/12/2016</td><td>5/12/2016</td></tr>'+
        '<tr><td>LEG7</td><td>Feb-17</td><td>28/2/2017</td><td>6/2/2017</td></tr>'+

        '<tr><td rowspan="9">棕榈油<br/>(Crude Palm Oil)</td><td rowspan="9">實物</td><td rowspan="9">MYX</td><td>KPOF6</td><td>4</td><td>15/4/2016</td><td>1/4/2016</td></tr>' +
        '<tr><td>KPOK6</td><td>5</td><td>13/5/2016</td><td>3/5/2016</td></tr>'+
        '<tr><td>KPOM6</td><td>6</td><td>15/6/2016</td><td>1/6/2016</td></tr>'+
        '<tr><td>KPON6</td><td>7</td><td>15/7/2016</td><td>1/7/2016</td></tr>'+
        '<tr><td>KPOU6</td><td>9</td><td>15/9/2016</td><td>1/9/2016</td></tr>'+
        '<tr><td>KPOX6</td><td>11</td><td>15/11/2016</td><td>1/11/2016</td></tr>'+
        '<tr><td>KPOF7</td><td>Jan-17</td><td>13/1/2017</td><td>2/1/2017</td></tr>'+
        '<tr><td>KPOH7</td><td>Mar-17</td><td>15/3/2017</td><td>1/3/2017</td></tr>'+
        '<tr><td>KPOK7</td><td>May-17</td><td>15/5/2017</td><td>2/5/2017</td></tr>'+

        '<tr><td rowspan="7">东京工交所橡胶<br/>(Rubber)</td><td rowspan="7">實物</td><td rowspan="7">TOCOM</td><td>JRUM6</td><td>6</td><td>24/6/2016</td><td>-</td></tr>'+
        '<tr><td>JRUN6</td><td>7</td><td>25/7/2016</td><td>-</td></tr>'+
        '<tr><td>JRUQ6</td><td>8</td><td>25/8/2016</td><td>-</td></tr>'+
        '<tr><td>JRUU6</td><td>9</td><td>25/9/2016</td><td>-</td></tr>'+
        '<tr><td>JRUV6</td><td>10</td><td>25/10/2016</td><td>-</td></tr>'+
        '<tr><td>JRUX6</td><td>11</td><td>24/11/2016</td><td>-</td></tr>'+
        '<tr><td>JRUZ6</td><td>12</td><td>21/21/2016</td><td>-</td></tr>';


    var pc_whTab =
        '<tr><td rowspan="4">欧元<br/>(Euro Currencies)</td><td rowspan="4">實物</td><td rowspan="4">CME</td><td>EURM6</td><td>6</td><td>13/6/2016</td><td>13/6/2016</td></tr>' +
        '<tr><td>EURU6</td><td>9</td><td>19/9/2016</td><td>19/9/2016</td></tr>' +
        '<tr><td>EURZ6</td><td>12</td><td>19/12/2016</td><td>19/12/2016</td></tr>' +
        '<tr><td>EURH7</td><td>Mar-17</td><td>13/3/2017</td><td>13/3/2017</td></tr>' +

        '<tr><td rowspan="3">小型欧元<br/>(Mini Euro Currencies)</td><td rowspan="3">實物</td><td rowspan="3">CME</td><td>E7M6</td><td>6</td><td>13/6/2016</td><td>13/6/2016</td></tr>' +
        '<tr><td>E7U6</td><td>9</td><td>19/9/2016</td><td>19/9/2016</td></tr>' +
        '<tr><td>E7Z6</td><td>12</td><td>19/12/2016</td><td>19/12/2016</td></tr>' +

        '<tr><td rowspan="4">日元<br/>(Japanese Yen)</td><td rowspan="4">實物</td><td rowspan="4">CME</td><td>J7M6</td><td>6</td><td>13/6/2016</td><td>13/6/2016</td></tr>' +
        '<tr><td>JPYU6</td><td>9</td><td>19/9/2016</td><td>19/9/2016</td></tr>' +
        '<tr><td>JPYZ6</td><td>12</td><td>19/12/2016</td><td>19/12/2016</td></tr>' +
        '<tr><td>JPYH7</td><td>Mar-17</td><td>13/3/2017</td><td>13/3/2017</td></tr>' +

        '<tr><td rowspan="3">小型日元<br/>(Mini Japanese Yen)</td><td rowspan="3">實物</td><td rowspan="3">CME</td><td>J7M6</td><td>6</td><td>13/6/2016</td><td>13/6/2016</td></tr>' +
        '<tr><td>J7U6</td><td>9</td><td>19/9/2016</td><td>19/9/2016</td></tr>' +
        '<tr><td>J7Z6</td><td>12</td><td>19/12/2016</td><td>19/12/2016</td></tr>' +

        '<tr><td rowspan="4">澳元<br/>(Australian Dollar)</td><td rowspan="4">實物</td><td rowspan="4">CME</td><td>AUDM6</td><td>6</td><td>13/6/2016</td><td>13/6/2016</td></tr>' +
        '<tr><td>AUDU6</td><td>9</td><td>19/9/2016</td><td>19/9/2016</td></tr>' +
        '<tr><td>AUDZ6</td><td>12</td><td>19/12/2016</td><td>19/12/2016</td></tr>' +
        '<tr><td>AUDH7</td><td>Mar-17</td><td>13/3/2017</td><td>13/3/2017</td></tr>' +

        '<tr><td rowspan="4">英镑<br/>(British Pound)</td><td rowspan="4">實物</td><td rowspan="4">CME</td><td>GBPM6</td><td>6</td><td>13/6/2016</td><td>13/6/2016</td></tr>' +
        '<tr><td>GBPU6</td><td>9</td><td>19/9/2016</td><td>19/9/2016</td></tr>' +
        '<tr><td>GBPZ6</td><td>12</td><td>19/12/2016</td><td>19/12/2016</td></tr>' +
        '<tr><td>GBPH7</td><td>Mar-17</td><td>13/3/2017</td><td>13/3/2017</td></tr>' +

        '<tr><td rowspan="4">加元<br/>(Canadian Dollar)</td><td rowspan="4">實物</td><td rowspan="4">CME</td><td>CADM6</td><td>6</td><td>14/6/2016</td><td>14/6/2016</td></tr>' +
        '<tr><td>CADU6</td><td>9</td><td>20/9/2016</td><td>20/9/2016</td></tr>' +
        '<tr><td>CADZ6</td><td>12</td><td>20/12/2016</td><td>20/12/2016</td></tr>' +
        '<tr><td>CADH7</td><td>Mar-17</td><td>14/3/2017</td><td>14/3/2017</td></tr>' +

        '<tr><td rowspan="4">纽元<br/>(New Zealand Dollar)</td><td rowspan="4">實物</td><td rowspan="4">CME</td><td>NZDM6</td><td>6</td><td>13/6/2016</td><td>13/6/2016</td></tr>' +
        '<tr><td>NZDU6</td><td>9</td><td>19/9/2016</td><td>19/9/2016</td></tr>' +
        '<tr><td>NZDZ6</td><td>12</td><td>19/12/2016</td><td>19/12/2016</td></tr>' +
        '<tr><td>NZDH7</td><td>Mar-17</td><td>13/3/2017</td><td>13/3/2017</td></tr>' +

        '<tr><td rowspan="4">瑞士法郎<br/>(Swiss Franc)</td><td rowspan="4">實物</td><td rowspan="4">CME</td><td>CHFM6</td><td>6</td><td>13/6/2016</td><td>13/6/2016</td></tr>' +
        '<tr><td>CHFU6</td><td>9</td><td>19/9/2016</td><td>19/9/2016</td></tr>' +
        '<tr><td>CHFZ6</td><td>12</td><td>19/12/2016</td><td>19/12/2016</td></tr>' +
        '<tr><td>CHFH7</td><td>Mar-17</td><td>13/3/2017</td><td>13/3/2017</td></tr>' +

        '<tr><td rowspan="7">美元/人民币<br/>(Chinese Renminbi)</td><td rowspan="7">實物</td><td rowspan="7">HKEX</td><td>CUSJ6</td><td>4</td><td>18/4/2016</td><td>18/4/2016</td></tr>' +
        '<tr><td>CUSM6</td><td>5</td><td>13/5/2016</td><td>13/5/2016</td></tr>' +
        '<tr><td>CUSU6</td><td>6</td><td>19/6/2016</td><td>19/6/2016</td></tr>' +
        '<tr><td>CUSZ6</td><td>7</td><td>19/7/2016</td><td>18/7/2016</td></tr>' +
        '<tr><td>CUSU6</td><td>9</td><td>19/9/2016</td><td>19/9/2016</td></tr>' +
        '<tr><td>CUSZ6</td><td>12</td><td>19/12/2016</td><td>19/12/2016</td></tr>' +
        '<tr><td>CUSH7</td><td>Mar-17</td><td>13/3/2017</td><td>13/3/2017</td></tr>' +

        '<tr><td rowspan="11">人民币<br/>(Chinese Renminbi)</td><td rowspan="11">實物</td><td rowspan="11">CME</td><td>RMBJ6</td><td>4</td><td>18/4/2016</td><td>-</td></tr>' +
        '<tr><td>RMBK6</td><td>5</td><td>16/5/2016</td><td>-</td></tr>' +
        '<tr><td>RMBN6</td><td>7</td><td>18/7/2016</td><td>-</td></tr>' +
        '<tr><td>RMBQ6</td><td>8</td><td>15/8/2016</td><td>-</td></tr>' +
        '<tr><td>RMBU6</td><td>9</td><td>19/9/2016</td><td>-</td></tr>' +
        '<tr><td>RMBV6</td><td>10</td><td>17/10/2016</td><td>-</td></tr>' +
        '<tr><td>RMBX6</td><td>11</td><td>14/11/2016</td><td>-</td></tr>' +
        '<tr><td>RMBZ6</td><td>12</td><td>19/12/2016</td><td>-</td></tr>' +
        '<tr><td>RMBF7</td><td>Jan-2017</td><td>13/1/2017</td><td>-</td></tr>' +
        '<tr><td>RMBG7</td><td>Feb-2017</td><td>13/2/2017</td><td>-</td></tr>' +
        '<tr><td>RMBH7</td><td>Mar-2017</td><td>13/3/2017</td><td>-</td></tr>';

    var pc_powTab =
        '<tr><td rowspan="10">纽约原油<br/>(Light Crude Oil)</td><td rowspan="10">實物</td><td rowspan="10">CME-NYMEX</td><td>CLM6</td><td>6</td><td>20/5/2016</td><td>24/5/2016</td></tr>' +
        '<tr><td>CLN6</td><td>7</td><td>21/6/2016</td><td>23/6/2016</td></tr>'+
        '<tr><td>CLQ6</td><td>8</td><td>20/7/2016</td><td>22/7/2016</td></tr>'+
        '<tr><td>CLU6</td><td>9</td><td>22/8/2016</td><td>24/8/2016</td></tr>'+
        '<tr><td>CLV6</td><td>10</td><td>20/9/2016</td><td>22/9/2016</td></tr>'+
        '<tr><td>CLX6</td><td>11</td><td>20/10/2016</td><td>24/10/2016</td></tr>'+
        '<tr><td>CLZ6</td><td>12</td><td>21/11/2016</td><td>23/11/2016</td></tr>'+
        '<tr><td>CLF7</td><td>Jan-17</td><td>20/12/2016</td><td>22/12/2016</td></tr>'+
        '<tr><td>CLG7</td><td>Feb-17</td><td>20/1/2017</td><td>24/1/2017</td></tr>'+
        '<tr><td>CLH7</td><td>Mar-17</td><td>22/2/2017</td><td>23/2/2017</td></tr>'+

        '<tr><td rowspan="12">小型纽约原油<br/>(Mini Light Crude Oil)</td><td rowspan="12">現金</td><td rowspan="12">CME-NYMEX</td><td>QMK6</td><td>5</td><td>19/4/2016</td><td>-</td></tr>' +
        '<tr><td>QMM6</td><td>6</td><td>19/5/2016</td><td>-</td></tr>'+
        '<tr><td>QMN6</td><td>7</td><td>20/6/2016</td><td>-</td></tr>'+
        '<tr><td>QMQ6</td><td>8</td><td>19/7/2016</td><td>-</td></tr>'+
        '<tr><td>QMU6</td><td>9</td><td>19/8/2016</td><td>-</td></tr>'+
        '<tr><td>QMV6</td><td>10</td><td>19/9/2016</td><td>-</td></tr>'+
        '<tr><td>QMX6</td><td>11</td><td>19/10/2016</td><td>-</td></tr>'+
        '<tr><td>QMZ6</td><td>12</td><td>18/11/2016</td><td>-</td></tr>'+
        '<tr><td>QMF7</td><td>Jan-17</td><td>19/12/2017</td><td>-</td></tr>'+
        '<tr><td>QMG7</td><td>Feb-17</td><td>19/1/2017</td><td>-</td></tr>'+
        '<tr><td>QMH7</td><td>Mar-17</td><td>21/2/2017</td><td>-</td></tr>'+
        '<tr><td>QMJ7</td><td>Apr-17</td><td>20/3/2017</td><td>-</td></tr>'+

        '<tr><td rowspan="12">取暖油<br/>(Heating Oil)</td><td rowspan="12">實物</td><td rowspan="12">CME-NYMEX</td><td>HOK6</td><td>5</td><td>29/4/2016</td><td>3/5/2016</td></tr>' +
        '<tr><td>HOM6</td><td>6</td><td>31/5/2016</td><td>2/6/2016</td></tr>'+
        '<tr><td>HON6</td><td>7</td><td>30/6/2016	</td><td>5/7/2016 </td></tr>'+
        '<tr><td>HOQ6</td><td>8</td><td>29/7/2016	</td><td>2/8/2016 </td></tr>'+
        '<tr><td>HOU6</td><td>9</td><td>31/8/2016</td><td>2/9/2016 </td></tr>'+
        '<tr><td>HOV6</td><td>10</td><td>30/9/2016</td><td>4/10/2016 </td></tr>'+
        '<tr><td>HOX6</td><td>11</td><td>31/10/2016</td><td>2/11/2016 </td></tr>'+
        '<tr><td>HOZ6</td><td>12</td><td>30/11/2016</td><td>2/12/2016</td></tr>'+
        '<tr><td>HOF7</td><td>Jan-17</td><td>30/12/2017</td><td>3/1/2017</td></tr>'+
        '<tr><td>HOG7</td><td>Feb-17</td><td>31/1/2017</td><td>2/2/2017 </td></tr>'+
        '<tr><td>HOH7</td><td>Mar-17</td><td>28/2/2017	</td><td>2/3/2017 </td></tr>'+
        '<tr><td>HOJ7</td><td>Apr-17</td><td>31/3/2017	</td><td>4/4/2017</td></tr>'+

        '<tr><td rowspan="12">天然气<br/>(Natural Gas)</td><td rowspan="12">實物</td><td rowspan="12">CME-NYMEX</td><td>NGK6</td><td>5</td><td>27/4/2016</td><td>28/4/2016</td></tr>' +
        '<tr><td>NGM6</td><td>6</td><td>26/5/2016</td><td>27/5/2016</td></tr>'+
        '<tr><td>NGN6</td><td>7</td><td>28/6/2016</td><td>29/6/2016 </td></tr>'+
        '<tr><td>NGQ6</td><td>8</td><td>27/7/2016</td><td>28/7/2016 </td></tr>'+
        '<tr><td>NGU6</td><td>9</td><td>29/8/2016</td><td>30/8/2016 </td></tr>'+
        '<tr><td>NGV6</td><td>10</td><td>28/9/2016</td><td>29/9/2016 </td></tr>'+
        '<tr><td>NGX6</td><td>11</td><td>27/10/2016</td><td>28/10/2016 </td></tr>'+
        '<tr><td>NGZ6</td><td>12</td><td>28/11/2016</td><td>29/11/2016</td></tr>'+
        '<tr><td>NGF7</td><td>Jan-17</td><td>28/12/2017</td><td>29/12/2017</td></tr>'+
        '<tr><td>NGG7</td><td>Feb-17</td><td>21/1/2017</td><td>30/1/2017 </td></tr>'+
        '<tr><td>NGH7</td><td>Mar-17</td><td>24/2/2017</td><td>27/2/2017 </td></tr>'+
        '<tr><td>NGJ7</td><td>Apr-17</td><td>29/3/2017</td><td>30/3/2017</td></tr>'+

        '<tr><td rowspan="12">小型天然气<br/>(Mini Natural Gas)</td><td rowspan="12">現金</td><td rowspan="12">CME-NYMEX</td><td>QGK6</td><td>5</td><td>26/4/2016</td><td>-</td></tr>' +
        '<tr><td>QGM6</td><td>6</td><td>25/5/2016</td><td>-</td></tr>'+
        '<tr><td>QGN6</td><td>7</td><td>27/6/2016</td><td>-</td></tr>'+
        '<tr><td>QGQ6</td><td>8</td><td>26/7/2016</td><td>-</td></tr>'+
        '<tr><td>QGU6</td><td>9</td><td>26/8/2016</td><td>-</td></tr>'+
        '<tr><td>QGV6</td><td>10</td><td>27/9/2016</td><td>28/9/2016 </td></tr>'+
        '<tr><td>QGX6</td><td>11</td><td>26/10/2016</td><td>27/10/2016 </td></tr>'+
        '<tr><td>QGZ6</td><td>12</td><td>25/11/2016</td><td>26/11/2016</td></tr>'+
        '<tr><td>QGF7</td><td>Jan-17</td><td>27/12/2017</td><td>28/12/2017</td></tr>'+
        '<tr><td>QGG7</td><td>Feb-17</td><td>26/1/2017</td><td>37/1/2017 </td></tr>'+
        '<tr><td>QGH7</td><td>Mar-17</td><td>23/2/2017</td><td>24/2/2017 </td></tr>'+
        '<tr><td>QGJ7</td><td>Apr-17</td><td>28/3/2017</td><td>29/3/2017</td></tr>'+

        '<tr><td  rowspan="12">汽油<br/>(RBOB Gasoline)</td><td rowspan="12">實物</td><td rowspan="12">CME-NYMEX</td><td>RBK6</td><td>5</td><td>29/4/2016</td><td>3/5/2016</td></tr>' +
        '<tr><td>RBM6</td><td>6</td><td>31/5/2016</td><td>2/6/2016</td></tr>'+
        '<tr><td>RBN6</td><td>7</td><td>30/6/2016</td><td>5/7/2016</td></tr>'+
        '<tr><td>RBQ6</td><td>8</td><td>29/7/2016</td><td>2/8/2016</td></tr>'+
        '<tr><td>RBU6</td><td>9</td><td>31/8/2016</td><td>2/9/2016</td></tr>'+
        '<tr><td>RBV6</td><td>10</td><td>30/9/2016</td><td>4/10/2016 </td></tr>'+
        '<tr><td>RBX6</td><td>11</td><td>31/10/2016</td><td>2/11/2016 </td></tr>'+
        '<tr><td>RBZ6</td><td>12</td><td>30/11/2016</td><td>2/12/2016</td></tr>'+
        '<tr><td>RBF7</td><td>Jan-17</td><td>30/12/2017</td><td>3/1/2017</td></tr>'+
        '<tr><td>RBG7</td><td>Feb-17</td><td>31/1/2017</td><td>2/2/2017 </td></tr>'+
        '<tr><td>RBH7</td><td>Mar-17</td><td>28/2/2017</td><td>2/3/2017 </td></tr>'+
        '<tr><td>RBJ7</td><td>Apr-17</td><td>31/3/2017</td><td>4/4/2017</td></tr>';


    var pc_gjsTab =
        '<tr><td rowspan="7">Comex黄金<br/>(Comex Gold)</td><td rowspan="7">實物</td><td rowspan="7">CME-NYMEX(COMEX)</td><td>GCJ6</td><td>4</td><td>27/4/2016</td><td>31/3/2016</td></tr>' +
        '<tr><td>GCM6</td><td>6</td><td>28/6/2016</td><td>31/5/2016</td></tr>'+
        '<tr><td>GCQ6</td><td>8</td><td>29/8/2016</td><td>29/7/2016</td></tr>'+
        '<tr><td>GCV6</td><td>10</td><td>27/10/2016</td><td>30/9/2016 </td></tr>'+
        '<tr><td>GCZ6</td><td>12</td><td>28/12/2016</td><td>30/11/2016 </td></tr>'+
        '<tr><td>GCG7</td><td>Feb-17</td><td>24/2/2016</td><td>31/1/2016</td></tr>'+
        '<tr><td>GCJ7</td><td>Apr-17</td><td>26/4/2017</td><td>31/3/2017</td></tr>'+

        '<tr><td rowspan="8">Comex白银<br/>(Comex Silver)</td><td rowspan="8">實物</td><td rowspan="8">CME-NYMEX(COMEX)</td><td>SIJ6</td><td>4</td><td>27/4/2016</td><td>31/3/2016</td></tr>' +
        '<tr><td>SIK6</td><td>5</td><td>26/5/2016</td><td>29/4/2016</td></tr>'+
        '<tr><td>SIN6</td><td>7</td><td>27/7/2016</td><td>30/6/2016</td></tr>'+
        '<tr><td>SIU6</td><td>9</td><td>28/9/2016</td><td>31/8/2016 </td></tr>'+
        '<tr><td>SIZ6</td><td>12</td><td>28/12/2016</td><td>30/11/2016 </td></tr>'+
        '<tr><td>SIF7</td><td>Jan-17</td><td>27/1/2016</td><td>30/12/2016</td></tr>'+
        '<tr><td>SIH7</td><td>Mar-17</td><td>29/3/2017</td><td>28/2/2017</td></tr>'+
        '<tr><td>SIK7</td><td>May-17</td><td>26/5/2017</td><td>28/4/2017</td></tr>'+

        '<tr><td rowspan="6">钯金<br/>(Palladium)</td><td rowspan="6">實物</td><td rowspan="6">CME-NYMEX</td><td>PAJ6</td><td>4</td><td>27/4/2016</td><td>31/3/2016</td></tr>' +
        '<tr><td>PAK6</td><td>5</td><td>26/5/2016</td><td>29/4/2016</td></tr>'+
        '<tr><td>PAM6</td><td>6</td><td>28/6/2016</td><td>31/5/2016</td></tr>'+
        '<tr><td>PAU6</td><td>9</td><td>28/9/2016</td><td>31/8/2016 </td></tr>'+
        '<tr><td>PAZ6</td><td>12</td><td>28/12/2016</td><td>30/11/2016 </td></tr>'+
        '<tr><td>PAH7</td><td>Mar-17</td><td>29/3/2017</td><td>28/2/2017</td></tr>'+

        '<tr><td rowspan="6">铂金<br/>(Platinum)</td><td rowspan="6">實物</td><td rowspan="6">CME-NYMEX</td><td>PLJ6</td><td>4</td><td>27/4/2016</td><td>31/3/2016</td></tr>' +
        '<tr><td>PLK6</td><td>5</td><td>26/5/2016</td><td>29/4/2016</td></tr>'+
        '<tr><td>PLM6</td><td>6</td><td>28/6/2016</td><td>31/5/2016</td></tr>'+
        '<tr><td>PLN6</td><td>7</td><td>27/7/2016</td><td>30/6/2016</td></tr>'+
        '<tr><td>PLV6</td><td>10</td><td>27/10/2016</td><td>30/9/2016 </td></tr>'+
        '<tr><td>PLNF7</td><td>Jan-17</td><td>27/1/2017</td><td>30/12/2017</td></tr>'+

        '<tr><td rowspan="6">日本黄金</td><td rowspan="6">實物</td><td rowspan="6">TOCOM</td><td>JAUJ6</td><td>4</td><td>25/4/2016</td><td>25/4/2016</td></tr>' +
        '<tr><td>JAUM6</td><td>6</td><td>27/6/2016</td><td>27/6/2016</td></tr>'+
        '<tr><td>JAUQ6</td><td>8</td><td>26/8/2016</td><td>26/8/2016</td></tr>'+
        '<tr><td>JAUV6</td><td>10</td><td>26/10/2016</td><td>26/10/2016</td></tr>'+
        '<tr><td>JAUV6</td><td>12</td><td>22/12/2016</td><td>22/12/2016</td></tr>'+
        '<tr><td>JAUG6</td><td>Feb-17</td><td>23/2/2017</td><td>23/2/2017</td></tr>';


    var pc_baseTab =
        '<tr><td rowspan="12">Comex铜<br/>(Comex Copper)</td> <td rowspan="12">實物</td> <td rowspan="12">CME-NYMEX(COMEX)</td> <td>HGJ6</td> <td>4</td><td>27/4/2016</td><td>31/3/2016</td></tr>' +
        '<tr><td>HGK6</td><td>5</td><td>26/5/2016</td><td>29/4/2016</td></tr>'+
        '<tr><td>HGM6</td><td>6</td><td>28/6/2016</td><td>31/5/2016</td></tr>'+
        '<tr><td>HGN6</td><td>7</td><td>27/7/2016</td><td>30/6/2016</td></tr>'+
        '<tr><td>HGQ6</td><td>8</td><td>29/8/2016</td><td>29/7/2016</td></tr>'+
        '<tr><td>HGU6</td><td>9</td><td>28/9/2016</td><td>31/8/2016 </td></tr>'+
        '<tr><td>HGV6</td><td>10</td><td>27/10/2016</td><td>30/9/2016 </td></tr>'+
        '<tr><td>HGX6</td><td>11</td><td>28/11/2016</td><td>31/10/2016 </td></tr>'+
        '<tr><td>HGZ6</td><td>12</td><td>28/12/2016</td><td>30/11/2016 </td></tr>'+
        '<tr><td>HGF7</td><td>Jan-17</td><td>27/1/2017</td><td>30/12/2017</td></tr>'+
        '<tr><td>HGG7</td><td>Feb-17</td><td>24/2/2016</td><td>31/1/2016</td></tr>'+
        '<tr><td>HGH7</td><td>Mar-17</td><td>29/3/2017</td><td>28/2/2017</td></tr>';

    var pc_llTab1 =
        '<tr><td rowspan="2">三十年美国国库券<br/>(30 Yr U.S. Treasury Bonds)</td><td rowspan="2">實物</td><td rowspan="2">CME-CBOT</td><td>ZBU6</td><td>9</td><td>21/9/2016</td><td>31/8/2016</td></tr>'+
        '<tr><td>ZBZ6</td><td>12</td><td>20/12/2016</td><td>30/11/2016 </td></tr>'+

        '<tr><td rowspan="3">十年美国国库债券<br/>(10 Yr U.S. Treasury Notes)</td><td rowspan="3">實物</td><td rowspan="3">CME-CBOT</td><td>ZNM6</td><td>6</td><td>21/6/2016</td><td>31/5/2016</td></tr>'+
        '<tr><td>ZNU6</td><td>9</td><td>21/9/2016</td><td>31/8/2016 </td></tr>'+
        '<tr><td>ZNZ6</td><td>12</td><td>21/12/2016</td><td>30/11/2016 </td></tr>'+

        '<tr><td rowspan="4">五年美国国库债券<br/>(5 Yr U.S. Treasury Notes)</td><td rowspan="4">實物</td><td rowspan="4">CME-CBOT</td><td>ZFM6</td><td>6</td><td>30/6/2016</td><td>31/5/2016</td></tr>'+
        '<tr><td>ZFU6</td><td>9</td><td>30/9/2016</td><td>31/8/2016 </td></tr>'+
        '<tr><td>ZFZ6</td><td>12</td><td>30/12/2016</td><td>30/11/2016 </td></tr>'+
        '<tr><td>ZFH7</td><td>Mar-17</td><td>31/3/2017</td><td>28/2/2017 </td></tr>'+

        '<tr><td rowspan="4">两年美国国库债券<br/>(2 Yr U.S. Treasury Notes)</td><td rowspan="4">實物</td><td rowspan="4">CME-CBOT</td><td>ZTM6</td><td>6</td><td>30/6/2016</td><td>31/5/2016</td></tr>' +
        '<tr><td>ZTU6</td><td>9</td><td>30/9/2016</td><td>31/8/2016 </td></tr>'+
        '<tr><td>ZTZ6</td><td>12</td><td>30/12/2016</td><td>30/11/2016 </td></tr>'+
        '<tr><td>ZTH7</td><td>Mar-17</td><td>31/3/2017</td><td>28/2/2017 </td></tr>';


    /** 交易须知 **/
    var qh_info =
        '<div>' +
            '<span class="transfKnowDesc-title">A.	期货合约, 简称期货。</span>' +
            '<span>i.期货的期代表一个指定的时间, 通常指远期。</span>' +
            '<span>ii.期货的货代表指定的货物。</span>' +
            '<span>iii.总体代表对于将来的实货的一个购买或售出的权利和义务。</span>' +
        '</div>' +
        '<div>' +
        '<span class="transfKnowDesc-title">B.期货合约是买卖双方透过签订合约，同意按照事先约定的一个将来时间、价格与其他交易条件，交收指定数量的货物。</span>' +
        '</div>' +
        '<div>' +
        '<span class="transfKnowDesc-title">C.每张合约中都有一个买方一个卖方，且作为期货卖方，并不需要手上事先有相应的货物。且与股票不同的事，其交易的最小基本单位 – “一手”，所指代的商品数量会根据商品不同而变化。</span>' +
        '<span>i.买方的权利：当合约到期时，必须用足够的现金用来购入事先双方约定好的货物。</span>' +
        '<span>ii.卖方的义务：当合约到期时，必须拿出足够的货物来交割给买方。如果手上没有货物，必须在现货市场上买回来，在与买方进行交割。</span>' +
        '<span>iii.其中买卖的差价就是各自的盈利/亏损。</span>' +
        '</div>' +
        '<div>' +
        '<span class="transfKnowDesc-title">D.买卖双方通常会通过交易所进行期货合约买卖。</span>' +
        '<span>i.买方同意在未来指定的时间按照指定价格买入指定数量的货物, 他们可被称为”多头” 。他们看好货品价格, 认为他们会在未来的一段时间价格将上涨。所以他们买入期货合约, 希望从中获利。 </span>' +
        '<span>ii.卖方同意在未来指定的时间按照指定价格卖出指定数量的货物, 他们可被称为”空头” 。他们看跌货品价格, 认为他们会在未来的一段时间价格将下跌。所以他们卖出期货合约, 希望从中获利。</span>' +
        '<span>iii.交易所标准化定制每个期货品种的合约大小, 交割质量与交易时间，从而令到各种类型的买卖双方可以遵从一个统一的标准进行交易与交割。并不是所有的产品都透过交易所进行交易。有一些俗称为“OTC-场外合约”的产品则是由买卖双方私下定立买卖合约细则。但由于此类合约并不受交易所规管，且违约风险较大，所以一般中小投资者很少涉及此类产品。</span>' +
        '</div>';



    var hwqh_info =
        '<div>' +
        '<span class="transfKnowDesc-title">A.香港交易所: 恒生指数、国企H股指数、指数期权</span>' +
        '</div>'+
        '<div>' +
        '<span class="transfKnowDesc-title">B.美盘:</span>' +
        '<span>i.指数期货: 道琼斯工业平均指数、日经平均指数</span>'+
        '<span>ii.外汇期货: 欧元、日元、澳元、英镑、人民币、美元指数 </span>'+
        '<span>iii.能源期货:纽约原油、布伦特原油、天然气、汽油</span>'+
        '<span>iv.贵金属期货: 黄金、白银、钯金、铂金 </span>'+
        '<span>v.基本金属期货: COMEX 铜 </span>'+
        '<span>vi.利率期货：两年美国国库债券、五年美国国库债券、十年美国国库债券、三十年美国国库债券</span>'+
        '<span>vii.农产品期货：玉米、小麦、大豆、糙米、可可、棉花、白糖 </span>'+
        '</div>'+
        '<div>' +
        '<span class="transfKnowDesc-title">C.新加坡交易所：新华富时中国A50指数、日经225平均指数</span>' +
        '</div>'+
        '<div>' +
        '<span class="transfKnowDesc-title">D.LME伦敦金属交易所：拥有全球金属定价权</span>' +
        '<span>1.主要交易金属：铜、铝、锌、镍、铅、锡</span>'+
        '<span>(A)前4种每手25吨、镍6吨一手、锡5吨一手。</span>'+
        '<span>2.做市商制度：并非买家和卖家对应，严格意义上说并非期货市场。 </span>'+
        '<span>3.场内交易：Ring和Kerb；Ring同一时间只能交易一种金属 </span>'+
        '<span>4.场外交易：Interoffice 无时间限制，只要对应办公室有做市商。Select（电子盘）08：00-02：00</span>'+
        '<span>5.以日期设计的合约：每个月有20到22张合约。</span>'+
        '<span>(A)例：11.24 - - - - > 2.24；11.25 - - - -> 2.25。</span>'+
        '<span>(B)	3个月以内，每天都有一个到期日</span>'+
        '<span>(C)	3-6个月，每周三是一个到期日</span>'+
        '<span>(D)	6-63个月，每月的第三个星期三是一个到期日</span>'+
        '<span>6.现货日：Cash Day，2.25到期的合约现货日是2.23。在现货日2.23, 必须要处理掉2.25到期的合约。</span>'
        '</div>'+
        '<div>' +
        '<span class="transfKnowDesc-title">E.其他外盘期货交易所: 马来西亚棕榈油、东京橡胶、东京黄金、德国DAX农经指数、伦敦富时100指数、法国CAC 40指数 </span>' +
        '</div>';

    var wpqh_info =
        '<div>' +
        '<span class="transfKnowDesc-title">A.中国期货发展历史</span>' +
        '<span>i.中国古代已有由粮栈、粮市构成的商品信贷及远期合约制度。</span>'+
        '<span>ii.在民国年代，中国上海曾出现多个期货交易所，市场一度出现疯狂热炒。满洲国政府亦曾在东北大连、营口、奉天等15个城市设立期货交易所，主要经营大豆、豆饼、豆油期货贸易。</span>'+
        '<span>iii.1949年中华人民共和国成立后，期货交易所在中国大陆绝迹几十年，到1991年深圳设立期货交易所，展开另一波期货热炒风潮，各省市百花齐放，最多曾经一度同时开设超过50家期货交易所，超过全球其他国家期货交易所数目的总和。中国国务院在1994年及1998年，两次大力收紧监管，暂停多个期货品种，勒令多间交易所停止营业。</span>'+
        '</div>'+
        '<div>' +
        '<span class="transfKnowDesc-title">B.外盘期货发展历史 </span>' +
        '<span>i.日本是最早出现期货市场的地方。在日本江户幕府时代约1730年, 由于当时的白米价格对经济及军事活动造成很重大的影响，米商会根据白米的需求而决定库存白米的买卖价格。</span>'+
        '<span>ii.在1864年, 芝加哥期货交易所推出首张标准化的远期合约。当时粮食为主要产品。由于天气波动影响农产品价格，农民与需求方商量；以商量好的价格买卖明年的农产品。之后芝加哥期货交易所一直推出关于不同农产品的期货合约。</span>'+
        '<span>iii.在1970年代，芝加哥商业交易所曾进行多项期货产品的创新，大力发展多个金融期货品种，令金融期货成为期货市场的主流。 </span>'+
        '<span>iv.1980年代，芝加哥商业交易所开始发展电子交易平台。 </span>'+
        '</div>'+
        '<div>' +
        '<span class="transfKnowDesc-title">C.中国大陆保证金及杠杆</span>' +
        '<span>i.	例：沪铜：56500*5 = 282500 人民币每手。保证金只需8%，22600人民币。最低保证金由交易所决定。可以通过自己人为控制降低杠杆。</span>'+
        '<span>ii.	合约价值：是指当前市场上每单位特定商品的价格乘以每手商品所对应的单位数，比如对于沪铜，假设市价是56500每吨，根据交易所规则一手5吨则沪铜当前的合约价值是一手282500人民币。</span>'+
        '<span>iii.	杠杆比例：杠杆计算方式=合约价值/保证金</span>'+
        '<span>1.	杠杆比例以上例计：1/（8%）= 12.5。即用1块钱买12.5块钱的商品</span>'+
        '<span>2.	杠杆比例越高，则商品价格波动对资金的影响越大，风险越高。以上例来看，假设杠杆比例为12.5，在市价为56500时做多1手铜，每手所需的保证金为22600人民币。当市价变为56000时，每手铜亏损500*5 = 2500元，则保证金亏损至20100元，商品价格跌了0.88%，保证金亏损了11.06%。</span>'+
        '<span>3.	假设杠杆比例为25，同样的设定下商品价格跌0.88%，保证金只亏损了5.53%。可见控制好杠杆比例对于管理投资风险十分重要。</span>'+
        '</div>'+
        '<div>' +
        '<span class="transfKnowDesc-title">D.外盘保证金及杠杆 </span>' +
        '<span>i.	跟中国大陆以合约百份比来计算保证金不一样。交易所会因应市场价格波动状况而公布一个整数保证金, 分别为初始保证金和维持保证金。</span>'+
        '<span>1.	初始保证金等于开仓保证金, 如一手玉米的初始保证金是2700 美元。这代表客户的账号必须有2700美元或更多的金额才能开仓。</span>'+
        '<span>2.	如果账号权益下跌至低于初始保证金, 公司将会开始追收保证金。客户必须准备入金补至初始保证金的金额。 </span>'+
        '<span>3.	维持保证金比初始保证金低。例如玉米的是2000 美元。如果客户开仓后的账号权益比2000低；由于风险太大, 我们将会为客户平仓至账号等于初始保证金以上。</span>'+
        '<span>ii.	杠杆计算方式=合约价值/保证金</span>'+
        '<span>(A)	例子: 玉米的合约大小是5000, 市场价格是6.40</span>'+
        '<span>(B)	杠杆会是[5000*6.4]/2700=12倍</span>' +
        '</div>'+
        '<div>' +
        '<span class="transfKnowDesc-title">E.交易所产品与交易简介</span>' +
        '<span>i.	全球最大的期货交易所：CME Group</span>'+
        '<span>1.	由原CME，CBOT，NYMEX（COMEX）组合而成</span>'+
        '<span>2.	CME：标普、纳斯达克，外汇 </span>'+
        '<span>3.	CBOT：农产品、道琼斯</span>'+
        '<span>(A)	农产品中间也有暂停时间</span>'+
        '<span>4.	NYMEX：能源、钯金、铂金</span>'+
        '<span>5.	COMEX：基本金属、贵金属</span>'+
        '<span>(A)	贵金属：大黄金白银（COMEX）、小黄金白银（Liffe）</span>'+
        '<span>6.	三大指数：建议做小合约，大合约会在现货交易时间暂停交易。</span>'+
        '<span>ii.	伦敦金：场外合约，并无交易所，是OTC合约和真正的期货合约不同，并没有标准化，条款由买卖双方协定，对守方风险较高。交易所合约有交易所作为担保。</span>'+
        '<span>iii.	交易时间:</span>'+
        '<span>1.	外盘期货交易时间长, 大部份品种都是差不多24 小时。</span>'+
        '<span>2.	国内市场没有定价权，容易随外盘市场出现跳空甚至连续跳空。</span>'+
        '<span>iv.	最低波幅: 合约每动1个点会等于多少资金的波动</span>'+
        '<span>1.	最低波幅*合约单位数量=相应盈亏</span>'+
        '<span>v.	交易单位: 每份合约的大小</span>'+
        '<span>vi.	合约月份: 期货不是每个月都有合约, 月份是由各种产品的生产方法来决定。</span>'+
        '<span>vii.	交割方式: 现金或实物交割</span>'+
        '<span>viii.	涨跌停版: 交易所会因应品种来决定。如果价格波动太大, 当天的交易不可在涨上去或跌下去。两种特殊的涨跌停方式： </span>'+
        '<span>1.	棉花根据合约价格决定涨跌停限制。</span>'+
        '<span>2.	东京商品交易所的橡胶期货当天上下5日元会停5分钟，之后再开市限制成为上下10日元然后会再停5分钟，熔断机制。新加坡交易所也有类似机制。 </span>'+
        '</div>';


    var qhnotice_info =
        '<div>' +
        '<span class="transfKnowDesc-title">A.期权</span>' +
        '<span>i.在指定的时间以敲定的价格就某一项标的物进行所有权的转移。</span>'+
        '<span>ii.对买方是权利、对卖方是义务。</span>'+
        '<span>iii.权益金就是期权买卖时，期权当时的价格。</span>'+
        '<span>iv.	到期日就是指定的期权到期日，此后买方的权利及卖方的义务就都失效了。</span>'+
        '<span>v.看涨/认购期权（call） 看空/认沽期权（put） </span>'+
        '<span>vi.敲定价/执行价/行使价：对于买方，市价低于Call的敲定价或高于Put的敲定价则不执行权力，最大损失就是权益金，盈利上不设顶。对于卖方，最大的盈利就是权益金，亏损上不设顶。 </span>'+
        '<span>vii.欧式期权：只有到期权到期日才可以予以执行。 </span>'+
        '<span>viii.美式期权：在期权到期日之前任何时候都可以提前予以执行。 </span>'+
        '<span>ix.伦敦的期权：每月第一个周三以及每月第三个周三。 </span>'+
        '<span>例：2012年6月份的商品看第一个周三的价格是否能够执行。如果决定执行，拿到的期货头寸是在当月第三个周三到期的。此外，每个月的第三个周三都叫做Date。 </span>'+
        '<span>头寸到期：1.平仓；2.交割；3.延期。 </span>'+
        '<span>延期：通过借出或者借入持有延后的到期日的合约 </span>'+
        '<span>交割：现金；实物。例：大原油实物；小原油现金。 </span>'+
        '</div>'+
        '<div>' +
        '<span class="transfKnowDesc-title">B.套利 </span>' +
        '<span>i.	跨月套利：利用不同月份合约之间的价差变化，而赚取利润；优点：风险较小，资金利用率较大。 </span>'+
        '<span>ii.	跨市套利：运用不同地域同一种商品价格未必相同。卖出高估方买入低估方赚取差价。需考虑关税、运费或者成本等因素。 </span>'+
        '<span>iii.	跨品种套利：利用不同品种之间的关联关系和关联价格波动赚取利润。如：大豆，豆油及豆粕。 </span>'+
        '</div>'+
        '<div>' +
        '<span class="transfKnowDesc-title">C.最后交易日/第一通知日 </span>' +
        '<span>i.	在最后交易日来临前, 客户必须把手上头寸平仓或移仓。如客户在到期日后还持有仓位，交易所会认为客户想进行实物交割。如果客户想取消交割权利或义务, 将会产生罚款。客户需要自己承担这些款项。或他们需要真实的进行实物交割而履行合约。 </span>'+
        '<span>ii.	除到期日外, 美盘合约还有第一通知日。而一些合约的第一通知日比最后交易日早。客户必须把在第一通知日前把手上的多头仓位平仓或移仓。在第一通知日当日开始, 所有的空头有权利选择对应的多头来进行交割。如客户在第一通知日或以后持有多头，他可能会被选中要求进行实物交割。若客户无法进行交割，而要求取消交割权利或义务，则交易所也将会向客户征收费用包括行政费，罚款等，客户则需要自己全部承担。客户并不需要在第一通知日前一交易日平前掉手上空头仓位。但通常在第一通知日后, 该品种的交易量会急剧减少，建议所有客户在第一通知日前即进行平仓或移仓处理。所以第一通知日的前一个交易日即可理解为多头的最后交易日。 </span>'+
        '</div>'+
        '<div>' +
        '<span class="transfKnowDesc-title">D.LME调期 </span>' +
        '<span>调期的出现是由于LME三个月期的金属合约与其他期货合约的到期日计算方法的不同而导致。 </span>'+
        '<span>正常美盘某一月份的期货合约只有一个固定的到期日，因此只要在交易所或者公司规定的最后交易日之前交易，就是正常的开仓，加仓，平仓的操作。LME三个月的金属合约却完全不同。因为几乎每一个交易日都对应一个特定的到期日，而不同到期日的品种就相当于美盘中同一品种不同月份的期货合约，所以交易不同到期日的同一品种是不会存在加仓，平仓的操作。 </span>'+
        '<span>调期就相当于美盘的平仓行为。譬如客户现在的仓位是一手多头6月18日到期的铜和一手空头6月24日到期的铜，客户的仓位就已经对锁。但是对锁后客户的仓位并没有被平仓，那么客户电话通知我公司去做调期(把对锁仓位平掉)。这张调期单LME会员会报一个报升贴水价格。如果客户做掉此调期单，那么客户账户上对锁的仓位就会被平仓了。譬如客户选择做调期单，这张调期单步骤如下：场内经纪商会帮客户先沽出一手6月18日到期的铜，然后再买入一手6月24日到期的铜，这样客户的头寸就会被平仓。调期后，虽然仓位已经平掉，但客户的盈利要等到合约到期日才释放出来，如果是亏损的话，会马上在权益扣除。 </span>'+
        '<span>升贴水价格的盈亏由市场而定, 如6月18日到期的铜现在是7,300, 而6月24日到期的铜是7,303。那我们可以把这个情况称为现货贴水或远期升水。因为到期日比较近的铜价格相对比较便宜。而盈亏是由客户做出的方向而决定。 </span>'+
        '<span>升贴水： </span>'+
        '<span>现货升水/远期贴水 Backwardation </span>'+
        '<span>现货贴水/远期升水 Contango </span>'+
        '<span>对应的费用：利息、仓储费、保险。 </span>'+
        '<span>供需影响价格，供给逐步追上需求的过程中价格会下降，因此当前供不应求的情况越严重，远期贴水的情况会越明显。 </span>'+
        '<span><img src="dist/img/loadcenter/transf-desc.png" alt="" /></span>'+
        '<span>借出借入与升贴水对应的收支情况</span>'+
        '<span>以上客户本身持有+1 铜6月18日, -1铜6月24日, 他需要做出Lending借出, 卖6月18日的铜和买入6月24日的铜去平仓。 </span>'+
        '<span>-1铜6月18日 @ 7,300 </span>'+
        '<span>+1铜6月24日 @ 7,303 </span>'+
        '<span>产生了 -3 每手每吨的亏损。 </span>'+
        '</div>'+
        '<div>' +
        '<span class="transfKnowDesc-title">E.盈利计算实例 </span>' +
        '<span>调期实例 譬如客户现在的仓位是一手多头6月18日到期的铜和一手空头6月24日到期的铜，若客户选择做调期单， 这张调期单步骤如下：场内经纪商会帮客户先沽出一手6月18日到期的铜，然后再买入一手6月24日到期的铜，这样客户的头寸就会被平仓。 调期后，虽然仓位已经平掉，但客户的盈利要等到合约到期日才释放出来，如果是亏损的话，会马上从客户权益中扣除。 以上客户本身持有+1 铜6月18日, -1铜6月24日, 他需要做“借出”的操作, 卖6月18日的铜和买入6月24日的铜以平仓。 -1铜6月18日 @ 7,300 +1铜6月24日 @7,303 产生了-3 每手每吨的支出。 </span>'+
        '</div>';
    /***
     *  初始化加载数据
     */

    $('.product-table .table-info-title').html('产品介绍——环球股指期货');
    $('.product-table .product-first-table tbody').html(p_hqTab1);
    $('.product-table .product-second-table tbody').html(p_hqTab2);

    $('.deposit-table .table-info-title').html('保证金——环球股指期货');
    $('.deposit-table .deposit-first-table tbody').html(d_hqTab);

    $('.close-table .close-first-table tbody').html(pc_hqTab);
    $('.close-table .table-info-title').html('平仓须知——环球股指期货');

    $('.transfKnow-table .transfKnowDesc').html(qh_info);
    $('.transfKnow-table .table-info-title').html('交易须知——什么是期货');

    $('#product').on('click','a',function(e){

        var target = e.currentTarget;
        var index = $(target).index();
        var str = '',title = '';
        switch (index) {
            case 0 :
                title = '产品介绍——环球股指期货';
                str = p_hqTab1;
                break;
            case 1 :

                title = '产品介绍——农产品期货';
                str = p_lcbTab1;
                break;
            case 2 :
                title = '产品介绍——外汇期货';
                str = p_whTab1;
                break;
            case 3 :
                title = '产品介绍——能源期货';
                str = p_powTab1;
                break;
            case 4 :
                title = '产品介绍——贵金属期货';
                str = p_gjsTab1;
                break;
            case 5 :
                title = '产品介绍——基本金属期货';
                str = p_baseTab1;
                break;
            case 6 :
                title = '产品介绍——利率期货';
                str = p_llTab1;
                break;
        }
        $('.product-table .table-info-title').html(title);
        $('.product-table .product-first-table tbody').html(str);
        $('.product-table .product-second-table tbody').html(p_hqTab2);

    });
    //
    $('#bond').on('click','a',function(e){

        var target = e.currentTarget;
        var index = $(target).index();
        var str = '',title = '';
        switch (index) {
            case 0 :
                title = '保证金——环球股指期货';
                str = d_hqTab;
                break;
            case 1 :
                title = '保证金——农产品期货';
                str = d_lcpTab;
                break;
            case 2 :
                title = '保证金——外汇期货';
                str = d_whTab;
                break;
            case 3 :
                title = '保证金——能源期货';
                str = d_powTab;
                break;
            case 4 :
                title = '保证金——贵金属期货';
                str = d_gjsTab;
                break;
            case 5 :
                title = '保证金——基本金属期货';
                str = d_baseTab;
                break;
            case 6 :
                title = '保证金——利率期货';
                str = d_llTab1;
                break;
        }
        $('.deposit-table .table-info-title').html(title);
        $('.deposit-table .deposit-first-table tbody').html(str);
    });

    $('#close').on('click','a',function(e){
        var target = e.currentTarget;
        var index = $(target).index();
        var str = '',title = '';
        switch (index) {
            case 0 :
                str = pc_hqTab;
                title = '平仓须知——环球股指期货';
                break;
            case 1 :
                title = '平仓须知——农产品期货';
                str = pc_lcpTab;
                break;
            case 2 :
                title = '平仓须知——外汇期货';
                str = pc_whTab;
                break;
            case 3 :
                title = '平仓须知——能源期货';
                str = pc_powTab;
                break;
            case 4 :
                title = '平仓须知——贵金属期货';
                str = pc_gjsTab;
                break;
            case 5 :
                title = '平仓须知——基本金属期货';
                str = pc_baseTab;
                break;
            case 6 :
                title = '平仓须知——利率期货';
                str = pc_llTab1;
                break;
        }

        $('.close-table .close-first-table tbody').html(str);
        $('.close-table .table-info-title').html(title);
    });

    $('#transfKnow').on('click','a',function(e){
        var target = e.currentTarget;
        var index = $(target).index();
        var str = '',title = '';
        switch (index) {
            case 0 :
                str = qh_info;
                title = '交易须知——什么是期货';
                break;
            case 1 :
                title = '交易须知——海外期货交易所跟主要交易品种';
                str = hwqh_info;
                break;
            case 2 :
                title = '交易须知——外盘期货品种简介';
                str = wpqh_info;
                break;
            case 3 :
                title = '交易须知——外盘期货品种注意事项';
                str = qhnotice_info;
                break;
        }

        $('.transfKnow-table .transfKnowDesc').html(str);
        $('.transfKnow-table .table-info-title').html(title);
    });

}));
