let toggle = document.getElementById('toggler');
let cards = document.getElementsByClassName('card');
let words = document.querySelectorAll('.fade');
let slider = document.getElementsByClassName('slider');
console.log(slider);

toggle.addEventListener('click',() => {
    if(toggle.checked){
        document.body.classList.remove('dark');
        document.body.classList.add('light');
        for(let i=0;i<cards.length;i++){
            cards[i].classList.add('lightCard');
            cards[i].classList.remove('darkCard');         
        }

        for(let j=0;j<words.length;j++){
            words[j].classList.remove('fade');
            words[j].classList.add('notFade');
        }
    }
    else{
        document.body.classList.add('dark');
        document.body.classList.remove('light');
        for(let i=0;i<cards.length;i++){
            cards[i].classList.add('darkCard');
            cards[i].classList.remove('lightCard');
        }
        for(let j=0;j<words.length;j++){
            words[j].classList.remove('notFade');
            words[j].classList.add('fade');
        }
    }
});