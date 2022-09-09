// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.

//roll a die and get 1-x back
function rollDie(die_type) {
  return Math.floor(Math.random() * die_type)+2;
}

async function skillCheck(self) {
    var level = self.value;
    var result = 0;
    for(let i = 0; i < level; i++)
    {
        var roll = rollDie(100);
        if(roll>result)
            result = roll;
    }

    for(let i = 0; i < result; i++){
        await new Promise(r => setTimeout(r, (i/result)*20));
        skillCheck_display(i, result);
    }
}

function skillCheck_display(i, result){
    var colour = (i/result)*255;
    document.getElementById("skillCheck_result").innerText = i.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
    document.getElementById("skillCheck_result").style.color = "rgb(" + colour + "," + colour + "," + colour + ")";
}

async function damageRoll(self) {
    var level = self.value;
    var result = 0;
    for(let i = 0; i < level; i++)
    {
        var roll = rollDie(10);
        result += roll;
    }

    for(let i = 0; i < result; i++){
        await new Promise(r => setTimeout(r, (i/result)*20));
        damageRoll_display(i, result);
    }
}

function damageRoll_display(i, result){
    var colour = (i/result)*255;
    document.getElementById("damageRoll_result").innerText = i.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
    document.getElementById("damageRoll_result").style.color = "rgb(" + colour + "," + colour + "," + colour + ")";
}