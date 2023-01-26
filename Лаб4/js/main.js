
пусть  на = документ.Выбор запроса('.color-btn');
отпустить  = документ.Селектор запросов('.res-btn');
пусть  список = документ.querySelectorAll('.iteam-список');
пусть  hrefs = document.querySelectorAll('a[href*="#"]')

on.addEventListener('щелчок',  функция(){
    для      (пусть i=0;i
        если(i % 2!= 0){
            список[i].style.backgroundColor = 'светло-зеленый';
        }
    }    
})

выкл.addEventListener('щелчок',  функция(){
    для      (пусть i=0;i
        если(i % 2!= 0){
            список[i].style.backgroundColor = 'прозрачный';
        }
    }    
})

для (пусть  href  из  hrefs){
    href.addEventListener("щелчок", (событие)=>{
        событие.preventDefault();
        пусть  id = href.getAttribute('href')
        документ.Выбор запроса (" + id).scrollIntoView({
            поведение: "гладкое",
            блок: "начать"
        })
    })
}
