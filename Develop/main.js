var currentDayEl = $("#currentDay");

currentDayEl.text(moment().format("dddd MMMM Do"));

var containerEl = $(".container");



var timeArray = [
                    {   
                        id: "0",
                        time: "9",
                        data: ""
                    },
                    {
                        id: "1",
                        time: "10",
                        data: ""
                    },
                    {
                        id: "2",
                        time: "11",
                        data: ""
                    },
                    {
                        id: "3",
                        time: "12",
                        data: ""
                    },
                    {
                        id: "4",
                        time: "1",
                        data: ""
                    },
                    {
                        id: "5",
                        time: "2",
                        data: ""
                    },
                    {
                        id: "6",
                        time: "3",
                        data: ""
                    },
                    {
                        id: "7",
                        time: "4",
                        data: ""
                    },
                    {
                        id: "8",
                        time: "5",
                        data: ""
                    },
];



var button;
var textArea;
var textAreaBox;

function dayPlanner(item) {
    var div = document.createElement("div");
    var secondDiv = document.createElement("div");
    var textArea = document.createElement("textarea");
    var button = document.createElement("button");

    secondDiv.innerHTML = timeArray[item].time;

    div.classList.add("form-group", "custom-display");
    secondDiv.classList.add("time-block");
    textArea.classList.add("form-control", item);
    textArea.setAttribute("rows", "3");
    button.classList.add("fas", "fa-save", "saveBtn", item);

    containerEl.append(div);
    div.appendChild(secondDiv);
    div.appendChild(textArea);
    div.appendChild(button);

}

for (var i = 0; i < timeArray.length; i++) {
    dayPlanner(timeArray[i].id);
}

var saveBtn = document.querySelectorAll(".saveBtn");
var textAreaBlock = document.querySelectorAll(".form-control");


for (var i = 0; i < saveBtn.length; i++) {
    saveBtn[i].addEventListener("click", saveData)
}


var parseData = JSON.parse(localStorage.getItem("Planner"));


for (var i = 0; i < timeArray.length; i++) {
    if (parseData[i].data == "") {
        textAreaBlock[i].value = parseData[i].data;

    } else {
        textAreaBlock[i].value = parseData[i].data;
        timeArray[i].data = parseData[i].data;
    }
}



function saveData(event) {

    var savedID = event.toElement.classList[3];

    var savedText = textAreaBlock[savedID].value;
    timeArray[savedID].data = savedText;


    localStorage.setItem("Planner", JSON.stringify(timeArray));

}

// var noPreviousData = [];
// for (var i = 0; i <parseData.length; i++) {   
//     function checkData(i) {
//         if (parseData[i].data === "") {
//             console.log("true");
//             noPreviousData.push(true);
//         } else {
//             console.log("false");
//             noPreviousData.push(false);

//         }
//     }
//     checkData(i);
// }


// function checkStatus(status) {
//     return status == true;
// }



// if  all parseData.data contains "" then set local Storage
// if one parseData contains "eljfsdlkjfds" then push local storage

// function search() {
//     for (var i = 0; i < parseData.length; i++) {
//         if (parseData[i].data === "") {
//            return parseData[i];
//         }
//     }
// }



// for (var i = 0; i < parseData.length; i++) {
//     parseData.every( function(i) {
//    return parseData[i].data === "";
// })}
