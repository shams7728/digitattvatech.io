function openNav(){
    'use strict';
    const sidepanel = document.getElementById('mySidepanel');
    if(sidepanel){
        sidepanel.style.left= '0';
    }
    else{
        console.error('error: side panel not found')
    } 
}

function closeNav(){
    'use strict';
    const sidepanel = document.getElementById('mySidepanel');
    if(sidepanel){
        sidepanel.style.left= '-320px';
    }
    else{
        console.error('error: side panel not found')
    }
}
function close(){
    'use strict';
    const cut = document.getElementById('cutnow');
    if(cut){
        cut.style.left= '-320px';
    }
    else{
        console.error('error: side panel not found')
    }
}

function open_search(){
    'use strict';
    const searchpanel = document.getElementById('search-bar');
    if(searchpanel){
        searchpanel.style.height='100vh';
        searchpanel.style.borderRadius = '0' ;
    }
    else{
        console.error('error: search not found')
    }
}
function close_search(){
    'use strict';
    const searchpanel = document.getElementById('search-bar');
    if(searchpanel){
        searchpanel.style.height='0';
        searchpanel.style.borderTopLeftRadius = '100%';
        searchpanel.style.borderTopRightRadius = '100%';
    }
    else{
        console.error('error: search not found')
    }
}

function open_img(evt , cityName){
    let i, tabcontent,tablinks;

    //hide all tab content
    tabcontent=document.getElementsByClassName('tabcontent');
    for(i=0; i<tabcontent.length;i++){
        tabcontent[i].style.display = "none";
    } 

        //remove active class from all tab links
        tablinks=document.getElementsByClassName('tablinks');
        for(i=0; i<tablinks.length;i++){
            tablinks[i].classList.remove("active");
        }

        //show current tab content 
        document.getElementById(cityName).style.display = "block";
        evt.currentTarget.classList.add("active");

}

//responive  team slider
$('.team-slider').slick({
    arrows:false,
    dots:true,
    infinite:false,
    autoplay:true,
    speed:200,
    slidesToShow:4,
    sliderToScroll:1,
    responsive: [{
        breakpoint: 1024,
        settings:{
            slidesToShow:4,
            sliderToScroll:1,
            infinite:true,
            dots:true,

        }
    },
    {
    breakpoint: 600,
        settings:{
            slidesToShow:2,
            sliderToScroll:1,
        }

    },
    {
    breakpoint: 480,
        settings:{
            slidesToShow:1,
            sliderToScroll:1,
        }

    }

]

})




// faq section

document.addEventListener('DOMContentLoaded' , function(){
    let accordionButtons = document.querySelectorAll('.accordion-button');
    let acoimg = document.querySelectorAll('.accordion-button img');

    accordionButtons.forEach(function(button,index){
        button.addEventListener('click',function(){
            let collapse = this.parentElement.nextElementSibling;

            //close
            accordionButtons.forEach(function(otherButton,otherIndex){
                if(otherButton !== button){
                    let otherCollapse = otherButton.parentElement.nextElementSibling;
                    otherCollapse.style.maxHeight = null;

                    //reset 

                    acoimg[otherIndex].src = 'images/icon/plus.png';
                    acoimg[otherIndex].style.transform = 'rotate(0deg)';
                    otherButton.style.backgroundColor = "#fff"
                }
            });

            //toggle

            if(collapse.style.maxHeight){
                collapse.style.maxHeight = null;
                //reset

                acoimg[index].src = 'images/icon/plus.png';
                acoimg[index].style.transform = 'rotate(0deg)';
                button.style.backgroundColor = '';
            }else{
                collapse.style.maxHeight = collapse.scrollHeight + 'px';
                //change the image source
                acoimg[index].src = "images/icon/menus.png";
                acoimg[index].style.transform = 'rotate(180deg)';
                button.style.backgroundColor = '#c1b0b5'

            }
    });
});

});

//footer validation start
// const fom = document.getElementById('footer-form');
// const footerMessage = document.getElementById('footer-message');

// fom.addEventListener('submit',(event)=>{
//     event.preventDefault();
//     footerMessage.innerHTML = '~ Form Submitted success fully';
//     footerMessage.style.display = 'flex';
//     fom.reset();
//     setTimeout(()=>{
//         footerMessage.style.display = 'none';
//     },3000);
// })

// button back to top
window.onscroll = function(){
    scrollFunction();

}
function scrollFunction(){
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
        document.getElementById('backToTopBtn').style.display = 'block';
    } else{
        document.getElementById('backToTopBtn').style.display = 'none';
    }
}

function scrollToTop(){
    const scrollToTop = document.documentElement || document.body;
    scrollToTop.scrollIntoView({
        behavior: 'smooth',
    })
}

//logosium

$('.sliderlogo').slick({
    arrows:false,
    dots:false,
    infinite:false,
    autoplay:true,
    speed:300,
    slidesToShow:4,
    sliderToScroll:1,
    responsive: [{
        breakpoint: 1024,
        settings:{
            slidesToShow:5,
            sliderToScroll:1,
            infinite:true,
            dots:false,

        }
    }]

})

//exr
// const inputs = document.querySelectorAll(".inputt");

// function focusFunc() {
//   let parent = this.parentNode;
//   parent.classList.add("focus");
// }

// function blurFunc() {
//   let parent = this.parentNode;
//   if (this.value == "") {
//     parent.classList.remove("focus");
//   }
// }

// inputs.forEach((input) => {
//   input.addEventListener("focus", focusFunc);
//   input.addEventListener("blur", blurFunc);
// });

// document.getElementById("dismiss-popup-btn").addEventListener("click",function() {
// 	document.getElementsByClassName("contain")[0].classList.add("active");
// });

// document.getElementById("dismiss-popup-btn").addEventListener("click",function() {
// 	document.getElementsByClassName("contain")[0].classList.remove("active");
// })


// document.getElementById('openDialog').addEventListener('click', () => {
//     document.getElementById('dialogBox').classList.add('open');
// });

// document.getElementById('closeDialog').addEventListener('click', () => {
//     document.getElementById('dialogBox').classList.remove('open');
// });

// document.getElementById('confirmButton').addEventListener('click', () => {
//     alert('Confirmed!');
//     document.getElementById('dialogBox').classList.remove('open');
// });


// document.getElementById('openDialog2').addEventListener('click', () => {
//     document.getElementById('dialogBox2').classList.add('open2');
// });

// document.getElementById('closeDialog2').addEventListener('click', () => {
//     document.getElementById('dialogBox2').classList.remove('open2');
// });

// document.getElementById('confirmButton2').addEventListener('click', () => {
//     alert('Confirmed!');
//     document.getElementById('dialogBox2').classList.remove('open2');
// });


function openDialog(dialogNumber) {
    const dialog = document.getElementById(`dialog-${dialogNumber}`);
    dialog.style.display = 'flex';
}

function closeDialog(dialogNumber) {
    const dialog = document.getElementById(`dialog-${dialogNumber}`);
    dialog.style.display = 'none';
}
