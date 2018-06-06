# Bubble Sort
> Se requiere implementar el método de burbuja para ordenar 
> un arreglo de cualquier longitud

```js

test(){
    let array = [9,2,6,3,8,5,3,7,1];
    let ordainedArray = bubbleSort(array);
}

bubbleSort(){
    if (!isEmptyArray(array) and isNumericArray(array)){
        for(i=1; i<array.length; i++){
            let stop = array.length - i;
            for(j=0; j<stop; j++){
                let current = array[j];
                if(array[j] > array[j+1]){
                    array[j] = array[j+1];
                    array[j+1] = current;
                }
            }
        }
    }
}

// Test one
isEmptyArray(array){
 if(array == null){
    return testFailed("The array is null")
 }
 if(array.length < 1){
    return testFailed("The array isEmpty")
 }
}
//Test Two 
isNumericArray(array){
 for(element in  array){
  if (isNotNumber(element)){
    return testFailed("The array contains a not number element")
  }
 }
 
 
 
 //to be continue...
}