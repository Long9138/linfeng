<template>
  <div id="shouyeMain">
    <div class="sy_top"></div>
    <!-- 首页轮播 -->
    <div class="syCarousel">
      <el-carousel :interval="2000" arrow="always">
        <el-carousel-item v-for="(item,index) in sylbimg" :key="index">
          <img :src="item" alt="">
        </el-carousel-item>
        <div class="banner-line"></div>
      </el-carousel>
      
    </div>


    <!-- 轮播下面form表单 -->
    <div id="form_box">
      <div class="box">
        <ul class="form_box_ul">
          <li class="form1 form">
            <a href="">
              <p>免费验房</p>
              <span>助您全面排查房屋质量问题</span>
            </a>
          </li>
          <li class="form2 form">
            <a href="">
              <p>免费量尺</p>
              <span>打造完美装修方案的第一步</span>
            </a>
          </li>
          <li class="form3 form">
            <a href="">
              <p>免费设计</p>
              <span>报名送充电宝，签单送家具</span>
            </a>
          </li>
        </ul>
      </div>

    </div>

    <div class="box">
      <!-- 首页全案整装 -->
      <div id="shouye_quanan_box">
        <!-- 首页全案整装logo -->
        <div id="shouye_quanan_logo">
          <p>全案整装</p>
          <span>向传统家装说NO!</span>
        </div>
        <!-- 首页全案整装主体内容box -->
        <div id="shouye_quanan_main">
          <!-- 首页全案整装主体内容头部 -->
          <div id="shouye_quanan_main_header">
            <ul>
              <li class="shouye_quanan_main_header_img shouye_quanan_main_header_img1" @click="quananClick1($event)">
                <div class="shouye_quanan_main_header_img_div"></div>
                <p>向传统家装说<img src="../assets/imgs/Shouyemain/no-text.png" alt=""></p>
              </li>
              <li class="shouye_quanan_main_header_img shouye_quanan_main_header_img2" @click="quananClick2($event)">
                <div></div>
                <p>什么是全案整装</p>
              </li>
              <li class="shouye_quanan_main_header_img shouye_quanan_main_header_img3" @click="quananClick3($event)">
                <div></div>
                <p>全案整装的优势</p>
              </li>
            </ul>
          </div>
          <!-- 首页全案整装主体内容 -->
          <div id="shouye_quanan_main_content">
            <a href="">
              <img src="../assets/imgs/Shouyemain/20180828153200688729.jpg" alt="" class="shouye_quanan_main_content_img1">
              <img src="../assets/imgs/Shouyemain/20180828153200820758.jpg" alt="" class="shouye_quanan_main_content_img2">
              <img src="../assets/imgs/Shouyemain/20180828153200382843.jpg" alt="" class="shouye_quanan_main_content_img3">
            </a>
          </div>
        </div>

      </div>


      <!-- 首页装修案例 -->
      <div id="shouye_anli_box">
        <section id="shouye_anli_header">
          <div id="shouye_anli_header_left">
            <p>装修案例</p>
            <span>海量风格个性定制</span>
          </div>
          <div id="shouye_anli_header_content">
            <p id="shouye_anli_header_content_nav1">
              <a index=0 href="">按风格</a>
              <a index=1 href="">按户型</a>
              <a index=2 href="">按面积</a>
              <a index=3 href="">按功能</a>

            </p>
            <p class="shouye_anli_header_content_nav2">
              <a v-for='(ite,index) in item2' href="" :key="index">{{ite}}</a>
            </p>
          </div>

          <a href="" id="shouye_anli_header_right">更多</a>

        </section>

        <!-- 首页装修案例主体 -->
        <div class="shouye_anli_main">
          <div>
            <div class="shouye_anli_main_left alzt_boxs">
              <a href="">
                <span class="shouye_anli_main_show"></span>
                <img src="../assets/imgs/Shouyemain/20180830103614322033.jpg" alt="">

                <div class="shouye_anli_main_text">
                  <h3>保利海上五月花</h3>
                  <span>三居 160平米 美式
                  </span>

                  <p>
                    设计说明：本案风格定位为简美风格非常注重环保美观,但是对配饰的要求比较高。要通过软装家具进行格局的划分，整体采用深浅搭配的方式，营造一种舒适、美观的的家居氛围。
                  </p>
                </div>

              </a>
            </div>

            <div class="shouye_anli_main_right alzt_boxs">
              <div class="shouye_anli_main_right_top">
                <a href="">
                  <span class="shouye_anli_main_show"></span>
                  <img src="../assets/imgs/Shouyemain/20180830103614234555.jpg" alt="">

                  <div class="shouye_anli_main_text">
                    <h3>其士盛和祥</h3>
                    <span>二居 90平米 现代简约</span>
                    <p>
                      设计说明：本案以现代简约的风格来设计。以极小跳跃性的色彩为整体主色调，居家效果，简洁，大方，实用，是业主在繁杂的工作中放松心情，回到温馨的港湾。
                    </p>

                  </div>
                </a>

              </div>

              <div class="shouye_anli_main_right_bom alzt_boxs">
                <a href="">
                  <span class="shouye_anli_main_show"></span>
                  <img src="../assets/imgs/Shouyemain/20180830103614355844.jpg" alt="">
                  <div class="shouye_anli_main_text">
                    <h3>碧桂园星荟</h3>
                    <span>二居 78平米 美式</span>
                    <p>
                      设计说明：简美式的家装在房屋设计、家具打造、色彩处理和元素拼接上都力求简单化，通过不拘一格的线条设计加简洁单一的色调，给人们提供最爽朗、最清脆的住宅环境。
                    </p>
                  </div>
                </a>

              </div>
              <div class="shouye_anli_main_right_bom alzt_boxs">
                <a href="">
                  <span class="shouye_anli_main_show"></span>
                  <img src="../assets/imgs/Shouyemain/20180830103614588891.jpg" alt="">
                  <div class="shouye_anli_main_text">
                    <h3>听雨观澜</h3>
                    <span>二居 480平米 其他</span>
                    <p>
                      设计说明：该案设计采用迷情法尔赛设计风格，艺术与时间的雕琢，华贵与空间的妆点，灵魂与人生的交错，缔造出一个艺术殿堂。对原有建筑结构的理解与修改，利用现有的结构空间加以修饰，使其建筑结构更加丰富多彩。穹顶壁画与造景的窗画使空间的得到了艺术的升华。
                    </p>
                  </div>
                </a>

              </div>


            </div>
          </div>

        </div>
      </div>


      <!-- 首页报价 -->
      <div id="shouyeBaojia">
        <shouyeBaojia />

      </div>
    </div>

    <!-- 设计师 -->
    <div id="shouyeShejishi">
      <shouyeShejishi />
    </div>

    <!-- 预约 -->
    <div class="">
      <div class="box">
        <a href="http://plt.zoosnet.net/lr/chatpre.aspx?id=plt32705416&lng=cn&r=&rf1=&rf2=&p=http%3A//www.sylfzs.cn/&cid=1536031399537653561658&sid=a1ddedd6612540b59fb971de969ca208"
          class="advantage">
          <img src="../assets/imgs/Shouyemain/20180828153343267816.jpg" alt="">
        </a>
      </div>
    </div>

    <!-- 攻略 -->
    <div id="shouyegonglue">
      <shouyeGonglue />
    </div>
  </div>
