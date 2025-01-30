let currentTotal = 0
let history = []
function addPenny(amount){
    currentTotal = Math.round((currentTotal + (amount*0.01)) * 100) / 100;
    for(let i = 0;i < amount;i++){

const coin = document.createElement('img');
coin.src = 'image/penny.webp'
document.querySelector('.money').appendChild(coin)
coin.style.width = '50px';
coin.style.height = '50px';
history.push(0.1)
    }
}
function addNickel(amount){
    for(let i = 0;i < amount;i++){
        currentTotal = Math.round((currentTotal + 0.05) * 100) / 100;

        const coin = document.createElement('img');
coin.src = 'image/nickel.jpg'
document.querySelector('.money').appendChild(coin)
coin.style.width = '67px';
coin.style.height = '67px';
history.push(0.5)
    }
}

function addDime(amount){
    for(let i = 0;i < amount;i++){
        currentTotal = Math.round((currentTotal + 0.1) * 100) / 100;
        const coin = document.createElement('img');
coin.src = 'image/dime.png'
document.querySelector('.money').appendChild(coin)
coin.style.width = '45px';
coin.style.height = '45px';
history.push(0.10)
    }
}
function addQuarter(amount){
    for(let i = 0;i < amount;i++){
        currentTotal = Math.round((currentTotal + 0.25) * 100) / 100;
        const coin = document.createElement('img');
coin.src = 'image/quarter.jpeg'
document.querySelector('.money').appendChild(coin)
coin.style.width = '75px';
coin.style.height = '75px';
history.push(0.25)
    }
}
function addDollarBill(amount){
    for(let i = 0;i < amount;i++){
        currentTotal++
        const coin = document.createElement('img');
        coin.src = 'image/dollar_bill.jpg'
        document.querySelector('.money').appendChild(coin)
        coin.style.width = '300px';
        coin.style.height = '150px';
        history.push(1)
    }
}
document.querySelector('.penny').addEventListener('click', ()=>{
    addPenny(1)
    document.querySelector('.cost').innerHTML = `Total amount in dollars:$${currentTotal.toFixed(2)}`
})
document.querySelector('.nickel').addEventListener('click', ()=>{
    addNickel(1)
    document.querySelector('.cost').innerHTML = `Total amount in dollars:$${currentTotal.toFixed(2)}`
})
document.querySelector('.dime').addEventListener('click', ()=>{
    addDime(1)
    document.querySelector('.cost').innerHTML = `Total amount in dollars:$${currentTotal.toFixed(2)}`
})
document.querySelector('.quarter').addEventListener('click', ()=>{
     addQuarter(1)
    document.querySelector('.cost').innerHTML = `Total amount in dollars:$${currentTotal.toFixed(2)}`
})
document.querySelector('.bill').addEventListener('click', ()=>{
    addDollarBill(1)
    document.querySelector('.cost').innerHTML = `Total amount in dollars:$${currentTotal.toFixed(2)}`

    
    // Add an event listener to the reset button
})
const resetButton = document.querySelector('.reset');
const moneyContainer = document.querySelector('.money');
const costElement = document.querySelector('.cost');

console.log('poop ')
resetButton.addEventListener('click', () => {
    console.log('Reset button clicked!');

    // Remove all children from the .money container
    moneyContainer.replaceChildren(); // Or: moneyContainer.innerHTML = '';

    // Reset the total cost
 currentTotal = 0;
    costElement.innerHTML = `Total amount in dollars: $${currentTotal.toFixed(2)}`;
});
console.log('eat ')

document.querySelector('.delete').addEventListener('click', ()=>{
console.log('saddsscfvfdffgg')
    history.pop()
    currentTotal = history.reduce((a,b)=>a+b,0)
    if (moneyContainer.lastElementChild) {
        moneyContainer.removeChild(moneyContainer.lastElementChild); // Remove the last child element
    }
    document.querySelector('.cost').innerHTML = `Total amount in dollars:$${currentTotal.toFixed(2)}`
})