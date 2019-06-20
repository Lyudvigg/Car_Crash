// ============================= Way ==========================

jQuery.fn.onPositionChanged = function (trigger, millis) {
    if (millis == null)
        millis = 100;
    let o = $(this[0]);
    if (o.length < 1)
        return o;
    let lastPos = null;
    let lastOff = null;
    setInterval(function () {
        if (o == null || o.length < 1)
            return o;
        if (lastPos == null)
            lastPos = o.position();
        if (lastOff == null)
            lastOff = o.offset();
        let newPos = o.position();
        let newOff = o.offset();
        if (lastPos.top != newPos.top || lastPos.left != newPos.left) {
            $(this).trigger('onPositionChanged', { lastPos: lastPos, newPos: newPos });
            if (typeof (trigger) == "function")
                trigger(lastPos, newPos);
            lastPos = o.position();
        }
        if (lastOff.top != newOff.top || lastOff.left != newOff.left) {
            $(this).trigger('onOffsetChanged', { lastOff: lastOff, newOff: newOff });
            if (typeof (trigger) == "function")
                trigger(lastOff, newOff);
            lastOff = o.offset();
        }
    }, millis);
    return o;
};
function second() {
    $div1 = $('.bot-car');
    $div2 = $('.car');
    let x1 = $div1.offset().left - 5;
    let y1 = $div1.offset().top;
    let h1 = $div1.outerHeight(true);
    let w1 = $div1.outerWidth(true);
    let b1 = y1 + h1;
    let r1 = x1 + w1;
    let x2 = $div2.offset().left;
    let y2 = $div2.offset().top;
    let h2 = $div2.outerHeight(true);
    let w2 = $div2.outerWidth(true);
    let b2 = y2 + h2;
    let r2 = x2 + w2;
    if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) {
        return false;
    } else {
    }
    return true;
}
let audio = $(".myAudio");
let j = 1
$(".car").onPositionChanged(() => {
    let carMargin = $('.car').position().left;
    let SecondCarMargin = $('.bot-car').position().left;
    if (second()) {
        audio.trigger('play')
        $(".car").css("-webkit-animation-play-state", "paused");
        $(".bot-car").css("-webkit-animation-play-state", "paused");
        if (j <= 1) {
            let crashedCar = $(".car").attr("src");
            crashedCar = `${crashedCar.slice(0, crashedCar.length - 4)}_d.png`;
            let crashedSecondCar = $(".bot-car").attr("src");
            crashedSecondCar = `${crashedSecondCar.slice(0, crashedSecondCar.length - 4)}_d.png`;
            $(".car").attr("src", crashedCar);
            $(".bot-car").attr("src", crashedSecondCar);
            j = 2;
        }
    }
    if (carMargin < -399 && SecondCarMargin < -399 || carMargin >= 1279 && SecondCarMargin >= 1279 || carMargin < -399 && SecondCarMargin >= 1279) {
        $(".car").css("-webkit-animation-play-state", "paused");
        $(".bot-car").css("-webkit-animation-play-state", "paused");
        // window.location.reload(true);
    }
});
$(".bot-car").onPositionChanged(() => {
    let carMargin = $('.car').position().left;
    let SecondCarMargin = $('.bot-car').position().left;
    if (second()) {
        audio.trigger('play')
        $(".car").css("-webkit-animation-play-state", "paused");
        $(".bot-car").css("-webkit-animation-play-state", "paused");
        if (j <= 1) {
            let crashedCar = $(".car").attr("src");
            crashedCar = `${crashedCar.slice(0, crashedCar.length - 4)}_d.png`;
            let crashedSecondCar = $(".bot-car").attr("src");
            crashedSecondCar = `${crashedSecondCar.slice(0, crashedSecondCar.length - 4)}_d.png`;
            $(".car").attr("src", crashedCar);
            $(".bot-car").attr("src", crashedSecondCar);
            j = 2;
        }
    }
    if (carMargin < -399 && SecondCarMargin < -399 || carMargin >= 1279 && SecondCarMargin >= 1279 || carMargin < -399 && SecondCarMargin >= 1279) {
        $(".car").css("-webkit-animation-play-state", "paused");
        $(".bot-car").css("-webkit-animation-play-state", "paused");
        // window.location.reload(true);
    }
});
// ========================== Filter ============================== 
let count1 = 0;
$('.first-car-flt .change-direction-btn').on('click', () => {
    if (count1 % 2 == 0) {
        let text = $('.before_collision .firstCar-speed').text()
        let speedCount = $('.carSpeedCount').text()
        let val = parseInt($('.before_collision .firstCar-mass').text())
        let range_val = -parseInt($('.before_collision .firstCar-speed').text())
        $('.before_collision .firstCar-speed').text(- text)
        $('.carSpeedCount').text(- speedCount)
        $('.before_collision .firstCar__value').text((val) * (range_val))
        let firstCar__value = $('.before_collision .firstCar__value').text()
        let SecondCar__value = $('.before_collision .SecondCar__value').text()
        $('.before_collision .final-value').text(parseInt(firstCar__value) + parseInt(SecondCar__value))
    }
    else if (count1 % 2 !== 0) {
        let text = $('.before_collision .firstCar-speed').text()
        let speedCount = $('.carSpeedCount').text()
        let val = parseInt($('.before_collision .firstCar-mass').text())
        let range_val = -parseInt($('.before_collision .firstCar-speed').text())
        $('.before_collision .firstCar-speed').text(- text)
        $('.carSpeedCount').text(- speedCount)
        $('.before_collision .firstCar__value').text((val) * (range_val))
        let firstCar__value = $('.before_collision .firstCar__value').text()
        let SecondCar__value = $('.before_collision .SecondCar__value').text()
        $('.before_collision .final-value').text(parseInt(firstCar__value) + parseInt(SecondCar__value))
    }
    count1++;
})

