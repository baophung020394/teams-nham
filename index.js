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
    var couple, node2, fights, node3, teamObj, listCoupleFightObj;
    var arrTeam = [], arrlistCoupleFight = [];
    var result = [];
    // console.log( listPeople.length);
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
    console.log(listCoupleFight);
    listCoupleFight.map(function (team, index) {
        //  console.log(listCoupleFight.length)
        for (var i = index + 1; i < listCoupleFight.length; i++) {
            // console.log(`team ${team}`);
            console.log(`team ${listCoupleFight[i]}`);
            // for (var j = i + 1; j < listCoupleFight.length; j++) {
            //     console.log(team)
            //  }
            // console.log(`listCoupleFight ${listCoupleFight[i]}`);
            // couple = document.createElement("div");
            // node2 = document.createTextNode(`${team} + ${listPeople[i]}`);
            // couple.appendChild(node2);
            // htmlDom2.appendChild(couple);
            // listCoupleFight.push(`${team}${listPeople[i]}`);
            // console.log(listCoupleFight) 
        }
    })
    // for (var m = 0; m < listCoupleFight.length; m++) {
    //     for (var n = m + 1; n <= listCoupleFight.length; n++) {
    //         console.log(listCoupleFight.length)
    //         console.log('n ' + listCoupleFight[n]);
    //         console.log('m ' + listCoupleFight[m]);
            
    //         if(listCoupleFight[m] == listCoupleFight[m] && listCoupleFight[n] == listCoupleFight[n]) {
    //             arrTeam.push(`${listCoupleFight[m]} vs ${listCoupleFight[n]}`);
    //             listCoupleFight.splice(m, 1);
    //             listCoupleFight.splice(n, 1);
    //         }
            
    //         fights = document.createElement("div");
    //         arrTeam.forEach(e => {
    //             node3 = document.createTextNode(e);
    //         });
    //         // node3 = document.createTextNode(e);
    //         fights.appendChild(node3);
    //         htmlDom3.appendChild(fights);
    //     }
    // }
    // console.log(listCoupleFight);
    // listPeople.map(function (team, index) {
    //     for (var i = index + 1; i < listPeople.length; i++) {
    //         // console.log(`${team} + ${listPeople[i]}`);
    //         couple = document.createElement("div");
    //         node2 = document.createTextNode(`${team} + ${listPeople[i]}`);
    //         couple.appendChild(node2);
    //         htmlDom2.appendChild(couple);
    //         listCoupleFight.push(`${team}${listPeople[i]}`);
    //         console.log(listCoupleFight) 
    //     }
    // })
    // listCoupleFight.map(function (team, index) {
    //     for (var i = index + 1; i < listCoupleFight.length; i++) {

    //         // console.log(`${team.includes} vs ${listCoupleFight[i]}`);
    //         arrTeam.push(team);
    //         arrTeam.push(listCoupleFight[i]);
    //         // console.log(arrTeam);
    //         arrlistCoupleFight = Array.from(new Set(arrTeam));
    //         for (var j = index + 1; j < arrlistCoupleFight.length; j++) { 

    //         }
    //         // return arrlistCoupleFight;
    //         // console.log(arrlistCoupleFight);
    //         // arrTeam.filter((item, index) => {
    //         //     arrTeam.indexOf(item) !== index;
    //         //     console.log('result' + arrTeam)
    //         //     return arrTeam;
    //         // })
    //         // convertArrToObject(Array.from(new Set(arrTeam)));
    //         // console.log('team', Array.from(new Set(arrTeam)));
    //         // console.log('listCoupleFight', Array.from(new Set(arrlistCoupleFight)));
    //         // fights = document.createElement("div");
    //         // node3 = document.createTextNode(`${team} vs ${listCoupleFight[i]}`);
    //         // // console.log(node3)
    //         // fights.appendChild(node3);
    //         // htmlDom3.appendChild(fights);
    //     }
    // });
    // console.log(arrlistCoupleFight);
    // arrlistCoupleFight.map(function (team2, index) {
    //     for (var i = index + 1; i < arrlistCoupleFight.length; i++) {
    //         console.log(`ket qua cuoi cung: ${team2} vs ${arrlistCoupleFight[i]}`);
    //         fights = document.createElement("div");
    //         node3 = document.createTextNode(`${team2} vs ${arrlistCoupleFight[i]}`);
    //         // console.log(node3)
    //         fights.appendChild(node3);
    //         htmlDom3.appendChild(fights);
    //     }
    // });
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
var test = [];
var elements = [1, 5, 5, 3, 5, 2, 4];
for(var i = elements.length -1; i >= 0 ; i--){
   test.push(`${elements} : ${elements[i]}`);
}
// console.log('tada', test)