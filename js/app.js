
let actionName = 3;
let screen = document.querySelector('.koro--screen');
const actions = [
  {
    name: 1,
    action: eat()
  },
  {
    name: 2,
    action: cuddle()
  },
  {
    name: 3,
    action: sleep() 
  },
  {
    name: 4,
    action: strengthen()
  },
  {
    name: 5,
    action: study()
  }
]

function goLeft(){
  actions.forEach(action => {
    if(action.name === actionName){
      screen.style.left = action.action
    }
  });
}

function goright(){
  
}

function enter(){
  
}