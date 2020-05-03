# Chrome DevTools

Chrome DevTools es un conjunto de herramientas de creación web y depuración integrado en Google Chrome. Usa DevTools para iterar y depurar tu sitio, y para crear un perfil de él.

## Gathering Scattered Objects

Esta página muestra cómo se puede evaluar una visión general del espacio ocupado por los objetos del mismo tipo utilizando Heap Profiler [demo](https://developer.chrome.com/devtools/docs/heap-profiling-summary).
![memory](https://raw.githubusercontent.com/velazquezsys/course-batch-3/tools/velazquezsys/web_tools/images/memory1.jpg)


## Verifying Action Cleanness
En este ejemplo se muestra como verificar la limpieza de la acción con Heap Profiler. Por limpieza, queremos decir que después de iniciar y completar (o cancelar) la acción, no queda basura. Si una acción deja basura, múltiples invocaciones de ella pueden provocar un uso excesivo de la memoria [demo](https://developer.chrome.com/devtools/docs/heap-profiling-comparison).
![enter image description here](https://raw.githubusercontent.com/velazquezsys/course-batch-3/tools/velazquezsys/web_tools/images/memory2.jpg)

## Uncovering DOM Leaks
La siguiente captura, muestra como se puede descubrir la fuga de nodos DOM utilizando Heap Profiler [demo](https://developer.chrome.com/devtools/docs/heap-profiling-dom-leaks).
![enter image description here](https://raw.githubusercontent.com/velazquezsys/course-batch-3/tools/velazquezsys/web_tools/images/memory3.jpg)
