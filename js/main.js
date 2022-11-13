/*Product post*/

let lovelyhair =
  `<!--PRODUTO--> 
  <a  href="https://www.magazineluiza.com.br/lovely-hair-60caps-bpm-nutrition/p/dk65j04j37/sa/sanu/?seller_id=grupoatacadaodossuplementos"
  target="_blank"  class="emphacont">
      <div class="emphaimg">
          <img id="emphaimg" src="images/produtos/lovely hair.png" alt="Lovely Hair">
      </div>

      <div class="emphatext">
          <div class="titlespantext">
              <h1 id="emphatitle">
                  Lovely Hair 60CAPS
              </h1>

              <span id="emphatitlehub">
                  Frete Grátis
              </span>
          </div>
          <p id="namemark">
              de <span>BPM Nutrition</span>
          </p>
          <div class="pricebox">
              <span id="pricenow">
                  R$&nbsp;110,00
              </span>
          </div>
          <div class="cupombox">
              <p id="cupomidtext"> Cupom:
                  <span id="cupomid">

                  </span>
              </p>
          </div>
          <div class="store-logo">
              <img src="assets/logos/magalu.png" alt="magalu" id="store-logo">
          </div>

      </div>
  </a>
  <!--PRODUTO-->`;

let diaboverde =  `
 <!--PRODUTO-->
<a  href="https://www.magazineluiza.com.br/pre-treino-150g-diabo-verde-ftw/p/ebea9c100a/sa/satr/"
target="_blank" class="emphacont">
    <div class="emphaimg">
        <img id="emphaimg" src="images/produtos/pre treino diabo verde.png" alt="Pre Treino Diabo Verde">
    </div>

    <div class="emphatext">
        <div class="titlespantext">
            <h1 id="emphatitle">
                Pré Treino 150g
            </h1>

            <span id="emphatitlehub">
                Frete Grátis
            </span>
        </div>
        <p id="namemark">
            de <span>Diabo Verde FTW</span>
        </p>
        <div class="pricebox">
            <span id="pricenow">
                R$&nbsp;100,00
            </span>
        </div>
        <div class="cupombox">
            <p id="cupomidtext"> Cupom:
                <span id="cupomid">

                </span>
            </p>
        </div>
        <div class="store-logo">
            <img src="assets/logos/magalu.png" alt="magalu" id="store-logo">
        </div>

    </div>
</a>
 <!--PRODUTO--> `;

 let creatinaProbiotica =  `
 <!--PRODUTO-->
<a  href="https://www.magazineluiza.com.br/creatina-300g-probiotica/p/ace6hg671d/sa/sacr/?seller_id=grupoatacadaodossuplementos"
target="_blank" class="emphacont">
    <div class="emphaimg">
        <img id="emphaimg" src="images/produtos/creatina300gprobiotica.png" alt="Creatina 300g Probiotica">
    </div>

    <div class="emphatext">
        <div class="titlespantext">
            <h1 id="emphatitle">
                Creatina 300g
            </h1>

            <span id="emphatitlehub">
                Frete Grátis
            </span>
        </div>
        <p id="namemark">
            de <span>Probiotica</span>
        </p>
        <div class="pricebox">
            <span id="pricenow">
                R$&nbsp;220,00
            </span>
        </div>
        <div class="cupombox">
            <p id="cupomidtext"> Cupom:
                <span id="cupomid">

                </span>
            </p>
        </div>
        <div class="store-logo">
            <img src="assets/logos/magalu.png" alt="magalu" id="store-logo">
        </div>

    </div>
</a>
 <!--PRODUTO--> `;

 let feminiWhey =  `
 <!--PRODUTO-->
<a  href="https://www.magazineluiza.com.br/femini-whey-max-titanium/p/cj3213bd04/sa/samm/?seller_id=grupoatacadaodossuplementos"
target="_blank" class="emphacont">
    <div class="emphaimg">
        <img id="emphaimg" src="images/produtos/femini-whey.png" alt="Femini Whey">
    </div>

    <div class="emphatext">
        <div class="titlespantext">
            <h1 id="emphatitle">
                Femini Whey 
            </h1>

            <span id="emphatitlehub">
                Frete Grátis
            </span>
        </div>
        <p id="namemark">
            de <span>Max Titanium</span>
        </p>
        <div class="pricebox">
            <span id="pricenow">
                R$&nbsp;120,00
            </span>
        </div>
        <div class="cupombox">
            <p id="cupomidtext"> Cupom:
                <span id="cupomid">

                </span>
            </p>
        </div>
        <div class="store-logo">
            <img src="assets/logos/magalu.png" alt="magalu" id="store-logo">
        </div>

    </div>
</a>
 <!--PRODUTO--> `;


/*DADOS DA PÁGINA INICIAL*/

produto = diaboverde  + feminiWhey + creatinaProbiotica + lovelyhair;

let mainpage = document.createElement('div');
mainpage.innerHTML = produto;
document.getElementById('content').appendChild(mainpage);




/*Data footer*/
const ano = document.getElementById("ano");
const anoAtual = new Date();

ano.innerHTML = anoAtual.getFullYear();
