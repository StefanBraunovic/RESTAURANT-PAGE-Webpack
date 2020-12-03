
function setBtnActive(id){
    const activeBtn = document.querySelector('.tab.active');
    if(activeBtn) activeBtn.classList.remove('active');

    const homeBtn= document.getElementById(id);
    homeBtn.classList.add('active');
}


function createContact(){
    const contact  = document.createElement('div');
    contact.classList.add('contact');
    
    const phone= document.createElement('p');
    phone.innerHTML="+382-67-668-988";
    phone.classList.add('phone');

    const email= document.createElement('p');
    email.innerHTML="stefan.braunovic55@gmail.com";
    email.classList.add('email');

    const gitlink= document.createElement('a');
    gitlink.innerHTML="github"

    gitlink.href="https://github.com/StefanBraunovic";
    gitlink.classList.add('git');

    

    contact.appendChild(phone);
    contact.appendChild(email);
    contact.appendChild(gitlink);

    return contact;
}



function loadContact(){
    const content = document.getElementById('tab-content');
    content.classList.add('grid-lay');
    content.classList.remove('flex-lay');
    content.textContent="";

   setBtnActive('contact');
   const contact = createContact();

   content.appendChild(contact)
    
}



export default loadContact;