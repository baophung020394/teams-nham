class Teams {
    constructor(id, name, rep) {
        this.id = id;
        this.name = name;
        this.rep = rep;
    }
}

var list = [];
var listCoupleFight = [];
function random(list) {
    console.log(list);
    var htmlDom = document.getElementById("listFight");
    list.map(function (team, index) {
        for (var i = index + 1; i < list.length; i++) {
            // console.log(`${team.name}${list[i].name}`);
            var listChild = team.name + list[i].name;
            listCoupleFight.push(listChild);
            console.log('result ' + listCoupleFight)
            htmlDom.innerHTML = "<span>" + listCoupleFight +"</span>";
            // console.log(listChild)
        }
    })
}
function addCouple(form) {
    var id = parseInt(form.id.value);
    var rep = parseInt(form.rep.value);
    var name = form.name.value;
    var couple = new Teams(id, name, rep);
    if (rep < 3) {
        alert("Min rep is 3");
        return false;
    } else {
        list.push(couple);
    }
  
    return random(list);
}

function validateForm() {
    var rep = document.forms["myForm"]["rep"].value;
    if (rep < 3) {
        alert("Min rep is 3");
        return false;
    }
}
// var arr = [
//     {id: 1, name: 'A', rep: 3},
//     {id: 2, name: 'B', rep: 3},
//     {id: 3, name: 'C', rep: 3},
//     {id: 4, name: 'D', rep: 3},
//     {id: 5, name: 'E', rep: 3},
// ]

// for (let [m1, mem01] of arr.entries()) {
//     for(let m2 = m1 + 1; m2 < arr.length; m2++) {
//         let mem02 = arr[m2];
//         console.log(`${mem01.name}${mem02.names}`)
//     }
// }