</template>

<script>
  import shouyeBaojia from "@/components/shouyeBaojia";
  import shouyeShejishi from "@/components/shouyeShejishi";
  import shouyeGonglue from "@/components/shouyeGonglue";
  export default {
    name: "shouyeMain",
    components: {
      shouyeBaojia,
      shouyeShejishi,
      shouyeGonglue
    },
    data() {
      return {
        sylbimg: [
          require("../assets/imgs/Carousel/20180828120525118676.jpg"),
          require("../assets/imgs/Carousel/20180823114409969293.jpg"),
          require("../assets/imgs/Carousel/20180629090504296353.jpg"),
          require("../assets/imgs/Carousel/20180629090657643136.jpg")
        ],
        item: [
          [
            "现代简约",
            "北欧",
            "新中式",
            "中式",
            "美式",
            "欧式",
            "地中海",
            "工业风",
            "港式",
            "田园",
            "混搭",
            "日式",
            "新古典",
            "其他"
          ],
          [
            "一居",
            "二居",
            "三居",
            "四居",
            "五居",
            "复式",
            "别墅",
            "办公空间",
            "LOFT"
          ],
          [
            "70㎡以下",
            "71㎡ - 90㎡",
            "91㎡ - 120㎡",
            "121㎡ - 150㎡",
            "151㎡ - 300㎡",
            "300㎡以上"
          ],
          [
            "餐厅",
            "卧室",
            "卫生间",
            "厨房",
            "阳台",
            "书房",
            "儿童房",
            "休闲区",
            "衣帽间",
            "门厅",
            "过廊",
            "户型图"
          ]
        ],
        item2: []
      };
    },
    methods: {
      quananClick1(e) {
        $(".shouye_quanan_main_content_img1")
          .stop()
          .animate({ zIndex: 1, opacity: 1 }, 300)
          .siblings()
          .stop()
          .animate({ zIndex: 0, opacity: 0 }, 300)
          .end()
          .children("div")
          .addClass("shouye_quanan_main_header_img_div");
      },
      quananClick2(e) {
        $(".shouye_quanan_main_content_img2")
          .stop()
          .animate({ zIndex: 1, opacity: 1 }, 300)
          .siblings()
          .stop()
          .animate({ zIndex: 0, opacity: 0 }, 300);
        $(".shouye_quanan_main_content_img2")
          .children("div")
          .addClass("shouye_quanan_main_header_img_div");
      },
      quananClick3(e) {
        $(".shouye_quanan_main_content_img3")
          .stop()
          .animate({ zIndex: 1, opacity: 1 }, 300)
          .siblings()
          .stop()
          .animate({ zIndex: 0, opacity: 0 }, 300)
          .end()
          .children("div")
          .addClass("shouye_quanan_main_header_img_div");
      }
    },
    beforeMount() { },
    mounted() {
      $(".form").hover(
        function (e) {
          $(this)
            .css({ boxShadow: "0 0 20px gray" })
            .find("p")
            .css({ color: "red" });
        },
        function (e) {
          $(this)
            .css({ boxShadow: "none" })
            .find("p")
            .css({ color: "" });
        }
      );

      $(".shouye_quanan_main_header_img").click(function (e) {
        $(this)
          .children("div")
          .addClass("shouye_quanan_main_header_img_div")
          .end()
          .siblings()
          .children("div")
          .removeClass("shouye_quanan_main_header_img_div");
      });

      var that = this;
      this.item2 = this.item[0];
      $("#shouye_anli_header_content_nav1 a:first-child").css({ color: "red" });
      $("#shouye_anli_header_content_nav1 a").on("mouseover", function () {
        var i = $(this).attr("index");
        // alert(i);
        $(this)
          .css({ color: "red" })
          .siblings()
          .css({ color: "" });
        that.item2 = that.item[i];
      });

      // 案例主体阴影、文字效果
      $(".alzt_boxs a").on("mouseover", function (e) {
        // console.log($(this))
        $(this)
          .children("span")
          .css({
            transform: "scale(1)",
            opacity: "1"
          })
          .end()
          .find("h3")
          .css({
            marginTop: "0px",
            opacity: "1"
          })
          .siblings("span")
          .css({
            marginTop: "0px",
            opacity: "1"
          })
          .siblings("p")
          .css({
            marginTop: "0px",
            opacity: "1"
          });
      });
      $(".alzt_boxs a").on("mouseleave", function (e) {
        // console.log($(this))
        $(this)
          .children("span")
          .css({
            transform: "scale(0)",
            opacity: "0"
          })
          .end()
          .find("h3")
          .css({
            marginTop: "-50px",
            opacity: "0"
          })
          .siblings("span")
          .css({
            marginTop: "-50px",
            opacity: "0"
          })
          .siblings("p")
          .css({
            marginTop: "150px",
            opacity: "0"
          });
      });
    }
  };
