<template>
    <div id="quanan">
        <div class="banner-zz">
            <div class="banner banner-B">
                <div class="bd">
                    <img src="../assets/imgs/Quanan/20180707165250951495.jpg" alt="">
                </div>
            </div>
            <img src="../assets/imgs/Quanan/zz-jt.png" alt="" class="zz-jt">
        </div>
        <div class="box">
            <div class="area-title">
                <p>解决传统装修模式之痛</p>
                <span>轻松收获完美整家</span>
            </div>
        </div>
        <div class="yul">
            <div>
                <div style="text-align:center;">
                    <img src="../assets/imgs/Quanan/20180828153818874151.jpg" alt="">
                    <img src="../assets/imgs/Quanan/20180828153436691915.jpg" alt="">
                    <img src="../assets/imgs/Quanan/20180828153450531570.jpg" alt="">
                </div>
            </div>
        </div>
        <div class="box">
            <div class="area-title area-title-third">
                <p>林凤全案整装</p>
                <span>极致之选 完美体验</span>
            </div>
            <div class="zz-tap-one">
                <ul class="zz-tap-ul">
                    <li>
                        <p>客厅</p>
                        <span>KETING</span>
                    </li>
                    <li>
                        <p>餐厅</p>
                        <span>CANTING</span>
                    </li>
                    <li>
                        <p>卧室</p>
                        <span>WOSHI</span>
                    </li>
                    <li>
                        <p>厨房</p>
                        <span>CHUFANG</span>
                    </li>
                    <li>
                        <p>卫生间</p>
                        <span>WEISHENGJIAN</span>
                    </li>
                    <li>
                        <p>阳台</p>
                        <span>YANGTAI</span>
                    </li>
                </ul>
                <div class="zz-tap-ul-box">
                    <div class="zz-tap-con on">
                        <div class="zz-tap-pic-lf">
                            <img src="../assets/imgs/Quanan/20180708160345120571.jpg" alt="">
                        </div>
                        <div class="zz-tap-pic-rg">
                            <img src="../assets/imgs/Quanan/20180708160345350543.jpg" alt="">
                        </div>
                    </div>
                    <div class="zz-tap-con on">
                        <div class="zz-tap-pic-lf">
                            <img src="../assets/imgs/Quanan/20180708160345487707.jpg" alt="">
                        </div>
                        <div class="zz-tap-pic-rg">
                            <img src="../assets/imgs/Quanan/20180708160345809634.jpg" alt="">
                        </div>
                    </div>
                    <div class="zz-tap-con on">
                        <div class="zz-tap-pic-lf">
                            <img src="../assets/imgs/Quanan/20180628085218992913.jpg" alt="">
                        </div>
                        <div class="zz-tap-pic-rg">
                            <img src="../assets/imgs/Quanan/20180804162028651348.jpg" alt="">
                        </div>
                    </div>
                    <div class="zz-tap-con on">
                        <div class="zz-tap-pic-lf">
                            <img src="../assets/imgs/Quanan/20180628085838651074.jpg" alt="">
                        </div>
                        <div class="zz-tap-pic-rg">
                            <img src="../assets/imgs/Quanan/20180804162028411105.jpg" alt="">
                        </div>
                    </div>
                    <div class="zz-tap-con on">
                        <div class="zz-tap-pic-lf">
                            <img src="../assets/imgs/Quanan/20180628085838957977.jpg" alt="">
                        </div>
                        <div class="zz-tap-pic-rg">
                            <img src="../assets/imgs/Quanan/20180804162028979373.jpg" alt="">
                        </div>
                    </div>
                    <div class="zz-tap-con on">
                        <div class="zz-tap-pic-lf">
                            <img src="../assets/imgs/Quanan/20180629092947462438.jpg" alt="">
                        </div>
                        <div class="zz-tap-pic-rg">
                            <img src="../assets/imgs/Quanan/20180804162028218515.jpg" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "quanan",
        data() {
            return {

            }
        },
        methods: {
            
        },
        mounted() {
            
            $('.zz-tap-ul').find('li').on('click', function (e) {
                var index = $(e.target).parent().index();
                // console.log(index)
                $('.zz-tap-con:eq(' + index + ')').show().siblings().hide()
            })
        }
    }
</script>

<style lang="less">
    .banner-zz {
        position: relative;
    }

    .banner {
        width: 100%;
        height: 500px;
        overflow: hidden;
        position: relative;
    }

    .banner .bd {
        position: relative;
        left: 50%;
        margin-left: -960px;
        width: 1920px;
        height: 500px;
        z-index: 0;
    }

    .banner .bd img {
        width: 1920px;
        height: 500px;
        display: block;
    }

    .zz-jt {
        position: absolute;
        left: 50%;
        margin-left: -21px;
        bottom: -25px;
    }

    .area-title {
        margin-bottom: 30px;
    }

    .area-title p {
        padding: 30px 0 6px 0;
        margin-bottom: 6px;
        text-align: center;
        font-size: 30px;
        color: #323232;
        background: url("../assets/imgs/Quanan/area-title-line.png") no-repeat center bottom;
    }

    .area-title span {
        display: block;
        text-align: center;
        font-size: 20px;
        color: #646464;
    }

    .yul div img {
        display: block;
        width: 100%;
        height: auto;
    }

    .zz-tap-one {
        position: relative;
    }

    .zz-tap-ul {
        position: absolute;
        left: 587px;
        top: 0;
        width: 200px;
    }

    .zz-tap-ul li {
        height: 83px;
        border-top: 1px solid #fff;
        width: 200px;
        color: white;
        background: #f1544d;
        text-align: center;
        cursor: pointer;
    }

    .zz-tap-ul li:hover,
    .zz-tap-ul li.on {
        background: #f27671;
    }

    .zz-tap-ul li:first-child {
        border-top: none;
    }

    .zz-tap-ul li p {
        font-size: 20px;
        color: #fff;
        padding-top: 23px;
    }

    .zz-tap-ul li span {
        display: block;
        font-size: 10px;
        opacity: .5;
        color: #fff;
        text-transform: uppercase;
    }

    .zz-tap-con {
        display: none;
        height: 503px;
    }

    .zz-tap-con:first-child {
        display: block;
    }

    .zz-tap-pic-lf {
        position: relative;
        width: 587px;
        height: 503px;
        float: left;
    }

    .zz-tap-pic-lf img {
        width: 964px;
        height: 100%;
        position: absolute;
        right: 0;
        top: 0;
    }

    .zz-tap-pic-rg {
        position: relative;
        float: right;
        width: 375px;
        height: 503px;
    }

    .zz-tap-pic-rg img {
        position: absolute;
        top: 0;
        left: 0;
        width: 756px;
        height: 503px;
        float: right;
    }
</style>