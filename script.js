const fs = require('fs');

// Question1
// ( -> Up 1 floor
// ) -> Down 1 floor
// What floor now?

function question1() {
    console.time('question1 ')
    fs.readFile('./input.txt', (err, data) => {
        const direction = data.toString();
        const directionArray = direction.split('');
        const answer = directionArray.reduce((acc, value) => {
            if (value === '(') {
                return acc += 1;
            } else if (value === ')') {
                return acc -= 1;
            }
        }, 0)
        console.log('floor: ', answer);
        console.timeEnd('question1 ')
    });
}

question1();

// Question 2
// When at basement (-1)?

function question2() {
    console.time('question2 ')
    fs.readFile('./input.txt', (err, data) => {
        const direction = data.toString();
        const directionArray = direction.split('');
        let acc = 0;
        let position = 0;
        const answer = directionArray.some((value) => {
            if (value === '(') {
                acc += 1;
            } else if (value === ')') {
                acc -= 1;
            }
            position += 1;
            return acc < 0;
        })
        console.log('basement entered at: ', position);
        console.timeEnd('question2 ',)
    })
}

question2();