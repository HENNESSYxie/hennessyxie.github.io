const pets = [
    {
        "name": "Katrine",
        "img": "assets/images/pets/katrine.png",
        "type": "Cat",
        "breed": "British Shorthair",
        "description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
        "age": "6 months",
        "inoculations": ["panleukopenia"],
        "diseases": ["none"],
        "parasites": ["none"]
      },
      {
        "name": "Jennifer",
        "img": "assets/images/pets/jennifer.png",
        "type": "Dog",
        "breed": "Labrador",
        "description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
        "age": "2 months",
        "inoculations": ["none"],
        "diseases": ["none"],
        "parasites": ["none"]
      },
      {
        "name": "Woody",
        "img": "assets/images/pets/woody.png",
        "type": "Dog",
        "breed": "Golden Retriever",
        "description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
        "age": "3 years 6 months",
        "inoculations": ["adenovirus", "distemper"],
        "diseases": ["right back leg mobility reduced"],
        "parasites": ["none"]
      },
      {
        "name": "Sophia",
        "img": "assets/images/pets/sophia.png",
        "type": "Dog",
        "breed": "Shih tzu",
        "description": "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
        "age": "1 month",
        "inoculations": ["parvovirus"],
        "diseases": ["none"],
        "parasites": ["none"]
      },
      {
        "name": "Timmy",
        "img": "assets/images/pets/timmy.png",
        "type": "Cat",
        "breed": "British Shorthair",
        "description": "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
        "age": "2 years 3 months",
        "inoculations": ["calicivirus", "viral rhinotracheitis"],
        "diseases": ["kidney stones"],
        "parasites": ["none"]
      },
      {
        "name": "Charly",
        "img": "assets/images/pets/charly.png",
        "type": "Dog",
        "breed": "Jack Russell Terrier",
        "description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
        "age": "8 years",
        "inoculations": ["bordetella bronchiseptica", "leptospirosis"],
        "diseases": ["deafness", "blindness"],
        "parasites": ["lice", "fleas"]
      },
      {
        "name": "Scarlett",
        "img": "assets/images/pets/scarlett.png",
        "type": "Dog",
        "breed": "Jack Russell Terrier",
        "description": "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
        "age": "3 months",
        "inoculations": ["parainfluenza"],
        "diseases": ["none"],
        "parasites": ["none"]
      },
      {
        "name": "Freddie",
        "img": "assets/images/pets/freddie.png",
        "type": "Cat",
        "breed": "British Shorthair",
        "description": "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
        "age": "2 months",
        "inoculations": ["rabies"],
        "diseases": ["none"],
        "parasites": ["none"]
      }
  ];

//////////////////////////////////////////////////
// Burger

const burger = document.querySelector('.burger'),
      burgerMenu = document.querySelector('.burger__menu'),
      darkBG = document.querySelector('.dark'),
      navMenu = document.querySelector('.burger__nav-list'),
      navLinks = document.querySelectorAll('.burger__nav-list-item'),
      headPanel = document.querySelector('.header__inner');
    

burger.addEventListener('click', () => {
    if (burgerMenu.classList.contains('burger__menu-active')) {
        clearActiveBurger()
    } else {
        addActiveBurger()
    }
});

document.addEventListener('keydown', (e) => {
    if (e.code === 'Escape' && (burgerMenu.classList.contains('burger__menu-active'))) {
        clearActiveBurger()
    }
});

navMenu.addEventListener('click', (e) => {
    navLinks.forEach(item => {
        if (e.target === item.firstChild) {
            clearActiveBurger();
        }
    });
});
darkBG.addEventListener('click', clearActiveBurger);

let screenWidth = document.documentElement.offsetWidth;
window.addEventListener('resize', () => {
    const pageWidth = document.documentElement.scrollWidth;
    const windowInnerWidth = window.innerWidth;
    screenWidth = document.documentElement.offsetWidth;
    if (pageWidth > 767 || windowInnerWidth > 767) {
        clearActiveBurger();
    }
});

function addActiveBurger() {
    burgerMenu.classList.add('burger__menu-active');
    document.body.style.overflow = 'hidden';
    darkBG.classList.add('active');
    burger.style.transform = 'rotate(90deg)';
    headPanel.classList.add('invisibility');
}

function clearActiveBurger() {
    burgerMenu.classList.remove('burger__menu-active');
    document.body.style.overflow = '';
    darkBG.classList.remove('active');
    burger.style.transform = 'rotate(0)';
    headPanel.classList.remove('invisibility');
}








//////////////////////////////////////////////////////////////////////

const sliderInner = document.querySelector('.pets__slider-inner'),
      prevSlide = document.querySelector('.pets__slider-arrow-left'),
      nextSlide = document.querySelector('.pets__slider-arrow-right'),
      slidesWrapper = document.querySelector('.pets__slider-wrapper');

let slideIndex = 1
let offset = 0;

for (let i = 0; i < pets.length; i++) {
  let petWrap = `<div class="pets__slide">
                <img class="pets__slide-image" src=${pets[i].img} alt="${pets[i].type} ${pets[i].name}">
                <h3 class="pets__slide-name">${pets[i].name}</h3>          
                <button class="button button__trans pets__slide-button">Learn more</button>
               </div>`
  sliderInner.innerHTML += petWrap;
}

const slides = document.querySelectorAll('.pets__slide'),
      width = window.getComputedStyle(slidesWrapper).width;

sliderInner.style.width = 100 * slides.length + '%';

