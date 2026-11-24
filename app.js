const WHATSAPP_NUMBER = "5511959171215";

const products = [
  { id: "chocolate", name: "Bolo de chocolate", category: "Bolos de chocolate", group: "bolos", price: 89, palette: ["#6e382e", "#d99a68"], image: "Assets/bolo_de_rico.jpeg", description: "Massa de chocolate fofinha, recheio generoso e cobertura cremosa. Um clássico feito para dividir (ou não!).", ingredients: "Farinha de trigo, ovos, leite, chocolate, açúcar e manteiga. Contém glúten, leite e ovos." },
  { id: "personalizado", name: "Bolo caseiro", category: "Personalizados", group: "personalizados", price: 145, palette: ["#d98d76", "#f0c4aa"], image: "Assets/bolo_caseiro.jpeg", description: "Um bolo caseiro preparado com carinho, macio e perfeito para o café da tarde ou para adoçar seu dia.", ingredients: "Ingredientes variam conforme o sabor escolhido. Contém glúten, leite e ovos; consulte outros alergênicos." },
  { id: "pote", name: "Bolo de aniversário", category: "Bolos personalizados", group: "potes", price: 16, palette: ["#ae7051", "#f4d9b8"], image: "Assets/bolo_de_anirvesario.jpeg", description: "Um bolo especial para celebrar aniversários, preparado com carinho e cheio de sabor.", ingredients: "Farinha de trigo, ovos, leite, açúcar e recheio do sabor escolhido. Contém glúten, leite e ovos." },
  { id: "morango", name: "Bolo de morango", category: "Bolo de morango", group: "morango", price: 112, palette: ["#bd5260", "#f6b8ad"], image: "Assets/bolo_hell_30.jpeg", description: "Massa leve, creme delicado e morangos para um encontro bonito entre frescor e doçura.", ingredients: "Farinha de trigo, ovos, leite, açúcar, creme e morango. Contém glúten, leite e ovos." },
  { id: "mousse", name: "Bolos personalizados", category: "Personalizados", group: "mousses", price: 48, palette: ["#754635", "#d79b7c"], image: "Assets/bolo_natalino.jpeg", description: "Bolos personalizados preparados com carinho para celebrar datas especiais e momentos inesquecíveis.", ingredients: "Chocolate, creme de leite, ovos e açúcar. Contém leite e ovos." },
  { id: "brigadeiro", name: "Brigadeiros de festa", category: "Brigadeiros • dúzia", group: "brigadeiros", price: 42, palette: ["#85513c", "#e7b17e"], image: "Assets/brigadeiro_1.jpeg", description: "Brigadeiros enrolados um a um, com sabor de festa e cobertura à sua escolha. Vendidos por dúzia.", ingredients: "Leite condensado, chocolate, manteiga e confeitos. Contém leite; consulte os ingredientes dos confeitos." },
  { id: "cenoura", name: "Bolo sem cobertura", category: "Bolos sem cobertura", group: "sem-cobertura", price: 58, palette: ["#cc854b", "#f5ca91"], image: "Assets/bolo_ sem_copertura.jpeg", description: "Massa fofinha e saborosa, preparada artesanalmente e perfeita para o café da tarde.", ingredients: "Farinha de trigo, cenoura, ovos, leite, açúcar e óleo. Contém glúten, leite e ovos." },
  { id: "sonho", name: "Sonho de Valsa no pote", category: "Bolo de pote", group: "potes", price: 19, palette: ["#8b513e", "#d7a178"], description: "Bolo, creme e pedacinhos crocantes em camadas. Uma sobremesa indulgente para qualquer hora.", ingredients: "Farinha de trigo, ovos, leite, açúcar, creme e bombom. Contém glúten, leite, ovos e amendoim." }
];

const classes = [
  { id: "basica", title: "Confeitaria Básica", date: "15 de dezembro de 2026", duration: "1 encontro • 4 horas", level: "Iniciante", seats: 4, limit: 8, description: "Aprenda massas, recheios e os primeiros passos para montar doces deliciosos." },
  { id: "bicos", title: "Decoração com Bicos", date: "20 de dezembro de 2026", duration: "1 encontro • 3 horas", level: "Intermediário", seats: 0, limit: 6, description: "Conheça os bicos de confeitar e pratique flores, bordas e acabamentos." },
  { id: "artistico", title: "Bolos Artísticos", date: "10 de janeiro de 2027", duration: "2 encontros • 6 horas", level: "Todos os níveis", seats: 3, limit: 6, description: "Explore a estrutura, cobertura e decoração de bolos para ocasiões especiais." }
];

