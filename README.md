# ARSW-Lab5
# Parte I - Ajustes Backend

1. Trabaje sobre la base del proyecto anterior una vez solucionado (REST-API Cinema).
2. Incluya dentro de las dependencias de Maven los 'webjars' de jQuery y Bootstrap (esto permite tener localmente dichas librerías de JavaScript al momento de construír el proyecto)

# Parte II - Front-End - Vistas

1. Cree el directorio donde residirá la aplicación JavaScript. Como se está usando SpringBoot, la ruta para poner en el mismo contenido estático (páginas Web estáticas, aplicaciones HTML5/JS, etc) es: src/main/resources/static
2. Cree, en el directorio anterior, la página index.html, sólo con lo básico: título, campo para la captura del nombre del cine, un campo de captura tipo fecha, botón de 'Get Functions', campodonde se mostrará el nombre del cine seleccionado, la tabla HTML donde se mostrará el listado de funciones (con sólo los encabezados). Recuerde asociarle identificadores a dichos componentes para facilitar su búsqueda mediante selectores.
3. En el elemento <head> de la página, agregue las referencia a las librerías de jQuery, Bootstrap y a la hoja de estilos de Bootstrap.
4. Suba la aplicación (mvn spring-boot:run), y rectifique:
  
1. Que la página sea accesible desde: http://localhost:8080/index.html
2. Al abrir la consola de desarrollador del navegador, NO deben aparecer mensajes de error 404 (es decir, que las librerías de JavaScript se cargaron correctamente).
![](https://github.com/juancamilo399/ARSW-Lab5/blob/master/CINEMA%20II/img/parte2index.PNG)

# Parte III - Front-End - Lógica

1. Ahora, va a crear un Módulo JavaScript que, a manera de controlador, mantenga los estados y ofrezca las operaciones requeridas por la vista. Para esto tenga en cuenta el patrón modulo de JavaScript, y cree un módulo en la ruta static/js/app.js .
2. Copie el módulo provisto (apimock.js) en la misma ruta del módulo antes creado. En éste agréguele más planos (con más puntos) a los autores 'quemados' en el código.
3. Agregue la importación de los dos nuevos módulos a la página HTML (después de las importaciones de las librerías de jQuery y Bootstrap).
4. Haga que el módulo antes creado mantenga de forma privada:
a. El nombre del cine seleccionado.
b. La fecha de las funciones a consultar
c. El listado de nombre, género y hora de las películas de las funciones del cine seleccionado. Es decir, una lista objetos, donde cada objeto tendrá tres propiedades: nombre de la película, género de la misma y hora de la función.
Junto con dos operaciones públicas, una que permita cambiar el nombre del cinema actualmente seleccionado y otra que permita cambiar la fecha.
5. Agregue al módulo 'app.js' una operación pública que permita actualizar el listado de las funciones,esto, a partir del nombre del cine y la fecha de la función (dados como parámetro). Para hacerlo, dicha operación debe invocar la operación 'getFunctionsByCinemaAndDate' del módulo 'apimock' provisto, enviándole como callback una función que:
a. Tome el listado de las funciones, y le aplique una función 'map' que convierta sus elementos a objetos con: el nombre, el género de la película y la hora de la función.
b. Sobre el listado resultante, haga otro 'map', que tome cada uno de estos elementos, y a través de jQuery agregue un elemento <tr> (con los respectvos <td>) a la tabla creada en el punto 4. Tenga en cuenta los selectores de jQuery y los tutoriales disponibles en línea. Por ahora no agregue botones a las filas generadas.
6. Asocie la operación antes creada (la de app.js) al evento 'on-click' del botón de consulta de la página.
7. Verifique el funcionamiento de la aplicación. Inicie el servidor, abra la aplicación HTML5/JavaScript, y rectifique que al ingresar un cine existente, y una fecha en donde estén agendadas funciones, se cargue el listado de funciones del mismo.
![](https://github.com/juancamilo399/ARSW-Lab5/blob/master/CINEMA%20II/img/parte2funcionamiento.PNG)
