// Menu data structure
var menuLinks = [
  {text: 'about', href: '/about'},
  {text: 'catalog', href: '#', subLinks: [
    {text: 'all', href: '/catalog/all'},
    {text: 'top selling', href: '/catalog/top'},
    {text: 'search', href: '/catalog/search'},
  ]},
  {text: 'orders', href: '#' , subLinks: [
    {text: 'new', href: '/orders/new'},
    {text: 'pending', href: '/orders/pending'},
    {text: 'history', href: '/orders/history'},
  ]},
  {text: 'account', href: '#', subLinks: [
    {text: 'profile', href: '/account/profile'},
    {text: 'sign out', href: '/account/signout'},
  ]},
];

let mainEl = document.querySelector('main');

mainEl.style.backgroundColor = 'var(--main-bg)';
mainEl.innerHTML = '<h1>SEI Rocks!</h1>';

mainEl.classList.add('flex-ctr');

const topMenuEl = document.querySelector('#top-menu');

topMenuEl.style.height = "100%";
topMenuEl.style.backgroundColor = 'var(--top-menu-bg)';
topMenuEl.classList.add('flex-around');

for(let menu of menuLinks){
    const anchor = document.createElement("a");
    anchor.setAttribute("href", menu.href);
    anchor.textContent = menu.text;
    topMenuEl.appendChild(anchor)
}

const header = document.querySelector('header');
const subMenu = document.createElement('nav');
subMenu.setAttribute('id','sub-menu');
header.appendChild(subMenu);

let subMenuEl = document.querySelector('#sub-menu');
subMenuEl.style.height = '100%'
subMenuEl.style.backgroundColor = 'var(--sub-menu-bg)';
subMenuEl.classList.add('flex-around');

subMenuEl.style.position = "absolute";
subMenuEl.style.top = "0";
const topMenuLinks = topMenuEl.querySelectorAll('a');

let showingSubMenu = false;
topMenuEl.addEventListener("click",(event)=>{
event.preventDefault();
if(event.target.tagName !== 'A'){
  return
}else{
  console.log(event.target.innerHTML);
}
if(event.target.classList.contains("active")){
  event.target.classList.remove('active');
  showingSubMenu = false;
  subMenuEl.style.top = '0';
  return
}
for(let link of topMenuLinks){
  link.classList.remove('active');
}
event.target.classList.add("active");

const findLink = menuLinks.find(obj => obj.text === event.target.innerHTML);

if(findLink.subLinks !== undefined){
  showingSubMenu = true;
}else{
  showingSubMenu = false;
}
if(showingSubMenu === true){
  buildSubMenu(findLink.subLinks);
  subMenuEl.style.top = '100%';
}else{
  subMenuEl.style.top = "0";
}

})

let buildSubMenu = (sublink)=>{
  subMenuEl.innerHTML = "";
  for(let link of sublink){
    const an = document.createElement("a");
    an.setAttribute("href",link.href);
    an.textContent = link.text;
    subMenuEl.appendChild(an);
  }
  
}

subMenuEl.addEventListener("click", (event)=>{
  event.preventDefault();
  if(event.target.tagName !== "A"){
    return;
  }else{
  console.log(event.target.innerHTML);
  }
  showingSubMenu = false;
  subMenuEl.style.top = "0";

  for(link of topMenuLinks){
    link.classList.remove("active");
  }

  mainEl.innerHTML = event.target.innerHTML; 
  })
  



