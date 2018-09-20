<template>
    <div id="Navbar">
        <!-- 导航搜索栏 -->
        <div id="Navinput">
            <Navinput />
        </div>
        <!-- 导航栏 -->
        <div id="Navbar_box">
            <div class="box">
                <section>
                    <img src="@/assets/imgs/Navbar/header_logo.png" alt="">
                </section>

                <div id="Navbar_right">
                    <ul id="Navbar_right_content">
                        <li class="Navbar_right_content_li">
                            <a href="#/">首页
                                <span></span>
                            </a>
                        </li>
                        <li class="Navbar_right_content_li">
                            <a href="#/quanan">全案整装
                                <span></span>
                            </a>

                        </li>
                        <li class="Navbar_right_content_li Navbar_right_content_li_Dropdown_box">
                            <a href="#/anli">装修案例
                                <span></span>

                            </a>

                            <!-- 导航下拉框——装修案例 -->
                            <div class="Navbar_second_nav1 Navbar_second_nav">
                                <div class="Navbar_second_nav_box">
                                    <ul class="Navbar_second_nav_ul1">
                                        <li>
                                            <p><a href="">空间 ></a></p>
                                            <div>
                                                <span><a href="">客厅</a></span>
                                                <span><a href="">餐厅</a></span>
                                                <span><a href="">卧室</a></span>
                                                <span><a href="">卫生间</a></span>
                                                <span><a href="">厨房</a></span>
                                                <span><a href="">阳台</a></span>
                                            </div>
                                        </li>
                                        <li>
                                            <p><a href="">风格 ></a></p>
                                            <div>
                                                <span><a href="">现代简约</a></span>
                                                <span><a href="">北欧</a></span>
                                                <span><a href="">新中式</a></span>
                                                <span><a href="">中式</a></span>
                                                <span><a href="">美式</a></span>
                                                <span><a href="">欧式</a></span>
                                            </div>
                                        </li>
                                        <li>
                                            <p><a href="">户型 ></a></p>
                                            <div>
                                                <span><a href="">一居</a></span>
                                                <span><a href="">二居</a></span>
                                                <span><a href="">三居</a></span>
                                                <span><a href="">四居</a></span>
                                                <span><a href="">五居</a></span>
                                                <span><a href="">复式</a></span>
                                            </div>
                                        </li>
                                    </ul>

                                    <ul class="Navbar_second_nav_ul2">
                                        <li>
                                            <a href="">
                                                <img src="@/assets/imgs/Navbar/icon02.png" alt="">
                                                <p><a href="">免费设计</a></p>
                                            </a>

                                        </li>
                                        <li>
                                            <a href="">
                                                <img src="@/assets/imgs/Navbar/icon04.png" alt="">
                                                <p><a href="">整装定制</a></p>
                                            </a>

                                        </li>
                                        <li>
                                            <form action="">
                                                <input type="text" placeholder="输入我家小区查询">
                                                <input type="submit" value="">
                                            </form>
                                            <p>热门搜索：<a href="">奉天九里</a> 、 <br>
                                                <a href="">中海和平之门</a> 、<a href="">浦江苑</a></p>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                        </li>

                        <li class="Navbar_right_content_li Navbar_right_content_li_Dropdown_box">
                            <a href="">设计团队
                                <span></span>

                            </a>

                            <!-- 导航下拉框——设计团队 -->
                            <div class="Navbar_second_nav2 Navbar_second_nav">
                                <div class="Navbar_second_nav_box">
                                    <ul class="Navbar_second_nav_ul1 Navbar_second_nav_ul">

                                        <li>
                                            <p><a href="">风格 ></a></p>
                                            <div>
                                                <span><a href="">现代简约</a></span>
                                                <span><a href="">北欧</a></span>
                                                <span><a href="">新中式</a></span>
                                                <span><a href="">中式</a></span>
                                                <span><a href="">美式</a></span>
                                                <span><a href="">欧式</a></span>
                                            </div>
                                        </li>
                                        <li>
                                            <p><a href="">户型 ></a></p>
                                            <div>
                                                <span><a href="">一居</a></span>
                                                <span><a href="">二居</a></span>
                                                <span><a href="">三居</a></span>
                                                <span><a href="">四居</a></span>
                                                <span><a href="">五居</a></span>
                                                <span><a href="">复式</a></span>
                                            </div>
                                        </li>
                                    </ul>

                                    <ul class="Navbar_second_nav_ul3 Navbar_second_nav_ul">
                                        <li>
                                            <img src="@/assets/imgs/Navbar/design-sjmx.png" alt="设计明星">
                                        </li>
                                        <li>
                                            <a href=""><img src="@/assets/imgs/Navbar/20180624091056692739_avatar.png"
                                                    alt="李欣雨" class="Navbar_second_nav_ul3_img"></a>
                                        </li>
                                        <li>
                                            <a href=""><img src="@/assets/imgs/Navbar/20180623171436852645_avatar.png"
                                                    alt="白涵琦" class="Navbar_second_nav_ul3_img"></a>
                                        </li>
                                        <li>
                                            <a href=""><img src="@/assets/imgs/Navbar/20180626085511909390_avatar.png"
                                                    alt="李承成" class="Navbar_second_nav_ul3_img"></a>
                                        </li>
                                        <li>
                                            <a href=""><img src="@/assets/imgs/Navbar/20180626085356515036_avatar.png"
                                                    alt="吴勇" class="Navbar_second_nav_ul3_img"></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                        </li>
                        <li class="Navbar_right_content_li Navbar_right_content_li_Dropdown_box">
                            <a href="">品质保障
                                <span></span>

                            </a>

                            <!-- 导航下拉框——品质保障 -->
                            <div class="Navbar_second_nav3 Navbar_second_nav">
                                <div class="Navbar_second_nav_box">
                                    <ul>
                                        <li>
                                            <a href="">
                                                <span class="Navbar_second_nav3_imgBox">
                                                    <img src="@/assets/imgs/Navbar/20180613111939766320.png" alt="徽派工艺">
                                                </span>
                                                <div class="Navbar_second_nav3_content">
                                                    <p>徽派工艺</p>
                                                    <span>极致匠心精筑幸福家</span>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="">
                                                <span class="Navbar_second_nav3_imgBox">
                                                    <img src="@/assets/imgs/Navbar/20180613111939327032.png" alt="自有团队">
                                                </span>
                                                <div class="Navbar_second_nav3_content">
                                                    <p>自有团队</p>
                                                    <span>规范化施工质量过硬</span>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="">
                                                <span class="Navbar_second_nav3_imgBox">
                                                    <img src="@/assets/imgs/Navbar/20180613111939334036.png" alt="全程跟踪服务">
                                                </span>
                                                <div class="Navbar_second_nav3_content">
                                                    <p>全程跟踪服务</p>
                                                    <span>解放身心装修0烦恼</span>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="">
                                                <span class="Navbar_second_nav3_imgBox">
                                                    <img src="@/assets/imgs/Navbar/20180613111939692602.png" alt="大牌主材">
                                                </span>
                                                <div class="Navbar_second_nav3_content">
                                                    <p>大牌主材</p>
                                                    <span>一站购齐省心更省钱</span>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="">
                                                <span class="Navbar_second_nav3_imgBox">
                                                    <img src="@/assets/imgs/Navbar/20180613111939766320.png" alt="超大体验馆">
                                                </span>
                                                <div class="Navbar_second_nav3_content">
                                                    <p>超大体验馆</p>
                                                    <span>硬装软装需求全覆盖</span>
                                                </div>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                        </li>
                        <li class="Navbar_right_content_li">
                            <a href="">装修攻略
                                <span></span>
                            </a>

                        </li>
                        <li class="Navbar_right_content_li">
                            <a href="">关于林凤
                                <span></span>
                            </a>

                        </li>
                    </ul>
                    <img src="@/assets/imgs/Navbar/header_telphone.jpg" alt="" id="Navbar_right_logo">
                </div>
            </div>

        </div>






    </div>
