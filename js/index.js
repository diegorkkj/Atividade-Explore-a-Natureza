import faqInit from "./faq.js";
import imgsInit from "./imgs.js";
import menuMobileInit from "./menu.js";
import { Modal } from "./modules/modal.js";

imgsInit()
faqInit()
menuMobileInit()

new Modal('.js-modal', 
'.modal-close', 
'.modal-forms').init();

const form = document.querySelector('.form')
const dados = {}

function pegarValorForm(event){
    dados[event.target.name] = event.target.value
}

form.addEventListener('change', pegarValorForm)
form.addEventListener('submit')