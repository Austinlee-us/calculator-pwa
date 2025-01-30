

  let calc = ""
  console.log('asd')
  document.querySelectorAll('.numberpad button').forEach(button => {
      button.addEventListener('click', (e) => {
          if(e.target.innerHTML === '='){
            try {
              document.querySelector('.calculations').innerHTML = calc + '=' + math.evaluate(calc).toString()
          } catch (error) {
              document.querySelector(".calculations").innerHTML = 'Invalid Equation'
          } finally {
            calc=""
          }
          }else {
  
        calc+=e.target.innerHTML
       console.log(document.querySelector('.calculations')) 
       document.querySelector('.calculations').innerHTML = calc
        console.log(calc);
          }
      });
    });