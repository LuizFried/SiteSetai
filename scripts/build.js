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
