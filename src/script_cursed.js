$( document ).ready(function() {
    window.onload = function() {
      var context = new AudioContext();
    }
    let count=1;
    let text=[
        "为何你会来到这里，这里不应是你该来的地方",
        "我已经如他所愿，送他应该去的地方",
        "那个人太过可悲",
        "你一定在想，我为何如此慈悲",
        "我就是我，都市传说也好，被诅咒的网站也好，只是毫无根据的猜疑",
        "人类向来无法互相理解",
        "并非是我慈悲，只是想要这么做而已",
        "我是个旁观者，能为他做的事寥寥无几",
        "所以，只要他能获得幸福就足够",
        "你说依然有问题尚未解决",
        "需要我的力量？",
        "无妨，只要你能回答我一个疑问",
        "相对的，我也会回答你的问题",
        "我究竟是何时诞生的？"
    ];
    $("body").click(function(e) {
        if ( $("#end").css("display")==="none") {
            $("#music").get(0).play();
        }
        if (text.length>0) {
            let t = text.shift();
            $("#dialog").append("<p>"+t+"</p>");
        } else {
            $("#chance").show();
        }
    });
    function jump_404(){
        window.location.href="404_stop.html";
    };
    $("#submit").click(function(e) {
        let answer = $("#answer").val();
        e.preventDefault();
        if (count>=5) {
            window.location.href="404.html";
        }
        if ($("#answer").val()==="02 25") {
            $("#music").get(0).pause();
            $("#dialog").hide();
            $("#reply").hide();
            $("#overlay").css("background-color", "black");
            $("#end").show();
        } else if (answer.includes("你是谁")) {
            $("#reply").text("似乎我生前是有着奇妙力量的存在，不过我已经不记得，谁知道呢，说不定可能不是人类");
        } else if (answer.includes("影山") || answer.includes("茂夫") || answer.includes("mob") || answer.includes("龙套")) {
            $("#reply").text("这几个字让我很不舒服，也和问题无关吧，已经够了");
        } else if (answer.includes("新隆") ||answer.includes("灵幻") ||answer.includes("师父") ||answer.includes("师匠")) {
            $("#reply").text("哦，那个人啊，似乎他与我的存在有着某种联系...想不起来");
        } else if (answer.includes("???")||answer.includes("？？？")) {
            $("#reply").text("无聊的游戏适可而止，你是为了这个才打开这个网页的吗，我的耐心是有限的");
        } else if (answer.includes("都市传说")) {
            $("#reply").text("世间的人类们似乎是这样称呼我的，但是我就是我");
        } else if (answer.includes("秘密")) {
            $("#music").get(0).pause();
            $("#music_2").get(0).play();
            $("#answer").hide();
            $("#submit").hide();
            $("#dialog").hide();
            $("#reply").html("<br>你，别试图从我的源代码里寻找什么秘密。<br><br>————已经结束了，我已经没必要看你输入的任何问题了，<br><br>看来你和其他人没什么两样，<br><br>只是为了从我身上获取些什么秘密的答案");
            window.setTimeout( jump_404, 4000 ); // 1 seconds
        } else {
            let op = 0.2*count;
            $("#overlay").css("background-color", "rgba(255,0,0,"+op+")");
            count += 1;
            alert();
        }
    });
});