let secondCount1 = 0;
$('.second-car-flt .change-direction-btn').on('click', () => {
    if (secondCount1 % 2 == 0) {
        let text = $('.before_collision .SecondCar-speed').text()
        let speedCount = $('.SecondCarSpeedCount').text()
        let val = parseInt($('.before_collision .SecondCar-mass').text())
        let range_val = -parseInt($('.before_collision .SecondCar-speed').text())
        $('.before_collision .SecondCar-speed').text(- text)
        $('.SecondCarSpeedCount').text(- speedCount)
        $('.before_collision .SecondCar__value').text((val) * (range_val))
        let firstCar__value = $('.before_collision .firstCar__value').text()
        let SecondCar__value = $('.before_collision .SecondCar__value').text()
        $('.before_collision .final-value').text(parseInt(firstCar__value) + parseInt(SecondCar__value))
    }
    else if (secondCount1 % 2 !== 0) {
        let text = $('.before_collision .SecondCar-speed').text()
        let speedCount = $('.SecondCarSpeedCount').text()
        let val = parseInt($('.before_collision .SecondCar-mass').text())
        let range_val = -parseInt($('.before_collision .SecondCar-speed').text())
        $('.before_collision .SecondCar-speed').text(- text)
        $('.SecondCarSpeedCount').text(- speedCount)
        $('.before_collision .SecondCar__value').text((val) * (range_val))
        let firstCar__value = $('.before_collision .firstCar__value').text()
        let SecondCar__value = $('.before_collision .SecondCar__value').text()
        $('.before_collision .final-value').text(parseInt(firstCar__value) + parseInt(SecondCar__value))
    }
    secondCount1++;
})

let countI = 1;
$('.first-car-flt .cars-mass-block .wcar').on('click', function () {
    $(".car").attr("src", "./assets/img/Cars/car1.png");
})

$('.first-car-flt .cars-mass-DirectionChange-block .wcar').on('click', function () {
    $(".car").attr("src", "./assets/img/Cars/car1F.png");
})

$('.first-car-flt .wcar').on('click', function () {
    $(".car").css({ 'max-height': '70px' });
    let val = $(this).data('value');
    $('.mass-count').text(val + ' kg');
    $('.firstCar-mass').text(val)
    if ($('.car').hasClass('carDirectionChange')) {
        var range_val = -$('.FirstCar__Speed').val()
    }
    else {
        var range_val = $('.FirstCar__Speed').val()
    }
    $('.before_collision .firstCar__value').text((val) * (range_val))
    let firstCar__value = $('.before_collision .firstCar__value').text()
    let SecondCar__value = $('.before_collision .SecondCar__value').text()
    $('.before_collision .final-value').text(parseInt(firstCar__value) + parseInt(SecondCar__value))
})

$('.first-car-flt .cars-mass-block .jeep').on('click', function () {
    $(".car").attr("src", "./assets/img/Cars/jeep1.png");
})

$('.first-car-flt .cars-mass-DirectionChange-block .jeep').on('click', function () {
    $(".car").attr("src", "./assets/img/Cars/jeep1F.png");
})

