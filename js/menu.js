const toggle = document.querySelector('.toggle');
const menuList = document.querySelector('.lista');

if (toggle && menuList) {
    function toggleMenu() {
        menuList.classList.toggle('active');
        const toggleIcon = toggle.querySelector('span');
        toggleIcon.classList.toggle('active');
        toggleIcon.innerText = toggleIcon.innerText === 'menu' ? 'close' : 'menu';
    }

    toggle.addEventListener('click', toggleMenu);
}

const imagens = document.querySelectorAll('.img-scroll img');
const textos = document.querySelectorAll('.natureza-text');

imagens.forEach((imagem, index) => {
    imagem.addEventListener('click', () => {
    textos.forEach(texto => {
        texto.style.display = 'none';
    });


    textos[index].style.display = 'block';
    });
});