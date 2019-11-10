const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded( { extended : true }));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
        console.log('GET Request to root');
        res.sendFile(__dirname +  '/index.html');
});

app.post('/answer', (req, res) => {
    const answer = req.body.answer;

    if (answer.match(/^morning dew$/i)) {
        res.send('CORRECT! Go to this link for next riddle : r1d6l3_sqrt4.txt');
    } else if (answer.match(/^f$/i)) {
        res.send('CORRECT! Tell the "assistant" that you have solved the 2nd riddle.');

        } else if (answer.match(/^illustration is the way to tell messages$/i)) {
                res.sendFile(__dirname + '/public/reward1.txt');
        } else {
        res.send('WRONG ANSWER! Try again.');
    }

});

app.post('/', (req, res) => {
    const time = new Date();
    const response = {
        message : ''
    };
    console.log(time.getHours());

    const jam = time.getHours() % 12;

    if (jam >= 0 && jam < 3) {
        response.message = 'The statue is facing the west.\nIt seems like it\'s standing confidently.\nThe message on the statue is : \n\nHere I stand\nPreparing to go\nTo help my child\nFind his way';
    } else if (jam >= 3 && jam < 6) {
        response.message = 'The statue is facing the south.\nIt seems like it sits with sad face.\nThe message on the statue is : \n\nHere I sit\nAs I let go\nMy only child\nAlong his way';
    } else if (jam >= 6 && jam < 9) {
        response.message = 'The statue is facing the east.\nIt seems like it\'s kneeling.\nThe message on the statue is : \n\nHere I fall\nAs I could not go\nAssist my child\nOn his way';
    } else {
        response.message = 'The statue is facing the north.\nIt seems like it\'s sitting with happy face.\nThe message on the statue is : \n\nHere I promise\nI would never go\nTo wait for my child\nDream his way';
    }

    res.status(200);
    res.send(response);

});

app.post('/rephel', (req, res) => {
        const arr = req.body.arr;
        console.log(arr);
        let isTrueAnswer = true;
        let ans = ''
        for (let i = 0; i < 5; i++) {
                ans += String(arr[i]).charAt(0);
        }
        if (ans.match(/^wsear$/)) {
                res.send("It's about time. The answer is very close. bu---------w----- no i didn't mean to do that. But wa----- is coming.");
        } else {
                res.send("Have you ever think of jumping from the plank?");
        }
});


app.get('/answer', (req, res) => {
    res.sendFile(__dirname + '/node1.html');
});

app.get('/war', (req, res) => {
        res.sendFile(__dirname + '/public/war.txt');
});

app.get('/secret', (req, res) => {
        res.send('You found the secret!');
});

app.get('/majestyReincarnate', (req, res) => {
        res.sendFile(__dirname + '/index2.html');
});

app.get('/590638f2206g919g66ge28837185d454', (req, res) => {
        res.send('Kalian lantik nanti pas november lho uwu');
});

app.listen(process.env.SERVER_PORT || 3000, () => {
        console.log('Server udah nyala');
});