$('.first-car-flt .jeep').on('click', function () {
    $(".car").css({ 'max-height': '90px' })
    let val = $(this).data('value');
    $('.mass-count').text(val + ' kg');
    $('.firstCar-mass').text(val)
    if ($('.car').hasClass('carDirectionChange')) {
        var range_val = -$('.FirstCar__Speed').val()
    }
    else {
        var range_val = $('.FirstCar__Speed').val()
    }
    $('.before_collision .firstCar__value').text((val) * (range_val))
    let firstCar__value = $('.before_collision .firstCar__value').text()
    let SecondCar__value = $('.before_collision .SecondCar__value').text()
    $('.before_collision .final-value').text(parseInt(firstCar__value) + parseInt(SecondCar__value))
})

$('.first-car-flt .cars-mass-block .truck').on('click', function () {
    $(".car").attr("src", "./assets/img/Cars/tr1.png");
})

$('.first-car-flt .cars-mass-DirectionChange-block .truck').on('click', function () {
    $(".car").attr("src", "./assets/img/Cars/tr1F.png");
})

$('.first-car-flt .truck').on('click', function () {
    $(".car").css({ 'max-height': '150px' })
    let val = $(this).data('value');
    $('.mass-count').text(val + ' kg');
    $('.firstCar-mass').text(val)
    if ($('.car').hasClass('carDirectionChange')) {
        var range_val = -$('.FirstCar__Speed').val()
    }
    else {
        var range_val = $('.FirstCar__Speed').val()
    }
    $('.before_collision .firstCar__value').text((val) * (range_val))
    let firstCar__value = $('.before_collision .firstCar__value').text()
    let SecondCar__value = $('.before_collision .SecondCar__value').text()
    $('.before_collision .final-value').text(parseInt(firstCar__value) + parseInt(SecondCar__value))
})

$('.second-car-flt .cars-mass-block .wcar').on('click', function () {
    $(".bot-car").attr("src", "./assets/img/Cars/car2F.png");
})

$('.second-car-flt .cars-mass-DirectionChange-block .wcar').on('click', function () {
    $(".bot-car").attr("src", "./assets/img/Cars/car2.png");
})

$('.second-car-flt .wcar').on('click', function () {
    $(".bot-car").css({ 'max-height': '70px' })
    let val = $(this).data('value');
    $('.SecondMass-count').text(val + ' kg');
    $('.SecondCar-mass').text(val)
    if ($('.bot-car').hasClass('SecondCarDirectionChange') == false) {
        var range_val = -$('.SecondCar__Speed').val()
    }
    else {
        var range_val = $('.SecondCar__Speed').val()
    }
    $('.before_collision .SecondCar__value').text((val) * (range_val))
    let firstCar__value = $('.before_collision .firstCar__value').text()
    let SecondCar__value = $('.before_collision .SecondCar__value').text()
    $('.before_collision .final-value').text(parseInt(firstCar__value) + parseInt(SecondCar__value))
})

$('.second-car-flt .cars-mass-block .jeep').on('click', function () {
    $(".bot-car").attr("src", "./assets/img/Cars/jeep2F.png");
})

$('.second-car-flt .cars-mass-DirectionChange-block .jeep').on('click', function () {
    $(".bot-car").attr("src", "./assets/img/Cars/jeep2.png");
})

$('.second-car-flt .jeep').on('click', function () {
    $(".bot-car").css({ 'max-height': '90px' })
    let val = $(this).data('value');
    $('.SecondMass-count').text(val + ' kg');
    $('.SecondCar-mass').text(val)
    if ($('.bot-car').hasClass('SecondCarDirectionChange') == false) {
        var range_val = -$('.SecondCar__Speed').val()
    }
    else {
        var range_val = $('.SecondCar__Speed').val()
    }
    $('.before_collision .SecondCar__value').text((val) * (range_val))
    let firstCar__value = $('.before_collision .firstCar__value').text()
    let SecondCar__value = $('.before_collision .SecondCar__value').text()
    $('.before_collision .final-value').text(parseInt(firstCar__value) + parseInt(SecondCar__value))
})

$('.second-car-flt .cars-mass-block .truck').on('click', function () {
    $(".bot-car").attr("src", "./assets/img/Cars/tr2F.png");
})

$('.second-car-flt .cars-mass-DirectionChange-block .truck').on('click', function () {
    $(".bot-car").attr("src", "./assets/img/Cars/tr2.png");
})

