data = [
    {
      "title": "Work",
      "timeframes": {
        "daily": {
          "current": 5,
          "previous": 7
        },
        "weekly": {
          "current": 32,
          "previous": 36
        },
        "monthly": {
          "current": 103,
          "previous": 128
        }
      }
    },
    {
      "title": "Play",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 2
        },
        "weekly": {
          "current": 10,
          "previous": 8
        },
        "monthly": {
          "current": 23,
          "previous": 29
        }
      }
    },
    {
      "title": "Study",
      "timeframes": {
        "daily": {
          "current": 0,
          "previous": 1
        },
        "weekly": {
          "current": 4,
          "previous": 7
        },
        "monthly": {
          "current": 13,
          "previous": 19
        }
      }
    },
    {
      "title": "Exercise",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 1
        },
        "weekly": {
          "current": 4,
          "previous": 5
        },
        "monthly": {
          "current": 11,
          "previous": 18
        }
      }
    },
    {
      "title": "Social",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 3
        },
        "weekly": {
          "current": 5,
          "previous": 10
        },
        "monthly": {
          "current": 21,
          "previous": 23
        }
      }
    },
    {
      "title": "Self Care",
      "timeframes": {
        "daily": {
          "current": 0,
          "previous": 1
        },
        "weekly": {
          "current": 2,
          "previous": 2
        },
        "monthly": {
          "current": 7,
          "previous": 11
        }
      }
    }
  ]


function createDashBoardBlock(title, timeSpent, previousTimeSpent){
    var newBlock = document.createElement("div");
    newBlock.classList.add("report-block");
    newBlock.innerHTML = `<div class="report-info">
                            <img class="settings" src="images/icon-ellipsis.svg" alt="settings">
                            <h2 class="subject">${title}</h2>
                            <p class="time-spent">${timeSpent}hrs</p> 
                            <p class="previous-time-spent">Previous - ${previousTimeSpent}hrs</p> 
                        </div>`
    return newBlock;
}


function addBlock(block){
    document.body.appendChild(block);
}




window.li_marked=1;
const timeframes = ["daily", "monthly", "weekly"];

const timeframe = timeframes[window.li_marked]

for(let i =0; i < 6; i++){
    var dashInfo = data[i];
    console.log(dashInfo)
    var timeFramesInfo = dashInfo.timeframes;
    var {current: current, previous: previous} = timeFramesInfo[timeframe];
    var block = createDashBoardBlock(dashInfo.title, current, previous);
    addBlock(block);
}






myLis = Array.from(document.querySelectorAll("a"));
myLis[window.li_marked].classList.add("li-marked");


