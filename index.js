//SLIDEBAR
const menuItems = document.querySelectorAll('.menu-item');

//MESSAGES
const messagesNotification = document.querySelector('#messages-notification');
const messages = document.querySelector('.messages');
const message = document.querySelectorAll('.message');
const searchMessage = document.querySelector('#message-search');

//THEME
const theme = document.querySelector('#theme');
const themeModal = document.querySelector('.customize-theme');
const fontSizes = document.querySelectorAll('.choose-size span');
var root = document.querySelector(':root');
const colorPallete = document.querySelectorAll('.choose-color span');
const bg1 = document.querySelector('.bg-1');
const bg2 = document.querySelector('.bg-2');
const bg3 = document.querySelector('.bg-3');

//----------REMOVE ACTIVE CLASS FROM ALL MENU ITEMS----------//
const changeActiveItem = () => {
    menuItems.forEach( item => {
        item.classList.remove('active');
    });
};

//----------ADD ACTIVE CLASS AND SHOW THE NOTIFICATIONS----------//
menuItems.forEach( item => {
    item.addEventListener('click', () => {
        changeActiveItem();
        item.classList.add('active');

        if(item.id !== 'notifications'){
            document.querySelector('.notifications-popup').style.display = 'none';
        }else{
            document.querySelector('.notifications-popup').style.display = 'block';
            document.querySelector('#notifications .notification-count').style.display = 'none';
        }

    });
});

//---------------SEARCH FOR MESSAGE---------------//
const searchChat = () => {
    const val = searchMessage.value.toLowerCase().trim();
    message.forEach( chat => {
        let name = chat.querySelector('h5').textContent.toLowerCase();
        if(name.indexOf(val) !== -1){
            chat.style.display = 'flex';
        }else{
            chat.style.display = 'none';
        }
    });
};

searchMessage.addEventListener('keyup', searchChat);

//HIGHTLIGHT MESSAGES CARD WHEN MESSAGES MENU ITEM IS CLICKED
messagesNotification.addEventListener('click', () => {
    document.querySelector('#messages-notification .notification-count').style.display = 'none';
    messages.style.boxShadow = '0 0 1rem var(--color-primary)';
    setTimeout(() => {
        messages.style.boxShadow = 'none';
    }, 2000);
});

//----------THEM/DESPLAY CUSTOMIZATION----------//
//---------------OPEN MODAL---------------//
const openThemeModal = () => {
    themeModal.style.display = 'grid';
};

//---------------CLOSE MODAL---------------//
const closeThemeModal = (e) => {
    if(e.target.classList.contains('customize-theme')){
        themeModal.style.display = 'none';
    }
}

themeModal.addEventListener('click', closeThemeModal);
theme.addEventListener('click', openThemeModal);

//---------------FONT SIZE---------------//
//REMOVE ACTIVE CLASS FROM FONT SIZE SELECTORS
const removeSizeSelector = () => {
    fontSizes.forEach( size => {
        size.classList.remove('active');
    });
};

fontSizes.forEach( size => {

    size.addEventListener('click', () => {
        let fontSize;
        removeSizeSelector();
        size.classList.add('active');

        if(size.classList.contains('font-size-1')){
            fontSize = '10px';
        }else if(size.classList.contains('font-size-2')){
            fontSize = '13px';
        }else if(size.classList.contains('font-size-3')){
            fontSize = '16px';
        }else if(size.classList.contains('font-size-4')){
            fontSize = '19px';
        }else if(size.classList.contains('font-size-5')){
            fontSize = '22px';
        }
        //CHANGE THE FONT SIZE OF THE ROOT ELEMENT
        document.querySelector('html').style.fontSize = fontSize;
    });
});

//---------------CHANGE COLOR---------------//
//REMOVE ACTIVE CLASS FROM COLOR SELECTORS
const removeColorSelector = () => {
    colorPallete.forEach( color => {
        color.classList.remove('active');
    });
};

colorPallete.forEach( color => {
    color.addEventListener('click', () => {
        removeColorSelector();
        color.classList.add('active');

        if(color.classList.contains('color-1')){
            primaryHue = 252;
        }else if(color.classList.contains('color-2')){
            primaryHue = 52;
        }else if(color.classList.contains('color-3')){
            primaryHue = 352;
        }else if(color.classList.contains('color-4')){
            primaryHue = 152;
        }else if(color.classList.contains('color-5')){
            primaryHue = 202;
        }

        root.style.setProperty('--primary-color-hue', primaryHue);
    });
});

//THEME BACKGROUND VALUES
let lightColorLightness;
let whiteColorLightness;
let darkColorLightness;

const changeBg = () => {
    root.style.setProperty('--light-color-lightness', lightColorLightness);
    root.style.setProperty('--white-color-lightness', whiteColorLightness);
    root.style.setProperty('--dark-color-lightness', darkColorLightness);
};

bg1.addEventListener('click', () => {
    //ADD ACTIVE CLASS
    bg1.classList.add('active');
    //REMOVE ACTIVE CLASS
    bg2.classList.remove('active');
    bg3.classList.remove('active');
    //REMOVE CUSTOMIZED CHANGES FROM LOCAL STORAGE
    window.location.reload();
});

bg2.addEventListener('click', () => {
    darkColorLightness = '95%';
    whiteColorLightness = '20%';
    lightColorLightness = '15%';

    //ADD ACTIVE CLASS
    bg2.classList.add('active');
    //REMOVE ACTIVE CLASS
    bg1.classList.remove('active');
    bg3.classList.remove('active');
    changeBg();
});

bg3.addEventListener('click', () => {
    darkColorLightness = '95%';
    whiteColorLightness = '10%';
    lightColorLightness = '0%';

    //ADD ACTIVE CLASS
    bg3.classList.add('active');
    //REMOVE ACTIVE CLASS
    bg1.classList.remove('active');
    bg2.classList.remove('active');
    changeBg();
});