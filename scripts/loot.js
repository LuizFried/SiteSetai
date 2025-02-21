document.getElementById('lootID').addEventListener('click', function() {
    document.getElementById('conteudoID').innerHTML = `
        <a href="#" onclick="location.reload(); return false;">
            <i class="fa-solid fa-arrow-left"></i>
        </a>
        <div class="loot__tittle">
            <h1 class="titulo__loot">LOOT SPLIT</h1>
        </div>

        <form class="loot__form" id="lootForm">
            <label>Qtd.Baús :</label>
            <input class="input__number" type="number" placeholder="Número de baús" name="lootNumber" id="lootNumber" required>
        </form>
        `;   
        document.getElementById('lootForm').addEventListener('submit', function(event) {
            event.preventDefault();})
        let lootNumber = document.getElementById('lootNumber').value;

});