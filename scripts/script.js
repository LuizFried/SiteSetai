/*MODAL*/ 

document.addEventListener('DOMContentLoaded', function() {
    
    var modal = document.getElementById("videoModal");
    var btn = document.getElementById("image__recrut");
    var span = document.getElementsByClassName("close")[0];
    var iframe = document.querySelector(".modal-content iframe");

    btn.onclick = function() {
        modal.style.display = "block";
    }

    span.onclick = function() {
        modal.style.display = "none";
        stopVideo(iframe);
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
            stopVideo(iframe);
        }
    }

    function stopVideo(iframe) {
        var iframeSrc = iframe.src;
        iframe.src = iframeSrc;
    }
});


/*BUILDS*/ 

document.getElementById("buildsID").addEventListener("click", function () {
    document.getElementById("conteudoID").innerHTML = `
    <a href="#" onclick="location.reload(); return false;">
        <i class="fa-solid fa-arrow-left"></i>
    </a>
    <div class="conteudo__builds">
        <h1 class="titulo__builds">AVALON</h1>
        <span class="builds">
            <a class="button__builds" href="./src/assets/builds/SetaiPressAvalon.png" target="blank" data-img="./src/assets/builds/SetaiPressAvalon.png">PRESS 1</a>
            <a class="button__builds" href="./src/assets/builds/SetaiPressAvalon2.png" target="blank" data-img="./src/assets/builds/SetaiPressAvalon2.png">PRESS 2</a>
            <a class="button__builds" href="./src/assets/buildcait/cait1.jpg" target="blank" data-img="./src/assets/buildcait/cait1.jpg">CAIT 1</a>
            <a class="button__builds" href="./src/assets/buildcait/cait2.jpg" target="blank" data-img="./src/assets/buildcait/cait2.jpg">CAIT 2</a>
            <a class="button__builds" href="./src/assets/buildpve/pve1.jpg" target="blank" data-img="./src/assets/buildpve/pve1.jpg">PVE 1</a>
            <a class="button__builds" href="./src/assets/buildpve/pve2.jpg" target="blank" data-img="./src/assets/buildpve/pve2.jpg">PVE 2</a>
            <a class="button__builds" href="./src/assets/buildpve/pve3.jpg" target="blank" data-img="./src/assets/buildpve/pve3.jpg">PVE 3</a>
        </span>
        
        <h1 class="titulo__builds">ZVZ</h1>
        <span class="builds">
            <a class="button__builds" href="./src/assets/builds/tanker.png" target="blank" data-img="./src/assets/builds/tanker.png">TANK</a>
            <a class="button__builds" href="./src/assets/builds/healer.png" target="blank" data-img="./src/assets/builds/healer.png">HEALER</a>
            <a class="button__builds" href="./src/assets/builds/sup.png" target="blank" data-img="./src/assets/builds/sup.png">SUP</a>
            <a class="button__builds" href="./src/assets/builds/dps.png" target="blank" data-img="./src/assets/builds/dps.png">DPS</a>
            <a class="button__builds" href="./src/assets/builds/debuff.png" target="blank" data-img="./src/assets/builds/debuff.png">DEBUFF</a>
        </span>

        
        <div class="image-preview">
            <img id="preview-image" src="" alt="Pré-visualização">
        </div>
    </div>
    `;

    
    setTimeout(() => {
        const buttons = document.querySelectorAll(".button__builds");
        const previewImage = document.getElementById("preview-image");
        const previewBox = document.querySelector(".image-preview");

        buttons.forEach(button => {
            button.addEventListener("mouseover", function () {
                const imgSrc = this.getAttribute("data-img");
                previewImage.src = imgSrc;
                previewBox.style.display = "flex"; 
            });

            button.addEventListener("mouseout", function () {
                previewBox.style.display = "none"; 
            });
        });
    }, 100); 
});


/*MAPS*/


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
         "xouos-aioblos", "fieos-aiuttum", "firos-aiavam", "firos-ezatam", "firos-osinsum", "fonitos-amaurom",
          "fonos-oleraum", "foritos-aiaylos", "foros-egoisum", "fouitos-aiuttum", "fouos-agosaum", "fouos-amaurom",
           "furitos-aiavam", "fuyitos-ayiotum", "fynes-unavtum", "", "", "", "", ""
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



/*INFLUENCE*/


