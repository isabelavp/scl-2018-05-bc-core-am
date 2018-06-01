window.onload = () => { //esta es la funcion de crear eventos con DOM

    
    const butEncode = document.getElementById("butEncode"); //variable const porque no se modifica, para boton de codigo

    butEncode.addEventListener("click", () => {  // uso de arrow function
     let letter = document.getElementById("boxTextEncode").value;
     let num = document.getElementById("key").value;
     let result = window.cipher.encode(num,letter);
          document.getElementById("boxTextTwo").innerHTML = result;
    });
     

    const butDecode = document.getElementById("butDecode"); //variable const porque no se modifica, para boton de decodificar


    butDecode.addEventListener("click", () => {  // uso de arrow function
     let letter = document.getElementById("boxTextDecode").value;
     let num = document.getElementById("key").value;
     let result = window.cipher.decode(num,letter);
          document.getElementById("boxTextTwo").innerHTML = result;

    });
    
    const butClear = document.getElementById('butClear');  //variable const porque no se modifica, para boton de limpieza


    butClear.addEventListener("click", () => {  // uso de arrow function
        document.getElementById('boxTextEncode').value = '';
        document.getElementById('boxTextDecode').value = '';
        document.getElementById('boxTextTwo').value = '';
        document.getElementById("key").value = 0;
    }); 

}