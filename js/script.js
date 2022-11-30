// Menu Ativo
const items = document.querySelectorAll(".navbar a");
items.forEach((item) => {
  item.addEventListener("click", () => {
    document.querySelector("a.ativo").classList.remove("ativo");
    item.classList.add("ativo");
  });
});


//  Menu Mobile
let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menu.addEventListener("click", function () {
  navbar.classList.toggle("active");
});

window.onscroll = () => {
  navbar.classList.remove("active");
};



//  Campos de Busca

let buscar = document.querySelector("#icon-busca");
let efetuar = document.querySelector(".campo-busca");

buscar.addEventListener("click", function () {
  efetuar.classList.toggle("active");
});

  buscar.addEventListener = () => {
  efetuar.classList.remove("active");
};


// Pagina de Login
const admin = document.querySelector("#campo-login");
const login = document.querySelector(".container-login");

admin.addEventListener("click", function () {
  login.classList.toggle("active");
});

admin.addEventListener = () => {
  login.classList.remove("active");
};


// carrosel
var swiper = new Swiper(".mySwiper", {
  effect: "cards",
  grabCursor: true,
});

//cards serviços//

var swiper = new Swiper(".container-slider", {
  loop: true,
  spaceBetween: 20,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },
  centeredSlides: true,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1020: {
      slidesPerView: 3,
    },
  },
});

//cards- clientes//
var swiper = new Swiper(".container-clientes", {
  loop: true,
  spaceBetween: 20,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },
  centeredSlides: true,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1020: {
      slidesPerView: 3,
    },
  },
});

//Animação //
if (window.SimpleAnime) {
  new SimpleAnime();
}

// etapa de produtos feito com javascript importando informações de um arquivo json ! //
// exibir produtos com json//

let cart = [];
let modalQt = 1;
let modalkey = 0;

// Produtos//
produtosJson.map((item, index) => {
  let containerProduto = document
    .querySelector(".modelo-produto .produtos")
    .cloneNode(true);
  containerProduto.setAttribute("data-key", index);
  containerProduto.querySelector(".imagem-produtos img").src = item.img;
  containerProduto.querySelector(".titulo-modelo").innerHTML = item.name;
  containerProduto.querySelector(
    ".descricao-modelo"
  )
  containerProduto.querySelector(".bx").addEventListener("click", (e) => {
    e.preventDefault();
    let key = e.target.closest(".produtos").getAttribute("data-key");
    modalkey = key;
    let identifier = produtosJson[modalkey].id + "@";
    let product = cart.findIndex((item) => item.identifier == identifier);
    if (product > -1) {
      //cart[key].qt += modalQt
    } else {
      cart.push({
        identifier,
        id: produtosJson[modalkey].id,
        qt: modalQt,
      });
    }
    atualizarCard();
  });
  document.querySelector(".container-produtos").append(containerProduto);
});

