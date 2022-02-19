let colors = ["#3F84E5","#B20D30","#C17817","#753E7B"]
let i = 0;

$(function(){
    $(".twitter").on("mouseenter",
        function(){
            $(".messtwitter").show();
        }).on("mouseleave",
        function(){
            $(".messtwitter").hide();
        });
    $(".twitch").on("mouseenter",
        function(){
            $(".messtwitch").show();
        }).on("mouseleave",
        function(){
            $(".messtwitch").hide();
        });
    $(".itch").on("mouseenter",
        function(){
            $(".messitch").show();
        }).on("mouseleave",
        function(){
            $(".messitch").hide();
        });
    $(".git").on("mouseenter",
        function(){
            $(".messgit").show();
        }).on("mouseleave",
        function(){
            $(".messgit").hide();
        });
    $("#mail").on("mouseenter",
        function(){
            $(".messmail").show();
        }).on("mouseleave",
        function(){
            $(".messmail").hide();
        });

    $(".first-el").on("mouseenter",
        function(){
            //var rand1 = colors[Math.floor(Math.random() * colors.length)];
            $(".first-el").css("background",colors[3])
        }).on("mouseleave",
            function(){
            $(".first-el").css("background", "#0b1a18")
        });
    $(".second-el").on("mouseenter",
        function(){
            //var rand2 = colors[Math.floor(Math.random() * colors.length)];
            $(".second-el").css("background",colors[0])
        }).on("mouseleave",
            function(){
            $(".second-el").css("background", "#0b1a18")
        });
    $(".third-el").on("mouseenter",
        function(){
            //var rand3 = colors[Math.floor(Math.random() * colors.length)];
            $(".third-el").css("background",colors[2])
        }).on("mouseleave",
            function(){
            $(".third-el").css("background", "#0b1a18")
        });
    $(".fourth-el").on("mouseenter",
        function(){
            //var rand4 = colors[Math.floor(Math.random() * colors.length)];
            $(".fourth-el").css("background",colors[3])
        }).on("mouseleave",
            function(){
            $(".fourth-el").css("background", "#0b1a18")
        });
});

let mailEl = document.getElementById("mail");

mailEl.addEventListener("click", function(){
    var text = "theome.pro@gmail.com"
    navigator.clipboard.writeText(text).then(function() {
      }, function(err) {
      });
});

$("#mail").on("click", function(){
    $("#mail").toggleClass("flash")
});