</script>

<style lang="less">
  .sy_top {
    height: 77px;
  }

  /* 首页轮播 */
  .syCarousel .el-carousel__arrow i {
    display: none;
  }

  .syCarousel .el-carousel__container {
    height: 500px;
    width: 100%;
    /* margin: 0 auto; */
  }

  .syCarousel .el-carousel__arrow {
    width: 26px;
    height: 94px;
    opacity: 0.4;
    border-radius: 0;
  }

  .syCarousel .el-carousel__arrow:hover {
    opacity: 0.8;
  }

  .syCarousel .el-carousel__arrow--left {
    background: url('../assets/imgs/Carousel/left3.png') no-repeat center;
  }

  .syCarousel .el-carousel__arrow--right {
    background: url('../assets/imgs/Carousel/right3.png') no-repeat center;
  }

  .syCarousel .el-carousel__item img {
    width: 100%;
    height: 100%;
  }

  .syCarousel .el-carousel__button {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    margin: 0 10px;
    margin-bottom: 10px;
  }

  .syCarousel .el-carousel__button:hover {
    background-color: red;
  }

  .syCarousel .banner-line {
    height: 8px;
    width: 100%;
    background: url("../assets/imgs/Aside/gradual-bg.jpg") repeat-y center;
    background-size: cover;
    position: absolute;
    bottom: -0;
    z-index: 5;
  }

  /* 轮播下面form表单 */
  #form_box {
    height: 134px;

    .form_box_ul {
      margin-left: -26px;
    }

    .form {
      float: left;
      margin: 17px 0 0 26px;
      padding: 25px 140px 25px 30px;
      box-sizing: border-box;
    }

    .form1 {
      background: url("../assets/imgs/Shouyemain/icon01.png") no-repeat 86% center;
    }

    .form1:hover {
      background-image: url("../assets/imgs/Shouyemain/icon01s.png");
    }

    .form2 {
      background: url("../assets/imgs/Shouyemain/icon02.png") no-repeat 86% center;
    }

    .form2:hover {
      background-image: url("../assets/imgs/Shouyemain/icon02s.png");
    }

    .form3 {
      background: url("../assets/imgs/Shouyemain/icon03.png") no-repeat 86% center;
    }

    .form3:hover {
      background-image: url("../assets/imgs/Shouyemain/icon03s.png");
    }

    .form p {
      width: 200px;
      height: 27px;
      margin-bottom: 5px;
      font-size: 21px;
    }

    .form span {
      width: 200px;
      height: 20px;
      font-size: 15px;
      display: block;
    }
  }

  /* 首页全案整装 */
  #shouye_quanan_box {
    margin-bottom: 30px;

    #shouye_quanan_logo {
      margin-bottom: 30px;
    }

    #shouye_quanan_logo>p {
      padding: 30px 0 6px 0;
      margin-bottom: 6px;
      text-align: center;
      font-size: 30px;
      color: #323232;
      background: url("../assets/imgs/Shouyemain/area-title-line.png") no-repeat center bottom;
    }

    #shouye_quanan_logo>span {
      display: block;
      text-align: center;
      font-size: 20px;
      color: #646464;
    }

    /* 全案整装头部 */

    #shouye_quanan_main_header>ul {
      margin-left: -25px;
      position: relative;
      height: 90px;
    }

    .shouye_quanan_main_header_img {
      width: 370px;
      height: 90px;
      background-size: cover;
      float: left;
      margin-left: 25px;
      cursor: pointer;

      .shouye_quanan_main_header_img_div {
        width: 370px;
        height: 90px;
        opacity: 0.8;
        position: absolute;
        background: rgba(0, 0, 0, 0.6);
        background: url("../assets/imgs/Shouyemain/gradual-bg.jpg") repeat-y center;
        /* background-size: cover;
            background-size: 100% 100%; */
      }
    }

    .shouye_quanan_main_header_img1 {
      background: url("../assets/imgs/Shouyemain/entire01.jpg") repeat-y center;
    }

    .shouye_quanan_main_header_img2 {
      background: url("../assets/imgs/Shouyemain/entire02.jpg") repeat-y center;
    }

    .shouye_quanan_main_header_img3 {
      background: url("../assets/imgs/Shouyemain/entire03.jpg") repeat-y center;
    }

    .shouye_quanan_main_header_img>p {
      width: 370px;
      height: 90px;
      position: absolute;
      line-height: 90px;
      text-align: center;
      color: #fff;
      font-size: 22px;
      z-index: 1;
    }

    /* 全案整装内容 */
    #shouye_quanan_main_content {
      margin-top: 40px;
      height: 437px;

      a {
        position: relative;

        img {
          position: absolute;
        }

        .shouye_quanan_main_content_img1 {
          z-index: 1;
        }
      }
    }
  }

  /* 首页装修案例 */
  #shouye_anli_box {
    margin-top: 40px;
    height: 551px;

    #shouye_anli_header {
      margin-bottom: 30px;

      #shouye_anli_header_left {
        float: left;
        padding-right: 40px;
        border-right: 1px solid #646464;

        p {
          font-size: 30px;
          color: #323232;
        }

        span {
          font-size: 15px;
          color: #646464;
        }
      }

      #shouye_anli_header_content {
        margin-left: 40px;
        margin-top: 5px;
        width: 602px;
        float: left;

        #shouye_anli_header_content_nav1 {
          padding: 0 5px;
          text-overflow: ellipsis;
          overflow: hidden;
          white-space: nowrap;
          border-bottom: 1px solid #646464;

          a {
            margin-left: 25px;
            font-size: 16px;
            font-weight: bold;
            color: #646464;
            line-height: 26px;
          }
        }

        .shouye_anli_header_content_nav2 {
          padding: 0 5px;
          text-overflow: ellipsis;
          overflow: hidden;
          white-space: nowrap;

          a {
            margin-left: 20px;
            font-size: 13px;
            color: #646464;
            line-height: 26px;
          }

          a:hover {
            color: red;
          }
        }
      }

      #shouye_anli_header_right {
        display: block;
        float: right;
        width: 116px;
        height: 38px;
        font-weight: normal;
        font-size: 18px;
        color: #fff;
        text-align: center;
        line-height: 38px;
        margin-top: 8px;
        background: url("../assets/imgs/Shouyemain/more-sj.png") no-repeat 80% center,
          url("../assets/imgs/Shouyemain/gradual-bg.jpg") repeat-y center;
        background-size: 7px 16px, cover;
      }

      #shouye_anli_header_right:hover {
        letter-spacing: 2px;
        background: url("../assets/imgs/Shouyemain/more-sj.png") no-repeat 82% center,
          url("../assets/imgs/Shouyemain/gradual-bg.jpg") repeat-y center;
        transition: 0.2s all;
      }
    }

    /* 案例主体 */
    .shouye_anli_main {
      margin-top: 30px;
      float: left;

      img {
        width: 100%;
        height: 100%;
      }

      a {
        position: relative;
        display: block;
      }

      .shouye_anli_main_show {
        display: inline-block;
        opacity: 0;
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        transform: scale(0);
        transition: 0.2s all;
      }

      div {

        /* 案例主体隐藏文本 */
        .shouye_anli_main_text {
          position: absolute;
          width: 86%;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);

          h3 {
            margin-top: -50px;
            opacity: 0;
            font-size: 25px;
            font-weight: normal;
            color: #fff;
            transition: 0.2s all;
          }

          span {
            margin-top: -50px;
            opacity: 0;
            display: inline-block;
            padding-bottom: 6px;
            margin-bottom: 10px;
            font-size: 15px;
            border-bottom: 1px solid #fff;
            color: #fff;
            transition: 0.2s all;
          }

          p {
            margin-top: 150px;
            height: 78px;
            opacity: 0;
            font-size: 15px;
            line-height: 26px;
            color: #fff;
            overflow: hidden;
            transition: 0.2s all;
          }
        }

        /* 案例左内容 */
        .shouye_anli_main_left {
          width: 577px;
          height: 461px;
          position: relative;
          float: left;
        }

        /* 案例右内容 */
        .shouye_anli_main_right {
          float: right;
        }

        .shouye_anli_main_right_top {
          position: relative;
          margin-left: 8px;
          margin-bottom: 12px;
          width: 572px;
          height: 246px;
          /* overflow: hidden; */
        }

        .shouye_anli_main_right_bom {
          float: left;
          position: relative;
          margin-left: 8px;
          width: 282px;
          height: 203px;
          /* overflow: hidden; */
        }
      }
    }
  }

  /* 首页报价 */
  #baojia {
    margin-top: 40px;
    padding-bottom: 20px;
  }

  /* 预约 */
  .advantage {
    margin: 35px auto;
    display: block;
    float: left;
  }
</style>