</template>

<script>
    import Navinput from '@/components/Navinput'
    export default {
        name: "Navbar",
        components: {
            Navinput
        },
        data() {
            return {};
        },
        methods: {},
        beforeMount() { },
        mounted() {
            $('.Navbar_right_content_li a').on('click', function (e) {
                $(this).children('span').css('height', '6px').parents('.Navbar_right_content_li').siblings().children('a').children('span').css('height', '0')

                $('#Navinput').css('display', 'none')
            })

            $('.Navbar_right_content_li a').eq(0).on('click', function () {
                $('#Navinput').css('display', 'block')
                $(this).attr('href', '/')
            })

            
            $(".Navbar_right_content_li_Dropdown_box").hover(
                function (e) {
                    $(this)
                        .children(".Navbar_second_nav")
                        .css({
                            display: "block"
                        });
                },
                function (e) {
                    $(this)
                        .children(".Navbar_second_nav")
                        .css({
                            display: "none"
                        });
                }
            );

            $(".Navbar_second_nav_ul2 img").hover(
                function (e) {
                    $(e.target)
                        .next()
                        .children()
                        .css({
                            color: "red"
                        });
                },
                function (e) {
                    $(e.target)
                        .next()
                        .children()
                        .css({
                            color: "#323232"
                        });
                }
            );

            $(".Navbar_second_nav_ul3_img").hover(
                function (e) {
                    $(".Navbar_second_nav_ul3_img")
                        .stop()
                        .animate({}, function () {
                            $(e.target).css({ transform: "rotateY(180deg)" });
                        });
                },
                function (e) {
                    $(".Navbar_second_nav_ul3_img")
                        .stop()
                        .animate({}, function () {
                            $(e.target).css({ transform: "rotateY(0deg)" });
                        });
                }
            );

            $(".Navbar_second_nav_box a").hover(
                function (e) {
                    $(this)
                        .find(".Navbar_second_nav3_imgBox")
                        .css({
                            background: "#F1544D"
                        })
                        .end()
                        .find("p")
                        .css({ color: "red" });
                },
                function (e) {
                    $(this)
                        .find(".Navbar_second_nav3_imgBox")
                        .css({
                            background: "#969696"
                        })
                        .end()
                        .find("p")
                        .css({ color: "" });
                }
            )

            // 导航栏固定顶部
            var oTop = $("#Navbar_box").offset().top;
           
            var martop = $("#Navbar_box").outerHeight();

            var sTop = 0;
            // 监听页面的滚动
            $(window).scroll(function () {
               
                sTop = $(this).scrollTop();
                
                if (sTop >= oTop) {
                    
                    $("#Navbar_box").css({ position: "fixed", top: "0" });
                    
                    $("body").css({ "margin-top": martop });
                } else {
                    
                    $("#Navbar_box").css({ position: "static" });
                    $("body").css({ "margin-top": "0" });
                }
            });
        }
    };
