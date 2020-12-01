
function setBtnActive(id){
    const activeBtn = document.querySelector('.tab.active');
    if(activeBtn) activeBtn.classList.remove('active');

    const homeBtn= document.getElementById(id);
    homeBtn.classList.add('active');
}






function loadContact(){
    const content = document.getElementById('tab-content');
    
    content.textContent="Test";

   setBtnActive('contact');
    
}



export default loadContact;