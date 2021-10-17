function createDashBoardBlock(subject, timeSpent, previousTimeSpent){
    var newBlock = document.createElement("div");
    newBlock.classList.add("report-block");
    newBlock.innerHTML = `<div class="report-info">
                            <img class="settings" src="images/icon-ellipsis.svg" alt="settings">
                            <h2 class="subject">${subject}</h2>
                            <p class="time-spent">${timeSpent}hrs</p> 
                            <p class="previous-time-spent">Previous - ${previousTimeSpent}hrs</p> 
                        </div>`
    return newBlock;
}

function addBlock(block){
    document.body.appendChild(block);
}
// for(let i =0; i < 8; i++){
//     var block = createDashBoardBlock("Math", i, i+3);
//     addBlock(block);
// }