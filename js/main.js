
const botones = document.querySelectorAll('.button-item')
const slider = document.getElementById('slider')
const buttons = document.querySelector('.categorys__buttons')

buttons.addEventListener('click',(e)=>{
     for(i=0;i<botones.length;i++){
        botones[i].classList.remove('button-item--active')
    }
    e.target.classList.add('button-item--active')
    if(e.target.getAttribute('id') === 'junior'){
        slider.style.transform = 'translateX(-66%)'
    } else if(e.target.getAttribute('id') === 'infantil'){
        slider.style.transform = 'translateX(-33%)'
    } else{
        slider.style.transform = 'translateX(0%)'
    }
})

const map = document.querySelector('.map__embed')
const mapButtons = document.querySelector('.map__buttons')
const mapButtonsPro = document.querySelectorAll('.map__buttons-item')

mapButtons.addEventListener('click', (e)=>{

    console.log(mapButtonsPro)
    
    for(i=0;i<mapButtonsPro.length;i++){
        mapButtonsPro[i].classList.remove('map__buttons-item--active')
    }
    e.target.classList.add('map__buttons-item--active')

    if(e.target.getAttribute('id') == 'montejo'){
        map.setAttribute('src', 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.2660928479795!2d-89.65288988547302!3d21.02203639338459!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f5674427920b553%3A0x8681a3c0ce522b08!2sPARQUE%20Conquistador!5e0!3m2!1ses-419!2smx!4v1674263062278!5m2!1ses-419!2smx')
    } else {
        map.setAttribute('src', 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.164299433556!2d-89.57730438547286!3d21.02611099324552!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f567716db45c561%3A0xdf8365266de007!2sParque%20Vista%20Alegre%20Norte!5e0!3m2!1ses-419!2smx!4v1674265300389!5m2!1ses-419!2smx')
    }
    
})




