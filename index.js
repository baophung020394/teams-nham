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
    var reps = parseInt( document.querySelector('.reps').value);
    var htmlDom2 = document.getElementById("listCouple");
    var htmlDom3 = document.getElementById("listFight");
    var couple, node2, fights, node3;
    console.log( listPeople.length);
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

    listPeople.map(function (team, index) {
        for (var i = index + 1; i < listPeople.length; i++) {
            console.log(`${team} + ${listPeople[i]}`);
            couple = document.createElement("div");
            node2 = document.createTextNode(`${team} + ${listPeople[i]}`);
            couple.appendChild(node2);
            htmlDom2.appendChild(couple);
            listCoupleFight.push(`${team}${listPeople[i]}`);
            console.log(listCoupleFight) 
        }
    })
    listCoupleFight.map(function (team, index) {
        for (var i = index + 1; i < listCoupleFight.length; i++) {
            console.log(`${team} vs ${listCoupleFight[i]}`);
            fights = document.createElement("div");
            node3 = document.createTextNode(`${team} vs ${listCoupleFight[i]}`);
            fights.appendChild(node3);
            htmlDom3.appendChild(fights);
        }
    })
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
            console.log(listPeople);
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