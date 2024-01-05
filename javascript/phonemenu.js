function toggleSubMenu(menuId, iconid) {
    var submenu = document.getElementById(menuId);
    var icon = document.querySelector(`#${iconid} i`);

    if (submenu && submenu.style) {
        if (submenu.style.display !== 'block') {
            submenu.style.display = 'block';
            icon.classList.remove('fa-caret-down');
            icon.classList.add('fa-caret-up');
        } else {
            submenu.style.display = 'none';
            icon.classList.remove('fa-caret-up');
            icon.classList.add('fa-caret-down');
        }
    }
}