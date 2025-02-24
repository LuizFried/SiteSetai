document.getElementById('lootID').addEventListener('click', function() {
    document.getElementById('conteudoID').innerHTML = `
        <a href="#" onclick="location.reload(); return false;">
            <i class="fa-solid fa-arrow-left"></i>
        </a>
        <div class="loot__tittle">
            <h1 class="titulo__loot">LOOT SPLIT</h1>
        </div>

        <form class="loot__form" id="lootForm">
            <label for="lootNumber">Qtd. Baús:</label>
            <input class="input__number" type="number" placeholder="Número de baús" name="lootNumber" id="lootNumber" required>
            <button type="button" id="generateFields">Gerar Campos</button>
            <div id="fieldsContainer"></div>
            <button type="submit">Enviar</button>
        </form>
    `;  

    document.getElementById('generateFields').addEventListener('click', function() {
        let lootNumber = document.getElementById('lootNumber').value;
        let fieldsContainer = document.getElementById('fieldsContainer');
        
        
        fieldsContainer.innerHTML = '';

       
        let count = parseInt(lootNumber);
        if (isNaN(count) || count <= 0) {
            alert("Digite um número válido maior que zero.");
            return;
        }

        
        for (let i = 1; i <= count; i++) {
            let inputField = document.createElement("input");
            inputField.type = "text";
            inputField.name = `lootItem${i}`;
            inputField.placeholder = `Item ${i}`;
            inputField.classList.add("input__dynamic");
            
            fieldsContainer.appendChild(inputField);
            fieldsContainer.appendChild(document.createElement("br")); 
        }
    });

    document.getElementById('lootForm').addEventListener('submit', function(event) {
        event.preventDefault();

        let fields = document.querySelectorAll(".input__dynamic");
        let data = [];

        fields.forEach(field => {
            data.push(field.value);
        });

        console.log("Itens preenchidos:", data);
        alert("Itens preenchidos: " + data.join(", "));
    });
});
