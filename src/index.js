window.onload = () => {

    
    const butEncode = document.getElementById("butEncode");

    butEncode.addEventListener("click", () => {
     let letter = document.getElementById("boxTextEncode").value;
     let num = document.getElementById("key").value;
     let result = window.cipher.encode(num,letter);
          document.getElementById("boxTextTwo").innerHTML = result;
    });
     

    const butDecode = document.getElementById("butDecode");

    butDecode.addEventListener("click", () => {
     let letter = document.getElementById("boxTextDecode").value;
     let num = document.getElementById("key").value;
     let result = window.cipher.decode(num,letter);
          document.getElementById("boxTextTwo").innerHTML = result;

    });
    
    const butClear = document.getElementById('butClear');

    butClear.addEventListener("click", () => {
        document.getElementById('boxTextEncode').value = '';
        document.getElementById('boxTextDecode').value = '';
        document.getElementById('boxTextTwo').value = '';
        document.getElementById("key").value = 0;
    }); 

}