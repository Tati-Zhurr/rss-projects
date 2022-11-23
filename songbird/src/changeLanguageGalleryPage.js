
import birdsDataGalleryEnglish from "./birdsGalleryEnglish";
import birdsDataGallery from './birdsGallery';
import getBirdCardGallery from "./getBirdCardGallery";

function changeLanguageGalleryPage(lang){
    const langImg = document.querySelector('.img_lang');
    const allBirdCards = document.querySelectorAll('.bird'); 
    if (lang){
        for (let i=0; i< allBirdCards.length; i++ ){
          getBirdCardGallery(allBirdCards[i], birdsDataGalleryEnglish[i]);
        }
        langImg.classList.remove('en');
    } else {
        for (let i=0; i< allBirdCards.length; i++ ){
           getBirdCardGallery(allBirdCards[i], birdsDataGallery[i]);
        }
        langImg.classList.add('en');
    }

}

export default changeLanguageGalleryPage;