</script>

<style scoped>
    a {
        color: #323232;
    }

    /* 导航栏——显示框 */
    #Navbar_box {
        height: 76px;
        width: 100%;
        position: relative;
        border-bottom: 1px solid #000;
        z-index: 10;
    }

    section {
        width: 267px;
        margin-top: 18px;
        float: left;
    }

    #Navbar_right {
        width: 838px;
        height: 75px;
        padding-top: 26px;
        box-sizing: border-box;
        float: right;
    }

    #Navbar_right_content {
        width: 658px;
        float: left;
        display: flex;
        justify-content: space-around;
    }

    #Navbar_right_logo {
        width: 170px;
        float: right;
    }

    .Navbar_right_content_li {
        /* position: relative; */
    }

    .Navbar_right_content_li>a {
        color: #323232;
        display: inline-block;
        width: 70px;
        height: 49px;
        text-align: center;
    }

    .Navbar_right_content_li>a>span {
        height: 0px;
        width: 100%;
        display: inline-block;
        background: url("../assets/imgs/Navbar/gradual-bg.jpg") repeat-y center;
        position: relative;
        bottom: -12px;
    }

    .Navbar_right_content_li:first-child>a>span {
        height: 6px;
    }

    /* 导航栏——隐藏框 */
    .Navbar_second_nav {
        width: 100%;
        background: rgba(255, 255, 255, 0.8);
        padding: 20px 0;
        box-sizing: border-box;
        border-top: 1px solid black;
        border-bottom: 1px solid black;
        position: absolute;
        left: 0;
        margin: 0 auto;
        display: none;
        z-index: 10;
    }

    .Navbar_second_nav2,
    .Navbar_second_nav3 {
        display: none;
    }

    .Navbar_second_nav1 a:hover,
    .Navbar_second_nav2 a:hover {
        color: red !important;
    }

    .Navbar_second_nav_box {
        width: 1026px;
        margin: 0 auto;
    }

    .Navbar_second_nav_ul1>li {
        width: 181px;
        height: 66px;
        border-right: 1px solid black;
        margin-right: 30px;
        margin-top: 8px;
        float: left;
    }

    .Navbar_second_nav_ul1 p {
        width: 180px;
        height: 20px;
    }

    .Navbar_second_nav_ul1 p a {
        font-size: 15px;
    }

    .Navbar_second_nav_ul1 span {
        display: block;
        width: 60px;
        height: 17px;
        float: left;
        margin-top: 6px;
    }

    .Navbar_second_nav_ul1 a {
        font-size: 13px;
    }

    .Navbar_second_nav_ul2>li {
        float: left;
    }

    .Navbar_second_nav_ul2 img {
        width: 60px;
        height: 60px;
    }

    .Navbar_second_nav_ul2>li:first-child,
    .Navbar_second_nav_ul2>li:nth-child(2) {
        margin-right: 24px;
    }

    .Navbar_second_nav_ul2>li:first-child a,
    .Navbar_second_nav_ul2>li:nth-child(2) a {
        display: block;
        width: 60px;
        height: 20px;
        font-size: 15px;
    }

    .Navbar_second_nav_ul2>li:last-child {
        margin-top: 8px;
    }

    .Navbar_second_nav_ul2>li:last-child form {
        position: relative;
    }

    .Navbar_second_nav_ul2>li:last-child p {
        width: 200px;
        height: 32px;
        font-size: 12px;
        margin-top: 6px;
    }

    .Navbar_second_nav_ul2 input:first-child {
        width: 187px;
        height: 35px;
        border: 1px solid #646464;
        padding-left: 5px;
        border-radius: 3px;
    }

    .Navbar_second_nav_ul2 input:last-child {
        width: 28px;
        height: 35px;
        border: none;
        background: url("../assets/imgs/Navbar/search.png") no-repeat center;
        position: absolute;
        right: 10px;
        top: 1px;
    }

    .Navbar_second_nav_ul3>li {
        float: left;
        margin-right: 27px;
    }

    .Navbar_second_nav_ul3>li:first-child>img {
        width: 60px !important;
    }

    .Navbar_second_nav_ul3 img {
        width: 80px;
        height: 80px;
        transition: all 0.3s;
    }

    .Navbar_second_nav_ul {
        margin-left: 36px;
    }

    /* 品质保障——隐藏框 */
    .Navbar_second_nav3>div {
        width: 1162px !important;
    }

    .Navbar_second_nav3 li {
        float: left;
        margin-right: 21.4px;
    }

    .Navbar_second_nav3 a {
        display: flex;
    }

    .Navbar_second_nav3_imgBox {
        display: block;
        width: 80px;
        height: 80px;
        background: #969696;
        border-radius: 50%;
        text-align: center;
        padding-top: 15px;
        box-sizing: border-box;
    }

    .Navbar_second_nav3_content {
        margin-left: 15px;
    }

    .Navbar_second_nav3_content>p {
        margin-top: 18px;
        font-size: 18px;
    }

    .Navbar_second_nav3_content>span {
        font-size: 13px;
        color: #646464;
    }
   
</style>