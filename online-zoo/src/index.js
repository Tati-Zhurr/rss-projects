import generateJoke from "./generateJoke";
import getNewCards from "./petSlider";
import './styles/main.scss';
generateJoke();

//burger-menu
let burgerButton = document.querySelector('.burger-nav');
let header = document.querySelector('header');
let cross = document.querySelector ('.cross__burger');

//open
burgerButton.addEventListener('click', () => {
    header.classList.add('burger__menu');
});
//close
cross.addEventListener('click', ()=>{
    header.classList.remove('burger__menu');
});

header.addEventListener('click', (event) =>{
    if (event.target === header){
         header.classList.remove('burger__menu');
     }
 });

 //pet-slider
 let prev = document.querySelector('.arrow_back');
 let next = document.querySelector('.arrow_forward');
 if (prev){
    prev.addEventListener('click', getNewCards);
 };
 if (next){
    next.addEventListener('click', getNewCards);
 };


 
//testimonias-scroller
 const scrollerBig = document.getElementById('progress_7');
 const scrollerSmall = document.getElementById('progress_8');
 const testimonials= document.querySelector('.testimonials_content');
 const testimonial = document.querySelector('.testimonial');
 
 if (scrollerBig){
    scrollerBig.addEventListener('change', ()=>{
        let translation = scrollerBig.value;
        testimonials.style.transform = `translateX(-${parseInt(translation)*298}px)`;
     });
 }

 if (scrollerSmall){
 scrollerSmall.addEventListener('change', ()=>{
    let translation = scrollerSmall.value;
    testimonials.style.transform = `translateX(-${parseInt(translation)*323}px)`;
 });
}

 //opened testimonial
 const crossTestimonial = document.querySelector('.cross__testimonials');
 const testimonialsBackground = document.querySelector('.testimonials__block');
 const testimonialsArr = [...document.querySelectorAll('.testimonial')];
//open
if(testimonials){
    testimonials.addEventListener ('click', (event)=>{
        if (event.target !== testimonials){
            if (testimonialsArr.includes (event.target)){
                testimonialsBackground.classList.add('testimonial_opened');
                event.target.classList.add('testimonial_selected');
            } else if (event.target !== crossTestimonial){
                testimonialsBackground.classList.add('testimonial_opened');
                event.target.closest('.testimonial').classList.add('testimonial_selected');
            }
               
        }
     })
}
 
 //close
 if (crossTestimonial){
    crossTestimonial.addEventListener('click', 
 ()=>{
    let testimonialSelected = document.querySelector('.testimonial_selected')
    testimonialsBackground.classList.remove('testimonial_opened');
    testimonialSelected.classList.remove('testimonial_selected');
});

 }
 
if (testimonialsBackground){
    testimonialsBackground.addEventListener('click', (event) =>{
        if (event.target === testimonialsBackground){
            let testimonialSelected = document.querySelector('.testimonial_selected')
            testimonialsBackground.classList.remove('testimonial_opened');
            testimonialSelected.classList.remove('testimonial_selected');
         }
     });
}

//donate
const progressAmount = document.querySelector('.progress__amount');
const points = document.querySelectorAll('.point');
//const pseudoPointsArr = window.getComputedStyle(
	//document.querySelector('.point'), ':before'
//);

const pointArr = [...document.querySelectorAll('.point')];
const inputAmount = document.querySelector('.input__another');

if (progressAmount) {
    progressAmount.addEventListener('click', (event)=>{
        if (pointArr.includes(event.target)){
            let dollarSelected = document.querySelector('.dollar_selected');
            let amountSelected = document.querySelector('.amount_selected');
            let pointSelected = document.querySelector('.point_selected');
            pointSelected.classList.remove('point_selected');
            dollarSelected.classList.remove('dollar_selected');
            amountSelected.classList.remove('amount_selected');

            let newPointSelected = event.target.closest('.point');
            newPointSelected.classList.add('point_selected');
            inputAmount.value = newPointSelected.getAttribute('amount');
            let newDollarSelected = document.querySelector(`.dollar_${newPointSelected.getAttribute('amount')}`);
            let newAmountSelected = document.querySelector(`.amount_${newPointSelected.getAttribute('amount')}`);
            newDollarSelected.classList.add('dollar_selected');
            newAmountSelected.classList.add('amount_selected');
        };
    }) 

}

const pointIdArr =[];
pointArr.forEach(point => {pointIdArr.push(point.id)});
console.log(pointIdArr);

if (inputAmount){
    inputAmount.addEventListener('change', ()=> {
        if (pointIdArr.includes(inputAmount.value)){

        //if (pointArr.includes(inputAmount.value)){
            let dollarSelected = document.querySelector('.dollar_selected');
            let amountSelected = document.querySelector('.amount_selected');
            let pointSelected = document.querySelector('.point_selected');
            pointSelected.classList.remove('point_selected');
            dollarSelected.classList.remove('dollar_selected');
            amountSelected.classList.remove('amount_selected');

            console.log(`#${inputAmount.value}`);
            let newPointSelected = document.getElementById(`${inputAmount.value}`);
            newPointSelected.classList.add('point_selected');
            let newDollarSelected = document.querySelector(`.dollar_${inputAmount.value}`);
            let newAmountSelected = document.querySelector(`.amount_${inputAmount.value}`);
            newDollarSelected.classList.add('dollar_selected');
            newAmountSelected.classList.add('amount_selected');
        }
    })
}




 

 


