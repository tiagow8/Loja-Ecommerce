const createFooter = () => {
  let footer = document.querySelector("footer");
  footer.innerHTML = `
   <div class="footer-content">
   <img
     src="img/15882369c4d14d2eaf87664bca8ef82e__5_-removebg-preview.png"
     class="lo"
     alt=""
   />
   <div class="footer-ul-container">
     <ul class="category">
       <li class="category-title">Homem👨</li>
       <li><a href="#" class="footer-link">Camisetas</a></li>
       <li><a href="#" class="footer-link">Jeans</a></li>
       <li><a href="#" class="footer-link">Sapatos</a></li>
       <li><a href="#" class="footer-link">Calças</a></li>
       <li><a href="#" class="footer-link">Jaquetas</a></li>
       <li><a href="#" class="footer-link">Casual</a></li>
       <li><a href="#" class="footer-link">Esportes</a></li>
       <li><a href="#" class="footer-link">Social</a></li>
       <li><a href="#" class="footer-link">Cuecas</a></li>
     </ul>
     <ul class="category">
       <li class="category-title">Mulher👩</li>
       <li><a href="#" class="footer-link">Vestidos</a></li>
       <li><a href="#" class="footer-link">Jeans</a></li>
       <li><a href="#" class="footer-link">Sapatos</a></li>
       <li><a href="#" class="footer-link">Calças</a></li>
       <li><a href="#" class="footer-link">Jaquetas</a></li>
       <li><a href="#" class="footer-link">Casual</a></li>
       <li><a href="#" class="footer-link">Bolsas</a></li>
       <li><a href="#" class="footer-link">Social</a></li>
       <li><a href="#" class="footer-link">Croppeds</a></li>
     </ul>
   </div>
   
 </div>
 <p class="footer-title">Sobre a Empresa <i class="far fa-building"></i></p>
   <p class="info">O Grupo Story Clothing é uma loja de Expansão na América Latina, com grande atuação no Brasil. Contamos com diversas filiais fisicas e uma rede de suporte altamente diversificada. Temos como propósito o bem estar dos nossos clientes tendo como valores o respeito,a diversidade e o bom atendimento a todos. Também oferecemos frete grátis para todos os lugares e temos uma cultura proativa em relação ao meio ambiente.</p>
   <p class="info">Suporte ao cliente | Acesse - storyclothing@.com</p>
   <p class="info">📱 Telefone - 0800 0800 99</p>
   
   <div class="footer-social-container">
     <div>
       <a href="#" class="social-link">Termos e Serviços</a>
       <a href="#" class="social-link">Privacidade</a>
       <a href="#" class="social-link">Ver Ofertas na Minha Região.</a>
     </div>
     <div>
         <a href="#" class="social-link">
         <i class="fab fa-instagram"></i></a>
         <a href="#" class="social-link"><i class="fab fa-whatsapp"></i></a>
         <a href="#" class="social-link"><i class="fab fa-facebook-square"></i></a>
       </div>
       <p class="footer-credit"> Story Clothing, A MELHOR LOJA DE ROUPA ONLINE 💕</p>
   `;
};

createFooter();
