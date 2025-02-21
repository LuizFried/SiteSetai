document.getElementById("mapsID").addEventListener("click", function() {
    document.getElementById("conteudoID").innerHTML = `
        <a href="#" onclick="location.reload(); return false;">
            <i class="fa-solid fa-arrow-left"></i>
        </a>
        <div class="box__input__mapa">
            <input type="text" id="mapa" class="mapa" placeholder="Digite o nome do mapa">
            <ul id="sugestoes" class="sugestoes-lista"></ul>
        </div>
        <div id="imagemContainer"></div>
    `;

    const listaMapas = [
        "ceritos-avulsum", "heritos-eyoztum", "xurites-ataglos", "xuros-eyoztum", "xuyitos-aioblos", "xynitos-obursum",
        "xynos-oyogam", "xouitos-aeoilos", "xoritos-osayam", "hieos-aiigaum", "quantun-et-odetum", "sasitos-oyarlum",
        "sasitos-ugersum", "settun-in-nusis", "souos-umogaum", "turitos-atlatos","xasos-aeoilos","xasos-aoemaum",
        "xasos-oneulum", "xebitos-oyogam", "xebos-emimsum", "xebos-exostum", "xerites-oxoulum", "xetitos-emimsum",
        "xiles-aiavlum","xilitos-aoemaum","xilos-osayam","xiros-aiairom" ,"xoritos-alairom","xoritos-exosrum",
        "fynitos-egoisum", "hasitos-avaolum", "hasitos-umayaum", "hieos-avaolum", "secent-al-nutum", "xetitos-oneulum",
         "xouos-aioblos", ""
    ];

    const inputMapa = document.getElementById("mapa");
    const sugestoesLista = document.getElementById("sugestoes");

    function debounce(func, delay) {
        let timeout;
        return function (...args) {
            clearTimeout(timeout);
            timeout = setTimeout(() => func.apply(this, args), delay);
        };
    }

    function mostrarSugestoes() {
        let termo = inputMapa.value.toLowerCase().trim();
        sugestoesLista.innerHTML = ""; 

        if (termo.length > 0) {
            let sugestoesFiltradas = listaMapas
                .filter(mapa => mapa.toLowerCase().includes(termo)) 
                .slice(0, 10); 

            sugestoesFiltradas.forEach(mapa => {
                let item = document.createElement("li");
                item.textContent = mapa;
                item.addEventListener("click", function() {
                    inputMapa.value = mapa;
                    sugestoesLista.innerHTML = ""; 
                    sugestoesLista.style.display = "none";
                    exibirImagem(mapa);
                });
                sugestoesLista.appendChild(item);
            });
            sugestoesLista.style.display = "block"; 
        } else {
            sugestoesLista.style.display = "none"; 
        }
    }

    function exibirImagem(nomeMapa) {
        let imagemContainer = document.getElementById("imagemContainer");
        imagemContainer.innerHTML = `
            <div class="box__imagem__mapa">
                <h2 class="nomeDoMapa">${nomeMapa}</h2>
                <img src="./src/assets/maps/${nomeMapa}.png" alt="Mapa ${nomeMapa}" class="imagem-mapa" 
                     onerror="this.onerror=null; this.src='./src/assets/maps/mapa-nao-encontrado.png'; document.getElementById('erroMensagem').style.display='block';">
                <p id="erroMensagem" style="display: none; color: red; text-align: center;">
                    Imagem não encontrada. Certifique-se de que o nome do mapa está correto. 
                    Se o erro persistir, tire um print do mapa para que ele possa ser adicionado e envie para um administrador da Setai.
                </p>
            </div>
        `;
    }

    inputMapa.addEventListener("input", debounce(mostrarSugestoes, 300));

    inputMapa.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            event.preventDefault();
            let nomeMapa = this.value.trim();
            if (nomeMapa !== "") {
                exibirImagem(nomeMapa);
                sugestoesLista.innerHTML = ""; 
                sugestoesLista.style.display = "none"; 
            }
        }
    });

    inputMapa.addEventListener("blur", function() {
        setTimeout(() => {
            sugestoesLista.style.display = "none"; 
        }, 200);
    });
});
