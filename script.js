const timeframes = ["daily", "monthly", "weekly"];

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

const urlParams = new URLSearchParams(window.location.search);

let timeframe = urlParams.get('timeframe');

if(timeframes.includes(timeframe) === false){
  timeframe = timeframes[0];
}

console.log(timeframe);
fetch("./data.json").then(response=> {
  return response.json();
}).then(data => {
  for(let i =0; i < 6; i++){
    var dashInfo = data[i];
    var timeFramesInfo = dashInfo.timeframes;
    var {current: current, previous: previous} = timeFramesInfo[timeframe];
    var block = createDashBoardBlock(dashInfo.title, current, previous);
    addBlock(block);
  }
});

AArray = Array.from(document.querySelectorAll("a"));

AArray.forEach((item,index)=>{
    if(item.innerText.toLowerCase() == timeframe.toLowerCase()){
      item.classList.add("li-marked")
    }
})
