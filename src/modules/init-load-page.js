const { head } = require("lodash");

function createHeader(id,text){
    const header = document.createElement('header');
    header.setAttribute('id',id);
    const logo = document.createElement('h1');
    logo.textContent=text;
    header.appendChild(logo);
    return header;
}

function createBtn(id,text){
    const btn = document.createElement('button');
    btn.setAttribute('id',id);
    const span = document.createElement('span');
    span.textContent=text;
    btn.appendChild(span);
    btn.classList.add('tab');
    return btn;
}

function znak(){
    const logo = document.createElement('img')
    logo.src="https://cdn.vox-cdn.com/thumbor/bEZqHrz04RspoMRVxOMIf_itwSM=/0x0:660x360/920x0/filters:focal(0x0:660x360):format(webp):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/6645195/dota-2-logo.0.jpg";
    const content = document.getElementById('content');
    content.appendChild(logo)
}


function createNav(id){
    const nav = document.createElement('nav');
    nav.setAttribute('id',id);

    const homeBtn = createBtn('home','home');
    const menuBtn = createBtn('menu','menu');
    const contactBtn = createBtn('contact','contact');

    nav.appendChild(homeBtn);
    nav.appendChild(menuBtn);
    nav.appendChild(contactBtn);

    return nav;
}

function createMain(id){
    const main = document.createElement('main');
    main.setAttribute('id',id);
    return main;
}

function createFooter(id,text){
    const footer = document.createElement('footer');
    footer.setAttribute('id',id);
    const h3 = document.createElement('h3');
    h3.textContent=text;
    footer.appendChild(h3);
    return footer;
}






function loadPage(){
    const content = document.getElementById('content');
    
    const header = createHeader('header','Dota Food');
    content.appendChild(header);

    const logo =znak();
   

    const nav = createNav('nav');
    content.appendChild(nav);

    const tabContent= createMain('tab-content');
    content.appendChild(tabContent);

    const footer = createFooter('footer','Created by Stefan Braunovic');
    content.appendChild(footer);

}



export default loadPage;