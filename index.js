const Discord = require('discord.js');
const client = new Discord.Client({ ws: { properties: { $browser: "Discord iOS" }} });
client.login("6eadd2a798d427297772ab71fddd0e7a817eaf9c1c258b978379261e246eefbb");

client.on('ready', () => {
  console.log("Logged in as " +  )
})

//TLDR: odpal komende #play
client.on('message', message => {
    if(message.content.indexOf("#") == 0) {
        var msg = message.content;
        var commands = msg.substring(1);
        var args = commands.split("#");
        
        switch(args['0'].toLowerCase()) {
            case 'play':
                const channel = message.member.voice.channel;
                if (channel && channel.type === 'voice') {
                    if(args['1'] == null) {
                      channel.join().then(conn => { conn.play('https://s2.radioparty.pl:8015/stream'); });
                    } else {
                      var url = "";
                      switch(args['1']) {
                        case 'radioparty':
                          url = "https://s2.radioparty.pl:8015/stream";
                          break;
                        case 'qdance':
                          url = "https://22713.live.streamtheworld.com/Q_DANCE.mp3";
                          break;
                        case 'rmfmaxx':
                          url = "https://rs102-krk-cyfronet.rmfstream.pl/RMFMAXXX48";
                          break;
                        default:
                          message.reply("Nieznana stacja radiowa: " + args['1']);
                          break;
                      }

                      channel.join().then(conn => { 
                        conn.play(url);
                      });
                    }
                } else {
                    message.reply('Not in VoiceChannel!');
                }
                break;
        }
    }
});