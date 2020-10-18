

const show=()=>{
   const navlist= document.querySelector('.nav-links')
   const burger=document.querySelector('.burger')
    const li= document.querySelectorAll('.nav-links li')
   burger.addEventListener('click',()=>{
       navlist.classList.toggle('nav-active')
   })
  
}
show()