document.getElementById("influencerID").addEventListener("click", function() {
    document.getElementById("conteudoID").innerHTML =`
    <a href="#" onclick="location.reload(); return false;"><i class="fa-solid fa-arrow-left"></i></a>
    <h1 class="titulo__influencer">INFLUENCER</h1>
    <div class="box__influencer">
        <div class="influencer" id="batzovo">
            <img class="img__influencer" src="./src/assets/influencer/turmadobatz.png" alt="Foto do influencer">
            <h1 class="nome__influencer">BatzOvo</h1>
            <span class="span__ancora__link">
                <a href="https://www.twitch.tv/turmadobatz" target="blank"><i id="twitchID" class="fa-brands fa-twitch"></i></a>
                <a href="https://www.youtube.com/@PanelaAlbina" target="blank"><i id="youtubeID" class="fa-brands fa-youtube"></i></a>
                <a href="https://www.tiktok.com/@panelalbina" target="blank"><i id="tiktokID" class="fa-brands fa-tiktok"></i></a>
            </span>
        </div>

        <div class="influencer" id="marquesbr">
            <img class="img__influencer" src="./src/assets/influencer/marquesbr.jpg" alt="Foto do influencer">
            <h1 class="nome__influencer">M4rquesBR</h1>
            <span class="span__ancora__link">
                <a href="https://www.twitch.tv/m4rquesbr7" target="blank"><i id="twitchID" class="fa-brands fa-twitch"></i></a>
                <a href="https://www.youtube.com/@M4QUESBR" target="blank"><i id="youtubeID" class="fa-brands fa-youtube"></i></a>
            </span>
        </div>

        <div class="influencer" id="setai_br">
            <img class="img__influencer" src="./src/assets/newico.jpg" alt="Foto do influencer">
            <h1 class="nome__influencer">Setai_BR</h1>
            <span class="span__ancora__link">
                <a href="https://www.youtube.com/@SETAI_BR" target="blank"><i id="youtubeID" class="fa-brands fa-youtube"></i></a>
            </span>
        </div>


        
    </div>`;
});


/*UTEIS*/


document.getElementById("utilidadesID").addEventListener("click", function() {
    document.getElementById("conteudoID").innerHTML = `
    <a href="#" onclick="location.reload(); return false;">
        <i class="fa-solid fa-arrow-left"></i>
    </a>
    <h1 class="titulo__uteis">LINKS ÚTEIS</h1>
    <div class="box__uteis">

        <span class="span__analitics">
            <a href="https://triky313.github.io/AlbionOnline-StatisticsAnalysis/" target="_blank" id="analitics">
                <h3>Statistics Analysis</h3>
                <i class="fa-solid fa-chart-pie"></i>
                <ul class="ul_links">
                    <li>-Estatísticas de Combate</li>
                    <li>-Análise de Guildas</li>
                    <li>-Ranking de Jogadores</li>
                    <li>-Gráficos Interativos</li>
                    <li>-Relatórios Detalhados</li>
                </ul>
            </a>
        </span>

        <span class="span__grind">
            <a href="https://albiononlinegrind.com" target="_blank" id="grind">
                <h3>Albion Online Grind</h3>
                <i class="fa-solid fa-sitemap"></i>
                <ul class="ul_links">
                    <li>-Guias de Grind</li>
                    <li>-Dicas de Recursos</li>
                    <li>-Comparação de Equipamentos</li>
                    <li>-Rotas de Coleta</li>
                    <li>-Otimizando Habilidades</li>
                </ul>
            </a>
        </span>

        <span class="span__murder">
            <a href="https://murderledger.albiononline2d.com" target="_blank" id="murder">
                <h3>Murder Ledger</h3>
                <i class="fa-solid fa-book-skull"></i>
                <ul class="ul_links">
                    <li>-Rastrear mortes</li>
                    <li>-Analisar builds</li>
                    <li>-Ver rankings</li>
                    <li>-Consultar estatísticas</li>
                    <li>-Explorar clãs</li>
                </ul>
            </a>
        </span>

        <span class="span__cloud">
            <a href="https://developers.cloudflare.com/cloudflare-one/connections/connect-devices/warp/download-warp/" target="_blank" id="warp">
                <h3>Cloudflare Warp</h3>
                <i class="fa-solid fa-cloud"></i>
                <ul class="ul_links">
                    <li>-Proteção DDoS</li>
                    <li>-Latência Baixa</li>
                    <li>-DNS Rápido</li>
                    <li>-Segurança Reforçada</li>
                    <li>-Conexões Estáveis</li>
                </ul>
            </a>
        </span>

        <footer class="footer__uteis">Os links disponibilizados nesta página são de responsabilidade exclusiva de terceiros e não possuem qualquer vínculo oficial com o clã Setai.</footer>

    </div>`;
});



