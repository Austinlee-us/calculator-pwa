let calc = ''
let lastNumberTyped = ''
const operations = ['+',"-",'*',"/",'>','<']
function compareFractions(frc1,frc2){
    const product1 = frc1[0]* frc2[1]
    const product2 = frc1[1]* frc2[0]
    return product1>product2?`${frc1[0]}/${frc1[1]} is greater than ${frc2[0]}/${frc2[1]}`:product1===product2?`${frc1[0]}/${frc1[1]} is equal to ${frc2[0]}/${frc2[1]}`:`${frc1[0]}/${frc1[1]} is less than ${frc2[0]}/${frc2[1]}`
}

  document.querySelector('.number-c').addEventListener('click', () => {
    console.log('ads')
    calc = ''
    lastNumberTyped = ''
    document.querySelector('.numbers').innerHTML = calc
  });

  document.querySelector('.number-square').addEventListener('click', () => {
      lastNumberTyped = ''
    console.log(lastNumberTyped)
calc+='^2'
document.querySelector('.numbers').innerHTML = calc
  });

  document.querySelector('.number-sqrt').addEventListener('click', () => {
    lastNumberTyped = ''
  console.log(lastNumberTyped)
calc=Math.sqrt(math.evaluate(calc))
document.querySelector('.numbers').innerHTML = calc
});

  document.querySelector('.number-negative').addEventListener('click',()=>{
    if(!lastNumberTyped){return;}

    let lastIndex = calc.toString().lastIndexOf(lastNumberTyped);

    if (lastIndex !== -1) {
      // Replace only the last occurrence
      console.log(calc)
       calc = calc.slice(0, lastIndex) + `-${lastNumberTyped}` + calc.slice(lastIndex + lastNumberTyped.length);
    } 
    document.querySelector('.numbers').innerHTML = calc
  })

  document.querySelectorAll('.calc-button').forEach(button => {
    button.addEventListener('click', (e) => {
      
        if(e.target.innerHTML === '='){

          try {
            document.querySelector('.numbers').innerHTML = calc + '=' + math.evaluate(calc).toString()
        } catch (error) {
            document.querySelector(".numbers").innerHTML = 'Invalid Equation'
        } finally {
          lastNumberTyped = '';
          calc= math.evaluate(calc)
        
      }
    }else{
        
          if(!operations.includes(e.target.innerHTML)){
            lastNumberTyped += e.target.innerHTML

          }else{
            lastNumberTyped = ''
          }
        
          console.log(lastNumberTyped)
      calc+=e.target.innerHTML
     document.querySelector('.numbers').innerHTML = calc
      console.log(calc);
    }
    });
  });

