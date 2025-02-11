document.getElementById("staffID").addEventListener("click", function() {
    document.getElementById("conteudoID").innerHTML =`
    <a href="#" onclick="location.reload(); return false;"><i class="fa-solid fa-arrow-left"></i></a>
    <h1 class="titulo__staff">STAFF</h1>
    <div class="box__staff">
        <div class="staff">
            <img class="img__staff" src="./src/assets/staff/perga.jpg" alt="Foto do staff">
            <h1 class="nome__staff">Yperga</h1>
            
        </div>

        <div class="staff">
            <img class="img__staff" src="" alt="Foto do staff">
            <h1 class="nome__staff">Marialice</h1>
            
        </div>

        <div class="staff">
            <img class="img__staff" src="./src/assets/staff/douglasmarvado.jpg" alt="Foto do staff">
            <h1 class="nome__staff">DouglasMarvado</h1>
            
        </div>

        <div class="staff">
            <img class="img__staff" src="./src/assets/staff/batzovo.jpg" alt="Foto do staff">
            <h1 class="nome__staff">BatzOvo</h1>
            
        </div>



        
    </div>`;
});