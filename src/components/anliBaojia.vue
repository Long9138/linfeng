<template>
    <div id="anliBaojia">
        <div class="box">
            <div class="baojia_header">
                <p>装修预算</p>
                <span>200000家庭数据参考、一步解决预算烦恼。</span>
            </div>
        </div>
        <div class="baojia_main">
            <!-- 报价左边 -->
            <div class="baojia_main_lf">
                <ul>
                    <!-- 测量 -->
                    <li class="baojia_main_lf_s on" index='0'>
                        <div class="baojia_main_lf_show baojia_main_lf_show1"></div>

                        <img class="baojia_main_lf_img1" src="../assets/imgs/Shouyemain/icon05.png" alt="">
                        <img class="baojia_main_lf_img2" src="../assets/imgs/Shouyemain/icon05s.png" alt="">
                        <p>免费报价</p>
                    </li>
                    <!-- 规划 -->

                    <a href="" class="baojia_main_lf_s">

                        <div class="baojia_main_lf_show">

                        </div>

                        <img class="baojia_main_lf_img1" src="../assets/imgs/Shouyemain/icon06.png" alt="">
                        <img class="baojia_main_lf_img2" src="../assets/imgs/Shouyemain/icon06s.png" alt="">
                        <p>预算规划</p>

                    </a>
                    <!-- 量尺 -->
                    <li class="baojia_main_lf_s"  index='2'>
                        <div class="baojia_main_lf_show"></div>
                        <img class="baojia_main_lf_img1" src="../assets/imgs/Shouyemain/icon07.png" alt="">
                        <img class="baojia_main_lf_img2" src="../assets/imgs/Shouyemain/icon07s.png" alt="">


                        <p>免费量尺</p>
                    </li>
                    <!-- 案例 -->
                    <a href="" class="baojia_main_lf_s">

                        <div class="baojia_main_lf_show">

                        </div>

                        <img class="baojia_main_lf_img1" src="../assets/imgs/Shouyemain/icon08.png" alt="">
                        <img class="baojia_main_lf_img2" src="../assets/imgs/Shouyemain/icon08s.png" alt="">
                        <p>获取案例</p>

                    </a>
                </ul>
            </div>

            <!-- 报价内容 -->
            <div class="baojia_main_ct">
                <div class="baojia_fb">
                    <form action="" class="fsubmit">
                        <div class="fsubmit_div">
                            <p>房屋户型</p>
                            <div class="sel-bg">
                                <input type="text" class="cursor" value="2室">
                                <ul class="sel-list ">
                                    <li>1室</li>
                                    <li>2室</li>
                                    <li>3室</li>
                                    <li>4室</li>
                                    <li>5室</li>
                                </ul>
                            </div>
                            <div class="sel-bg">
                                <input type="text" class="cursor" value="1厅">
                                <ul class="sel-list ">
                                    <li>1厅</li>
                                    <li>2厅</li>
                                    <li>3厅</li>
                                    <li>4厅</li>
                                    <li>5厅</li>
                                </ul>
                            </div>
                            <div class="sel-bg">
                                <input type="text" class="cursor" value="1卫">
                                <ul class="sel-list ">
                                    <li>1卫</li>
                                    <li>2卫</li>
                                    <li>3卫</li>
                                    <li>4卫</li>
                                    <li>5卫</li>
                                </ul>
                            </div>
                        </div>
                        <div class="fsubmit_div">
                            <p>您的称呼</p>
                            <input type="text" placeholder="请输入您的称呼" class="pro-form-input">
                            <div class="sel-bg sel-bg2">
                                <input type="text" class="cursor cursor1" placeholder="请选择房屋面积">
                                <ul class="sel-list">
                                    <li>70㎡以下</li>
                                    <li>71㎡ - 90㎡</li>
                                    <li>91㎡ - 120㎡ </li>
                                    <li>121㎡ - 150㎡</li>
                                    <li>151㎡ - 300㎡</li>
                                    <li>300㎡以上</li>
                                </ul>
                            </div>
                        </div>
                        <div class="fsubmit_div">
                            <p>电话号码</p>
                            <input type="text" class="pro-form-input sms_code_target" placeholder="请输入电话号码">
                            <input type="text" class="pro-form-input" placeholder="请输入验证码">
                            <span class="getcode sms_code">
                                获取验证码
                            </span>
                        </div>
                        <div class="fsubmit_div">
                            <button type="submit">
                                <div></div>
                                <span>人工精准报价</span>
                            </button>
                        </div>
                    </form>
                    <form action="" class="fsubmit" style="display:none">
                        <div class="fsubmit_div">
                            <p>您的称呼</p>
                            <input type="text" class="pro-form-input" placeholder="请输入您的称呼">
                            <p style="margin-left: 35px">预约时间</p>
                            <input type="text" class="pro-form-input" placeholder="预约时间">
                        </div>
                        <div class="fsubmit_div">
                            <p>房屋地址</p>
                            <input type="text" class="pro-form-input" placeholder="请输入地址">
                        </div>
                        <div class="fsubmit_div">
                            <p>电话号码</p>
                            <input type="text" class="pro-form-input sms_code_target" placeholder="请输入电话号码">
                            <input type="text" class="pro-form-input" placeholder="请输入验证码">
                            <span class="getcode sms_code">
                                获取验证码
                            </span>
                        </div>
                        <div class="fsubmit_div">
                            <button type="submit">
                                <div></div>
                                <span>人工精准报价</span>
                            </button>
                        </div>
                    </form>
                    <a href="" class="form-rg-pic">
                        <img src="../assets/imgs/Shouyemain/project-pic02.jpg" alt="">
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'anliBaojia',
        data() {
            return {

            }
        },
        methods: {



        },
        mounted() {
            // 报价——左边悬停、点击效果
            $('.baojia_main_lf_show1').css('opacity', 0.6)

            $('.baojia_main_lf_s').on('mouseenter', function (e) {
                $(this).addClass('baojia_main_lf_xt').children('.baojia_main_lf_show').css('opacity', 0.6).siblings('.baojia_main_lf_img2').css('display', 'block').siblings('p').css('color', '#fff')
            })

            $('.baojia_main_lf_s').on('mouseleave', function (e) {
                $(this).removeClass('baojia_main_lf_xt').children('.baojia_main_lf_show').css('opacity', 0).siblings('.baojia_main_lf_img2').css('display', 'none').siblings('p').css('color', '#585858')

                $('.baojia_main_lf_show1').css('opacity', 0.6).siblings('.baojia_main_lf_img2').css('display', 'block').siblings('p').css('color', '#fff')

            })


            $('.baojia_main_lf_s').on('click', function (e) {
                $(this).addClass('on').children('div').addClass('baojia_main_lf_show1').end().siblings('li').removeClass('on').children('div').removeClass('baojia_main_lf_show1').css('opacity', 0).siblings('.baojia_main_lf_img2').css('display', 'none').siblings('p').css('color', '#585858')
                
                if($(this).attr('index') == 0){
                    $('.fsubmit').eq(0).show();
                    $('.fsubmit').eq(1).hide();
                }
                else{
                    $('.fsubmit').eq(0).hide();
                    $('.fsubmit').eq(1).show();
                }
            })

            // 报价主体下拉框效果
            $('.cursor').on('click', function (e) {
                var e = e || event;
                e.stopPropagation();
                $(".sel-bg .sel-list").hide();
                $(this).parent().find(".sel-list").show();

            })
            $('.sel-list li').on('click', function (e) {
                $(this).parents(".sel-bg").find("input").val($(this).text());
            })
            $(document).click(function (e) {
                $(".sel-bg .sel-list").hide();
            });

            $('.fsubmit_div button').hover(function (e) {
                $(this).children('div').css('opacity', 0.8)
            }, function (e) {
                $(this).children('div').css('opacity', 0.6)
            })

        }

    }
