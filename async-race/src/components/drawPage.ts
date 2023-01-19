import { IlinkObj } from "./types/interfaces";

function drawPage () {
    const body = document.querySelector('body');
    const header = drawHeader();
    const main = document.createElement('main');
    const footer = drawFooter();

    if (body instanceof HTMLElement){
        body.prepend(header);
        body.append(main);
        body.append(footer);
    }
    
}

function drawHeader (){
    const header = document.createElement('header');
    const headerWrapper = document.createElement('div');
    headerWrapper.classList.add('header__wrapper');
    const buttonGarage = document.createElement('button');
    buttonGarage.classList.add('button');
    buttonGarage.classList.add('button_to-garage');
    buttonGarage.innerHTML = 'TO GARAGE'
    headerWrapper.appendChild(buttonGarage);
    const buttonWinners = document.createElement('button');
    buttonWinners.classList.add('button');
    buttonWinners.classList.add('button_to-winners');
    buttonWinners.innerHTML = 'TO WINNERS'
    headerWrapper.appendChild(buttonWinners);
    header.appendChild(headerWrapper);
    return header;
}

function drawFooter () {
    const footer = document.createElement('footer');
    const footerWrapper = document.createElement('div');
    footerWrapper.classList.add ('footer__wrapper');
    const footerLinks = document.createElement('div');
    footerLinks.classList.add('footer__links');

    const github: IlinkObj = {
        href: 'https://github.com/Tati-Zhurr',
        src:  'github_logo.png',
        alt: 'Github link',
        class: 'img-github'
    };

    const rssschool: IlinkObj = {
        href: 'https://rs.school/js/',
        src:  'rs_school_js.svg',
        alt: 'Rssscool link',
        class: 'img-rssschool'
    };

    const linkGithub = createLink(github);
    const linkRssschool = createLink(rssschool);
    footerLinks.append(linkGithub);
    footerLinks.insertAdjacentText('beforeend', '2023');
    footerLinks.append(linkRssschool);
    footerWrapper.append(footerLinks);
    footer.append(footerWrapper);
    return footer;
}

function createLink(objLink: IlinkObj){
    let fragment = new DocumentFragment();
    const link = document.createElement('a');
    link.setAttribute('href', objLink.href);
    const img = document.createElement('img');
    img.setAttribute('src', objLink.src);
    img.setAttribute('alt', objLink.alt);
    img.classList.add( objLink.class);
    link.appendChild(img);
    fragment.append(link);
    return fragment;
}

export default drawPage;