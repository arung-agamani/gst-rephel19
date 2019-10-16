const express = require('express');
const cors = require('cors');
const line = require('@line/bot-sdk').Client;
const bodyParser = require('body-parser');

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded( { extended : true }));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

const configLine = {
	channelAccessToken: 'vo9crwu0GrfmDAGEPFZo73WuI9nayGwJa3qofBjqECcFzJCN0R0g7TWt+4kOrMtB1Gx+rzqg1mE0cE5X//LkMm9r8iDj58G68KdwNvasqgagHj2K2vc9dDuWqoabMNmcJG22n+MlQMPrweHP+re0IQdB04t89/1O/w1cDnyilFU=',
	channelSecret: '573e466d61bfed280331bd9f1c394fe0',
};

const lineClient = new line(configLine);

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

app.get('/answer', (req, res) => {
    res.sendFile(__dirname + '/node1.html');
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

app.post('/github', (req, res) => {
	console.log(req.hostname);
	

	if (req.hostname == 'awoo.genshiken-itb.org') {
		const msg = req.body.events ? req.body.events[0].message.text : '';
		// console.log(msg);

		

		if (msg.match(/^src-id$/)) {
			let jsonMessage;
			const source = req.body.events[0].source;
    			const eventZero = req.body.events[0];
    			const replyToken = req.body.events[0].replyToken;
			if (req.body.events[0].source.type == 'group') {
				jsonMessage = {
					type: 'text',
					text: 'Source : ' + source.type + '\nSource ID : ' + source.groupId,
				};
			}
			else if (req.body.events[0].source.type == 'room') {
				jsonMessage = {
					type: 'text',
					text: 'Source : ' + source.type + '\nSource ID : ' + source.roomId,
				};
			}
			else {
				jsonMessage = {
					type: 'text',
					text: 'Source : ' + source.type + '\nSource ID : ' + source.userId,
				};
			}
			lineClient.replyMessage(req.body.events[0].replyToken, jsonMessage);
		} else {
		res.status(200);
		res.send('OK');
		}
	} else {
		const GITHUB_payload = JSON.parse(req.body.payload);
		console.log('New push request to ' + GITHUB_payload.repository.name);
		console.log('Pushed by ' + GITHUB_payload.pusher.name);
		console.log('Last commit message : ' + GITHUB_payload.commits[0].message);
		let jsonMessage = {
			type : 'text',
			text : 'New push request to ' + GITHUB_payload.repository.name + '\nPushed by ' + GITHUB_payload.pusher.name + '\nLast commit message : ' +  GITHUB_payload.commits[0].message,
		};
		lineClient.pushMessage('Rd0da4dd96f45828d259ba792b64ab979', jsonMessage);
		res.send('Received a webhook');
	}

	
});

app.get('/github', (req, res) => {
	console.log(req.body);
	res.status(200);
	res.send('OK');
});

app.listen(process.env.SERVER_PORT || 3000, () => {
	console.log('Server udah nyala');
});
