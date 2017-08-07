function header() {
    $.ajax({
        url: 'data/data.json',
        type: 'GET',
        dataType: 'json',
        success: function (data) {
            var topInfo = data.vitae[0];
            var navHeader = data.headerNav;
            var topNav =
                '<div class="txt name fl">姓名：'+topInfo.name+'</div>'+
                '<div class="txt area fl">地区：<span>'+topInfo.city+'</span></div>'+
                '<div class="txt phone fl">联系方式：<span>'+topInfo.phone+'</span></div>'+
                '<div class="txt mail fl">email：<span>'+topInfo.mail+'</span></div> ';
            $('#topLieft').html(topNav);
            for (var i in navHeader) {
                var nav = '';
                var navUlLi = '';
                nav =
                    '<div class="center">'+
                        '<div class="logo fl">'+
                            '<a href="index.html">'+
                                '<img src="'+navHeader[0].logoImgUrl+'" alt="">'+
                            '</a>'+
                        '</div>'+
                        '<ul class="nav fl" id="navUl">'+
                            '<li><a href="'+navHeader[0].Link+'">'+navHeader[0].title+'</a></li>'+
                            '<li><a href="'+navHeader[1].Link+'">'+navHeader[1].title+'</a></li>'+
                            '<li><a href="'+navHeader[2].Link+'">'+navHeader[2].title+'</a></li>'+
                            '<li><a href="'+navHeader[3].Link+'">'+navHeader[3].title+'</a></li>'+
                        '</ul>'+
                    '</div>';
                for (var j=0 ; j<navHeader[i].length ; j++) {
                    navUlLi =
                        '<li><a href="'+navHeader[j].Link+'">'+navHeader[j].title+'</a></li>';
                    $('#navUl').html(navUlLi);
                }
                $('#nav').html(nav);
            }
        },
        error: function () {
            alert('数据获取失败！请放入服务器内使用或者到网速好的地方使用！谢谢！');
        }
    });
}
function footer() {
    var footer =
        '<div class="center">'+
            '<div class="qrChat"><img src="http://bob1991-1253674698.cossh.myqcloud.com/personalWeb/qrChat.jpg" alt=""></div>'+
            '<div class="server">服务热线：180-1718-7988（个人）服务时间9:00-19:00</div>'+
            '<div class="server">'+
                'Copyright © 2015-2017 Bob 上海Bob出版社'+
            '</div>'+
        '</div>';
    $('#footer').html(footer);
}