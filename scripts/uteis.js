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
                <ul class="ul_links">
                    <li>-Estatísticas de Combate</li>
                    <li>-Análise de Guildas</li>
                    <li>-Ranking de Jogadores</li>
                    <li>-Gráficos Interativos</li>
                    <li>-Relatórios Detalhados</li>
                </ul>
            </a>
        </span>

        <span class="span_grind">
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

        <span class="span_murder">
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

        <footer class="footer__uteis">Os links disponibilizados nesta página são de responsabilidade exclusiva de terceiros e não possuem qualquer vínculo oficial com o clã Setai.</footer>

    </div>`;
});
