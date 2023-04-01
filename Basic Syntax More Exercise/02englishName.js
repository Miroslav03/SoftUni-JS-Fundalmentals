function englishName(num) {

    let stringNum = String(num)
    stringNum = stringNum.split(``)
    let lastNum = Number(stringNum[stringNum.length - 1])

    switch (lastNum) {
        case 1:{

            return console.log(`one`);
        }
        case 2:{

            return console.log(`two`);
        }
        case 3:{

            return console.log(`three`);
        }
        case 4:{

            return console.log(`four`);
        }
        case 5:{

            return console.log(`five`);
        }
        case 6:{

            return console.log(`six`);
        }
        case 7:{

            return console.log(`seven`);
        }
        case 8:{

            return console.log(`eight`);
        }
        case 9:{

            return console.log(`nine`);
        }
        case 0:{

            return console.log(`zero`);
        }

    }

} englishName(1230)