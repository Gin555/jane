const client = require("../../index").client

module.exports = () =>{
    console.log('bot is online!');
    client.user.setActivity("m!help" , {type : 'PLAYING'});
}
