var fs = require("fs");
var util = require('util');
var EOL = require('os').EOL;

function Log() {
    // Nothing
}

module.exports = Log;

/*var fillChar = function (data, char, fieldLength, rTL) {
    var result = data.toString();
    if (rTL === true) {
        for (var i = result.length; i < fieldLength; i++)
            result = char.concat(result);
    }
    else {
        for (var i = result.length; i < fieldLength; i++)
            result = result.concat(char);
    }
    return result;
};

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
var seconds2time = function (seconds) {
    var hours = Math.floor(seconds / 3600);
    var minutes = Math.floor((seconds - (hours * 3600)) / 60);
    var seconds = seconds - (hours * 3600) - (minutes * 60);
    var time = "";

    if (hours != 0) {
        time = hours + ":";
    }
    if (minutes != 0 || time !== "") {
        minutes = (minutes < 10 && time !== "") ? "0" + minutes : String(minutes);
        time += minutes + ":";
    }
    if (time === "") {
        time = seconds + " seconds";
    }
    else {
        time += (seconds < 10) ? "0" + seconds : String(seconds);
    }
    return time;
};*/

Log.prototype.setup = function (gameServer) {
   /* if (!fs.existsSync('./logs')) {
        // Make log folder
        fs.mkdir('./logs');
    }
    var fps, peek = 0;

    if ( gameServer.config.serverLiveStats == 1 ) {
        this.onWriteConsole = function (gameServer) {
            var rss = parseInt((process.memoryUsage().rss / 1024 ).toFixed(0));
            if (rss > peek) {
                peek = rss;
            }
            var fpstext = "Unknown";
            if ( typeof fps != "undefined" ) {
                var diff = process.hrtime(fps);
                fpstext = (((diff[0] * 1e9 + diff[1])/1000000)-1000).toFixed(1) + "ms";
            }

            var line1 = "\u001B[4mPlaying :   " + fillChar(gameServer.sinfo.humans, ' ', 5, true) + " │ Dead :      " + fillChar(gameServer.sinfo.death, ' ', 5, true) + " │ Spectator:  " + fillChar(gameServer.sinfo.spectate, ' ', 5, true) + " │ Bot:        " + fillChar(gameServer.sinfo.bots, ' ', 5, true) + " \u001B[24m";
            var line2 = "ejected : " + fillChar(numberWithCommas(gameServer.nodesEjected.length), ' ', 27, true) + " │ cells  :  " + fillChar(numberWithCommas(gameServer.nodesPlayer.length), ' ', 27, true) + " ";
            var line3 = "food    : " + fillChar(numberWithCommas(gameServer.nodes.length), ' ', 27, true) + " │ moving :  " + fillChar(numberWithCommas(gameServer.movingNodes.length), ' ', 27, true) + " ";
            var line4 = "virus   : " + fillChar(numberWithCommas(gameServer.nodesVirus.length), ' ', 27, true) + " │ tick   :  " + fillChar(fpstext,' ', 27, true) + "\u001B[36m ";
            var line5 = "uptime  : " + fillChar(seconds2time(process.uptime().toFixed(0)), ' ', 27, true) + " │ memory :  " + fillChar(numberWithCommas(rss) + ' ▲' + numberWithCommas(peek), ' ', 27, true) + " \u001B[24m";
            process.stdout.write("\u001B[s\u001B[H\u001B[6r");
            process.stdout.write("\u001B[8;36;44m   ___                  " + line1 + EOL);
            process.stdout.write("  / _ \\ __ _ __ _ _ _   " + line2 + EOL);
            process.stdout.write(" | (_) / _` / _` | '_|  " + line3 + EOL);
            process.stdout.write("  \\___/\\__, \\__,_|_|    " + line4 + EOL);
            process.stdout.write("\u001B[4m       |___/ server     " + line5 + EOL);
            process.stdout.write("\u001B[0m\u001B[u");
            fps = process.hrtime();
        };
    }

    switch (gameServer.config.serverLogLevel) {
        case 2:
            if (gameServer.config.serverLogToFile) ip_log = fs.createWriteStream('./logs/ip.log', {flags: 'w'});
            var peek = 0;

            // Override
            this.onConnect = function (ip) {
                if (gameServer.config.serverLogToFile) ip_log.write("[" + gameServer.formatTime() + "] Connect: " + ip + EOL);
                var yada = '';
                if (gameServer.config.serverLiveStats == 0) {
                    yada = "(Play:" + gameServer.sinfo.humans + " Spec: " + gameServer.sinfo.spectate + ") ";
                }
                process.stdout.write("[" + gameServer.formatTime() + "] " + yada + "\u001B[32m" + util.format(ip) + "\u001B[0m" + EOL);
            };
            this.onDisconnect = function (ip) {
                if (gameServer.config.serverLogToFile) ip_log.write("[" + gameServer.formatTime() + "] Disconnect: " + ip + EOL);
                process.stdout.write("[" + gameServer.formatTime() + "] \u001B[31m" + util.format(ip) + "\u001B[0m" + EOL);
            };
        case 1:
            if (gameServer.config.serverLogToFile) console_log = fs.createWriteStream('./logs/console.log', {flags: 'w'});
            var LastMsg;

            console.log = function (d) {
                if (d != LastMsg) {
                    LastMsg = d;
                    if (gameServer.config.serverLogToFile) {
                        var text = "[" + gameServer.formatTime() + "] " + util.format(d);
                        // Remove Color Codes from log

                        text = text.replace(/[\u001b\u009b][[()#;?]*(?:[0-9]{1,4}(?:;[0-9]{0,4})*)?[0-9A-ORZcf-nqry=><]/g, '');
                        console_log.write(text + EOL);
                    }
                    process.stdout.write("[" + gameServer.formatTime() + "] " + util.format(d) + EOL);
                }
            };
            break;
        case 0:
            // Prevent crashes
            process.on('uncaughtException', function (err) {
                console.log(err.stack);
            });
            break;
        default:
            break;
    }*/
};

Log.prototype.onConnect = function (ip) {
    // Nothing
};

Log.prototype.onDisconnect = function (ip) {
    // Nothing
};

Log.prototype.onWriteConsole = function (gameServ) {
    // Nothing
};
