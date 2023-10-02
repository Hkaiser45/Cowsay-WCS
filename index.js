const info = require('./information.js');
var cowsay = require("cowsay");
console.log(cowsay.say({

    text: `Im ${info.name} from ${info.campus}`,
    e: "^^",
    T: "U"
}));