/*STAFF*/


    document.getElementById("staffID").addEventListener("click", function() {
        document.getElementById("conteudoID").innerHTML = `
        <a href="#" onclick="location.reload(); return false;">
            <i class="fa-solid fa-arrow-left"></i>
        </a>

        <h1 class="titulo__staff">STAFF</h1>

        <div class="box__staff">
            <div class="staff" id="YpergaID">
                <img class="img__staff" src="./src/assets/staff/perga.jpg" alt="Foto do staff">
                <h1 class="nome__staff">Yperga</h1>
                <p class="descricao__staff">
                    Yperga é um caller incansável e um verdadeiro revolucionário de Albion. Apesar dos ideais comunistas, ainda não conseguiu convencer os ricos da guilda a redistribuir os mamutes.
                </p>
            </div>

            <div class="staff" id="MariaID">
                <img class="img__staff" src="./src/assets/staff/marialice.jpg" alt="Foto do staff">
                <h1 class="nome__staff">Marialice</h1>
                <p class="descricao__staff">
                    Marialice, conhecido como o "Elon Musk do Nordeste", é um visionário empreendedor 
                    apaixonado por Albion e tartarugas. No entanto, o empreendedorismo e a preservação 
                    ambiental nem sempre caminham juntos.
                </p>
            </div>

            <div class="staff" id="DouglasID">
                <img class="img__staff" src="./src/assets/staff/douglasmarvado.jpg" alt="Foto do staff">
                <h1 class="nome__staff">DouglasMarvado</h1>
                <p class="descricao__staff">
                    DouglasMarvado, com seu faro investigativo, patrulha os mapas em busca de criminosos... ou pelo menos de um bom PvP. Só não procure por ele, porque a rua anda perigosa.
                </p>
            </div>

            <div class="staff" id="BatzID">
                <img class="img__staff" src="./src/assets/staff/batzovo.jpg" alt="Foto do staff">
                <h1 class="nome__staff">BatzOvo</h1>
                <p class="descricao__staff">
                    Conhecido como Menino-Mogli, é famoso por seu lobo, Chupa-Chupa. Apreciador de ervas naturais e de uma boa coquinha gelada.
                </p>
            </div>
        </div>

        <audio id="audioYperga" src="./src/assets/audios/yperga.mp3" preload="auto"></audio>
        <audio id="audioMaria" src="./src/assets/audios/maria.mp3" preload="auto"></audio>
        <audio id="audioDouglas" src="./src/assets/audios/douglas.mp3" preload="auto"></audio>
        <audio id="audioBatz" src="./src/assets/audios/batz.mp3" preload="auto"></audio>

        `;

        const ypergaElement = document.getElementById("YpergaID");
        const audioY = document.getElementById("audioYperga");
        audioY.volume = 0.02;
        audioY.load();

        ypergaElement.addEventListener("mouseenter", () => {
            audioY.currentTime = 2;
            audioY.play();
        });

        ypergaElement.addEventListener("mouseleave", () => {
            audioY.pause();
            audioY.currentTime = 2;
        });

                 //

        const mariaElement = document.getElementById("MariaID");
        const audioM = document.getElementById("audioMaria");
        audioM.volume = 0.02;
        audioM.load();

        mariaElement.addEventListener("mouseenter", () => {
            audioM.currentTime = 18;
            audioM.play();
        });

        mariaElement.addEventListener("mouseleave", () => {
            audioM.pause();
            audioM.currentTime = 18;
        });

        //

        const douglasElement = document.getElementById("DouglasID");
        const audioD = document.getElementById("audioDouglas");
        audioD.volume = 0.02;
        audioD.load();

        douglasElement.addEventListener("mouseenter", () => {
            audioD.currentTime = 0;
            audioD.play();
        });

        douglasElement.addEventListener("mouseleave", () => {
            audioD.pause();
            audioD.currentTime = 0;
        });

        //

        const batzElement = document.getElementById("BatzID");
        const audioB = document.getElementById("audioBatz");
        audioB.volume = 0.04;
        audioB.load();

        batzElement.addEventListener("mouseenter", () => {
            audioB.currentTime = 0;
            audioB.play();
        });

        batzElement.addEventListener("mouseleave", () => {
            audioB.pause();
            audioB.currentTime = 0;
        });
    });
