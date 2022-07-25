const slidervalue=document.querySelector('span')
const inputSlider=document.querySelector('input')
inputSlider.oninput=(()=>{
    let value=inputSlider.value;
    slidervalue.textContent=value;
    slidervalue.style.left=(value/2)+'%'; 
    slidervalue.classList.add('show')
});
inputSlider.onblur=(()=>{
    slidervalue.classList.remove('show')
})