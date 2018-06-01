Este es el Codigo Cesar, basado en el codigo utilizado por Julio Cesar para cifrar sus mensajes.
La aplicacion se puede descargar desde la pagina web: https://github.com/isabelavp/scl-2018-05-bc-core-am
Se instala con un editor de texto, en este caso utilice Sublime Text.
La aplicacion se ejecuta de la siguiente manera:

Pasos para cifrar un Mensaje:

1) Se debe colocar una llave en la caja de key(color gris) esta llave debe ser un numero del 0(cero) al 25(veinticinco).
2) Se escribe el mensaje que se quiere cifrar el el cuadro de texto que dice "Escribe el Mensaje a Cifrar".
3) Click en el boton "Cifrar".
4) Aparecera el mensaje cifrado en el cuadro de texto que dice "Tu Mensaje"
5) Para cifrar otro mensaje debes limpiar el cuadro de texto con el boton "Clear".

Pasos para decifrar un Mensaje:

1) Se debe colocar una llave en la caja de key(color gris) esta llave debe ser un numero del 0(cero) al 25(veinticinco) que previamente te envio quien te mando el mensaje cifrado.
2) Se escribe el mensaje que se quiere decifrar el el cuadro de texto que dice "Escribe el Mensaje a decifrar".
3) Click en el boton "decifrar".
4) Aparecera el mensaje decifrado en el cuadro de texto que dice "Tu Mensaje"
5) Para cifrar otro mensaje debes limpiar el cuadro de texto con el boton "Clear".


Funcionalidad:
Se creo la función window.chiper donde se utilizaron los Métodos encode y decode para cifrar y descifrar el mensaje usando en ambas una key(offset) y un letter(String), en ambas se aplico una función condicional con los numeros ansii para letras mayusculas (65-90) y para letras minusculas(97-122) y para los demas caracteres.

Se conectaron las funciones encode y decode  los botones cifrar y descifrar, junto con la caja key utilizando Métodos de getElementById y el addEventListener que estaban dentro de la función window.onload.

Se creo un boton de limpieza de las cajas de texto, el cual se añadio a la función window.onload.



Diseño de Aplicacion:
Se utilizaron Grid para separar el header y las filas de los cuadros de texto, se utilizo col-12 para el header y col-6 para separar los cuadros de texto.

Se utilizo una clase container para que pueda abarcar todo el ancho de la pagina sin importar el tamaño de esta.


