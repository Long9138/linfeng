<template>
    <div id="aside">
        <!-- 侧栏-右边 -->
        <div class="side">
            <ul>
                <li>
                    <a href="http://plt.zoosnet.net/lr/chatpre.aspx?id=plt32705416&lng=cn&r=&rf1=http%3A//www.sylfzs&rf2=.cn/zhengzhuang&p=http%3A//www.sylfzs.cn/&cid=1536031399537653561658&sid=669b7170b5ee4cea9854adfcf27f449e"
                        target="_blank">
                        <img src="../assets/imgs/Aside/icon09s.png" alt="在线咨询">
                        <p>在线咨询</p>
                    </a>
                </li>
                <li>
                    <a href="http://plt.zoosnet.net/lr/chatpre.aspx?id=plt32705416&lng=cn&r=&rf1=http%3A//www.sylfzs&rf2=.cn/zhengzhuang&p=http%3A//www.sylfzs.cn/&cid=1536031399537653561658&sid=669b7170b5ee4cea9854adfcf27f449e"
                        target="_blank">
                        <img src="../assets/imgs/Aside/icon07s.png" alt="上门量房">
                        <p>上门量房</p>
                    </a>
                </li>
                <li>
                    <a href="" target="_blank">
                        <img src="../assets/imgs/Aside/icon05s.png" alt="免费报价">
                        <p>免费报价</p>
                    </a>
                </li>
                <li>
                    <img src="../assets/imgs/Aside/icon10s.png" alt="" class="wxImg">
                    <div class="wx">
                        <p>官方微信</p>
                        <span>
                            <img src="../assets/imgs/Aside/20180612104735433792.jpg" alt="">
                        </span>
                    </div>
                </li>
                <li class="side-fh">
                    <img src="../assets/imgs/Aside/top.png" alt="">
                </li>
            </ul>
        </div>

        <!-- 侧栏-底部 -->
        <div class="foot-fixed">
            <div class="foot-fixed-min">
                <img src="../assets/imgs/Aside/foot-float-min.png" alt="立即预约">
                <span class="hides">立即预约</span>
            </div>
            <div class="foot-fixed-big">
                <div class="box">
                    <img src="../assets/imgs/Aside/foot-float.png" alt="免费定制整装家居" class="foot-float-pic">
                    <div class="foot-float-lf">
                        <p>免费定制整装家居</p>
                        <span>一站置家 全程无忧 一省到底</span>
                    </div>
                    <div class="foot-float-rg">
                        <form action="">
                            <input type="text" placeholder="您的称呼">
                            <input type="text" placeholder="您装修的小区">
                            <input type="text" placeholder="您的联系方式">
                            <input type="submit" value="立即预约">
                        </form>
                    </div>
                    <img src="../assets/imgs/Aside/hide.png" alt="" class="hide">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        // name: "aside",
        data() {
            return {

            }
        },
        methods: {

        },
        mounted() {
            $('.side li').hover(function (e) {
                $(this).css('background', '#f1544d')
            }, function (e) {
                $(this).css('background', '')
            })

            $('.side li').eq(3).hover(function (e) {
                $(this).children('.wx').stop().animate({ width: '123px' }, 500)
            }, function (e) {
                $(this).children('.wx').stop().animate({ width: '0' }, 500)
            })

            $('.side-fh').click(function () {
                $("html,body").animate({
                    scrollTop: 0
                }, 600);
            })

            // 监听页面滚动
            window.onwheel = function(e){
                var ohtml = document.documentElement;
                if (ohtml.scrollTop >= 380) {
                    $('.side').css({
                        position:'fixed',
                        top:'30%'
                    })
                    $('.side-fh').css('display','block')

                }
                else {
                    $('.side').css({
                        position:''
                    })
                    $('.side-fh').css('display','none')
                }
            }

            $('.hide').click(function(){
                $('.foot-fixed').css('display','none')
            })
        }
    }
