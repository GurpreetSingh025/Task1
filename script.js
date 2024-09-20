let content = [
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore sequi consequatur libero voluptas amet distinctio omnis, illum atque vel consequuntur aut unde totam provident voluptate dignissimos maxime eligendi quod eum!  vel tenetur voluptatum fugit illo quod vitae et adipisci cupiditate soluta ipsa" ,
    "Cumque, suscipit! Inventore, earum repudiandae hic quo non laboriosam, at sequi distinctio possimus corrupti repellat, vel tenetur voluptatum fugit illo quod vitae et adipisci cupiditate soluta ipsa mollitia. Repellat, commodi! Repellendus porro molestias voluptatum ex laudantium doloremque ab velit, qui voluptatibus fugia"
]

let currentSelectedTab = document.querySelector(".tab-header");

function setTabFunctionality(){
   let tabs = document.querySelectorAll(".tab-header") ;
   if(tabs && tabs.length > 0){
       tabs.forEach((tab) => {
            tab.addEventListener("click" , (e) => {
                toggleActiveClass(e) ;
                setTabContent(e.target) ;
            }) ;
       })
   }
}
setTabFunctionality() ;

function toggleActiveClass(e){
    if(currentSelectedTab && currentSelectedTab.classList.contains("active") && currentSelectedTab != e.target){
        currentSelectedTab.classList.remove("active") ;
    }
    if(!e.target.classList.contains("active")){
       e.target.classList.add("active") ;   
       currentSelectedTab = e.target ;
    }
}

function setTabContent(elem){
    let key = parseInt(elem.getAttribute("key")) ;
    let tabContentDiv = document.querySelector(".tab-content") ;
    if(tabContentDiv){
        tabContentDiv.textContent = content[key] ;
    }
}
setTabContent(currentSelectedTab) ;

function hamburgermenuVisibilityhandler(){
   let hamMenuSvg = document.querySelector(".ham-menu svg") ;
   if(hamMenuSvg){
       hamMenuSvg.addEventListener("click" , () => {
            let resMenuCont = document.querySelector(".resp-menu-cont") ;
            resMenuCont.classList.add("show") ;
            let hamMenuIcon = document.querySelector(".ham-menu") ;
            if(hamMenuIcon){
                hamMenuIcon.classList.add("hide") ;
            }
       })
   }
}
hamburgermenuVisibilityhandler()

function handleCloseHamMenu(){
    let closeIcon = document.querySelector(".close-ham-icon") ;
    if(closeIcon){
        closeIcon.addEventListener("click" , closeHamMenu) ;
    }

    let allLi = document.querySelectorAll(".res-nav-links .res-menu-item") ;
    if(allLi && allLi.length > 0){
        allLi.forEach((li) => {
             li.addEventListener("click" , closeHamMenu) ;
        })
    }
}
function closeHamMenu(){
    let hamNav = document.querySelector(".resp-menu-cont") ;
    if(hamNav){
        hamNav.classList.remove("show") ;
    }
    let hamMenuIcon = document.querySelector(".ham-menu") ;
    if(hamMenuIcon && hamMenuIcon.classList.contains("hide") == true){
        hamMenuIcon.classList.remove("hide") ;
    }
}
handleCloseHamMenu() ;

function handleResSubMenuVisibility(){
    let resDropdownLi = document.querySelector(".res-nav-links .dropdown") ;

    if(resDropdownLi){
        resDropdownLi.addEventListener("click" , () => {
              if(resDropdownLi.classList.contains("opened")){
                  resDropdownLi.classList.remove("opened") ;
                  let resSubMenu = document.querySelector(".res-sub-menu") ;
                  if(resSubMenu) resSubMenu.classList.remove("show") 
              }else{
                  resDropdownLi.classList.add("opened") ;
                  let resSubMenu = document.querySelector(".res-sub-menu") ;
                  if(resSubMenu) resSubMenu.classList.add("show") ;
              }
        })
    }
}
handleResSubMenuVisibility()

window.addEventListener("resize" , () => {
    if(window.innerWidth < 600){
        let hamMenuIcon = document.querySelector(".ham-menu") ;
        if(hamMenuIcon && hamMenuIcon.classList.contains("hide") == true){
            hamMenuIcon.classList.remove("hide") ;
        }
    }
    if(window.innerWidth > 595){
         let nav = document.querySelector(".resp-menu-cont") ;
         if(nav && nav.classList.contains("show")){
             nav.classList.remove("show") ;
         }
    }
})