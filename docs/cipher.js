window.cipher = {
  
  encode: (number,letter) => {
    let result = " ";
   

   
     
      for(var i = 0; i < letter.length; i++){
      
      let codeAnsii = letter.charCodeAt(i);

      
      //codigo ansii para letras mayusculas 
      if(codeAnsii >= 65 && codeAnsii < 91) { 
      result += String.fromCharCode((codeAnsii - 65 + parseInt(number) % 26) + 65);
      //codigo ansii para letras minusculas
      
      } else if(codeAnsii >= 97 && codeAnsii< 123) { 
      result += String.fromCharCode((codeAnsii -97 + parseInt(number) % 26) + 97);
      //codigo ansii para las demas
              } else { 
                result += String.fromCharCode(codeAnsii);
                          }
            
     }
 
     return result;
  },



  
  decode: (number,letter) => {
      let resultDecode = "";

      for(var i = 0; i < letter.length; i++){
      
      let newCodeAnsii = letter.charCodeAt(i);


      //codigo ansii para letras mayusculas 
      if(newCodeAnsii >= 65 && newCodeAnsii < 91) { 
      resultDecode += String.fromCharCode((newCodeAnsii -90 - parseInt(number))% 26 + 90);
      console.log("hola");
      //codigo ansii para letras minusculas
      
      } else if(newCodeAnsii >= 97 && newCodeAnsii < 123) { 
      resultDecode += String.fromCharCode((newCodeAnsii - 122 - parseInt(number)) % 26 + 122);
      //codigo ansii para las demas
              } else { 
                resultDecode += String.fromCharCode(newCodeAnsii);
                          }
            
       }
    
     
 
     return resultDecode;
}

}

//createcipherwithOffset