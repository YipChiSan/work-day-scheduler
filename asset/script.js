var today = moment().format("ddd, MMM Do, YYYY");
$("#currentDay").text(today);
let containerEl = $(".container");

let currentTime = parseInt(moment().format("k"));
for (let i = 9; i <= 17; i++) {
    let displayTime;
    let textAreaTimeClass;
    if (i > 12) {
        displayTime = (i - 12) + "pm"; 
    } else {
        displayTime = i + "am";
    }
    
    if (i < currentTime) {
        textAreaTimeClass = "past";
    } else if (i == currentTime) {
        textAreaTimeClass = "present";
    } else {
        textAreaTimeClass = "future";
    }

    let displayTimeEl = $("<p class='col-1 time-block'>" + displayTime + "</p>");
    
    let textAreaEl = $("<textArea class='description " + textAreaTimeClass + "'></textArea>");
    textAreaEl.val(localStorage.getItem(displayTime));
    let bigColEl = $("<div class='col-10'></div>");
    bigColEl.append(textAreaEl);

    let btnEl = $("<button type='button' class='btn saveBtn'>Save</button>");


    let btnColEl = $("<div class='col-1'></div>");
    btnColEl.append(btnEl);

    let rowEl = $("<div class='row no-gutters'></div>");
    rowEl.append(displayTimeEl);
    rowEl.append(bigColEl);
    rowEl.append(btnColEl);
    btnEl.click(
        function() {
            let thisTextAreaText = $(this).parent().parent().children(".col-10").children("textArea").val();
            localStorage.setItem(displayTime, thisTextAreaText);
        }
    );

    containerEl.append(rowEl);
}

