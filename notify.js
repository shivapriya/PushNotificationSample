var gcm = require('node-gcm');
var message = new gcm.Message();
 
//API Server Key
var sender = new gcm.Sender('AIzaSyC2uTkFdt1zSOSdx6qPP1A_YSiJRyvyC_o');
var registrationIds = [];

console.log("getting ready to send");
 
// Value the payload data to send...
message.addData('message',"\u270C Peace, Love \u2764 and PhoneGap \u2706!");
message.addData('title','Push Notification Sample' );
message.addData('msgcnt','3'); // Shows up in the notification in the status bar
message.addData('soundname','beep.wav'); //Sound to play upon notification receipt - put in the www folder in app
//message.collapseKey = 'demo';
//message.delayWhileIdle = true; //Default is false
message.timeToLive = 3000;// Duration in seconds to hold in GCM and retry before timing out. Default 4 weeks (2,419,200 seconds) if not specified.
 
// At least one reg id required
registrationIds.push('APA91bEYDNPyuSTdexrNr98os7-IIWT4_jW0N00-2-aUs5DtWE9c4SVx90zEpXeLDWSO2fcjlPp6YIGQ3a5nnyMajNY9ZfE3OhG27Wo-V0yB-sVtWieAMPJXWhSqbsOj_TxUnXpdVj3CHm0EaKsTBMcKtPL-fOU1Ug');
 console.log("getting ready to send 2");
/**
 * Parameters: message-literal, registrationIds-array, No. of retries, callback-function
 */
sender.send(message, registrationIds, 4, function (result) {
    console.log(result);
});