$('.second-car-flt .truck').on('click', function () {
    $(".bot-car").css({ 'max-height': '150px' })
    let val = $(this).data('value');
    $('.SecondMass-count').text(val + ' kg');
    $('.SecondCar-mass').text(val)
    if ($('.bot-car').hasClass('SecondCarDirectionChange') == false) {
        var range_val = -$('.SecondCar__Speed').val()
    }
    else {
        var range_val = $('.SecondCar__Speed').val()
    }
    $('.before_collision .SecondCar__value').text((val) * (range_val))
    let firstCar__value = $('.before_collision .firstCar__value').text()
    let SecondCar__value = $('.before_collision .SecondCar__value').text()
    $('.before_collision .final-value').text(parseInt(firstCar__value) + parseInt(SecondCar__value))
})



$(".first-car-flt .car-mass-btn img").click(function (event) {
    event.preventDefault();
    if ($(".car-mass-btn").is(":disabled")) {
        return false
    }
    else {
        $(".first-car-flt .car-mass-btn img.active").removeClass("active");
        $(this).addClass("active");
        $('.first-car-flt .car-mass-btn').each(function () {
            let carPasive = $(this).children().attr('src');
            if (carPasive.length == 45) {
                carPasive = `${carPasive.slice(0, carPasive.length - 5)}.png`;
                $(this).children().attr("src", carPasive);
            }
            else if (carPasive.length == 46) {
                carPasive = `${carPasive.slice(0, carPasive.length - 6)}.png`;
                $(this).children().attr("src", carPasive);
            }
        });
        let carActive = $(".first-car-flt .car-mass-btn img.active").attr("src");
        carActive = `${carActive.slice(0, carActive.length - 4)}_.png`;
        $('.first-car-flt .car-mass-btn img.active').attr("src", carActive);
    }
})

$(".first-car-flt .cars-mass-DirectionChange-block img").click(function (event) {
    event.preventDefault();
    if ($(".car-mass-btn").is(":disabled")) {
        return false
    }
    else {
        $(".first-car-flt .car-mass-DirectionChange-btn img.active").removeClass("active");
        $(this).addClass("active");
        $('.first-car-flt .car-mass-DirectionChange-btn').each(function () {
            let carPasive = $(this).children().attr('src');
            if (carPasive.length == 45) {
                carPasive = `${carPasive.slice(0, carPasive.length - 4)}.png`;
                $(this).children().attr("src", carPasive);
            }
            else if (carPasive.length == 46) {
                carPasive = `${carPasive.slice(0, carPasive.length - 6)}F.png`;
                $(this).children().attr("src", carPasive);
            }
        });
        let carActive = $(".first-car-flt .car-mass-DirectionChange-btn img.active").attr("src");
        carActive = `${carActive.slice(0, carActive.length - 5)}_F.png`;
        $('.first-car-flt .car-mass-DirectionChange-btn img.active').attr("src", carActive);
    }
})

$('.first-car-flt .car-mass-btn').on('click', function () {
    let val = $(this).data('value')
    $('.first-car-flt .car-mass-DirectionChange-btn').each(function () {
        let carPasive = $(this).children().attr('src');
        if (carPasive.length == 46) {
            carPasive = `${carPasive.slice(0, carPasive.length - 6)}F.png`;
            $(this).children().attr("src", carPasive);
        }
        if (val == $(this).data('value')) {
            let carActive = $(this).children().attr("src");
            carActive = `${carActive.slice(0, carActive.length - 5)}_F.png`;
            $(this).children().attr("src", carActive);
        }
    })
})

$('.first-car-flt .car-mass-DirectionChange-btn').on('click', function () {
    let val = $(this).data('value')
    $('.first-car-flt .car-mass-btn').each(function () {
        let carPasive = $(this).children().attr('src');
        if (carPasive.length == 45) {
            carPasive = `${carPasive.slice(0, carPasive.length - 5)}.png`;
            $(this).children().attr("src", carPasive);
        }
        if (val == $(this).data('value')) {
            let carActive = $(this).children().attr("src");
            carActive = `${carActive.slice(0, carActive.length - 4)}_.png`;
            $(this).children().attr("src", carActive);
        }
    })
})