</script>

<style lang="less">
    // 报价头部
    .baojia_header {
        margin-bottom: 30px;

        p {
            padding: 30px 0 6px 0;
            margin-bottom: 6px;
            text-align: center;
            font-size: 30px;
            color: #323232;
            background: url("../assets/imgs/Shouyemain/area-title-line.png") no-repeat center bottom;
        }

        span {
            display: block;
            text-align: center;
            font-size: 20px;
            color: #646464;
        }
    }

    .baojia_main {
        width: 100%;
    }

    // 报价左边
    .baojia_main_lf {
        position: relative;
        width: 256px;
        float: left;
    }

    .baojia_main_lf>ul>a,
    .baojia_main_lf>ul>li {
        position: relative;
        float: left;
        margin: 0 4px 10px;
        width: 120px;
        height: 120px;
        cursor: pointer;
        color: #585858;
        border-radius: 6px;
        overflow: hidden;
    }

    .baojia_main_lf_xt,
    .on {
        background: url("../assets/imgs/Shouyemain/project-pic01.jpg") no-repeat top center;

    }

    .baojia_main_lf_show {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background: url("../assets/imgs/Shouyemain/gradual-bg.jpg") repeat-y center;
        background-size: auto auto;
        background-size: cover;
        opacity: 0;
    }

    .baojia_main_lf img {
        position: absolute;
        top: 5px;
        left: 50%;
        margin-left: -40px;
        width: 80px;
    }

    .baojia_main_lf_img2 {
        display: none;
    }

    .on .baojia_main_lf_img2 {
        display: block;
    }


    .baojia_main_lf p {
        position: absolute;
        width: 100%;
        left: 0;
        bottom: 20px;
        font-size: 16px;
        color: #585858;
        text-align: center;
    }

    .on p {
        color: #fff;
    }


    // 报价内容
    .baojia_main_ct {
        float: right;
        width: 894px;
    }

    // 报价表单
    .baojia_fb {
        float: left;
        width: 894px !important;
        min-height: 250px;
        padding: 28px 28px 0 50px;
        border-radius: 6px;
        background: #fff;
        box-sizing: border-box;
        position: relative;
    }

    .fsubmit {
        width: 610px;
        float: left;
        position: absolute;
    }

    .fsubmit_div {
        height: 35px;
        margin-bottom: 15px;
        position: relative;
    }

    .fsubmit_div>p {
        float: left;
        min-width: 55px;
        font-size: 14px;
        margin-left: 0;
        color: #323232;
        line-height: 35px;
    }

    .sel-bg {
        position: relative;
        width: 153px;
        height: 35px;
        line-height: 33px;
        border: 1px solid #b5b5b5;
        float: left;
        margin-left: 25px;
        box-sizing: border-box;
    }

    .sel-bg input {
        text-align: center;
        font-size: 14px;
        width: 100%;
        cursor: pointer;
        background: url("../assets/imgs/Shouyemain/project-sj.png") no-repeat 95% center;
        border: none;
    }

    .sel-list {
        position: absolute;
        left: -1px;
        top: 34px;
        background: #fff;
        width: 100%;
        border: 1px solid #b5b5b5;
        border-top: none;
        display: none;
        z-index: 11;
        max-height: 123px;
        overflow-y: scroll;
    }

    .sel-list li {
        height: 30px;
        line-height: 30px;
        cursor: pointer;
        font-size: 14px;
        text-align: center;
        border-bottom: 1px dotted #ccc;
    }

    .pro-form-input {
        width: 153px;
        height: 35px;
        line-height: 35px;
        padding: 0 5px;
        border: 1px solid #b5b5b5 !important;
        float: left;
        text-align: center;
        color: #323232;
        margin-left: 25px;
        box-sizing: border-box;
    }

    .sel-bg2 {
        width: 331px;
    }

    .getcode {
        text-align: center;
        background: #f0f0f0;
        cursor: pointer;
        width: 153px;
        height: 35px;
        line-height: 35px;
        padding: 0 5px;
        border: 1px solid #b5b5b5 !important;
        float: left;
        text-align: center;
        color: #323232;
        margin-left: 25px;
        box-sizing: border-box;
        font-size: 12px;
    }

    .fsubmit_div button {
        position: relative;
        width: 331px;
        height: 45px;
        margin-left: calc(50% - 165px);
        font-size: 14px;
        color: #fff;
        text-align: center;
        line-height: 45px;
        border: none;
        background: url("../assets/imgs/Shouyemain/project-pic03.jpg") no-repeat top center;
        background-size: cover;
    }

    .fsubmit_div button div {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 45px;
        background: url("../assets/imgs/Shouyemain/gradual-bg.jpg") repeat-y center;
        background-size: cover;
        opacity: 0.6;
    }

    .fsubmit_div button span {
        position: absolute;
        right: 0;
        top: 0;
        width: 100%;
        font-size: 16px;
        text-align: center;
        height: 45px;
        line-height: 45px;
        color: #fff;
    }




    /* 报价右边图 */
    .form-rg-pic {
        float: right;
        width: 190px;
        height: 200px;
        border-radius: 6px;
        overflow: hidden;
    }

    .form-rg-pic img {
        width: 190px;
        height: 200px;
    }
</style>