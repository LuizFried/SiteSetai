document.getElementById("buildsID").addEventListener("click", function() {
    document.getElementById("conteudoID").innerHTML =`
    <a href="#" onclick="location.reload(); return false;">
        <i class="fa-solid fa-arrow-left"></i>
    </a>
    <div class="conteudo__builds">
        <h1 class="titulo__builds">AVALON</h1>
        <span class="builds">
            <a class="button__builds" href="./src/assets/builds/SetaiPressAvalon.png" target="_blank">PRESS 1</a>
            <a class="button__builds" href="./src/assets/builds/SetaiPressAvalon2.png" target="_blank">PRESS 2</a>
            <a class="button__builds" href="./src/assets/buildcait/cait1.jpg" target="_blank">CAIT 1</a>
            <a class="button__builds" href="./src/assets/buildcait/cait2.jpg" target="_blank">CAIT 2</a>
            <a class="button__builds" href="./src/assets/buildpve/pve1.jpg" target="_blank">PVE 1</a>
            <a class="button__builds" href="./src/assets/buildpve/pve2.jpg" target="_blank">PVE 2</a>
            <a class="button__builds" href="./src/assets/buildpve/pve3.jpg" target="_blank">PVE 3</a>
        </span>

        <h1 class="titulo__builds">ZVZ</h1>
        <span class="builds">
            <a class="button__builds" href="./src/assets/builds/tanker.png" target="_blank">TANK</a>
            <a class="button__builds" href="./src/assets/builds/healer.png" target="_blank">HEALER</a>
            <a class="button__builds" href="./src/assets/builds/sup.png" target="_blank">SUP</a>
            <a class="button__builds" href="./src/assets/builds/dps.png" target="_blank">DPS</a>
            <a class="button__builds" href="./src/assets/builds/debuff.png" target="_blank">DEBUFF</a>
        </span>

       
    </div>
  
    
    `});