$(".second-car-flt .car-mass-btn img").click(function (event) {
    event.preventDefault();
    if ($(".car-mass-btn").is(":disabled")) {
        return false
    }
    else {
        $(".second-car-flt .car-mass-btn img.active").removeClass("active");
        $(this).addClass("active");
        $('.second-car-flt .car-mass-btn').each(function () {
            let carPasive = $(this).children().attr('src');
            if (carPasive.length == 45) {
                carPasive = `${carPasive.slice(0, carPasive.length - 4)}.png`;
                $(this).children().attr("src", carPasive);
            }
            else if (carPasive.length == 46) {
                carPasive = `${carPasive.slice(0, carPasive.length - 5)}.png`;
                $(this).children().attr("src", carPasive);
            }
        });
        let carActive = $(".second-car-flt .car-mass-btn img.active").attr("src");
        carActive = `${carActive.slice(0, carActive.length - 4)}_.png`;
        $('.second-car-flt .car-mass-btn img.active').attr("src", carActive);
    }
});

$(".second-car-flt .cars-mass-DirectionChange-block img").click(function (event) {
    event.preventDefault();
    if ($(".car-mass-btn").is(":disabled")) {
        return false
    }
    else {
        $(".second-car-flt .car-mass-DirectionChange-btn img.active").removeClass("active");
        $(this).addClass("active");
        $('.second-car-flt .car-mass-DirectionChange-btn').each(function () {
            let carPasive = $(this).children().attr('src');
            if (carPasive.length == 46) {
                carPasive = `${carPasive.slice(0, carPasive.length - 4)}.png`;
                $(this).children().attr("src", carPasive);
            }
            else if (carPasive.length == 47) {
                carPasive = `${carPasive.slice(0, carPasive.length - 6)}F.png`;
                $(this).children().attr("src", carPasive);
            }
        });
        let carActive = $(".second-car-flt .car-mass-DirectionChange-btn img.active").attr("src");
        carActive = `${carActive.slice(0, carActive.length - 5)}_F.png`;
        $('.second-car-flt .car-mass-DirectionChange-btn img.active').attr("src", carActive);
    }
})

$('.second-car-flt .car-mass-btn').on('click', function () {
    let val = $(this).data('value')
    $('.second-car-flt .car-mass-DirectionChange-btn').each(function () {
        let carPasive = $(this).children().attr('src');
        if (carPasive.length == 47) {
            carPasive = `${carPasive.slice(0, carPasive.length - 6)}F.png`;
            $(this).children().attr("src", carPasive);
        }
        if (val == $(this).data('value')) {
            let carActive = $(this).children().attr("src");
            carActive = `${carActive.slice(0, carActive.length - 5)}_F.png`;
            $(this).children().attr("src", carActive);
        }
    })
})

$('.second-car-flt .car-mass-DirectionChange-btn').on('click', function () {
    let val = $(this).data('value')
    $('.second-car-flt .car-mass-btn').each(function () {
        let carPasive = $(this).children().attr('src');
        console.log(carPasive)
        if (carPasive.length == 46) {
            carPasive = `${carPasive.slice(0, carPasive.length - 5)}.png`;
            $(this).children().attr("src", carPasive);
        }
        if (val == $(this).data('value')) {
            let carActive = $(this).children().attr("src");
            carActive = `${carActive.slice(0, carActive.length - 4)}_.png`;
            $(this).children().attr("src", carActive);
        }
    })
})

$('.reset').on('click', () => {
    window.location.reload(true);
})

