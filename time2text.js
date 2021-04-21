'use strict'

function time2text (time) {
    // handle edge cases
    if (time === '00:00') return 'midnight';
    if (time === '24:00') return 'midnight';
    if (time === '12:00') return 'noon';

    // process the input
    let [originalHourStr, minutesStr] = time.split(":");
    if (originalHourStr === '00') {
        if (minutesStr === '05') return "five past midnight";
        if (minutesStr === '10') return "ten past midnight";
        if (minutesStr === '15') return "quarter past midnight";
        if (minutesStr === '20') return "twenty past midnight";
        if (minutesStr === '30') return "half past midnight";
    }

    if (originalHourStr === '12') {
        if (minutesStr === '05') return "five past noon";
        if (minutesStr === '10') return "ten past noon";
        if (minutesStr === '15') return "quarter past noon";
        if (minutesStr === '20') return "twenty past noon";
        if (minutesStr === '30') return "half past noon";
    }

    if (originalHourStr === '11') {
        if (minutesStr === '40') return "twenty to noon";
        if (minutesStr === '45') return "quarter to noon";
        if (minutesStr === '50') return "ten to noon";
        if (minutesStr === '55') return "five to noon";
    }

    if (originalHourStr === '23') {
        if (minutesStr === '40') return "twenty to midnight";
        if (minutesStr === '45') return "quarter to midnight";
        if (minutesStr === '50') return "ten to midnight";
        if (minutesStr === '55') return "five to midnight";

    }





    let hour = parseInt(originalHourStr);
    // let minuts = parseInt(minutesStr);

    let morningAfternoonEvening = "";

    // get the ampm
    if (hour >= 0 && hour < 12) {
        morningAfternoonEvening = "in the morning";
    } else if (hour >= 12 && hour < 18) {
        morningAfternoonEvening = "in the afternoon";
    } else {
        morningAfternoonEvening = "in the evening";
    }

    let numberWordMap = {
        0: 'twelve',
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
        10: "ten",
        11: "eleven",
        12: "twelve",
        13: "thirteen",
        14: "fourteen",
        15: "fifteen",
        16: "sixteen",
        17: "seventeen",
        18: "eighteen",
        19: "nineteen",
    }

    let tensMap = {
        2: "twenty",
        3: "thirty",
        4: "fourty",
        5: "fifty"
    }
    // convert the hour
    if (hour > 12) {
        hour -= 12;
    }
    let hourStr = numberWordMap[hour];
    // convert the minutes
    if (parseInt(minutesStr) < 20) {
        if (minutesStr === '00') {
            return hourStr + " " + "o'clock" + " " + morningAfternoonEvening;
        }
        if (minutesStr === '05') {
            return "five past" + " " + hourStr + " " + morningAfternoonEvening;
        }
        if (minutesStr === '10') {
            return "ten past" + " " + hourStr + " " + morningAfternoonEvening;
        }
        if (minutesStr === '15') {
            return "quarter past" + " " + hourStr + " " + morningAfternoonEvening;
        }

        if (minutesStr.charAt(0) === '0') {
            minutesStr = "oh " + numberWordMap[minutesStr.charAt(1)];
        } else {
            minutesStr = numberWordMap[minutesStr];
        }
    } else {
        if (minutesStr === '20') {
            return "twenty past" + " " + hourStr + " " + morningAfternoonEvening;
        }
        if (minutesStr === '30') {
            return "half past" + " " + hourStr + " " + morningAfternoonEvening;
        }
        if (minutesStr === '40') {
            hourStr = numberWordMap[(hour + 1) % 12];
            return "twenty to" + " " + hourStr + " " + helper(parseInt(originalHourStr) + 1);
        }
        if (minutesStr === '45') {
            hourStr = numberWordMap[(hour + 1) % 12];
            return "quarter to" + " " + hourStr + " " + helper(parseInt(originalHourStr) + 1);
        }
        if (minutesStr === '50') {
            hourStr = numberWordMap[(hour + 1) % 12];
            return "ten to" + " " + hourStr + " " + helper(parseInt(originalHourStr)+ 1);
        }
        if (minutesStr === '55') {
            hourStr = numberWordMap[(hour + 1) % 12];
            return "five to" + " " + hourStr + " " + helper(parseInt(originalHourStr) + 1);
        }




        minutesStr = tensMap[minutesStr.charAt(0)] + '-' + numberWordMap[minutesStr.charAt(1)];
    }

    return hourStr + " " + minutesStr + " " + morningAfternoonEvening;
}


function helper(hour) {
    if (hour >= 0 && hour < 12) {
        return  "in the morning";
    } else if (hour >= 12 && hour < 18) {
        return  "in the afternoon";
    } else {
        return  "in the evening";
    }
}
module.exports = time2text
