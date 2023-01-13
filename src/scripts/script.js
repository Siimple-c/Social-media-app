// SIDEBAR
const menuItems = document.querySelectorAll(".menu-item");
const messagesNotification = document.querySelector('#messages-notifications');
const messages = document.querySelector('.messages')
const message = messages.querySelectorAll('.message')
const messageSearch = document.querySelector('#message-search');
// THEME
const theme = document.querySelector('#theme');
const themeModal = document.querySelector('.customize-theme');
const fontSizes = document.querySelectorAll('.choose-size span');
const colorPalette = document.querySelectorAll('.choose-color span');
const root = document.querySelector(':root');
const bg1  = document.querySelector('.bg-1');
const bg2  = document.querySelector('.bg-2');
const bg3  = document.querySelector('.bg-3');


// Remove active class from menu items
function changeActiveItem (){
  menuItems.forEach(item => {
    item.classList.remove('active');
  })
}

menuItems.forEach(item => {
  item.addEventListener('click', () => {
    changeActiveItem();
    item.classList.add('active');
    if(item.id !== 'notifications' && item.id !== 'preferences'){
      document.querySelector('.notification-pane').style.display = 'none'
      document.querySelector('#theme-pane').style.display = 'none'
    }else if(item.id === 'notifications'){
      document.querySelector('.notification-pane').style.display = 'block'
    } else if(item.id === 'theme-pane'){
      document.querySelector('theme-pane').style.display = 'block'
    }
    else{
      document.querySelector('.notification-count').style.display = 'none';
    }
  });
});

function closeNotificationPane (){
  if(document.querySelector('.notification-pane').style.display = 'block'){
    
  }
}

// MESSAGES

function searchMessage() {
  const val = messageSearch.value.toLowerCase();
    message.forEach(chat => {
    let name = chat.querySelector('h5').textContent.toLowerCase();
    if(name.indexOf(val) !== -1){
      chat.style.display = 'flex';
    }else{
      chat.style.display = 'none';
    }
  })
}

// SEARCH CHAT
messageSearch.addEventListener('keyup', searchMessage)

// HIGHLIGHT MESSAGES CARD WHEN MESSAGES IN NAV IS CLICKED
messagesNotification.addEventListener('click', () => {
  messages.style.boxShadow = '0 0 1.6rem var(--color-primary)';
  messagesNotification.querySelector('.notification-count').style.display = 'none';
  setTimeout(()=>{
    messages.style.boxShadow = 'none';
  }, 2000);
})

// THEME CUSTOMIZATION
function openThemeModal(){
   themeModal.style.display = 'grid'
}
function closeModal(e){
  if(e.target.classList.contains('customize-theme')){
   themeModal.style.display = 'none'
  }
}

themeModal.addEventListener('click', closeModal);

theme.addEventListener('click', openThemeModal);

// FONTS----------------------

// remove active class from spans or font size selectors
function removeSizeSelector () {
  fontSizes.forEach(size => {
    size.classList.remove('active');
    
  })
}

fontSizes.forEach(size => {
  let fontSize ;

  size.addEventListener('click', ()=>{

  removeSizeSelector();
  size.classList.toggle('active');

    if(size.classList.contains('font-size-1')){
      fontSize = '10px';
      root.style.setProperty('----sticky-top-left', '8.64rem');
      root.style.setProperty('----sticky-top-left', '8.64rem');
    }else if(size.classList.contains('font-size-2')){
      fontSize = '13px';
      root.style.setProperty('----sticky-top-left', '8.64rem');
      root.style.setProperty('----sticky-top-left', '-11.2rem');
  
    }else if(size.classList.contains('font-size-3')){
      fontSize = '16px';
      root.style.setProperty('----sticky-top-left', '-3.2rem');
      root.style.setProperty('----sticky-top-left', '-27.2rem');
  
    }else if(size.classList.contains('font-size-4')){
      fontSize = '19px';
      root.style.setProperty('----sticky-top-left', '-8rem');
      root.style.setProperty('----sticky-top-left', '-40rem');
  
    }else if(size.classList.contains('font-size-5')){
      fontSize = '22px';
      root.style.setProperty('----sticky-top-left', '-19.2rem');
      root.style.setProperty('----sticky-top-left', '-56rem');
  
    }
      // change font size of the html element
document.querySelector('html').style.fontSize = fontSize;
  })

}) 

// Change Primary colors

function removeActiveColor () {
  colorPalette.forEach(clr => {
    clr.classList.remove('active')
  })
}

colorPalette.forEach(color => {
  color.addEventListener('click', ()=> {
    removeActiveColor();
    color.classList.toggle('active');
    let hexTheme;

    if(color.classList.contains('color-1')){
        hexTheme = '#6b4de6'
      }else if(color.classList.contains('color-2')){
      hexTheme = '#e6d14d';
      }else if(color.classList.contains('color-3')){
        hexTheme = '#e64d61'
      }else if(color.classList.contains('color-4')){
        hexTheme = '#4de69e'
      }else if(color.classList.contains('color-5')){
        hexTheme = '#4dade6'
      }
    
    root.style.setProperty('--color-primary', hexTheme);
  });
})

// Changing background

let darkHex;
let lightHex;
let whiteHex;

function backgroundChanger(){
  root.style.setProperty('--color-white', whiteHex);
  root.style.setProperty('--color-light', lightHex);
  root.style.setProperty('--color-dark', darkHex);
}

bg2.addEventListener('click', () => {
  darkHex = '##F0EEF6';
  lightHex = '#1F1B32';
  whiteHex ='#2A2442';

  bg2.classList.add('active');
  bg1.classList.remove('active');

  backgroundChanger();
})

bg1.addEventListener('click', ()=> {
  bg1.classList.add('active');
  bg2.classList.remove('active');

  window.history.go();
})

//------------- EXPLORE PAGE ---------------------

