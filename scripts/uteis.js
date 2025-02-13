document.getElementById("utilidadesID").addEventListener("click", function() {
    document.getElementById("conteudoID").innerHTML = `
    <a href="#" onclick="location.reload(); return false;">
        <i class="fa-solid fa-arrow-left"></i>
    </a>
    <h1 class="titulo__uteis">LINKS ÚTEIS</h1>
    <div class="box__uteis">

        <span class="span_analitics">
            <a href="https://triky313.github.io/AlbionOnline-StatisticsAnalysis/" target="_blank" id="analitics">
                <h3>Statistics Analysis</h3>
                <i class="fa-solid fa-chart-pie"></i>
            </a>
        </span>

        <span class="span_grind">
            <a href="https://albiononlinegrind.com" target="_blank" id="grind">
                <h3>Albion Online Grind</h3>
                <i class="fa-solid fa-sitemap"></i>
            </a>
        </span>

        <footer class="footer__uteis">Os links disponibilizados nesta página são de responsabilidade exclusiva de terceiros e não possuem qualquer vínculo oficial com o clã Setai.</footer>

    </div>`;
});
