function despliegueMenuHeader(){
    var menu_header = document.getElementById('menuHeader');
    if (menu_header.style.display ===  "none"){
        menu_header.style.display = "flex"
    }else{
        menu_header.style.display = "none"

    }
};

function despliegueMenuAside(){
    var menu_Aside = document.getElementById('menuAside');
    if (menu_Aside.style.display == "none"){
        menu_Aside.style.display = "flex";
    }else{
        menu_Aside.style.display = "none"
    }
}

function despliegueMenuFooter(){
    var menu_Footer = document.getElementById('menuFooter');
    if (menu_Footer.style.display ===  "none"){
        menu_Footer.style.display = "flex";
    }else{
        menu_Footer.style.display = "none"
    }
}

