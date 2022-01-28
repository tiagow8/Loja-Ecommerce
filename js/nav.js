const createNav = () => {
  let nav = document.querySelector(".navbar");
  nav.innerHTML = `
   <div class="nav">
        <img
          src="img/15882369c4d14d2eaf87664bca8ef82e__2_-removebg-preview.png"
          class="logo"
          alt=""
        />
        <div class="nav-items">
          <div class="search">
            <input
              type="text"
              class="search-box"
              placeholder="Procure por código,nome,marca..."
            />
            <button class="search-btn">Pesquisar</button>
          </div>
          <a href="#"><img src="img/user.png" alt="" /></a>
          <a href="#"><img src="img/cart.png" alt="" /></a>
        </div>
      </div>
      <ul class="links-container">
        <li class="link-item">
          <a href="#" class="link">Fashion week 2022 👖</a>
        </li>
        <li class="link-item"><a href="#" class="link">feminino 👗</a></li>
        <li class="link-item"><a href="#" class="link">masculino 👕</a></li>
        <li class="link-item"><a href="#" class="link">infantil 👦👧</a></li>
        <li class="link-item"><a href="#" class="link">acessórios 👕</a></li>
      </ul>
   `;
};

createNav();
