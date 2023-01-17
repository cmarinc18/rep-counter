let saveEl = document.getElementById("save-el")
saveEl.setAttribute('style', 'white-space: pre;');
let countEl = document.getElementById("count-el")
let count = 0
let round = 1

function increment() {
    count += 1
    
    countEl.textContent = count
}
function decrease() {
    count -= 1
    
    countEl.textContent = count
}
function reset() {
    count = 0
    round = 1
    countEl.textContent = count;
    saveEl.textContent =  " "
}

function save() {
    let countStr = "Round #" + round + ": " +count +"reps\r\n" 
    console.log(countStr)
    saveEl.textContent +=  countStr 
    countEl.textContent = 0
    count = 0
    round += 1
}
