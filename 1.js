"use strict"

var items = [34, 87, 3, 15, 371]
function swap(items, firstIndex, secondIndex){
    var temp = items[firstIndex];
    items[firstIndex] = items[secondIndex];
    items[secondIndex] = temp;
}
function middlePort(items, left, right) {
    var middle = items[Math.floor((right + left) / 2)],
        i = left, 
        j = right;
    while (i <= j) {
        while (items[i] < middle) {
            i++;
        }
        while (items[j] > middle) {
            j--;
        }
        if (i <= j) {
            swap(items, i, j);
            i++;
            j--;
        }
    }
    return i;
}
function quickSort(items, left, right) {
    var index;
    if (items.length > 1) {
        index = middlePort(items, left, right);
        if (left < index - 1) {
            quickSort(items, left, index - 1);
        }
        if (index < right) {
            quickSort(items, index, right);
        }
    }
    return items;
}
var result = quickSort(items, 0, items.length - 1);
console.log(items);