(function () {
    var timeouts = [];

    if ($.cookie('videoTime')) {
        app.videoElement.currentTime = $.cookie('videoTime');
    }

    timeouts.forEach(function (timeout) {
        clearTimeout(timeout);
    });

    var next = function () {

        timeouts.forEach(function (timeout) {
            clearTimeout(timeout);
        });

        $(".startthing").hide().fadeIn(500);
        
        setTimeout(function () {
            var typed = new Typed("#Bruh",
                {
                    strings: app.Texts,
                    typeSpeed: 70,
                    backDelay: 1500,
                    loop: true
                });
        }, 1350);

        setTimeout(function () {
            app.videoElement.play();

            app.videoElement.addEventListener("timeupdate", function () {
                $.cookie('videoTime', app.videoElement.currentTime, { expires: 1 });
            }, false);
            
            $(".startthing").fadeIn(500);
            $('.navbar').css('visibility','visible').hide().fadeIn(500);
            $('.background').css('visibility','visible').hide().fadeIn(500);
            $('.main').css('visibility','visible').hide().fadeIn(500);

            $('.background').fadeIn(200, function () {
                $("#background").animate({ volume: app.musicVolume }, app.musicFadeIn);
            });
        }, 800);
    }

    next()
})()