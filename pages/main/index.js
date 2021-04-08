// 
// POPUP burger menu
// 


let mainBurgerButt = document.querySelector(".burger_button"),
headerBlock = document.querySelector(".header-logo"),
burgerWrapper = document.querySelector(".burger_popup_wrapper"),
burgerPopupMenu = document.querySelector('.burger_popup_menu'),
body = document.querySelector("body");

function burgerPopupShow() {
    headerBlock.classList.toggle('visually_hidden');
    burgerPopupMenu.classList.toggle('popup_hidden');
    burgerPopupMenu.classList.toggle('popup_show');
    body.classList.toggle('set_off_scroll');
    mainBurgerButt.classList.toggle('burg_rot');
    mainBurgerButt.classList.toggle('burg_un_rot');
    burgerWrapper.classList.toggle('hidden');
}

mainBurgerButt.addEventListener("click", burgerPopupShow);
burgerWrapper.addEventListener('click', () => {
    burgerWrapper.classList.add('hidden');
    mainBurgerButt.classList.add('burg_un_rot');
    mainBurgerButt.classList.remove('burg_rot');
    body.classList.remove('set_off_scroll');
    headerBlock.classList.remove('visually_hidden');
    burgerPopupMenu.classList.add('popup_hidden');
    burgerPopupMenu.classList.remove('popup_show');
});


// 
// SLIDER OUR FRIENDS
// 

let buttonLeft = document.querySelector(".button-arrow-left"),
    buttonRight = document.querySelector(".button-arrow-right"),
    sliderItem = document.querySelector(".our-friends-list-item"),
    sliderAllItems = document.querySelectorAll(".our-friends-list-item");

let counter = 0;
let widthSliderItem;
let validCounterNum = 2; 

function resizeScreen() {
    widthSliderItem = +document.querySelector(".our-friends-list-item").offsetWidth  + parseInt(getComputedStyle(sliderItem).marginLeft) * 2;
    sliderAllItems.forEach(item => {
        item.style.left = `-${counter*widthSliderItem}px`;
        item.style.transition = 'left 0.5s linear';
    });

    if (document.documentElement.clientWidth <= 767) {
        validCounterNum = sliderAllItems.length - 1;
    } else if (document.documentElement.clientWidth <= 1270) {
        validCounterNum = sliderAllItems.length - 2;
    } else {
        validCounterNum = sliderAllItems.length - 3;
    }
}
window.addEventListener('resize', resizeScreen);
resizeScreen();

function activateSlider(e) {

    if (e.target.className === 'button-arrow-right') {
        counter++;
        sliderAllItems.forEach(item => {
            item.style.left = `-${counter*widthSliderItem}px`;
        })
        deactivateButtons();
    } else {
        counter--;
        sliderAllItems.forEach(item => {
            item.style.left = `-${counter*widthSliderItem}px`;
        })
        deactivateButtons();
    }
}

buttonRight.addEventListener('click', activateSlider);
buttonLeft.addEventListener('click', activateSlider);

function deactivateButtons() {
    if (counter === 0) {
        buttonLeft.setAttribute('disabled', 'disabled');

    } else {
        buttonLeft.removeAttribute('disabled', 'disabled');
    }
    if (counter === validCounterNum) {
        buttonRight.setAttribute('disabled', 'disabled');
    } else {
        buttonRight.removeAttribute('disabled', 'disabled');
    }
}
deactivateButtons();


// 
// POPUP OUR FRIENDS
// 

