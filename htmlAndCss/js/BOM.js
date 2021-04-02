window.onload = function () {
    // 当前窗口大小 出去工具栏和滚动条
    let screen = document.getElementById('add');
    screen.innerHTML = 'aaa';

    var w = window.innerWidth
    || document.documentElement.clientWidth
    || document.body.clientWidth;
    var h = window.innerHeight
    || document.documentElement.clientHeight
    || document.body.clientHeight;
    // document.write(w + 'px, ' + h + 'px');


    let width = window.screen.width;
    let height = window.screen.height;
    let avaiwidth = window.screen.availWidth;
    let avaiheight = window.screen.availHeight;
    let colordepth = window.screen.colorDepth;
    let pixeldepth = window.screen.pixelDepth;
    screen.innerHTML = 'window.innerWidth: ' + w + '<br />' + 'window.innerHeight: ' + h + '<br />'
                        + 'Screen_width: ' + width + '<br />' + 'Screen_height: ' + height + '<br />'
                        + 'Screen_avaiwidth: ' + avaiwidth + '<br />' + 'Screen_avaiheight: ' +avaiheight + '<br />'
                        + 'Screen_colordepth: ' + colordepth + '<br />' + 'Screen_pixeldepth: ' + pixeldepth + '<br />';

};