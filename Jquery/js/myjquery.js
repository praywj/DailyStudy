// 为了防止文档在完全加载（就绪）之前运行 jQuery 代码
var jq=jQuery.noConflict();  //防止$冲突，自定义符号
var cur = 0;
jq(document).ready(function(){
    jq("#test").click(function(){
        // if(cur % 2 == 0)
        //     jq("p,h3").hide(1000);
        // else
        //     jq("p,h3").show(fast);
        // cur++;
        // 以上步骤可以简化为
        jq("p,h3").toggle("slow");
    });
    jq("h3").css("color","blue");
    jq("#fadeIn").click(function(){
        jq("p,h3").fadeIn("slow", function(){
            jq("p,h3").fadeOut("fast");
            alert("这是给隐藏的元素淡入");
        });  //callback为该函数完成后所执行的函数名称
    });
    jq("#fadeOut").click(function(){
        jq("p,h3").fadeOut("fast");
    });
    jq("#fadeToggle").click(function(){
        jq("p,h3").fadeToggle(1000);
    });
    jq("#fadeTo").click(function(){
        jq("#testfadeto").fadeTo("slow", 0.5);
    });
    jq("#slideup").click(function(){
        jq("#testfadeto").slideUp(10000);
    });
    jq("#slidedown").click(function(){
        jq("#testfadeto").slideDown("slow");
    });
    jq("#slidetoggle").click(function(){
        jq("#testfadeto").slideToggle("slow");
    });
    jq("#animate").click(function(){
        jq("#testfadeto").animate({left:'100px',width:'+=200px', height:'+=200px'},5000);
        jq("#testfadeto").animate({paddingLeft:'20px'},"fast"); //注意不是padding-left
        jq("#testfadeto").animate({fontSize:'5em'},"slow");
    });
    jq("#stop").click(function(){
        jq("#testfadeto").stop(true, true); // 第一个参数为stopAll 第二个为gotoEnd, 默认都为false
    });
    jq("#chaining").click(function(){
        jq("#testfadeto").slideUp("slow").slideDown("fast").animate({fontSize:'2em'},"slow");
    });
    jq("#showtext").click(function(){
        jq("#show").text("这是新的文本");
    });
    jq("#showhtml").click(function(){
        jq("#show").html(function(i, oritext){
            return "<a href='#'> 改变链接</a><br />oritext:" + oritext + "newtext:newnewnew  (index:" + i + ")<br />"
        });
    });
    jq("#showvalue").click(function(){
        alert("Value:" + jq("#showtext").val());
    });
    jq("#showattr").click(function(){
        jq("#show a").attr({"href": "#1",
                            "title": "just a test"})
    });

    jq("#appendhtml").click(function(){
        var text1 = "<li>文本添加</li>";
        var text2 = jq("<li></li>").text("jquery添加");
        var text3 = document.createElement("li");
        text3.innerHTML = "js添加";
        jq("ul").append(text1, text2, text3);
    });

    jq("#appendclass").click(function(){
        jq("li,#show").addClass("important blue");
    });
    jq("#removeclass").click(function(){
        jq("li,#show").removeClass("important");
    });
    jq("ul li").first().css("background-color","red");
    jq("ul li").last().css("background-color","red");
    jq("ul li").eq(1).css("background-color","red");
    jq("ul li").filter(".apple").css("background-color","blue")  // 过滤
    jq("ul li").not(".apple").css("color","green")
} 
);