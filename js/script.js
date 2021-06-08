/* DRAG & DROP. Funcion:Coger el producto y mover. Creamos el evento de los elementos draggables */
function drag(ev){
    ev.dataTransfer.setData("imagen",ev.target.id);
}

/* DRAG & DROP. Funcion: Dejar el producto */

function allowDrop (ev) {
    ev.preventDefault ();
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("imagen");
    ev.target.appendChild(document.getElementById(data));
precio(data);
}

function precio(r) {
r.value
document.getElementById("x").value;
}



var identf = ""
function setId(id){
    alert(id);
    document.getElementById("demo").innerHTML += "Clicked!<br>";

    alert(etiqueta.value);
    alert(etiqueta.id);
    document.getElementById("demo").innerHTML += "Clicked!<br>";
}

// Vamos a hacer variables para nuestros elementos


// Le das dentro de la cesta a COMPRAR y te devuelve un alerta diciendo lo que vale tu compra
document.getElementById("myBtn").addEventListener("click", myFunction);
    function myFunction() {
      alert ("El precio total de su compra es:");
}

// Para añadir elementos en la tienda. Acción: click en compra y se añade con el id-demo
document.getElementById(identf).addEventListener("click", mySecondFunction);

function mySecondFunction() {
    alert("HOLA MUNDO");
    // document.getElementById("demo").innerHTML = "Clicked!<br>";
  }

  