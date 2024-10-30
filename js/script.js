const accordionInit = () => {

  const acc = document.getElementsByClassName("accordion");
  var i;

  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function(evt) {
      this.classList.toggle("active");
      var panel = evt.target.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
        evt.target.ariaExpanded = "false";
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
        evt.target.ariaExpanded = "true";
      }
    });
  }

}




const tabsInit = () => {

  const tabSwitchSolano = document.querySelector(`#tab-btn-solano`);
  const tabSwitchExodus = document.querySelector(`#tab-btn-exodus`);
  const tabSwitchBd = document.querySelector(`#tab-btn-bd`);

  const tab1 = document.querySelectorAll(`.tab-1`);
  const tab2 = document.querySelectorAll(`.tab-2`);
  const tab3 = document.querySelectorAll(`.tab-3`);

  const switchToSolano = () => {
    for (let i = 0; i < tab1.length; i++) {
      tabSwitchSolano.classList.add(`tab--current`);
      tabSwitchExodus.classList.remove(`tab--current`);
      tabSwitchBd.classList.remove(`tab--current`);

      tab1[i].classList.add(`tab--current`);
      tab2[i].classList.remove(`tab--current`);
      tab3[i].classList.remove(`tab--current`);
    }
  }

  const switchToExodus = () => {
    for (let i = 0; i < tab1.length; i++) {
      tabSwitchSolano.classList.remove(`tab--current`);
      tabSwitchExodus.classList.add(`tab--current`);
      tabSwitchBd.classList.remove(`tab--current`);

      tab1[i].classList.remove(`tab--current`);
      tab2[i].classList.add(`tab--current`);
      tab3[i].classList.remove(`tab--current`);
    }
  }

  const switchToBd = () => {
    for (let i = 0; i < tab1.length; i++) {
      tabSwitchSolano.classList.remove(`tab--current`);
      tabSwitchExodus.classList.remove(`tab--current`);
      tabSwitchBd.classList.add(`tab--current`);

      tab1[i].classList.remove(`tab--current`);
      tab2[i].classList.remove(`tab--current`);
      tab3[i].classList.add(`tab--current`);
    }
  }

  tabSwitchSolano.addEventListener('click', switchToSolano);
  tabSwitchExodus.addEventListener('click', switchToExodus);
  tabSwitchBd.addEventListener('click', switchToBd);

}




const menuInit = () => {

  const openMenuBtn = document.querySelector('#open-menu');
  const closeMenuBtn = document.querySelector('#close-menu');
  const header = document.querySelector('#header');
  const menu = document.querySelector('.menu');
  const bg = document.querySelector('#header__bg');

  const openMenuHandler = () => {
    header.classList.add('opened');
    openMenuBtn.classList.add('hidden');
    closeMenuBtn.classList.remove('hidden');
    bg.classList.remove('hidden');
  }

  const closeMenuHandler = () => {
    header.classList.remove('opened');
    openMenuBtn.classList.remove('hidden');
    closeMenuBtn.classList.add('hidden');
    bg.classList.add('hidden');
  }

  bg.addEventListener('click', closeMenuHandler);

  openMenuBtn.addEventListener('click', openMenuHandler);
  closeMenuBtn.addEventListener('click', closeMenuHandler);
  menu.addEventListener('click', closeMenuHandler);


  const clickDocumentHandler = (evt) => {
    if(header.classList.contains('opened') && !evt.target.closest("#header")) {
      closeMenuHandler();
    }
  }

  document.addEventListener('click', clickDocumentHandler);

}


const roadmapInit = () => {
  const btns = document.querySelectorAll(`.roadmap__btn`);

  const clickHandler = (evt) => {
    evt.target.parentNode.classList.toggle(`roadmap__row--opened`);

    if (evt.target.textContent === `Hide`) {
      evt.target.textContent = `Show`;
    } else {
      evt.target.textContent = `Hide`;
    }

  }

  for (let index = 0; index < btns.length; index++) {
    btns[index].addEventListener(`click`, clickHandler);
  }
};


roadmapInit();
accordionInit();
tabsInit();
menuInit();
