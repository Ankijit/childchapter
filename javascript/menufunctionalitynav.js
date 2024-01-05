function showmenu(menuid) {
    document.getElementById(menuid).style.display = 'block';
}

function closemenu(menuid) {
    document.getElementById(menuid).style.display = 'none';
}

function showphonemenu() {
    var sidemenu = document.getElementById('phoneside');
    if (sidemenu.style.right !== '0px') {
        sidemenu.style.right = '0px';


    } else {
        sidemenu.style.right = '-70vw';

    }
}