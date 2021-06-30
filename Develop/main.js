var currentDayEl = $("#currentDay");

currentDayEl.text(moment().format("dddd MMMM Do"));

var containerEl = $(".container");



var timeArray = [
                    {   
                        id: "0",
                        time: "9",
                        data: "",
                        time24: "09"
                    },
                    {
                        id: "1",
                        time: "10",
                        data: "",
                        time24: "10"
                    },
                    {
                        id: "2",
                        time: "11",
                        data: "",
                        time24: "11"
                    },
                    {
                        id: "3",
                        time: "12",
                        data: "",
                        time24: "12"
                    },
                    {
                        id: "4",
                        time: "1",
                        data: "",
                        time24: "13"
                    },
                    {
                        id: "5",
                        time: "2",
                        data: "",
                        time24: "14"
                    },
                    {
                        id: "6",
                        time: "3",
                        data: "",
                        time24: "15"
                    },
                    {
                        id: "7",
                        time: "4",
                        data: "",
                        time24: "16"
                    },
                    {
                        id: "8",
                        time: "5",
                        data: "",
                        time24: "17"
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




function saveData(event) {

    var savedID = event.toElement.classList[3];

    var savedText = textAreaBlock[savedID].value;
    timeArray[savedID].data = savedText;
 

 
    localStorage.setItem("Planner", JSON.stringify(timeArray));

}

for (var i = 0; i < timeArray.length; i++) {
    if (parseData[i].data === "") {

        textAreaBlock[i].value = parseData[i].data;

    } else {
        textAreaBlock[i].value = parseData[i].data;
        timeArray[i].data = parseData[i].data;
    }
}

var currentTime = moment().format("H");

for (var i = 0; i < timeArray.length; i++) {


    var timeID = timeArray[i].id;

    if (currentTime == timeArray[i].time24) {

        $("." + timeID).addClass("present");
    } else if (currentTime > timeArray[i].time24) {

        $("." + timeID).addClass("past");
    } else if (currentTime < timeArray[i].time24) {

        $("." + timeID).addClass("future");

    }

}
  
