## Prueba de aptitudes #15
La siguiente es una prueba que tiene como objetivo conocer el nivel de abstracción, lógica, investigación, recursividad y velocidad de aprendizaje del aplicante. La prueba no tiene como objetivo asustarlo, todo lo contrario: está diseñada para medir su nivel de curiosidad y su pasión por la tecnología.
Realice un algoritmo que encuentre palabras en una sopa de letras en el lenguaje de su elección. Dada una matriz de dos dimensiones y una lista de palabras liste la ubicación en la matriz de cada una de las letras en cada palabra.
Cada palabra debe ser construida de letras inmediatamente adyacentes ya sea horizontal o verticalmente, la misma letra solo puede ser usada 1 vez para la misma palabra pero puede ser usada múltiples veces para diferentes palabras. El orden alfabético de las palabras debe seguir las reglas del español (de izquierda a derecha o de arriba a abajo).
La matriz es ingresada como un arreglo de textos donde cada string representa una fila de la matriz y las letras están separadas por espacios. (ej.: [“S O L”, “U N O”, “N U T”])
Las palabras a buscar son ingresadas como un arreglo de textos. (ej.: [“SUN”, “SOL”, “LOT”, “ONU”, “RAY”])

Las reglas del juego son:
1. Imprima solo la primera ocurrencia de la palabra
2. Solo debe buscar palabras que se encuentran en la misma fila o columna
3. Si no encuentra una palabra debe indicarlo

### Aclaración
- No debe realizar ninguna interfaz gráfica, solo debe realizar una función que imprime en consola cada iteración del juego
    * Debe imprimir siguiendo el formato X - [R, C]
        - Donde X es la letra encontrada
        - R es la posición en fila de la matriz
        - C es la posición en la columna de la matriz
- La matriz y palabras a buscar serán modificadas por el evaluador, debe soportar cualquier texto (de letras) de entrada y matriz de cualquier dimensión.

### Ejemplo 
 Con la siguiente sopa de letras [‘S O L’, ‘U N O’, ‘N U T’]
'S O L' 'U N O' 'N U T'
La búsqueda de las palabras “SUN”, “SOL”, “LOT”, “ONU” y “RAY” imprime en consola lo siguiente:
1. Searching “SUN”
2. S-[0,0]
3. U-[1,0]
4. N-[2,0]
5. Searching “SOL”
6. S-[0,0]
7. O-[0,1]
8. L-[0,2]
9. Searching “LOT”
10. L - [0, 2]
11. O - [1, 2]
12. T - [2, 2]
13. Searching “ONU”
14. O - [0, 1]
15. N - [1, 1]
16. U - [2, 1]
17. Serching “RAY”
18. “RAY” Not found

Cabe anotar que la palabra “SUN” podría encontrarse en las posiciones S - [0, 0], U - [1, 0], y N - [1, 1] pero estás no siguen el orden lógico del español (izquierda a derecha o arriba a abajo) por cual sería invalida.

### Bonus
1. Modifique el algoritmo para que pueda identificar palabras en diagonales
2. Modifique el algoritmo para que imprima todas las ocurrencias de la misma palabra
3. Implemente el código en Apex el lenguaje de Salesforce
a. Solicite a su evaluador un ambiente de prueba para desarrollar el código
4. Modifique el algoritmo para busque todas las posible palabras existentes usando un API
de diccionario (ej.: Free Dictionary API)

### Recuerde  
1. Realice el juego que imprime en consola en su lenguaje de preferencia
2. Documentar el código realizado
3. Indicar en el readme como ejecutar la aplicación
4. Realizar el juego en Salesforce Apex en el Developer Console
5. Use el Log Inspector para ver la ejecución en apex
a. Recuerde activar el checkmark “Debug Only” para ver solo los debugs a consola