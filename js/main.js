document.addEventListener('DOMContentLoaded', ()=>{
  const slides = document.querySelector('.slides');
  const slideElems = document.querySelectorAll('.slide');
  const slideCount = slideElems ? slideElems.length : 0;
  let idx = 0;
  const prev = document.getElementById('prev');
  const next = document.getElementById('next');

  function go(i){
    if(!slides || slideCount === 0) return;
    idx = (i + slideCount) % slideCount;
    slides.style.transform = `translateX(${ -idx * 100 }%)`;
  }
  if(prev) prev.addEventListener('click', ()=> go(idx-1));
  if(next) next.addEventListener('click', ()=> go(idx+1));

  if(slides && slideCount>0){
    let auto = setInterval(()=> go(idx+1), 4000);
    const sliderEl = document.getElementById('slider');
    if(sliderEl){
      sliderEl.addEventListener('mouseenter', ()=> clearInterval(auto));
      sliderEl.addEventListener('mouseleave', ()=> auto = setInterval(()=> go(idx+1), 4000));
    }
  }

  const navToggle = document.getElementById('nav-toggle');
  const navList = document.getElementById('nav-list');
  navToggle && navToggle.addEventListener('click', ()=> navList.classList.toggle('show'));
});
