// 1. pc버전 서브메뉴 관련
const menu = document.querySelector('.menu__main');
const subMenu = document.querySelectorAll('.list__drop');
const panel = document.querySelector('.header__panel');
const header = document.querySelector('.header');

// 메뉴에 마우스올리면 보이기
menu.addEventListener('mouseover', () => {
    panel.style.display = 'block';
    subMenu.forEach(subMenu => { subMenu.style.display = "block" });
});

// 마우스 내리면 숨기기
header.addEventListener('mouseout', () => {
    panel.style.display = 'none';
    subMenu.forEach(subMenu => { subMenu.style.display = "none" });
});

// 2. 모바일 버전 메뉴 보이기, 숨기기
const Mhamburger = document.querySelector('.mobile.hamburger');
const Mclose = document.querySelector('.mobile.close');
const Mnav = document.querySelector('.header__Mnav');

Mhamburger.addEventListener('click', () => {
    Mnav.style.display = 'block';
});

Mclose.addEventListener('click', () => {
    Mnav.style.display = 'none';
});

// 3. width가 767px 이상일때 모바일 메뉴 보임 방지
(function() {
    var throttle = function(type, name, obj) {
        obj = obj || window;
        var running = false;
        var func = function() {
            if (running) { return; }
            running = true;
             requestAnimationFrame(function() {
                obj.dispatchEvent(new CustomEvent(name));
                running = false;
            });
        };
        obj.addEventListener(type, func);
    };

    /* init - you can init any event */
    throttle("resize", "optimizedResize");
})();

// handle event
window.addEventListener("optimizedResize", function() {
    let winWidth = window.innerWidth;

    if (winWidth >= 767) {
        Mnav.style.display = 'none';
    } 
});

// 4. 모바일 하위메뉴 보이기&숨기기
const showHide = e => {
    const MListDrop = e.children[2];
    const displayAttr = window.getComputedStyle(MListDrop).display;

    if (displayAttr == 'none') {
        MListDrop.style.display = 'block';
    } else {
        MListDrop.style.display = 'none';
    }
};


