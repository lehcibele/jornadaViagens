

const iconAbrirMobile = document.getElementById('icon-abrir-mobile') as HTMLElement | null;
const iconFecharMobile = document.getElementById('icon-fechar-mobile') as HTMLElement | null;
const navbarMobile = document.getElementById('navbar-mobile') as HTMLElement | null;

iconAbrirMobile?.addEventListener('click', menuMobile);
iconFecharMobile?.addEventListener('click', menuMobile);

function menuMobile() {
    if (!navbarMobile) return;

    // toggle alternar, se o elemento tem a classe hidden REMOVE, se o elemento não tem a classe hidden ADICIONA
    navbarMobile?.classList.toggle('hidden');

    const menuAberto = !navbarMobile?.classList.contains('hidden');

    if(menuAberto) {
        iconAbrirMobile?.classList.add('hidden');
        iconFecharMobile?.classList.remove('hidden');
    } else {
        iconFecharMobile?.classList.add('hidden');
        iconAbrirMobile?.classList.remove('hidden');
    }
}