</script>

<style lang="less">
    /* 侧栏-右边 */
    .side {
        position: absolute;
        right: 0;
        top: 55%;
        width: 100px;
        height: 180px;
        z-index: 11;
    }

    .side li {
        position: relative;
        width: 100px;
        height: 100px;
        border-radius: 3px;
        background: #999999;
        margin-bottom: 2px;
        cursor: pointer;
        transition: all 0.3s;
    }

    .side li:nth-child(1) {
        background: #f1544d;
    }

    .side li img {
        display: block;
        width: 75px;
        margin: 0 auto;
    }

    .side li p {
        text-align: center;
        font-size: 16px;
        color: #fff;
        margin-top: -10px;
    }

    .side li img {
        display: block;
    }

    .side li .wxImg {
        width: 80px;
        margin: 0 auto;
        padding-top: 10px;
    }

    .side li .wx {
        position: absolute;
        top: 0;
        right: 100px;
        width: 0;
        font-weight: normal;
        font-size: 12px;
        line-height: 38px;
        color: #323232;
        background-color: rgba(255, 255, 255, .6);
        text-align: center;
        overflow: hidden;
    }

    .side li .wx p {
        font-weight: normal;
        margin: 0;
        height: 34px !important;
        color: #323232;
        text-align: center;
        background: rgba(255, 255, 255, .6);
    }

    .wx span {
        display: block;
        width: 120px;
        height: 110px;
        background: rgba(255, 255, 255, .6);
    }

    .wx img {
        display: block;
        width: 100px !important;
        height: 100px !important;
    }

    .side-fh {
        height: 38px !important;
        display: none;
    }

    .side-fh img {
        width: 23px !important;
        padding-top: 13px !important;
    }

    /* 侧栏-底部 */
    .foot-fixed {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 100px;
    padding-top: 25px;
    background: rgba(0, 0, 0, 0.5);
    box-sizing: border-box;
    z-index: 11;
}
.foot-fixed-min {
    position: absolute;
    left: -100%;
    width: 120px;
    bottom: 0;
    transition: 0.2s all;
}
.foot-fixed-min img {
    height: 100px;
    float: left;
}
.foot-fixed-min span {
    float: left;
    padding: 5px 5px 0;
    margin-top: 5px;
    width: 35px;
    line-height: 16px;
    height: 90px;
    font-size: 14px;
    text-align: center;
    color: #fff;
    background: #aa1718 url("../assets/imgs/Aside/foot-float-jt.png") no-repeat center 92%;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    box-sizing: border-box;
}
.foot-fixed .box {
    position: relative;
}
.foot-float-pic {
    position: absolute;
    top: -95px;
    left: 30px;
}
.foot-float-lf {
    float: left;
    width: 200px;
}
.foot-float-lf p {
    font-size: 23px;
    color: #fff;
    padding-bottom: 5px;
    margin-bottom: 5px;
    letter-spacing: 2px;
    border-bottom: 1px solid #fff;
}
.foot-float-lf span {
    display: block;
    font-size: 13px;
    color: #fff;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
}
.foot-float-rg {
    float: left;
    padding-top: 5px;
    margin-left: 30px;
}
.foot-float-rg form{
    display: flex;
}
.foot-float-rg input {
    height: 50px;
    width: 210px;
    line-height: 50px;
    font-size: 18px;
    padding: 0 5px;
    margin-left: 13px;
    background: #fff;
    border-radius: 4px;
}
.foot-float-rg input:first-child, 
.foot-float-rg input:last-child {
    width: 140px;
}
.foot-float-rg input:last-child {
    color: #fff;
    background: url("../assets/imgs/Aside/gradual-bg.jpg") repeat-y center;
    background-size: auto auto;
    background-size: cover;
    border: none;
}
.hide {
    position: absolute;
    right: 0;
    top: -15px;
    width: 28px;
    cursor: pointer;
}
</style>