const btnContainer = document.querySelector('.portfolio-filter');

const cardsWebsite = [...document.querySelectorAll('[data-value=card-website]')];
const cardsDesign = [...document.querySelectorAll('[data-value=card-design]')];
const cardsApplication = [...document.querySelectorAll('[data-value=card-application]')];
const cardsMarketing = [...document.querySelectorAll('[data-value=card-marketing]')];

let selectetBtn = 'All';

btnContainer.addEventListener('click', onFilterBtnClick);

function onFilterBtnClick(event) {
  if (event.target.nodeName !== 'BUTTON') {
    return;
  }

  makeBtnInactive();
  makeBtnActive(event);
  makeCardInactive();
  makeCardActive(selectetBtn);
}

function makeBtnInactive() {
  const currentActiveBtn = document.querySelector('.js-active-btn');

  if (currentActiveBtn) {
    currentActiveBtn.classList.remove('js-active-btn');
  }
}

function makeBtnActive(event) {
  const selectedActiveBtn = event.target;
  selectedActiveBtn.classList.add('js-active-btn');

  selectetBtn = selectedActiveBtn.dataset.value;
}

function makeCardInactive() {
  //удаляем со всех карточек класс js-active-card, если он есть

  const activeCard = [...document.querySelectorAll('.js-active-card')];
  console.log(activeCard);
  if (activeCard) {
    activeCard.map(card => {
      card.classList.remove('js-active-card');
    });
  }
}

function makeCardActive(selectetBtn) {
  // проверяем какая кнопка была нажата и вешаем на ту карточку класс

  if (selectetBtn === 'website') {
    cardsWebsite.map(card => {
      card.classList.add('js-active-card');
    });
  } else if (selectetBtn === 'application') {
    cardsApplication.map(card => {
      card.classList.add('js-active-card');
    });
  } else if (selectetBtn === 'design') {
    cardsDesign.map(card => {
      card.classList.add('js-active-card');
    });
  } else if (selectetBtn === 'marketing') {
    cardsMarketing.map(card => {
      card.classList.add('js-active-card');
    });
  } else if (selectetBtn === 'all') {
    cardsWebsite.map(card => {
      card.classList.add('js-active-card');
    });
    cardsApplication.map(card => {
      card.classList.add('js-active-card');
    });
    cardsDesign.map(card => {
      card.classList.add('js-active-card');
    });
    cardsMarketing.map(card => {
      card.classList.add('js-active-card');
    });
  }
}
