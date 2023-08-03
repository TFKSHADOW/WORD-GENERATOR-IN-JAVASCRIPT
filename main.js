let traits = ['water', 'fire', 'earth', 'space', 'time', 'thevoid', 'light', 'darkness', 'metal', 'air', 'poison', 'curse'];
let rank = ['F','E','D','C','B','A','S','SS','SSS'];
let profession = ['warrior', 'mage', 'tank', 'berserker', 'farmer', 'healer', 'cook', 'librarian', 'slime-tamer'];

/* *****************************************/

let btn = document.getElementById('btn');
let output = document.getElementById('output');
let squadDiv = document.getElementById('squad');

let outputArray = [];

btn.addEventListener('click', function(){
    var traitChooser = traits[Math.floor(Math.random()*traits.length)]
    var professionChooser = profession[Math.floor(Math.random()*profession.length)]
    var rankChooser = rank[Math.floor(Math.random()*rank.length)]
    const outputText = `Your profession is <em><strong>${professionChooser}</strong></em> with the aquired power of <em><strong>${traitChooser}</strong></em> ranked <em><strong>${rankChooser}</strong></em>`;
    const sqout = `<b>${professionChooser}</b>: <b>${rankChooser}</b> - <b>${traitChooser}</b>`;


      // Push the new output value into the outputArray
      outputArray.push(sqout);

      output.innerHTML = outputText;
      updateSquadDiv();
});

function updateSquadDiv() {
    // Update the squad div to display all the iterations in outputArray
    squadDiv.innerHTML = '';
    outputArray.forEach((outputValue) => {
        const outputElement = document.createElement('div');
        outputElement.innerHTML = outputValue;
        squadDiv.appendChild(outputElement);
    });
}

