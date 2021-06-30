var currentDayEl = $("#currentDay");
//Shows current date and day on the top
currentDayEl.text(moment().format("dddd MMMM Do"));

var containerEl = $(".container");
var currentTime = moment().format("H");

var button;
var textArea;
var textAreaBox;
//time calendar that can be expanded
var timeArray = [
                    {   
                        id: "0",
                        time: "9AM",
                        data: "",
                        time24: "09"
                    },
                    {
                        id: "1",
                        time: "10AM",
                        data: "",
                        time24: "10"
                    },
                    {
                        id: "2",
                        time: "11AM",
                        data: "",
                        time24: "11"
                    },
                    {
                        id: "3",
                        time: "12PM",
                        data: "",
                        time24: "12"
                    },
                    {
                        id: "4",
                        time: "1PM",
                        data: "",
                        time24: "13"
                    },
                    {
                        id: "5",
                        time: "2PM",
                        data: "",
                        time24: "14"
                    },
                    {
                        id: "6",
                        time: "3PM",
                        data: "",
                        time24: "15"
                    },
                    {
                        id: "7",
                        time: "4PM",
                        data: "",
                        time24: "16"
                    },
                    {
                        id: "8",
                        time: "5PM",
                        data: "",
                        time24: "17"
                    },
];



//creates, innerhtml, appends each time block with a text area and button

function dayPlanner(item) {
    //creates all the elements for timeblock
    var div = document.createElement("div");
    var secondDiv = document.createElement("div");
    var textArea = document.createElement("textarea");
    var button = document.createElement("button");
    
    secondDiv.innerHTML = timeArray[item].time;
    //add classes to all elements
    div.classList.add("form-group", "custom-display");
    secondDiv.classList.add("time-block");
    //assigned the textArea with a number class so it can be accessed later for background
    textArea.classList.add("form-control", item);
    textArea.setAttribute("rows", "3");
    //button picture pulls from font-awesome
    button.classList.add("fas", "fa-save", "saveBtn", item);

    containerEl.append(div);
    div.appendChild(secondDiv);
    div.appendChild(textArea);
    div.appendChild(button);

}
//loop that creates/innerhtml/append each timeblock
for (var i = 0; i < timeArray.length; i++) {
    dayPlanner(timeArray[i].id);
}

var saveBtn = document.querySelectorAll(".saveBtn");
var textAreaBlock = document.querySelectorAll(".form-control");

//sets the status of each time block as present/future/past according to its CSS color

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
  
//add for loop for button event listeners
for (var i = 0; i < saveBtn.length; i++) {
    saveBtn[i].addEventListener("click", saveData)
}


var parseData = JSON.parse(localStorage.getItem("Planner"));

//function to save data to localstorage
function saveData(event) {

    var savedID = event.toElement.classList[3];

    var savedText = textAreaBlock[savedID].value;
    timeArray[savedID].data = savedText;
    localStorage.setItem("Planner", JSON.stringify(timeArray));

}

//displays localstorage content if pages refreshes and makes sure it doesnt get reset
for (var i = 0; i < timeArray.length; i++) {
    if (parseData[i].data === "") {

        textAreaBlock[i].value = parseData[i].data;

    } else {

        textAreaBlock[i].value = parseData[i].data;
        timeArray[i].data = parseData[i].data;

    }
}



