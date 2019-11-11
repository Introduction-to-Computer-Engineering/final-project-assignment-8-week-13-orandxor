let percent_duty = 5
let duty = 51
pins.analogWritePin(AnalogPin.P0, 0)
basic.forever(function () {
    for (percent_duty = 0; percent_duty < 95; percent_duty += 5) {
        basic.pause(500)
        //basic.showNumber(percent_duty)
        duty += 51
        pins.analogWritePin(AnalogPin.P0, duty)
        basic.showNumber(duty)
    }
    duty = 0;
})
