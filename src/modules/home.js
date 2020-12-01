function createAboutSection(){
    const about = document.createElement('section');
    about.classList.add('section');

    const title = document.createElement('h2');
    title.textContent='about';

    about.appendChild(title);

    const para = document.createElement('p');
    para.classList.add('section-description');

    para.textContent="Dota 2 TI6 Party snacks - food based on the videogame. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ac facilisis sem. Vestibulum at urna vel enim pellentesque facilisis ac sed justo. Nulla vitae vulputate libero, ac ultrices nunc. In hac habitasse platea dictumst. Cras sit amet neque arcu. Quisque ut ante et odio convallis dictum. Quisque tristique varius mi ut convallis. Proin at felis ac quam aliquet venenatis. "
    
    about.appendChild(para);
    return about;
}

function setBtnActive(id){
    const activeBtn = document.querySelector('.tab.active');
    if(activeBtn) activeBtn.classList.remove('active');

    const homeBtn= document.getElementById(id);
    homeBtn.classList.add('active');
}


function loadHome(){
const content = document.getElementById('tab-content');

content.classList.add('flex-lay');
content.classList.remove('grid-lay');
content.textContent='';

setBtnActive('home');
const aboutSection= createAboutSection();

content.appendChild(aboutSection);

}




export default loadHome;