let pets = [
    {
        "id": "1",
        "name": "Katrine",
        "img": "../../assets/pets-katrine.png",
        "type": "Cat",
        "breed": "British Shorthair",
        "description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
        "age": "6 months",
        "inoculations": ["panleukopenia"],
        "diseases": ["none"],
        "parasites": ["none"]
    },
    {
        "id": "2",
        "name": "Jennifer",
        "img": "../../assets/pets-jennifer.png",
        "type": "Dog",
        "breed": "Labrador",
        "description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
        "age": "2 months",
        "inoculations": ["none"],
        "diseases": ["none"],
        "parasites": ["none"]

    },
    {
        "id": "3",
      "name": "Woody",
      "img": "../../assets/pets-woody.png",
      "type": "Dog",
      "breed": "Golden Retriever",
      "description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
      "age": "3 years 6 months",
      "inoculations": ["adenovirus", "distemper"],
      "diseases": ["right back leg mobility reduced"],
      "parasites": ["none"]
    },
    {
        "id": "4",
        "name": "Charly",
        "img": "../../assets/pets-charly.png",
        "type": "Dog",
        "breed": "Jack Russell Terrier",
        "description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
        "age": "8 years",
        "inoculations": ["bordetella bronchiseptica", "leptospirosis"],
        "diseases": ["deafness", "blindness"],
        "parasites": ["lice", "fleas"]

    },
    {
        "id":"5",
        "name": "Scarlett",
        "img": "../../assets/pets-scarlett.png",
        "type": "Dog",
        "breed": "Jack Russell Terrier",
        "description": "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
        "age": "3 months",
        "inoculations": ["parainfluenza"],
        "diseases": ["none"],
        "parasites": ["none"]
    },
    {
        "id": "6",
        "name": "Sophia",
        "img": "../../assets/pets-sophia.png",
        "type": "Dog",
        "breed": "Shih tzu",
        "description": "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
        "age": "1 month",
        "inoculations": ["parvovirus"],
        "diseases": ["none"],
        "parasites": ["none"]
    },
    {
        "id": "7",
        "name": "Timmy",
        "img": "../../assets/pets-timmy.png",
        "type": "Cat",
        "breed": "British Shorthair",
        "description": "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
        "age": "2 years 3 months",
        "inoculations": ["calicivirus", "viral rhinotracheitis"],
        "diseases": ["kidney stones"],
        "parasites": ["none"]
    },
    {
        "id": "8",
        "name": "Freddie",
        "img": "../../assets/pets-freddie.png",
        "type": "Cat",
        "breed": "British Shorthair",
        "description": "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
        "age": "2 months",
        "inoculations": ["rabies"],
        "diseases": ["none"],
        "parasites": ["none"]
    }
  ];

let allItemLinks = document.querySelectorAll("a.our-friends-slider-link"),
    allButtonsLinks = document.querySelectorAll("a.button.slider-button");

let popapMenuBlock = document.querySelector(".friends-popup-wrapper"),
    popupMunuCloseButton = document.querySelector(".friends-popup-close-button"),
    popupImage = document.querySelector("div.friends-popup-img > img"),
    popupHeader = document.querySelector(".friends-popup-header"),
    popupAnimalSpan = document.querySelector(".animal"),
    popupBreedSpan = document.querySelector(".breed"),
    popupAnimalDescription = document.querySelector(".animal-description"),
    popupAgeInfo = document.querySelector(".age-info"),
    popupInoculationsInfo = document.querySelector(".inoculations-info"),
    popupDiseasesInfo = document.querySelector(".diseases-info")
    popupParasitesInfo = document.querySelector(".parasites-info");

allButtonsLinks.forEach(link => link.addEventListener('click', deleteLinks));
allItemLinks.forEach(link => link.addEventListener('click', deleteLinks)); 

function deleteLinks(e) {
    e.preventDefault();
}

allButtonsLinks.forEach(link => link.addEventListener('click', openPopupMenu));
allItemLinks.forEach(link => link.addEventListener('click', openPopupMenu)); 

function openPopupMenu(e) {
    console.log(e.target.dataset.index);
    popapMenuBlock.classList.remove('hidden');
    burgerWrapper.classList.remove('hidden');
    popupInfoGenerator(e.target.dataset.index);
}
function closePopupMenu() {
    popapMenuBlock.classList.add('hidden');
    burgerWrapper.classList.add('hidden');
}
function popupInfoGenerator(ind) {
    let pet = pets[+ind - 1];
    popupImage.setAttribute('src', pet.img);
    popupHeader.innerHTML = pet.name;
    popupAnimalSpan.innerHTML = pet.type;
    popupBreedSpan.innerHTML = pet.breed;
    popupAnimalDescription.innerHTML = pet.description;
    popupAgeInfo.innerHTML = pet.age;
    popupInoculationsInfo.innerHTML = `"${pet.inoculations.join('", "')}"`;
    popupDiseasesInfo.innerHTML = `"${pet.diseases.join('", "')}"`;
    popupParasitesInfo.innerHTML = `"${pet.parasites.join('", "')}"`;
}
burgerWrapper.addEventListener('click', closePopupMenu);
popupMunuCloseButton.addEventListener('click', closePopupMenu);