let i = 1;
$('.go').on('click', () => {
    $(".car").css("-webkit-animation-play-state", "running");
    $(".bot-car").css("-webkit-animation-play-state", "running");
    i++;
    if (i > 1) {
        // $('.go').attr('disabled', 'disabled');
        // $('.car-mass-btn').attr('disabled', 'disabled');
        $('.change-direction-btn, .car-mass-DirectionChange-btn, .car-mass-btn, .go, .FirstCar__Speed, .SecondCar__Speed').attr('disabled', 'disabled');
        // $('.').attr('disabled', 'disabled');
    }
    let m1 = parseInt($('.before_collision .firstCar-mass').text());
    let m2 = parseInt($('.before_collision .SecondCar-mass').text());
    let v1 = parseInt($('.before_collision .firstCar-speed').text());
    let v2 = parseInt($('.before_collision .SecondCar-speed').text());
    let a = 1 + m1 / m2;
    let b = -2 * ((m1 * v1 + m2 * v2) / m2);
    let c = m2 / m1 * Math.pow(((m1 * v1 + m2 * v2) / m2), 2) - Math.pow(v1, 2) - m2 / m1 * Math.pow(v2, 2);
    let Vf1Plus = (-b + Math.sqrt(Math.pow(b, 2) - (4 * a * c))) / (2 * a);
    let Vf1Minus = (-b - Math.sqrt(Math.pow(b, 2) - (4 * a * c))) / (2 * a);
    let Vf1_20 = ((Vf1Minus) * 20) / 100;
    let Vf1 = (Vf1Minus) - (Vf1_20)
    if (Vf1 < -20) {
        Vf1 = Vf1 - Vf1_20;
    }
    let Vf2 = ((m1 * v1 + m2 * v2) - m1 * Vf1) / m2;
    if (Vf2 > 25) {
        Vf2 = 30;
    }
    console.log(b, a,c)
    console.log(Vf1, Vf2)
    if ($(".car").hasClass('carStart')) {
        $(".car").onPositionChanged(() => {
            if (second()) {
                $('.car').css({ 'transition': '1s', 'margin-left': Vf1 * 14 })
                $('.car.carDirectionChange').css({ 'margin-right': Vf1 * (-14) })
                $('.bot-car').css({ 'transition': '1s', 'margin-right': Vf2 * (-14) })
                $('.bot-car.SecondCarDirectionChange').css({ 'transition': '1s', 'margin-left': Vf2 * (14) })
            }
        });
    }
    else {
        $(".bot-car").onPositionChanged(() => {
            if (second()) {
                $('.car').css({ 'transition': '1s', 'margin-left': Vf1 * 14 })
                $('.car.carDirectionChange').css({ 'margin-right': Vf1 * (-14) })
                $('.bot-car').css({ 'margin-left': Vf2 * (-14) })
                $('.bot-car.SecondCarDirectionChange').css({ 'transition': '1s', 'margin-left': Vf2 * (14) })
            }
        });
    }
    let Vf1ToFixed = Vf1.toFixed(0)
    let Vf2ToFixed = Vf2.toFixed(0)
    $('.AfterfirstCar-speed').text(Vf1ToFixed);
    $('.After_SecondCar-speed').text(Vf2ToFixed);
    let After_firstCar__value = parseInt($('.after_collision .firstCar-mass').text() * (Vf1.toFixed(1)));
    $('.after_collision .After_firstCar__value').text(After_firstCar__value)
    let After_SecondCar__value = parseInt($('.after_collision .SecondCar-mass').text() * (Vf2.toFixed(1)));
    $('.after_collision .After_SecondCar__value').text(After_SecondCar__value)
    let After_final_value = parseInt((After_firstCar__value)) + parseInt((After_SecondCar__value));
    $('.After_final-value').text(After_final_value)
})

let count = 0;
let secondCount = 1;

$('.first-car-flt .change-direction-btn').on('click', () => {
    if (count % 2 == 0) {
        let crashedCar = $(".car").attr("src");
        crashedCar = `${crashedCar.slice(0, crashedCar.length - 4)}F.png`;
        $(".car").attr("src", crashedCar);
        $(".car").addClass('carDirectionChange')
        $('.first-car-flt .cars-mass-block.d_none').removeClass('d_none');
        $('.first-car-flt .cars-mass-block').addClass('d_none');
        $('.first-car-flt .cars-mass-DirectionChange-block.d_none').removeClass('d_none');
    }
    else if (count % 2 !== 0) {
        let crashedCar = $(".car").attr("src");
        crashedCar = `${crashedCar.slice(0, crashedCar.length - 5)}.png`;
        $(".car").attr("src", crashedCar);
        $(".car.carDirectionChange").removeClass('carDirectionChange')
        $('.first-car-flt .cars-mass-DirectionChange-block.d_none').removeClass('d_none');
        $('.first-car-flt .cars-mass-DirectionChange-block').addClass('d_none');
        $('.first-car-flt .cars-mass-block.d_none').removeClass('d_none');
    }

    count++;
})

