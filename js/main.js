const btnColor = document.querySelectorAll('[data-color]');
console.log(btnColor);
const sideImg = document.querySelectorAll('.side-img');
console.log(sideImg);
const caseImg = document.querySelectorAll('.case-img');
console.log(caseImg);
const contentItem = document.querySelectorAll('.content-item')
console.log(contentItem);

btnColor.forEach(function(item){
  item.addEventListener('click', open)
  console.log('Click Color-btn');
 
  function open (e){
    const target = e.currentTarget;
    console.log(target);
    console.log(this);
    console.log(this.dataset.color);
    colorTarget = this.dataset.color;
    console.log(colorTarget);
    const classColor = document.querySelectorAll(`.${colorTarget}`)
    console.log(classColor)

    btnColor.forEach(function(item){
      item.classList.remove('color-active');
    })
    item.classList.add('color-active');
    contentItem.forEach(function(item){
      item.classList.remove('content-active')
    })
    classColor .forEach(function(item){
      item.classList.add('content-active')
    })
  }

})

    
    
    
    
    

  
