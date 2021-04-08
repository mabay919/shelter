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
// PETS SLIDER
// 
function handleError(response) {
    if (!response.ok) {
        console.log('wrong JSON');
        let sliderBlock = document.querySelector(".main_section_slider_list");
        sliderBlock.innerHTML = '<h1 class="error_header">Oops!!!</h1>';
    } else {
        console.log('grate');
    }

    return response;
}

fetch('../js/pets.json').then(handleError).then(res => res.json()).then(petsJSON => {
    
    // DOM variables

    let sliderBlock = document.querySelector(".main_section_slider_list");
    let pageNumber = document.querySelector(".current_slide_numb");
    let sliderButtons = document.querySelector(".slider_button-list");
    let nexButton = document.querySelector(".right_one_slide");
    let prevButton = document.querySelector(".left_one_slide");
    let startButton = document.querySelector(".left_end_slide");
    let endButton = document.querySelector(".right_end_slide");

    // functional variables

    let screenType = 'pc';
    let petsArr = [];
    let petsCount = petsJSON.length;
    let pageCouter = 1;
    let lastPage;
    let sliderPetsCount = 8;

    function petsArrGen() {
        while(petsArr.length < petsCount) {
            let randomItem = Math.floor(Math.random() * Math.floor(petsCount));
            if (!petsArr.includes(randomItem)) {
                petsArr.push(randomItem);
            } 
        }
    }
    petsArrGen();

    function resizer() {
        let screenWidth = document.documentElement.clientWidth;
        if (screenWidth <= 767) {
            sliderPetsCount = 3;
            screenType = 'mobile';
            lastPage = Math.ceil(petsCount / sliderPetsCount);
        } else if (screenWidth <= 1270 && screenWidth >= 767) {
            sliderPetsCount = 6;
            screenType = 'tablet';
            lastPage = Math.ceil(petsCount / sliderPetsCount);
        } else if (screenWidth >= 1270) {
            sliderPetsCount = 8;
            screenType = 'pc';
            lastPage = Math.ceil(petsCount / sliderPetsCount);
        }
        console.log(screenType); 
    }
    resizer();
    window.addEventListener('resize', resizer);
    window.addEventListener('resize', petsDraw);

    function petsGenerator(num) {
        let itemPet = document.createElement('li');
        itemPet.classList.add('main_section_slider_list_item');
        if (!petsJSON[num]) {
            itemPet = '';
        } else {
            let itemPetBlock = document.createElement('div');
            itemPetBlock.classList.add('main_section_slider_item_link');
            itemPet.append(itemPetBlock);
    
                let itemPetBlockImage = document.createElement('img');
                itemPetBlockImage.classList.add('pets_list_image');
                itemPetBlockImage.setAttribute('alt', 'animal photo');
                itemPetBlockImage.setAttribute('src', `${petsJSON[num].img}`);
                itemPetBlock.append(itemPetBlockImage);
    
                let itemPetBlockName = document.createElement('p');
                itemPetBlockName.classList.add('slider__link_text');
                itemPetBlockName.innerText = petsJSON[num].name;
                itemPetBlock.append(itemPetBlockName);
    
            let itemPetButton = document.createElement('button');
            itemPetButton.setAttribute('data-id', `${num}`);
            itemPetButton.classList.add('slider_item_list_button');
            itemPetButton.innerText = 'Learn more';
            itemPetButton.addEventListener('click', openPopupMenu);
            itemPet.append(itemPetButton);
        }
            return itemPet;
    }

    function petsDraw() {
        if(pageCouter >= lastPage) {
            pageCouter = lastPage;
            pageNumber.innerText = pageCouter;

        }
        clearField();
        for (let i = (pageCouter - 1) * sliderPetsCount; i < pageCouter * sliderPetsCount; i += 1){
            sliderBlock.append(petsGenerator(petsArr[i]));
        }
        pageNumber.innerText = pageCouter;
        
        buttonDeactiv();
    }
    petsDraw();

    function clearField() {
        while(sliderBlock.firstChild) {
            sliderBlock.removeChild(sliderBlock.firstChild);
        }
    }
    function buttonDeactiv() {
        if (pageCouter === 1) {
            startButton.setAttribute('disabled', 'disabled');
            prevButton.setAttribute('disabled', 'disabled');
        } else {
            startButton.removeAttribute('disabled', 'disabled');
            prevButton.removeAttribute('disabled', 'disabled');
        }
        if (pageCouter === lastPage) {
            endButton.setAttribute('disabled', 'disabled');
            nexButton.setAttribute('disabled', 'disabled');
        } else {
            endButton.removeAttribute('disabled', 'disabled');
            nexButton.removeAttribute('disabled', 'disabled');
        }
    }

    function activateSlider(e) {
        switch (e.target.dataset.type) {
            case 'next':
                ++pageCouter;
                petsDraw();
                break;
            case 'prev':
                --pageCouter;
                petsDraw();
                break;
            case 'start':
                pageCouter = 1;
                petsDraw();
                break;
            case 'end':
                pageCouter = lastPage;
                petsDraw();
                break;
        
            default:
                break;
        }
    }
    
    sliderButtons.addEventListener('click', activateSlider);

    // 
    // POPUP
    // 

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



    function openPopupMenu(e) {
        popapMenuBlock.classList.remove('hidden');
        burgerWrapper.classList.remove('hidden');
        popupInfoGenerator(e.target.dataset.id);
    }
    function closePopupMenu() {
        popapMenuBlock.classList.add('hidden');
        burgerWrapper.classList.add('hidden');
    }
    function popupInfoGenerator(ind) {
        let pet = petsJSON[+ind];
        popupImage.setAttribute('src', pet.img);
        popupHeader.innerHTML = pet.name;
        popupAnimalSpan.innerHTML = pet.type;
        popupBreedSpan.innerHTML = pet.breed;
        popupAnimalDescription.innerHTML = pet.description;
        popupAgeInfo.innerHTML = pet.age;
        popupInoculationsInfo.innerHTML = `"${pet.inoculations}"`;
        popupDiseasesInfo.innerHTML = `"${pet.diseases}"`;
        popupParasitesInfo.innerHTML = `"${pet.parasites}"`;
    }
    burgerWrapper.addEventListener('click', closePopupMenu);
    popupMunuCloseButton.addEventListener('click', closePopupMenu);

}).catch(error => console.log(error));