$('.second-car-flt .change-direction-btn').on('click', () => {
    if (secondCount % 2 == 0) {
        let crashedSecondCar = $(".bot-car").attr("src");
        crashedSecondCar = `${crashedSecondCar.slice(0, crashedSecondCar.length - 4)}F.png`;
        $(".bot-car").attr("src", crashedSecondCar);
        $(".bot-car.SecondCarDirectionChange").removeClass('SecondCarDirectionChange')
        $('.second-car-flt .cars-mass-DirectionChange-block.d_none').removeClass('d_none');
        $('.second-car-flt .cars-mass-DirectionChange-block').addClass('d_none');
        $('.second-car-flt .cars-mass-block.d_none').removeClass('d_none');
    }
    else if (secondCount % 2 !== 0) {
        let crashedSecondCar = $(".bot-car").attr("src");
        crashedSecondCar = `${crashedSecondCar.slice(0, crashedSecondCar.length - 5)}.png`;
        $(".bot-car").attr("src", crashedSecondCar);
        $(".bot-car").addClass('SecondCarDirectionChange')
        $('.second-car-flt .cars-mass-block.d_none').removeClass('d_none');
        $('.second-car-flt .cars-mass-block').addClass('d_none');
        $('.second-car-flt .cars-mass-DirectionChange-block.d_none').removeClass('d_none');
    }

    secondCount++;
})
$('.FirstCar__Speed').on('input', function () {
    let FirstCar_mass = $('.before_collision .firstCar-mass').text();
    if ($('.car').hasClass('carDirectionChange')) {
        var val = -$('.FirstCar__Speed').val()
    }
    else {
        var val = $('.FirstCar__Speed').val()
    }
    $('.carSpeedCount').text(val)
    $('.firstCar-speed').text(val)
    $('.before_collision .firstCar__value').text((FirstCar_mass) * (val))
    let firstCar__value = $('.before_collision .firstCar__value').text()
    let SecondCar__value = $('.before_collision .SecondCar__value').text()

    $('.before_collision .final-value').text(parseInt(firstCar__value) + parseInt(SecondCar__value))
    if (val == 0) {
        $('.car.carStart').removeClass('carStart')
    }
    else {
        $(".car").addClass('carStart')
    }
})

$('.SecondCar__Speed').on('input', function () {
    let SecondCar_mass = $('.before_collision .SecondCar-mass').text();
    if ($('.bot-car').hasClass('SecondCarDirectionChange') == false) {
        var val = -$('.SecondCar__Speed').val()
    }
    else {
        var val = $('.SecondCar__Speed').val()
    }
    $('.SecondCarSpeedCount').text(val)
    $('.SecondCar-speed').text(val)
    $('.before_collision .SecondCar__value').text((SecondCar_mass) * (val))
    let firstCar__value = $('.before_collision .firstCar__value').text()
    let SecondCar__value = $('.before_collision .SecondCar__value').text()

    $('.before_collision .final-value').text(parseInt(firstCar__value) + parseInt(SecondCar__value))
    if (val == 0) {
        $('.bot-car.SecondCarStart').removeClass('SecondCarStart')
    }
    else {
        $(".bot-car").addClass('SecondCarStart')
    }
})
$('.FirstCar__Speed').on('change', function () {
    let val = $(this).val()
    if (val <= 4) {
        $(".carStart").css({ "animation-duration": "30s" });
    }
    else if (val <= 8) {
        $(".carStart").css({ "animation-duration": "25s" });
    }
    else if (val <= 12) {
        $(".carStart").css({ "animation-duration": "20s" });
    }
    else if (val <= 16) {
        $(".carStart").css({ "animation-duration": "15s" });
    }
    else if (val <= 20) {
        $(".carStart").css({ "animation-duration": "10s" });
    }
})

$('.SecondCar__Speed').on('change', function () {
    let val = $(this).val()
    if (val <= 4) {
        $(".SecondCarStart").css({ "animation-duration": "30s" });
    }
    else if (val <= 8) {
        $(".SecondCarStart").css({ "animation-duration": "25s" });
    }
    else if (val <= 12) {
        $(".SecondCarStart").css({ "animation-duration": "20s" });
    }
    else if (val <= 16) {
        $(".SecondCarStart").css({ "animation-duration": "15s" });
    }
    else if (val <= 20) {
        $(".SecondCarStart").css({ "animation-duration": "10s" });
    }
})

let DisabledCount = 1;

$('.first-car-flt .car-mass-btn').on('click', function () {
    if (DisabledCount < 2) {
        $('.first-car-flt .change-direction-btn').attr('disabled', false);
        DisabledCount = 3;
        $('.speed-bg.d_none').removeClass('d_none')
        $('.mass-text.d_none').removeClass('d_none')
        $('.FirstCar__Speed.d_none').removeClass('d_none')
        $('.carSpeed.d_none').removeClass('d_none')
        $('.firstCar-speed, .AfterfirstCar-speed').css({ 'color': 'inherit' })
    }
})

