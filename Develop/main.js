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


function saveData(event) {

    var savedID = event.toElement.classList[3];

    var savedText = textAreaBlock[savedID].value;
    timeArray[savedID].data = savedText;
    //need to push new data in as hitting the set refreshes everything
    localStorage.setItem("Planner", JSON.stringify(timeArray));
}

var parseData = JSON.parse(localStorage.getItem("Planner"));


for (var i = 0; i < timeArray.length; i++) {
    if (parseData[i].data == "") {
        parseData[i].data = "";
    } else {
        textAreaBlock[i].value = parseData[i].data;
    }
}
