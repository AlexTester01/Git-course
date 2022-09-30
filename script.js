var Услуги = ['Веб-дизайн', 'Разработка/создание сайтов', 'Раскрутка сайтов', 'SMM маркетинг'];

function listУслуги(){
for(var i=0; i < Услуги.length; i++){
    console.log(Услуги[i]);
}
}
listУслуги();

document.getElementById('box2').addEventListener('click',function(){alert('ОФОРМИТЬ ЗАКАЗ');});