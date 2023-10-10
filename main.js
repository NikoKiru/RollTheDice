// 2 Roll the dice 🏁


function rollTheDice (turns) {
    let sixCount = 0;
    for (let i = 0; i < turns; i++) {
        let diceNumber = Math.floor(Math.random() * 6) + 1;
        if (diceNumber === 6) {
            sixCount++;
        }
    }
    if (sixCount === turns) {
        console.log("Jackpot 🎉");
    } else {
        for (let i = 0; i < sixCount; i++) {
            console.log("You just hit 6");
            }
        }
    }

rollTheDice(2)
rollTheDice(2)
rollTheDice(2)
rollTheDice(2)
rollTheDice(2)
rollTheDice(2)
rollTheDice(2)
rollTheDice(2)
rollTheDice(2)

