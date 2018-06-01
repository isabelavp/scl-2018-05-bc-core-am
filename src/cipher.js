window.cipher = {
	
  encode: (offset,letter) => {
    let result = "";
   

   
     
    for(var i = 0; i < letter.length; i++){
    	
    	let codeAnsii = letter.charCodeAt(i);

    	
    	//codigo ansii para letras mayusculas 
    	if(codeAnsii >= 65 && codeAnsii < 91) { 
    	result += String.fromCharCode((codeAnsii - 65 + parseInt(offset) % 26) + 65);
    	//codigo ansii para letras minusculas
    	
    	} else if(codeAnsii >= 97 && codeAnsii< 123) { 
    	result += String.fromCharCode((codeAnsii -97 + parseInt(offset) % 26) + 97);
    	//codigo ansii para las demas
    	        } else { 
    	        	result += String.fromCharCode(codeAnsii);
    	           	        }
    	      
     }
 
     return result;
  } 

	
  decode: (offset,letter) => {
    	let result = "";

         for(var i = 0; i < letter.length; i++){
    	
    	let codeAnsii = letter(i).CharCodeAt();


    	//codigo ansii para letras mayusculas 
    	if(codeAnsii >= 65 && codeAnsii < 91) { 
    	result += String.fromCharCode(codeAnsii - parseInt(offset));
    	//codigo ansii para letras minusculas
    	
    	} else if(codeAnsii >= 97 && codeAnsii< 123) { 
    	result += String.CharCode(codeAnsii - parseInt(offset));
    	//codigo ansii para las demas
    	        } else { 
    	        	result += String.fromCharCode(codeAnsii);
    	           	        }
    	      
       }
     
 
     return result;
  }
}
