class Teams {
    constructor(id, name, rep) {
        this.id = id;
        this.name = name;
        this.rep = rep;
    }
}

var listPeople = [];
var listCoupleFight = [];

function random() {
    console.log(listPeople.length);
    // listPeople = [];
    // listCoupleFight = [];
    var reps = parseInt(document.querySelector('.reps').value);
    var htmlDom2 = document.getElementById("listCouple");
    var htmlDom3 = document.getElementById("listFight");
    var couple, node2, fights, node3;
    var result = [];
    if (reps < 3) {
        alert(`Min rep is 3`);
        return false;
    } else if (reps > listPeople.length) {
        alert(`Please add more person`);
        return false;
    }

    if (listPeople.length < 4) {
        alert(`The number person min is 4`);
        return false;
    }

    for (var i = 0; i < listPeople.length; i++) {
        for (var j = i + 1; j < listPeople.length; j++) {
            // result.push(`${listPeople[i]}${listPeople[j]}`);
            couple = document.createElement("div");
            node2 = document.createTextNode(`${listPeople[i]} + ${listPeople[j]}`);
            couple.appendChild(node2);
            htmlDom2.appendChild(couple);
            listCoupleFight.push(`${listPeople[i]}${listPeople[j]}`);
        }
    }
    const hasLeakItem = listCoupleFight.length % 2 > 0;

    for (let i = 0; i < listCoupleFight.length - 1; i += 2) {
        result.push(`${ listCoupleFight[i] } vs ${ listCoupleFight[i + 1] }`);
    }

    if (hasLeakItem) {
         result.push(`Dang du 1 team ${ listCoupleFight[listCoupleFight.length - 1] }`)
    }
    
    result.forEach(e => {
        fights = document.createElement("div");
        node3 = document.createTextNode(e);
        fights.appendChild(node3);
        htmlDom3.appendChild(fights);
    })
     
    // node3 = document.createTextNode(e);
   

   
}

function addCouple() {
    var text = '';
    var name = document.querySelector('.name').value;
    var htmlDom = document.getElementById("listPeople");
    var span, node;
    if (name) {
        if (listPeople.includes(name)) {
            alert('Duplicate Name');
        } else {
            listPeople.push(name);
            // console.log(listPeople);
            listPeople.forEach(e => {
                span = document.createElement("span");
                node = document.createTextNode(e);
            });
            span.appendChild(node);
            htmlDom.appendChild(span);
            return listPeople;
        }
    }
    else {
        alert('Please input name');
        // console.log(listPeople);
    }
}
function addReps() {
    var reps = document.querySelector('.reps').value;
    if (reps < 3) {
        alert("Min rep is 3");
        return false;
    } else {
        alert(reps);
    }
}