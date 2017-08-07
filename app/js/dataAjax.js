var URL = 'data/data.json';
function homeData() {
    $.ajax({
        type: 'GET',
        url: URL,
        dataType: 'json',
        success: function (data) {
            var webList = data.webList;
            var videoList = data.videoList;
            var vitae = data.vitae;
            for (var i in webList) {
                var webListHtml = '';
                webListHtml +=
                    '<ul>' +
                        '<li><a target="_blank" href="'+webList[0].link+'"><img src="'+webList[0].img+'" alt=""></a></li>'+
                        '<li><a target="_blank" href="'+webList[1].link+'"><img src="'+webList[1].img+'" alt=""></a></li>'+
                        '<li><a target="_blank" href="'+webList[2].link+'"><img src="'+webList[2].img+'" alt=""></a></li>'+
                        '<li><a target="_blank" href="'+webList[3].link+'"><img src="'+webList[3].img+'" alt=""></a></li>'+
                        '<li><a target="_blank" href="'+webList[4].link+'"><img src="'+webList[4].img+'" alt=""></a></li>'+
                    '</ul>';
                $('#webList').html(webListHtml);
            }
            common.productBanner({
                tab: $('#productWeb .tab'),
                pic: $('#productWeb .pic ul')
            });
            for (var i in videoList) {
                var videoListHtml = '';
                videoListHtml +=
                    '<ul>'+
                        '<li><a href="'+videoList[0].link+'"><img src="'+videoList[0].img+'" alt=""></a></li>'+
                        '<li><a href="'+videoList[1].link+'"><img src="'+videoList[1].img+'" alt=""></a></li>'+
                        '<li><a href="'+videoList[2].link+'"><img src="'+videoList[2].img+'" alt=""></a></li>'+
                        '<li><a href="'+videoList[3].link+'"><img src="'+videoList[3].img+'" alt=""></a></li>'+
                        '<li><a href="'+videoList[4].link+'"><img src="'+videoList[4].img+'" alt=""></a></li>'+
                    '</ul>';
                $('#videoList').html(videoListHtml);
            }
            common.productBanner({
                tab: $('#productVideo .tab'),
                pic: $('#productVideo .pic ul')
            });
            for (var i in vitae) {
                // 首页个人评价截取
                var str = vitae[1]['contentArr'];
                str = str.substr(0, str.indexOf('解'));
                var personHtml = '';
                personHtml +=
                    '<dt><img src="'+vitae[0].personImg+'" alt=""></dt>'+
                    '<dd>' +
                        '<p class="name">姓名：<span>'+vitae[0].name+'</span></p>'+
                        '<p class="name">性别：<span>'+vitae[0].sex+'</span></p>'+
                        '<p class="name">出生年月：<span>'+vitae[0].birthDay+'</span></p>'+
                        '<p class="name">e-mail：<span>'+vitae[0].mail+'</span></p>'+
                        '<p class="name">'+vitae[1].titleName+'：</p>'+
                        '<p class="name personal">'+str+'...'+'</p>'+
                    '</dd>';
                $('#vitae').html(personHtml);
            }
        },
        error: function () {
            alert('数据获取失败！请放入服务器内使用或者到网速好的地方使用！谢谢！');
        }
    });
}
function vitaeData() {
    $.ajax({
        url: URL,
        type: 'GET',
        dataType: 'json',
        success: function (data) {
            var personInfo = data.vitae;
            for (var i in personInfo) {
                var peisonImgHtml = '';
                var personalInfoHtml = '';
                var personalAppraisalHtml = '';
                var objectiveHtml = '';
                var jobHtml = '';
                var schoolHtml = '';
                var trainingHtml = '';
                peisonImgHtml += '<img src="' + personInfo[0].personImg + '" alt="">';
                personalInfoHtml +=
                    '<div class="pInfo-title colorTxt">' + personInfo[0].titleName + '</div>' +
                    '<dl class="pInfo-con small fl">' +
                        '<dt>姓名：</dt>' +
                        '<dd>'+personInfo[0].name+'</dd>' +
                    '</dl>'+
                    '<dl class="pInfo-con small fl">'+
                        '<dt>性别：</dt>'+
                        '<dd>'+personInfo[0].sex+'</dd>'+
                    '</dl>'+
                    '<dl class="pInfo-con small fl">' +
                        '<dt>出生年月：</dt>' +
                        '<dd>'+personInfo[0].birthDay+'</dd>' +
                    '</dl>'+
                    '<dl class="pInfo-con small fl">'+
                        '<dt>居住地：</dt>'+
                        '<dd>'+personInfo[0].city+'</dd>'+
                    '</dl>'+
                    '<dl class="pInfo-con small fl">' +
                        '<dt>工作年限：</dt>' +
                        '<dd><span>'+personInfo[0].jobYear+'</span>年</dd>'+
                    '</dl>'+
                    '<dl class="pInfo-con small fl">'+
                        '<dt>e-mail：</dt>'+
                        '<dd><a href="mailto:bob_1991@qq.com">'+personInfo[0].mail+'</a></dd>'+
                    '</dl>'+
                    '<dl class="pInfo-con small fl">'+
                        '<dt>手机：</dt>'+
                        '<dd>'+personInfo[0].phone+'</dd>'+
                    '</dl>'+
                    '<dl class="pInfo-con small fl">'+
                        '<dt>QQ：</dt>'+
                         '<dd>'+personInfo[0].qq+'</dd>'+
                    '</dl>'+
                    '<dl class="pInfo-con long fl">'+
                         '<dt>目前薪资：</dt>'+
                         '<dd><span>月薪</span><span>'+personInfo[0].money+'</span><span>人民币</span></dd>'+
                    '</dl>'+
                    '<dl class="pInfo-con long fl">'+
                         '<dt>个人主页：</dt>'+
                         '<dd><a href="javascript:void(0);">'+personInfo[0].personWebLink+'</a></dd>'+
                    '</dl>'+
                    '<dl class="pInfo-con small fl">'+
                         '<dt>身高：</dt>'+
                         '<dd><span>'+personInfo[0].height+'</span>cm</dd>'+
                    '</dl>';
                personalAppraisalHtml +=
                    '<div class="pA-title colorTxt">'+personInfo[1].titleName+'</div>'+
                    '<div class="pA-con border">'+personInfo[1].contentArr+'</div>';
                objectiveHtml +=
                    '<div class="job-title colorTxt">'+personInfo[2].titleName+'</div>'+
                    '<div class="job-con border">'+
                        '<dl class="clearfix">'+
                            '<dt>到岗时间：</dt>'+
                            '<dd>'+personInfo[2].workTime+'</dd>'+
                        '</dl>'+
                        '<dl class="clearfix">'+
                            '<dt>工作性质：</dt>'+
                            '<dd>'+personInfo[2].workType+'</dd>'+
                        '</dl>'+
                        '<dl class="clearfix">'+
                            '<dt>希望行业：</dt>'+
                            '<dd>'+personInfo[2].hopeJob+'</dd>'+
                        '</dl>'+
                        '<dl class="clearfix">'+
                            '<dt>目标地点：</dt>'+
                            '<dd>'+personInfo[2].city+'</dd>'+
                        '</dl>'+
                        '<dl class="clearfix">'+
                            '<dt>期望薪资：</dt>'+
                            '<dd>月薪&nbsp;&nbsp;&nbsp;8000-9999</dd>'+
                        '</dl>'+
                        '<dl class="clearfix">'+
                            '<dt>目标职能：</dt>'+
                            '<dd>'+personInfo[2].workThink+'</dd>'+
                        '</dl>'+
                        '<dl class="clearfix">'+
                            '<dt>求职状态：</dt>'+
                            '<dd>'+personInfo[2].stateJob+'</dd>'+
                        '</dl>'+
                    '</div>';
                jobHtml +=
                    '<div class="experience-title colorTxt">'+personInfo[3].titleName+'</div>'+
                    '<div class="experience-con border clearfix" id="workExperience"></div>';
                schoolHtml +=
                    '<div class="experience-title colorTxt">'+personInfo[4].titleName+'</div>'+
                    '<div class="experience-con clearfix" id="examInfo"></div>';
                trainingHtml +=
                    '<div class="experience-title colorTxt">' + personInfo[5].titleName + '</div>' +
                    '<div class="experience-con clearfix" id="trainContent"></div>';
                $('#peisonImg').html(peisonImgHtml);
                $('#personalInfo').html(personalInfoHtml);
                $('#personalAppraisal').html(personalAppraisalHtml);
                $('#objective').html(objectiveHtml);
                $('#job').html(jobHtml);
                $('#school').html(schoolHtml);
                $('#training').html(trainingHtml);
            }
            for (var i in personInfo) {
                if (i = 3) {
                    var jobExpress = personInfo[i].jobExpress;
                    var workHtml = '';
                    for (var j=0;j<jobExpress.length;j++) {
                        workHtml +=
                            '<div class="work fl">'+
                                '<dl class="clearfix">'+
                                    '<dt>就职年限：</dt>'+
                                    '<dd>'+jobExpress[j]['workTime']+'</dd>'+
                                '</dl>'+
                                '<dl class="clearfix">'+
                                    '<dt>公司名称：</dt>'+
                                    '<dd>'+jobExpress[j]['companyName']+'</dd>'+
                                '</dl>'+
                                '<dl class="clearfix">'+
                                    '<dt>公司类别和人数：</dt>'+
                                    '<dd>'+jobExpress[j]['companyType']+'</dd>'+
                                '</dl>'+
                                '<dl class="clearfix">'+
                                    '<dt>工作描述：</dt>'+
                                    '<dd>'+jobExpress[j]['companyDesc']+'</dd>'+
                                '</dl>'+
                            '</div>';
                        $('#workExperience').html(workHtml);
                    }
                }
                if(i=4) {
                    var schoolExpress = personInfo[i].jobExpress;
                    var examInfoHtml = '';
                    for (var j=0;j<schoolExpress.length;j++) {
                        examInfoHtml +=
                            '<div class="work fl">'+
                            '<dl class="clearfix">'+
                            '<dt>教育年限：</dt>'+
                            '<dd>'+schoolExpress[j].workTime+'</dd>'+
                            '</dl>'+
                            '<dl class="clearfix">'+
                            '<dt>学校名称：</dt>'+
                            '<dd>'+schoolExpress[j].companyName+'</dd>'+
                            '</dl>'+
                            '<dl class="clearfix">'+
                            '<dt>专业描述：</dt>'+
                            '<dd>'+schoolExpress[j].companyDesc+'</dd>'+
                            '</dl>'+
                            '</div>';
                        $('#examInfo').html(examInfoHtml);
                    }
                }
                if(i=5) {
                    var trainExpress = personInfo[i].jobExpress;
                    var trainContentHtml = '';
                    for (var j=0;j<trainExpress.length;j++) {
                        trainContentHtml +=
                            '<div class="work fl">'+
                            '<dl class="clearfix">'+
                            '<dt>教育年限：</dt>'+
                            '<dd>'+trainExpress[j].workTime+'</dd>'+
                            '</dl>'+
                            '<dl class="clearfix">'+
                            '<dt>学校名称：</dt>'+
                            '<dd>'+trainExpress[j].companyName+'</dd>'+
                            '</dl>'+
                            '<dl class="clearfix">'+
                            '<dt>专业描述：</dt>'+
                            '<dd>'+trainExpress[j].companyDesc+'</dd>'+
                            '</dl>'+
                            '</div>';
                        $('#trainContent').html(trainContentHtml);
                    }
                }
            }
        },
        error: function () {
            alert('数据获取失败！请放入服务器内使用或者到网速好的地方使用！谢谢！');
        }
    });
}
function webList() {
    $.ajax({
        type: 'GET',
        url: URL,
        dataType: 'json',
        success: function (data) {
            var webList = data.webList;
            var moreContentHtml = '';
            for (var i in webList) {
                moreContentHtml +=
                    '<dl>'+
                    '<dt><img src="'+webList[i].img+'" alt=""></dt>'+
                    '<dd>'+
                    '<div class="title">'+webList[i].title+'</div>'+
                    '<div class="authorTime clearfix">'+
                    '<p class="author fl">'+webList[i].author+'</p>'+
                    '<p class="time fr">'+webList[i].time+'</p>'+
                    '</div>'+
                    '<div class="desc">'+webList[i].desc+'</div>'+
                    '<a href="'+webList[i].link+'" class="btn" target="_blank">点击进入</a>'+
                    '</dd>'+
                    '</dl>';
                $('#webList').html(moreContentHtml);
            }
        },
        error: function () {
            alert('数据获取失败！请放入服务器内使用或者到网速好的地方使用！谢谢！');
        }
    });
}

function videoList() {
    $.ajax({
        type: 'GET',
        url: URL,
        dataType: 'json',
        success: function (data) {
            var videoList = data.videoList;
            var moreContentHtml = '';
            for (var i in videoList) {
                moreContentHtml +=
                    '<dl>'+
                        '<dt><img src="'+videoList[i].img+'" alt=""></dt>'+
                        '<dd>'+
                            '<div class="title">'+videoList[i].title+'</div>'+
                            '<div class="authorTime clearfix">'+
                            '<p class="author fl">'+videoList[i].author+'</p>'+
                            '<p class="time fr">'+videoList[i].time+'</p>'+
                            '</div>'+
                            '<div class="desc">'+videoList[i].desc+'</div>'+
                            '<a href="'+videoList[i].link+'" class="btn" target="_blank">点击进入</a>'+
                        '</dd>'+
                    '</dl>';
                $('#webList').html(moreContentHtml);
            }
        },
        error: function () {
            alert('数据获取失败！请放入服务器内使用或者到网速好的地方使用！谢谢！');
        }
    });
}