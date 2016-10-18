//window.onresize = function(){
//    console.log(11)
//
//
//    var oHtml = document.querySelector('html');
//
//    console.log(oHtml);
//
//    var width = oHtml.getBoundingClientRect().width;
//
//
//    oHtml.style.fontSize = width / 50 + 'px';
//
//
//
//

//}

(function (doc, win, undefined) {
    var docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in win? 'orientationchange' : 'resize',
        recalc = function () {
            var clientWidth = docEl.clientWidth;

            if(clientWidth > 750)  return;
            console.log('------>>>>',clientWidth);
            if (clientWidth === undefined) return;
            docEl.style.fontSize = 50 * (clientWidth / 750) + 'px';
        };
    if (doc.addEventListener === undefined) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false)
})(document, window);


