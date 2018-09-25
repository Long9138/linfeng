<template>
    <div>
        <div class="pz_top"></div>
        <!-- 品质头部定位 -->
        <div class="pz_header">
            <div class="pzh_dw">
                <div class="box">
                    <p>
                        当前位置：
                        <a href="#/">首页</a>
                        >
                        <a href="#">品质保障</a>
                        >
                        <a href="#" class="pzh_dw_a">徽派工艺</a>
                    </p>
                </div>
            </div>
            <!-- 品质头部图片 -->
            <div class="pzh_ib">
                <ul>
                    <li><img src="../assets/imgs/pinzhi/20180624115822572906.jpg" alt=""></li>
                    <li><img src="../assets/imgs/pinzhi/20180614171146936471.jpg" alt=""></li>
                    <li><img src="../assets/imgs/pinzhi/20180805144818818780.jpg" alt=""></li>
                    <li><img src="../assets/imgs/pinzhi/20180615100344432885.jpg" alt=""></li>
                    <li><img src="../assets/imgs/pinzhi/20180628180340757888.jpg" alt=""></li>
                </ul>
            </div>
        </div>

        <!-- 导航 -->
        <div class="pz-nav box">
            <ul>
                <li><a href="#/pinzhiGY" class="on">徽派工艺</a></li>
                <li><a href="#">自有团队</a></li>
                <li><a href="#">全程跟踪服务</a></li>
                <li><a href="#">大牌主材</a></li>
                <li><a href="#">超大体验馆</a></li>
            </ul>
        </div>


        <!-- 主体内容 -->
        <div>
            <router-view/>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {

            }
        },
        methods: {},
        mounted() {
               
            $('.pz-nav').find('ul').on('click', 'a', function (e) {
                var index = $(e.target).parent().index();
                $(this).css({ color: '#fff', background: 'orangered' }).addClass('on').parent().siblings('li').children('a').css({ color: 'black', background: '#fff' }).removeClass('on')
                $('.pzh_ib li:eq(' + index + ')').css('display', 'block').siblings('li').css('display', 'none');

                $('.pzh_dw_a').text($('.pz-nav li:eq(' + index + ')').find('a').text())
            })
        
            $('.pz-nav a').hover(function(e){
                $(this).css({ color: '#fff', background: 'orangered' })
            },function(e){           
                $(this).css({ color: 'black', background: '#fff' })
            })
        }
    }
</script>

<style lang="less">
    .pz_top {
        height: 77px;
    }

    .pz_header {
        position: relative;
        width: 100%;
        height: 450px;
    }

    /* 品质头部定位 */
    .pzh_dw {
        position: absolute;
        width: 100%;
        left: 0;
        top: 0;
        z-index: 1;
        font-size: 13px;
        color: #323232;
        padding: 18px 0;
    }

    /* 品质头部图片 */
    .pzh_ib {
        position: relative;
        left: 50%;
        margin-left: -960px;
        width: 1920px;
        height: 450px;
        z-index: 0;
    }

    .pzh_ib li {
        position: absolute;
        top: 0;
        display: none;
    }

    .pzh_ib li:first-child {
        display: block;
    }

    .pzh_ib img {
        height: 450px;
        width: 1920px;
    }

    /* 品质导航 */
    .pz-nav {
        height: 60px;
    }

    .pz-nav li {
        float: left;
        width: 20%;
        line-height: 60px;
        text-align: center;

    }

    .pz-nav li:first-child a {
        color: #fff;
        background: orangered;
    }

    .pz-nav a {
        display: block;
        font-size: 18px;
    }

    .pz-nav a:hover {
        color: #fff;
        background: orangered;
    }
    .pz-nav .on{
        color: #fff;
        background: orangered;
    }
</style>