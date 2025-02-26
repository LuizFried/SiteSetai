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