window.onload= function () {
    $("body").css("top","100px");
    var slider = document.getElementById("slider-show");
    var ul = slider.children[0];
    var lis = ul.children;
    var ol = slider.children[2]
    var olLis = ol.children
    var arr = document.getElementById("arr");
    var left = document.getElementById("left");
    var right = document.getElementById("right");
    var imgWidth = slider.offsetWidth;
    var firstImg = lis[0].cloneNode(true);
    ul.appendChild(firstImg)
    var firstSpan = document.createElement("span");
    firstSpan.className = "five"
    firstImg.appendChild(firstSpan)
    var pic = 0;
    var square = 0;
    right.onclick = function () {
        if (pic === lis.length - 1) {
            ul.style.left = 0 + "px"
            pic = 0;
        }
        pic++;
        var target = -pic * imgWidth;
        animate(ul, target)
        if (square < olLis.length - 1) {
            square++;
        } else {
            square = 0;
        }
        for (var i = 0; i < olLis.length; i++) {
            olLis[i].className = ""
        }
        olLis[square].className = "current"
    }
    left.onclick = function () {
        if (pic === 0) {
            ul.style.left = -(lis.length - 1) * imgWidth + "px"
            pic = lis.length - 1;
        }
        pic--;
        var target = -pic * imgWidth;
        animate(ul, target);
        if (square > 0) {
            square--;
        } else {
            square = olLis.length - 1;
        }
        for (var i = 0; i < olLis.length; i++) {
            olLis[i].className = ""
        }
        olLis[square].className = "current"
    }
    for (var i = 0; i < olLis.length; i++) {
        olLis[i].index = i;
        olLis[i].onmouseover = function () {
            for (var j = 0; j < olLis.length; j++) {
                olLis[j].className = "";
                this.className = "current";
                var target = -this.index * imgWidth;
                animate(ul, target);
            }
        };
    }
    setInterval(right.onclick, 2000)
    //var flag = true;
    //var con_data=document.getElementById("con_data")
    //
    //var con_ul=con_data.children[0];
    //var con_lis=con_ul.children;
    //for (var i = 0; i < con_lis.length; i++) {
    //    con_lis[i].onmouseover= function () {
    //        console.log(cc);
    //    }
    //
    //}
    $(".cc").mouseover(function () {
            //if(flag) {
            //    flag = false;
                $(this).find(".mask-top").stop().animate({"height": "0px"}, 200)
                $(this).find(".mask-bottom").stop().animate({"height": "0px", "top": "500px"}, 200)
            //}
    })
         $(".cc").mouseout(function () {
             //if(flag){
             //    flag=false;
            $(this).find(".mask-top").stop().animate({"height":"250px"},200)
            $(this).find(".mask-bottom").stop().animate({"height":"250px" ,"top":"250px"},200)
             //}
         })
    $(function () {
        $(window).scroll(function () {
            if($(document).scrollTop()>0){
                $(".up").stop().animate({ "bottom":"40px"},300);
            }
            else{
                $(".up").stop().animate({ "bottom":"-180px"},300);
            }
        })
    })
        $(".back").mouseover(function () {
            $(this).css("backgroundPosition","-34px -34px")
        })
        $(".apply").mouseover(function () {
            $(this).css("backgroundPosition","-34px -74px")
        })
        $(".top").mouseover(function () {
            $(this).css("backgroundPosition","-34px 6px")
        })
        $(".back").mouseleave(function () {
            $(this).css("backgroundPosition","6px -34px")
        })
        $(".apply").mouseleave(function () {
            $(this).css("backgroundPosition","6px -74px")
        })
        $(".top").mouseleave(function () {
            $(this).css("backgroundPosition","6px 6px")
        })




    function animate(obj, target) {
        clearInterval(obj.timer)
        obj.timer = setInterval(function () {
            var leader = obj.offsetLeft
            var step = (target - leader) / 10
            step = step > 0 ? Math.ceil(step) : Math.floor(step);
            leader += step;
            obj.style.left = leader + "px"
            if (leader === target) {
                clearInterval(obj.timer)
            }
        }, 15)
    }

    //function animate1(obj, json, fn) {
    //    clearInterval(obj.timer);
    //    obj.timer = setInterval(function () {
    //        var flag = true;
    //        for (var k in json) {
    //            var leader = parseInt(getStyle(obj, k)) || 0;
    //            var target = json[k];
    //            var step = (target - leader) / 10;
    //            step = step > 0 ? Math.ceil(step) : Math.floor(step);
    //            leader = leader + step;
    //            obj.style[k] = leader + "px";
    //            if (leader !== target) {
    //                flag = false;
    //            }
    //        }
    //        if (flag) {
    //            clearInterval(obj.timer);
    //            if (fn) {//如果有才调用
    //                fn();//动画执行完成后执行
    //            }
    //        }
    //    }, 15);
    //}

    function getStyle(obj, attr) {
        if (window.getComputedStyle) {
            return window.getComputedStyle(obj, null)[attr];
        } else {
            return obj.currentStyle[attr];
        }
    }
}