let SecondDisabledCount = 1;

$('.second-car-flt .car-mass-btn').on('click', function () {
    if (SecondDisabledCount < 2) {
        $('.second-car-flt .change-direction-btn').attr('disabled', false);
        SecondDisabledCount = 3;
        $('.SecondSpeed-bg.d_none').removeClass('d_none')
        $('.SecondMass-text.d_none').removeClass('d_none')
        $('.SecondCarSpeed.d_none').removeClass('d_none')
        $('.SecondCar__Speed.d_none').removeClass('d_none')
        $('.SecondCar-speed, .After_SecondCar-speed').css({ 'color': 'inherit' })
    }
})

let popupCount = 1;

$('.car-mass-btn').on('click', function () {
    if ($('.second-car-flt .change-direction-btn').prop("disabled") == false && $('.first-car-flt .change-direction-btn').prop("disabled") == false) {
        $('.go').attr('disabled', false);
        $('.final-value').css({ 'color': 'inherit' })
    }
    if (popupCount < 2) {
        $('.first_popup_block').addClass('d_flex')
        setTimeout(function () {
            $('.first_popup_block').removeClass('d_flex')
            $('.second_popup_block').addClass('d_flex')
        }, 2000)
        setTimeout(function () {
            $('.second_popup_block').removeClass('d_flex')
        }, 4000)
        popupCount = 3
    }
})

$('.go').on('click', function () {
    let num = $('.car').css('animation-duration')
    num = `${num.slice(0, num.length - 1)}`;
    num = parseInt(num) + 3;
    let SecondNum = $('.bot-car').css('animation-duration')
    SecondNum = `${SecondNum.slice(0, SecondNum.length - 1)}`;
    SecondNum = parseInt(SecondNum) + 3;
    let height = $('.car').css('max-height')
    height = `${height.slice(0, height.length - 2)}`;
    let Secondheight = $('.bot-car').css('max-height')
    Secondheight = `${Secondheight.slice(0, Secondheight.length - 2)}`;
    if (parseInt(height) == 150) {
        $('.car').css({ 'animation-duration': num + 's'})
    }
    if (parseInt(height) == 90) {
        $('.car').css({ 'animation-duration': num - 2 + 's'})
    }
    if (parseInt(Secondheight) == 150) {
        $('.bot-car').css({ 'animation-duration': SecondNum + 's'})
    }
    if (parseInt(Secondheight) == 90) {
        $('.bot-car').css({ 'animation-duration': SecondNum - 2 + 's'})
    }
})

setTimeout(function () {
    $('.Before_preliminary, .After_preliminary').addClass('d_none')
    $('.after_collision.d_none, .before_collision.d_none').removeClass('d_none')
},1000)


// ===============================Popup============================

$('.first_popup_block').on('click', function () {
    $(this).addClass('d_none')
})

if ($('.first_popup_block').hasClass('d_none') == false) {
    setTimeout(function () {
        $('.first_popup_block').addClass('d_none')
    }, 2000)
}


$('.change-direction-btn').on('click', function () {
    if ($('.car').hasClass('carDirectionChange') && $('.bot-car').hasClass('SecondCarDirectionChange')) {
        $('.third_popup_block').addClass('d_flex')
        setTimeout(function () {
            $('.third_popup_block').removeClass('d_flex')
        }, 2000)
    }
})

$('.go').on('click', function () {
    if ($('.car').hasClass('carDirectionChange') == true && $('.FirstCar__Speed').val() >= parseInt($('.SecondCar__Speed').val())) {
        $('.third_popup_block').addClass('d_flex')
        setTimeout(function () {
            $('.third_popup_block').removeClass('d_flex')
        }, 2000)
    }
    if ($('.bot-car').hasClass('SecondCarDirectionChange') == true && $('.SecondCar__Speed').val() >= parseInt($('.FirstCar__Speed').val())) {
        $('.third_popup_block').addClass('d_flex')
        setTimeout(function () {
            $('.third_popup_block').removeClass('d_flex')
        }, 2000)
    }
})

$('.first_popup_block').on('click', function () {
    $(this).addClass('d_none')
    $(this).removeClass('d_flex')
})

$('.second_popup_block').on('click', function () {
    $(this).addClass('d_none')
    $(this).removeClass('d_flex')
})

$('.third_popup_block').on('click', function () {
    $(this).addClass('d_none')
    $(this).removeClass('d_flex')
})