const large = window.matchMedia('(min-width: 1280px)');

if (large.matches) {
  nextSlide.addEventListener('click', () => {
    if (offset === 1800) {
      offset = 0
    } else {
      offset += 360
    }

    sliderInner.style.transform = `translateX(-${offset}px)`;
  })

  prevSlide.addEventListener('click', () => {
    if (offset === 0) {
      offset = 1800;
    } else {
      offset -= 360
    }

    sliderInner.style.transform = `translateX(-${offset}px)`;
  })
} else {
  nextSlide.addEventListener('click', () => {
    if (offset === 2170) {
      offset = 0
    } else {
      offset += 310
    }

    sliderInner.style.transform = `translateX(-${offset}px)`;
  })

  prevSlide.addEventListener('click', () => {
    if (offset === 0) {
      offset = 2170;
    } else {
      offset -= 310
    }

    sliderInner.style.transform = `translateX(-${offset}px)`;
  })
}













///////////////////////////////////////////////////////////////////////////////


////////////////////////////////////////////////////////////////////

// const prev = document.querySelector('.pets__slider-arrow-left'),
//       next = document.querySelector('.pets__slider-arrow-right'),
//       pagNext = document.querySelector('.pets__pagination-button-next'),
//       pagPrev = document.querySelector('.pets__pagination-button-prev'),
//       pagPrevPrev = document.querySelector('.pets__pagination-button-prev-prev'),
//       pagNextNext = document.querySelector('.pets__pagination-button-next-next'),
//       current = document.querySelector('.pets__pagination-button-current');
//
// let currentPage = 1;
//
//     if (currentPage === 1) {
//         pagPrev.classList.add('pets__pagination-button-inactive');
//         pagPrevPrev.classList.add('pets__pagination-button-inactive');
//     }
//
// pagNext.addEventListener('click', () => {
//
//     if (currentPage === 6) {
//         currentPage = 6;
//     } else {
//       rightLoad();
//       currentPage += 1;
//     }
//
//     current.innerHTML = currentPage;
//
//     if (currentPage > 1) {
//         pagPrev.classList.remove('pets__pagination-button-inactive');
//     }
//
//     if (currentPage > 2) {
//         pagPrevPrev.classList.remove('pets__pagination-button-inactive');
//     }
//
//     if (currentPage === 6) {
//         pagNext.classList.add('pets__pagination-button-inactive');
//         pagNextNext.classList.add('pets__pagination-button-inactive');
//     }
//
//     if (currentPage === 5) {
//         pagNextNext.classList.add('pets__pagination-button-inactive');
//     }
// })
//
// pagPrev.addEventListener('click', () => {
//     if (currentPage === 1) {
//         currentPage = 1;
//     } else if (currentPage > 1) {
//       rightLoad();
//       currentPage -= 1;
//     }
//     current.innerHTML = currentPage;
//
//     if (currentPage === 1) {
//         pagPrev.classList.add('pets__pagination-button-inactive');
//         pagNext.classList.remove('pets__pagination-button-inactive');
//     }
//
//     if (currentPage === 2) {
//         pagPrevPrev.classList.add('pets__pagination-button-inactive');
//         pagNextNext.classList.remove('pets__pagination-button-inactive');
//         pagNext.classList.remove('pets__pagination-button-inactive');
//     }
//
//     if (currentPage < 6) {
//         pagNext.classList.remove('pets__pagination-button-inactive');
//     }
//
//     if (currentPage < 5) {
//         pagNextNext.classList.remove('pets__pagination-button-inactive');
//     }
// });
//
// pagPrevPrev.addEventListener('click', () => {
//     if (currentPage === 1) {
//         currentPage = 1;
//     } else if (currentPage > 2) {
//       rightLoad();
//       currentPage -= 2;
//     }
//     current.innerHTML = currentPage;
//
//     if (currentPage < 6) {
//         pagNext.classList.remove('pets__pagination-button-inactive');
//     }
//
//     if (currentPage < 5) {
//         pagNextNext.classList.remove('pets__pagination-button-inactive');
//     }
//
//     if (currentPage === 1) {
//         pagPrevPrev.classList.add('pets__pagination-button-inactive');
//         pagPrev.classList.add('pets__pagination-button-inactive');
//     }
//     if (currentPage === 2) {
//         pagPrevPrev.classList.add('pets__pagination-button-inactive');
//     }
// })
//
// pagNextNext.addEventListener('click', () => {
//     if (currentPage === 6) {
//         currentPage = 6;
//     } else if (currentPage < 5) {
//       rightLoad();
//       currentPage += 2;
//     }
//     current.innerHTML = currentPage;
//
//     if (currentPage < 5) {
//         pagNextNext.classList.remove('pets__pagination-button-inactive');
//     }
//
//     if (currentPage > 1) {
//         pagPrev.classList.remove('pets__pagination-button-inactive');
//     }
//
//     if (currentPage > 2) {
//         pagPrevPrev.classList.remove('pets__pagination-button-inactive');
//     }
//
//     if (currentPage === 6) {
//         pagNext.classList.add('pets__pagination-button-inactive');
//         pagNextNext.classList.add('pets__pagination-button-inactive');
//     }
//
//     if (currentPage === 5) {
//         pagNextNext.classList.add('pets__pagination-button-inactive');
//     }
// })
//
//
// next.addEventListener('click', () => {
//     rightLoad()
// });
//
// prev.addEventListener('click', () => {
//       leftLoad()
// });

/////////////////////////////////////////////////////////////////////
