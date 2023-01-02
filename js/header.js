let header = `<div class="mainheader">
<div class="headercont">

    <div class="logo-e-link">
        <div class="logocont">
            <a href="index.html">
                <img id="logocont" src="assets/logos/atacasu/logo-preto-atacasu.svg" alt="Atacadão dos Suplementos">
            </a>
        </div>

        <!--Utillize o id="offline" para desativar um botão-->

        <ul class="headerlinks">
            <li><a href="https://www.magazineluiza.com.br/lojista/grupoatacadaodossuplementos/" target="_blank">Magazine Luiza</a></li>
            <li><a href="https://shopee.com.br/atacadaodossuplementos" target="_blank">Shopee</a></li>
            <li><a href="#" id="offline">Mercado Livre</a></li>
        </ul>
    </div>

    <div class="headertextalert">
        <a target="_blank"
        href="https://linkr.bio/atacadaodossuplementos"
        id="headertextalert">Redes Sociais</a>

        <a target="_blank"
            href="https://meucomercio.com.br/atacadaodossuplementos"
            id="headertextalert">Comprar em Atacado</a>



<div class="offcanvas-box" style="display: none;">
<button class="btn btn-nobackground btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling">


<svg class="burguer" clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m11 16.745c0-.414.336-.75.75-.75h9.5c.414 0 .75.336.75.75s-.336.75-.75.75h-9.5c-.414 0-.75-.336-.75-.75zm-9-5c0-.414.336-.75.75-.75h18.5c.414 0 .75.336.75.75s-.336.75-.75.75h-18.5c-.414 0-.75-.336-.75-.75zm4-5c0-.414.336-.75.75-.75h14.5c.414 0 .75.336.75.75s-.336.75-.75.75h-14.5c-.414 0-.75-.336-.75-.75z" fill-rule="nonzero"/></svg>

</button>
<div class="offcanvas offcanvas-xxl offcanvas-end" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
  <div class="offcanvas-header offcanvas-header2">

    <button type="button" class="btn-close btn-close2" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">

  <ul class="off-canva-links">
  <li>
<a href="https://linkr.bio/atacadaodossuplementos" class="redessociais" target="_blank">Redes Sociais</a>
  </li>
  <li>
      <a href="https://meucomercio.com.br/atacadaodossuplementos" class="atacado" target="_blank">Comprar em Atacado</a>
  </li>
  <li>
      <a href="https://www.magazineluiza.com.br/lojista/grupoatacadaodossuplementos/" target="_blank">Magazine Luiza</a>
  </li>
  <li>
      <a href="https://shopee.com.br/atacadaodossuplementos" target="_blank">Shopee</a>
  </li>
  <li>
      <a href=""  id="offline">Mercado Livre</a>
  </li>
</ul>

  </div>
</div>
</div>


    </div>
</div>
</div>`;

let theheader = document.createElement('div');
theheader.innerHTML = header;
document.getElementById('header').appendChild(theheader);