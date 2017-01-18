console.log("Hello,world!");
var app = require('express')();
var http = require('http').Server(app);
//var irc = require('irc');
var tmi = require("tmi.js");
var sentiment = require('sentiment');

app.get('/', function(req, res){
  res.sendFile('C:/Programming/Web Development/NeoRiemannian/nodejs/index.html');
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});

var options = {
	options:{
		debug: true
	},
	connection: {
		reconnect: true
	},
	identity:{
		username:"pontihog1",
		password:"oauth:iaw0dkrov4xllcwm5i064fnnx850zs"
	},
	channels: ['#doublelift']
}
var client = new tmi.client(options);

//console.log(sentiment("I love cats!"));
//console.log(sentiment("I really love cats!"));

var scoreArr = [];
for(var i = 0; i < 10; i++){
	scoreArr[i] = 0;
}


function calc(){
	sum = 0;
	for(var i = 0; i < 10; i++){
		sum+=scoreArr[i];
	}
	console.log(sum);
	return sum/10.0;
}

var current = 0;

client.connect();


client.on("chat", function (channel, user, message, self) {
    //console.log(message);
    //console.log("AAA");
    console.log(sentiment(message).score);
    scoreArr[current] = sentiment(message).score;
    current++;
    current= current%10;
    console.log(current);
    //number+=1;
    //total+=sentiment(message).score;
    //average = total/number;
    
    console.log("LAST 100 AVERAGE: "+calc());
});
// var client = new irc.Client('irc.chat.twitch.tv', 'pontihog1', {
// 	userName: 'pontihog1',
// 	sasl: true,
// 	//password: 'oauth:iaw0dkrov4xllcwm5i064fnnx850zs',
//     channels: ['#imaqtpie'],
//     password: "oauth:iaw0dkrov4xllcwm5i064fnnx850zs"
// });

//var client = new irc.Client(config.server, config.nick, config);
//console.log("JJJ");

//client.addListener('message', function (from, to, message) {
   // console.log(from + ' => ' + to + ': ' + message);
//});