const money = value => new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(value);

function cakeIllustration(product, index) {
  const [base, accent] = product.palette;
  const shapes = [
    `<ellipse cx="120" cy="147" rx="76" ry="17" fill="#e5c4a4"/><path d="M44 76h152v71c0 11-34 20-76 20s-76-9-76-20z" fill="${base}"/><ellipse cx="120" cy="76" rx="76" ry="22" fill="#fff7ed"/><path d="M45 79c25 15 126 15 150 0" fill="none" stroke="${accent}" stroke-width="8" stroke-linecap="round"/><g fill="${accent}"><circle cx="70" cy="69" r="5"/><circle cx="91" cy="61" r="5"/><circle cx="120" cy="58" r="5"/><circle cx="149" cy="62" r="5"/><circle cx="170" cy="70" r="5"/></g>`,
    `<ellipse cx="120" cy="147" rx="77" ry="17" fill="#e5c4a4"/><path d="M53 88h134v59c0 12-30 20-67 20s-67-8-67-20z" fill="${base}"/><ellipse cx="120" cy="88" rx="67" ry="20" fill="#fff7ed"/><path d="M70 90c15 8 85 8 100 0" fill="none" stroke="${accent}" stroke-width="7" stroke-linecap="round"/><path d="M96 62c-18-20 4-29 13-7 0-24 23-19 12 4 17-13 28 3 3 11z" fill="${accent}"/><circle cx="118" cy="59" r="5" fill="#fff0d9"/>`,
    `<ellipse cx="120" cy="146" rx="74" ry="17" fill="#e5c4a4"/><rect x="48" y="65" width="144" height="81" rx="11" fill="${base}"/><ellipse cx="120" cy="65" rx="72" ry="19" fill="#fff7ed"/><path d="M49 88h142" stroke="${accent}" stroke-width="7"/><circle cx="86" cy="69" r="5" fill="${accent}"/><circle cx="120" cy="62" r="5" fill="${accent}"/><circle cx="154" cy="69" r="5" fill="${accent}"/>`
  ];
  return `<svg class="cake-illustration cake-style-${index % 3}" viewBox="0 0 240 190" role="img" aria-label="Ilustração fictícia de ${product.name}"><rect width="240" height="190" rx="4" fill="url(#bg-${index})"/><defs><linearGradient id="bg-${index}" x2="1" y2="1"><stop stop-color="#fff8ef"/><stop offset="1" stop-color="${accent}" stop-opacity=".35"/></linearGradient></defs><circle cx="36" cy="39" r="3" fill="${accent}" opacity=".6"/><circle cx="203" cy="49" r="5" fill="#fff" opacity=".8"/><path d="M26 126c8-12 16-12 24 0" fill="none" stroke="${accent}" opacity=".45"/><g>${shapes[index % 3]}</g><text x="120" y="181" text-anchor="middle" fill="#7a6252" font-family="Montserrat, sans-serif" font-size="8" letter-spacing="2">ILUSTRAÇÃO FICTÍCIA</text></svg>`;
}

function renderProducts(filter = "todos") {
  const grid = document.querySelector("#product-grid");
  if (!grid) return;
  const filtered = products.filter(product => filter === "todos" || product.group === filter);
  grid.innerHTML = filtered.map((product, index) => `
    <article class="product-card">
      <a class="product-image" href="product.html?produto=${encodeURIComponent(product.id)}" aria-label="Ver detalhes de ${product.name}">
        ${product.image ? `<img class="cake-illustration" src="${product.image}" alt="${product.name}">` : cakeIllustration(product, products.indexOf(product))}
        <span class="product-badge">${product.category}</span>
        <span class="product-quick-view">Ver detalhes <span aria-hidden="true">↗</span></span>
      </a>
      <div class="product-card-copy">
        <h3><a href="product.html?produto=${encodeURIComponent(product.id)}">${product.name}</a></h3>
        <p class="product-price">${money(product.price)} <small>${product.group === "brigadeiros" ? "/ dúzia" : product.group === "potes" ? "/ unidade" : "a partir de"}</small></p>
        <a class="product-add" href="product.html?produto=${encodeURIComponent(product.id)}">Adicionar ao carrinho <span aria-hidden="true">→</span></a>
      </div>
    </article>`).join("");
}

