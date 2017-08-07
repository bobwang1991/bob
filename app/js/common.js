/**
 * Created by wangZhi on 2016/12/21.
 */
var common = {
    //轮播插件
    banner : function ( myJson ) {
        var $tab = myJson.tab;
        var $picUl = myJson.pic;
        var $btnDiv = myJson.btn;
        var speed = myJson.speed || 1000;
        var bannerAuto = myJson.bannerAuto || false;

        var $tabLi = $tab.find('li');
        var $imgWidth = $picUl.find('li').width();
        var len = $tabLi.length;
        var index = 0;
        var timer = null;
        $tabLi.eq(0).addClass('on');

        //点击按钮事件
        $tabLi.click(function () {
            index = $(this).index();
            change();
        });

        //点击左右按钮事件
        $btnDiv.click(function () {
            var i = $(this).index();
            if (i) {
                index++;
                index %= len;
            }else {
                index--;
                if (index < 0) index = len - 1;
            }
            change();
        });

        //清除定时器
        $tab.hover(function () {
            clearInterval(timer);
        },function () {
            timer = setInterval(auto, speed);
        });
        $btnDiv.hover(function () {
            clearInterval(timer);
        },function () {
            timer = setInterval(auto, speed);
        });

        //判断是否轮播
        if (bannerAuto == true) {
            timer = setInterval(auto, speed);
        }

        //自动轮播
        function auto() {
            index++;
            index %= len;
            change();
        }

        function change() {
            $tabLi.eq(index).addClass('on').siblings().removeClass('on');
            $picUl.animate({
                marginLeft: -$imgWidth * index + 'px'
            },300);
        }
    },
    //有间隔的轮播插件
    productBanner : function ( myJson ) {
        var $tab = myJson.tab;
        var $picUl = myJson.pic;

        var $tabLi = $tab.find('li');
        var $imgWidth = $picUl.find('li').width();
        var index = 0;
        $tabLi.eq(0).addClass('on');

        //点击按钮事件
        $tabLi.click(function () {
            index = $(this).index();
            change();
        });

        function change() {
            $tabLi.eq(index).addClass('on').siblings().removeClass('on');
            $picUl.animate({
                marginLeft: -($imgWidth + 59) * index + 'px'
            },300);
        }
    },
    //自定义滚动条插件
    scrollBars : function () {
        $("#demo").panel({iWheelStep:32});
    },
    //饼图canvas插件
    chatBars:function (myJson) {
        var chart = myJson.chart;
        var title = myJson.title;
        chart.radarChart({
            size: [500, 400],
            step: 1,
            title: title,
            values: {
                "JavaScript": 3,
                "jQuery": 4.5,
                "CSS&CSS3": 5,
                "HTML": 5,
                "HTML5": 4.5,
                "微信小程序": 4.5,
                "canvas": 2
            },
            showAxisLabels: true
        });
    },
    //颜色随机
    randonColor16 : function () {
        var r = Math.floor(Math.random() * 256).toString(16);
        var g = Math.floor(Math.random() * 256).toString(16);
        var b = Math.floor(Math.random() * 256).toString(16);
        if (r.length < 2) r = 'f' + r;
        if (g.length < 2) g = 'e' + g;
        if (b.length < 2) b = '0' + b;
        return '#' + r + g + b;
    },
    //获取弹窗背景高度
    shadowBlack : function () {
        var heightW = $(window).height();
        $('.blackShadow').height(heightW);
        window.onresize = function () {
            var heightW = $(window).height();
            $('.blackShadow').height(heightW);
        };
    },
    //弹窗
    showPopUpOrder : function () {
        var hMain = $(window).height();
        $('body').height(hMain);
        $('body').css('overflow','hidden');
        $('.blackShadow').show();
        $('.popUp').show();

        center('box1');
        function center(dom) {
            var boxDom = document.getElementById(dom);
            var w = window.innerWidth;
            var h = window.innerHeight;
            var domW = boxDom.offsetWidth;
            var domH = boxDom.offsetHeight;
            var cleft = (w - domW) / 2;
            var ctop = (h - domH) / 2;
            boxDom.style.left = cleft + 'px';
            boxDom.style.top = ctop + 'px';
            window.onresize = function () {
                center(dom);
            };
        }
    },
    hidePopUpFinish : function () {
        $('body').css('overflow','auto');
        $('body').height('100%');
        $('.blackShadow').hide();
        $('.popUp').hide();

        center('box1');
        function center(dom) {
            var boxDom = document.getElementById(dom);
            var w = window.innerWidth;
            var h = window.innerHeight;
            var domW = boxDom.offsetWidth;
            var domH = boxDom.offsetHeight;
            var cleft = (w - domW) / 2;
            var ctop = (h - domH) / 2;
            boxDom.style.left = cleft + 'px';
            boxDom.style.top = ctop + 'px';
            window.onresize = function () {
                center(dom);
            };
        }
    },
    //居中
    center : function (dom) {
        var boxDom = document.getElementById(dom);
        var w = window.innerWidth;
        var h = window.innerHeight;
        var domW = boxDom.offsetWidth;
        var domH = boxDom.offsetHeight;
        var cleft = (w - domW) / 2;
        var ctop = (h - domH) / 2;
        boxDom.style.left = cleft + 'px';
        boxDom.style.top = ctop + 'px';
    }
};
(function () {
    window.onresize = function () {
        window.location.reload();
    };
})();