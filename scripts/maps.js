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
        "ceritos-avulsum", "heritos-eyoztum", "xurites-ataglos", "xuros-eyoztum", "xuyitos-aioblos","xynitos-obursum",
        "xynos-oyogam", "xouitos-aeoilos", "xoritos-osayam","",
        
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
                });
                sugestoesLista.appendChild(item);
            });
        }
    }


    inputMapa.addEventListener("input", debounce(mostrarSugestoes, 300));


    inputMapa.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            event.preventDefault();
            let nomeMapa = this.value.trim();
            if (nomeMapa !== "") {
                let imagemContainer = document.getElementById("imagemContainer");
                imagemContainer.innerHTML = `
                    <div class="box__imagem__mapa">
                        <h2 class="nomeDoMapa">${nomeMapa}</h2>
                        <img src="./src/assets/maps/${nomeMapa}.png" alt="Mapa ${nomeMapa}" class="imagem-mapa">
                    </div>
                `;
                sugestoesLista.innerHTML = ""; 
            }
        }
    });
});