function renderProductDetail() {
  const name = document.querySelector("#product-name");
  if (!name) return;
  const params = new URLSearchParams(window.location.search);
  const product = products.find(item => item.id === params.get("produto")) || products[0];
  document.title = `${product.name} | Tati Bolos`;
  name.textContent = product.name;
  document.querySelector("#product-breadcrumb").textContent = product.name;
  document.querySelector("#product-category").textContent = product.category;
  document.querySelector("#product-description").textContent = product.description;
  document.querySelector("#product-full-description").textContent = `${product.description} Cada encomenda é preparada artesanalmente. Escolha o tamanho e o recheio desejados e fale com a Tati para confirmar a disponibilidade da data.`;
  document.querySelector("#product-ingredients").textContent = product.ingredients;
  document.querySelector("#product-price").textContent = `${money(product.price)} ${product.group === "brigadeiros" ? "/ dúzia" : product.group === "potes" ? "/ unidade" : "a partir de"}`;
  document.querySelector("#product-detail-visual").innerHTML = product.image
    ? `<img class="cake-illustration" src="${product.image}" alt="${product.name}">`
    : cakeIllustration(product, products.indexOf(product));
  const sizeSelect = document.querySelector("#product-size");
  const sizeOptions = product.group === "potes" ? ["1 unidade", "6 unidades", "12 unidades"] : product.group === "brigadeiros" ? ["1 dúzia", "2 dúzias", "3 dúzias"] : ["P (serve 8 a 10 pessoas)", "M (serve 15 a 20 pessoas)", "G (serve 25 a 30 pessoas)"];
  sizeSelect.innerHTML = sizeOptions.map((option, index) => `<option value="${option}" ${index === 0 ? "selected" : ""}>${option}</option>`).join("");
}

function renderCourses() {
  const grid = document.querySelector("#classes-grid");
  if (grid) {
    grid.innerHTML = classes.map((item, index) => {
      const full = item.seats === 0;
      return `<article class="class-card ${full ? "class-card-full" : ""}">
        <div class="class-card-top"><span class="class-number">0${index + 1}</span><span class="class-status ${full ? "status-full" : ""}">${full ? "Lista de espera" : `${item.seats} vagas`}</span></div>
        <span class="class-type">${item.level}</span><h3>${item.title}</h3><p>${item.description}</p>
        <div class="class-meta"><span>◷ &nbsp;${item.duration}</span><span>▣ &nbsp;${item.date}</span></div>
        <div class="class-capacity"><span>Vagas disponíveis</span><b>${full ? "Turma cheia" : `${item.seats} de ${item.limit}`}</b><div class="capacity-track"><span style="width:${Math.max(0, ((item.limit - item.seats) / item.limit) * 100)}%"></span></div></div>
        <a class="text-link" href="#inscricao" data-select-course="${item.id}">${full ? "Entrar na lista de espera" : "Quero participar"} <span aria-hidden="true">→</span></a>
      </article>`;
    }).join("");
  }
  const select = document.querySelector("#course-select");
  if (select) {
    select.innerHTML += classes.map(item => `<option value="${item.id}">${item.title} — ${item.date}${item.seats === 0 ? " (lista de espera)" : ""}</option>`).join("");
  }
}

function initCategoryFilter() {
  const buttons = document.querySelectorAll(".category-chip");
  buttons.forEach(button => button.addEventListener("click", () => {
    buttons.forEach(item => item.classList.toggle("is-active", item === button));
    renderProducts(button.dataset.category);
  }));
}

const testimonials = [
  { quote: "O bolo ficou lindo e estava simplesmente maravilhoso. Todo mundo perguntou onde eu tinha encomendado!", name: "Mariana S.", city: "São Paulo, SP", initial: "M" },
  { quote: "A aula foi uma delícia! Aprendi muito, me senti super à vontade e já quero fazer a próxima.", name: "Camila R.", city: "São Paulo, SP", initial: "C" },
  { quote: "Tudo feito com tanto cuidado. O sabor e a apresentação deixaram nossa comemoração ainda mais especial.", name: "Luiza F.", city: "São Paulo, SP", initial: "L" }
];
let testimonialIndex = 0;

