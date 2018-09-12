<template>
    <div id="Navbar">
        <div id="Navbar_box">
            <div class="box">
                <section>
                    <img src="@/assets/imgs/header_logo.png" alt="">
                </section>

                <div id="Navbar_right">
                    <ul id="Navbar_right_content">
                        <li class="Navbar_right_content_li">
                            <a href="">首页
                                    
                            </a>
                            <span></span>
                        </li>
                        <li class="Navbar_right_content_li">
                            <a href="">全案整装
                                    
                            </a>
                            <span></span>
                        </li>
                        <li class="Navbar_right_content_li">
                            <a href="">装修案例
                                    
                            </a>
                            <span></span>
                        </li>
                        <li class="Navbar_right_content_li">
                            <a href="">设计团队
                                   
                            </a>
                            <span></span>
                        </li>
                        <li class="Navbar_right_content_li">
                            <a href="">品质保障
                                    
                            </a>
                            <span></span>
                        </li>
                        <li class="Navbar_right_content_li">
                            <a href="">装修攻略
                                   
                            </a>
                            <span></span>
                        </li>
                        <li class="Navbar_right_content_li">
                            <a href="">关于林凤
                                    
                            </a>
                            <span></span>
                        </li>
                    </ul>
                    <img src="@/assets/imgs/header_telphone.jpg" alt="" id="Navbar_right_logo">
                </div>
            </div>

        </div>
    </div>
</template>

<script>
    export default {
        name: "Navbar",
        data() {
            return {

            }
        },
        methods:{

        },
        beforeMount(){

           
        },
        mounted(){
            $(".Navbar_right_content_li").hover(function(e){
                $(this).find('span').animate({ height: "6px" }, 500);
            },function(e){
                $(this).find('span').animate({ height: "0" }, 500);
            })
        }
    }
</script>

<style scoped>
    #Navbar_box {
        height: 76px;
        width: 100%;
        background: lightcoral;
        text-align: center;
    }

    section {
        width: 267px;
        line-height: 100px;
        float: left;
    }

    #Navbar_right {
        width: 838px;
        height: 75px;
        padding-top: 26px;
        box-sizing: border-box;
        /* background: lawngreen; */
        float: right;
    }

    #Navbar_right_content {
        width: 658px;
        float: left;
        display: flex;
        justify-content: space-between;
    }

    #Navbar_right_logo {
        width: 170px;
        float: right;
    }
    .Navbar_right_content_li{
       position: relative;
    }
    .Navbar_right_content_li>a{
        color: #323232;
        display: block;
        width: 70px;
        height: 49px;
        /* padding-bottom: 28px;
        box-sizing: border-box; */
    }
    .Navbar_right_content_li>span{
        height: 6px;
        /* display: block; */
        background: url("../assets/imgs/gradual-bg.jpg") repeat-y center;
        /* position: absolute;
        bottom: 0; */
    }
</style>