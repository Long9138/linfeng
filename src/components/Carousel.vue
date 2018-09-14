<template>
    <div id="carousel">
        <div class="roy_carousel">
            <ul>
                <li>
                    <a href="">
                        <img src="../assets/imgs/Carousel/20180828120525118676.jpg" alt="">
                    </a>
                </li>
                <li>
                    <a href="">
                        <img src="../assets/imgs/Carousel/20180823114409969293.jpg" alt="">
                    </a>
                </li>
                <li>
                    <a href="">
                        <img src="../assets/imgs/Carousel/20180629090504296353.jpg" alt="">
                    </a>
                </li>
                <li>
                    <a href="">
                        <img src="../assets/imgs/Carousel/20180629090657643136.jpg" alt="">
                    </a>
                </li>
            </ul>

            <!-- 左右控制按钮 -->
            <div class="roy_carousel_prev">
                <img src="../assets/imgs/Carousel/left3.png" alt="">
            </div>
            <div class="roy_carousel_next">
                <img src="../assets/imgs/Carousel/right3.png" alt="">
            </div>

            <!-- 轮播图指示灯 -->
            <div class="roy_carousel_indicators">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
               
            </div>
        </div>
    </div>
</template>

<script>
export default {
  
  mounted() {
    $(function() {
      //当前轮播到的索引
      var royCarouselIndex = 0;

      //轮播图成员的个数
      var itemCount = $(".roy_carousel>ul").find("li").length;
      var royCarouselWidth = $(".roy_carousel").outerWidth();
      var royCarouselTimer = null;
      var lastIndex = 0;

      $(".roy_carousel>ul")
        .children()
        .toArray()
        .forEach(function(item, index) {
          $(item).attr("data-index", index);
        });

      $(".roy_carousel_indicators")
        .children()
        .toArray()
        .forEach(function(item, index) {
          $(item).attr("data-index", index);
        });

      function royCarouselAnimate(roy_direction) {
        $(".roy_carousel_indicators>div")
          .eq(lastIndex)
          .css({
            "background-color": "white"
          });

        $(".roy_carousel_indicators>div")
          .eq(royCarouselIndex)
          .css({
            "background-color": "red"
          });
        roy_direction = roy_direction == 1 ? 1 : -1;
        if (roy_direction == 1) {
          $(".roy_carousel>ul")
            .css({
              left: royCarouselWidth * -1 + "px"
            })
            .find("li:last")
            .remove()
            .prependTo($(".roy_carousel>ul"));

          $(".roy_carousel>ul")
            .stop()
            .animate(
              {
                left: 0
              },
              500
            );
        } else {
          $(".roy_carousel>ul")
            .stop(true, true)
            .animate(
              {
                left: royCarouselWidth * -1 + "px"
              },
              500,
              function() {
                $(".roy_carousel>ul")
                  .css({
                    left: 0
                  })
                  .find("li:first")
                  .remove()
                  .appendTo($(".roy_carousel>ul"));
              }
            );
        }
      }
      $(".roy_carousel_indicators>div")
        .eq(0)
        .css({
          "background-color": "red"
        });
      //轮播
      function royCarouselLoop() {
        royCarouselTimer = setTimeout(function() {
          royCarouselIndex++;
          royCarouselIndex %= itemCount;
          $(".roy_carousel_indicators>div")
            .eq(lastIndex)
            .css({
              "background-color": "white"
            });

          $(".roy_carousel_indicators>div")
            .eq(royCarouselIndex)
            .css({
              "background-color": "red"
            });
          royCarouselAnimate(-1);

          lastIndex = royCarouselIndex;

          royCarouselLoop();
        }, 2000);
      }

      royCarouselLoop();

      //左右按钮点击
      $(".roy_carousel_prev")
        .click(function() {
          royCarouselIndex--;
          royCarouselIndex %= itemCount;
          royCarouselAnimate(1);
          lastIndex = royCarouselIndex;
        })
        .mouseenter(function() {
          clearTimeout(royCarouselTimer);
          royCarouselTimer = null;
        })
        .mouseleave(function() {
          royCarouselLoop();
        });

      $(".roy_carousel_next")
        .click(function() {
          royCarouselIndex++;
          royCarouselIndex %= itemCount;
          royCarouselAnimate(-1);

          lastIndex = royCarouselIndex;
        })
        .mouseenter(function() {
          clearTimeout(royCarouselTimer);
          royCarouselTimer = null;
        })
        .mouseleave(function() {
          royCarouselLoop();
        });

      $(".roy_carousel_indicators")
        .mouseenter(function() {
          clearTimeout(royCarouselTimer);
          royCarouselTimer = null;
        })
        .mouseleave(function() {
          $(".roy_carousel>ul")
            .css({
              left: 0
            })
            .find(`li[data-index$=${royCarouselIndex}]`)
            .prevAll()
            .toArray()
            .reverse()
            .forEach(function(item, index) {
              $(item).appendTo($(".roy_carousel>ul"));
              console.log(
                $(item)
                  .find("img")
                  .prop("src")
              );
            });

          royCarouselLoop();
        });

      $(".roy_carousel_indicators>div").mouseenter(function(e) {
        royCarouselIndex = e.target.dataset.index;
        lastIndex = royCarouselIndex;
        console.log(">>>>>>>>", royCarouselIndex);

        $(".roy_carousel_indicators>div").css({
          "background-color": "white"
        });

        $(e.target).css({
          "background-color": "red"
        });

        $(".roy_carousel>ul").css({
          left:
            royCarouselWidth *
              $(".roy_carousel>ul")
                .find(`li[data-index$=${royCarouselIndex}]`)
                .prevAll().length *
              -1 +
            "px"
        });
      });
    });
  }
};
</script>

<style scoped>
#carousel {
  width: 100%;
  height: 500px;
  margin: 0 auto;
  
}

/* 以下为自定义轮播图的css样式代码 */
.roy_carousel {
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
}

.roy_carousel ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  position: relative;
}
.roy_carousel li {
  width: 100%;
  flex-shrink: 0;
}
.roy_carousel > ul img {
  width: 100%;
  height: 100%;
}
.roy_carousel_prev,
.roy_carousel_next {
  width: 100px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0.4;
  position: absolute;
  top: 0;
}
.roy_carousel_prev:hover,
.roy_carousel_next:hover{
  opacity: 0.8;
}
.roy_carousel_prev {
  left: 0;
}

.roy_carousel_next {
  right: 0;
}
.roy_carousel_indicators {
  width: 100%;
  height: 8px;
  background-color: red;
  position: absolute;
  left: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}
.roy_carousel_indicators > div {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: white;
  margin: 0 15px 50px 15px;

}
</style>


