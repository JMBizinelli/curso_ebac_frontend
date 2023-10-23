const form = document.getElementById('formulario');
const numeroAInput = document.getElementById('numeroA');
const numeroBInput = document.getElementById('numeroB');

form.addEventListener("submit", (event) => {
    event.preventDefault();

    
if (numeroAInput.value < numeroBInput.value){
    alert("Tudo certo!");
}
else {
    alert("Erro!")
}
    
});

