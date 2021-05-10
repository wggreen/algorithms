let arr = [12, 11, 13, 5, 6];
let n = arr.length;

function insertionSort(arr, arrayLength) {
    let currentIndex, currentElement, predecessorIndex;
    for (currentIndex = 1; currentIndex < arrayLength; currentIndex++) {
        currentElement = arr[currentIndex];
        predecessorIndex = currentIndex - 1;
        console.log("The array is", arr)
        console.log("")
        console.log("The current index is", currentIndex)
        console.log("The current element is", currentElement)
        console.log("The predecessor index is", predecessorIndex)
        console.log("The predecessor element is", arr[predecessorIndex])
        console.log("")

        if (predecessorIndex >= 0 && arr[predecessorIndex] < currentElement) {
            console.log(arr[predecessorIndex], "is not larger than", currentElement)
            console.log("")
        }

        /* Move elements of arr[0..currentIndex-1], that are 
        greater than currentElement, to one position ahead 
        of their current position */
        while (predecessorIndex >= 0 && arr[predecessorIndex] > currentElement) {
            console.log("The current array order is", arr)
            console.log("")
            console.log("The current index is", currentIndex)
            console.log("The current element is", currentElement)
            console.log("The predecessor index is", predecessorIndex)
            console.log("The predecessor element is", arr[predecessorIndex])
            console.log("")
            console.log(arr[predecessorIndex], "is greater than", currentElement)
            console.log(arr[predecessorIndex], "will be inserted at index", predecessorIndex + 1)
            console.log("")
            arr[predecessorIndex + 1] = arr[predecessorIndex];
            console.log("The new array order is", arr)
            predecessorIndex = predecessorIndex - 1;
            console.log(currentElement, "will be moved and replace the element at index", predecessorIndex + 1, "if nothing preceding it is larger")
            console.log("")
        }
        arr[predecessorIndex + 1] = currentElement;
        console.log("The new array order is", arr)
        console.log("")
    }
}

insertionSort(arr, n);