function showTestimonial(index) {
  const quote = document.querySelector("#testimonial-quote");
  if (!quote) return;
  testimonialIndex = (index + testimonials.length) % testimonials.length;
  const item = testimonials[testimonialIndex];
  quote.textContent = item.quote;
  document.querySelector("#testimonial-name").textContent = item.name;
  document.querySelector("#testimonial-city").textContent = item.city;
  document.querySelector("#testimonial-avatar").textContent = item.initial;
  document.querySelector("#testimonial-count").textContent = `0${testimonialIndex + 1} / 0${testimonials.length}`;
}

function initSkillBars() {
  const bars = document.querySelectorAll(".skill-track span");
  if (!bars.length) return;
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.width = `${entry.target.dataset.progress}%`;
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.4 });
  bars.forEach(bar => observer.observe(bar));
}

function initForms() {
  document.querySelectorAll(".whatsapp-form").forEach(form => form.addEventListener("submit", event => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    const data = new FormData(form);
    const kind = form.dataset.formKind === "inscricao" ? "Inscrição em aula" : "Interesse em aulas";
    const selectedClass = classes.find(item => item.id === data.get("curso"));
    const courseName = selectedClass
      ? `${selectedClass.title} — ${selectedClass.date}${selectedClass.seats === 0 ? " (lista de espera)" : ""}`
      : data.get("curso");
    const message = [
      `Olá, Tati! Gostaria de falar sobre ${kind.toLowerCase()}.`,
      `Nome: ${data.get("nome")}`,
      `WhatsApp: ${data.get("telefone")}`,
      `Modalidade: ${courseName}`,
      data.get("observacoes") ? `Observações / experiência: ${data.get("observacoes")}` : ""
    ].filter(Boolean).join("\n");
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, "_blank", "noopener");
  }));

  const productForm = document.querySelector("#product-order-form");
  if (productForm) productForm.addEventListener("submit", event => {
    event.preventDefault();
    if (!productForm.reportValidity()) return;
    const product = products.find(item => item.id === new URLSearchParams(window.location.search).get("produto")) || products[0];
    const data = new FormData(productForm);
    const message = [
      `Oi, Tati! Quero encomendar: ${product.name}.`,
      `Tamanho/quantidade: ${data.get("tamanho")}`,
      `Recheio: ${data.get("recheio")}`,
      `Quantidade: ${data.get("quantidade")}`,
      data.get("mensagem") ? `Mensagem no bolo: ${data.get("mensagem")}` : ""
    ].filter(Boolean).join("\n");
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, "_blank", "noopener");
  });
}

function initQuantity() {
  document.querySelectorAll("[data-quantity]").forEach(button => button.addEventListener("click", () => {
    const input = document.querySelector("#product-quantity");
    if (!input) return;
    const next = Number(input.value) + Number(button.dataset.quantity);
    input.value = String(Math.min(Number(input.max), Math.max(Number(input.min), next)));
  }));
}

function initMobileMenu() {
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".main-nav");
  if (!toggle || !nav) return;
  toggle.addEventListener("click", () => {
    const open = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!open));
    nav.classList.toggle("is-open", !open);
  });
  nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
    toggle.setAttribute("aria-expanded", "false");
    nav.classList.remove("is-open");
  }));
}

function init() {
  renderProducts();
  renderProductDetail();
  renderCourses();
  initCategoryFilter();
  initSkillBars();
  initForms();
  initQuantity();
  initMobileMenu();
  document.querySelector("#testimonial-prev")?.addEventListener("click", () => showTestimonial(testimonialIndex - 1));
  document.querySelector("#testimonial-next")?.addEventListener("click", () => showTestimonial(testimonialIndex + 1));
  document.querySelectorAll("[data-select-course]").forEach(link => link.addEventListener("click", () => {
    const select = document.querySelector("#course-select");
    if (select) select.value = link.dataset.selectCourse;
  }));
}

document.addEventListener("DOMContentLoaded", init);
