<template>
    <div id="Footer">
        <div class="foot">
            <div class="box">
                <div class="foot-code">
                    <a href="">
                        <img src="../assets/imgs/Footer/20180612134930523248.jpg" alt="">
                    </a>
                    <a href="">
                        <img src="../assets/imgs/Footer/20180612134930247161.jpg" alt="">
                    </a>
                </div>
                <div class="foot-rg">
                    <ul class="foot-nav">
                        <li><a href="">关于林凤</a></li>
                        <li><a href="">联系我们</a></li>
                        <li><a href="">招聘信息</a></li>
                        <li><a href="">意见反馈</a></li>
                    </ul>
                    <p class="foot-tel">400-656-9909</p>
                    <span>地址:浑南区沈营大街28-28号全案整装东北体验中心</span>
                    <span>备案信息：LIPC备12430540</span>
                </div>
                <div class="clear"></div>
                <div class="foot-link">
                    <span>友情链接：</span>
                    <p>
                    <a href="http://www.yuanqian.net/">上海装修公司</a>
                    <a href="http://www.rqfang.cn/">任丘租房</a>
                    <a href="http://top10.chinafloor.cn/">地板十大品牌</a>
                    <a href="http://www.t-jiaju.com/">家居用品</a>
                    <a href="http://www.jia.com/shenyang/">沈阳装修</a>
                    <a href="http://luoyang.365azw.com/">洛阳装修</a>
                    <a href="www.china10board.com">生态板</a>
                    <a href="http://www.michibuy.com/">科勒卫浴</a>
                    <a href="https://ln.zjtcn.com/">辽宁工程造价信息网</a>
                    <a href="www.uju365.com/">重庆装修公司</a>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"Footer",
    data(){
        return{

        }
    }
}
</script>

<style lang="less">
    .foot{
    padding: 60px 0;
    overflow: hidden;
    background: url("../assets/imgs/Footer/jx-footer-bg.jpg") no-repeat center top;
    }
    .foot-code{
        float: left;
margin: 0 15px;
    }
    .foot-code img {
    float: left;
    width: 130px;
    height: 130px;
    margin-left: 15px;
}
.foot-rg {
    float: right;
    width: 800px;
    min-height: 132px;
    padding-left: 55px;
    border-left: 2px solid #fff;
    box-sizing: border-box;
}
.foot-nav {
    overflow: hidden;
}
.foot-nav li {
    float: left;
    margin-right: 28px;
}
.foot-nav a {
    color: #fff;
    font-size: 18px;
}
.foot-nav>li>a:hover{
    color: red;
}
.foot-tel {
    margin: 10px 0;
    padding-left: 50px;
    font-size: 38px;
    font-weight: bold;
    color: #fff;
    background: url("../assets/imgs/Footer/foot-tel.png") no-repeat left center;
}
.foot-rg span {
    display: block;
    font-size: 14px;
    color: #fff;
}
.clear {
    clear: both;
}
.foot-link {
    padding: 50px 30px 0;
    font-size: 14px;
    color: #fff;
}
.foot-link span {
    float: left;
}
.foot-link p {
    float: left;
    width: 890px;
    color: #fff;
}
.foot-link a {
    float: left;
    color: #fff;
    margin-left: 15px;
    margin-bottom: 5px;
   
}
.foot-link a:hover{
    text-decoration: underline;
}
</style>
