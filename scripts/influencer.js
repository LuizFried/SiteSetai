document.getElementById("influencerID").addEventListener("click", function() {
    document.getElementById("conteudoID").innerHTML =`
    <a href="#" onclick="location.reload(); return false;"><i class="fa-solid fa-arrow-left"></i></a>
    <h1 class="titulo__influencer">INFLUENCER</h1>
    <div class="box__influencer">
        <div class="influencer">
            <img class="img__influencer" src="./src/assets/influencer/turmadobatz.png" alt="Foto do influencer">
            <h1 class="nome__influencer">BatzOvo</h1>
            <span class="span__ancora__link">
                <a class="ancora__link" href="https://www.twitch.tv/turmadobatz" target="blank"><i class="fa-brands fa-twitch"></i></a>
                <a class="ancora__link" href="https://www.youtube.com/@PanelaAlbina" target="blank"><i class="fa-brands fa-youtube"></i></a>
            </span>
        </div>

        
    </div>`;
});