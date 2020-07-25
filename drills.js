// How many searches?
const sorted = [3, 5, 6, 8, 11, 12, 14, 15, 17, 18];

function binarySearch(array, value, start, end) {
    var start = start === undefined ? 0 : start;
    var end = end === undefined ? array.length : end;

    if (start > end) {
        return -1;
    }
    const index = Math.floor((start + end) / 2);
    const item = array[index];

    console.log(start, end);
    if (item == value) {
        return index;
    } else if (item < value) {
        return binarySearch(array, value, index + 1, end);
    } else if (item > value) {
        return binarySearch(array, value, start, index - 1);
    }
}


console.log('binarySearch(sorted, 8, 0, 9)', binarySearch(sorted, 8, 0, 9))

// 0 9
// 0 3
// 2 3
// 3 3

console.log('binarySearch(sorted, 16, 0, 9)', binarySearch(sorted, 16, 0, 9))

// 0 9
// 5 9
// 8 9


// Linear vs Binary
const arr = [
    89, 30, 25, 32, 72, 70, 51, 42, 25, 24, 53, 55, 78, 50, 13,
    40, 48, 32, 26, 2, 14, 33, 45, 72, 56, 44, 21, 88, 27, 68,
    15, 62, 93, 98, 73, 28, 16, 46, 87, 28, 65, 38, 67, 16, 85,
    63, 23, 69, 64, 91, 9, 70, 81, 27, 97, 82, 6, 88, 3, 7, 46,
    13, 11, 64, 76, 31, 26, 38, 28, 13, 17, 69, 90, 1, 6, 7, 64,
    43, 9, 73, 80, 98, 46, 27, 22, 87, 49, 83, 6, 39, 42, 51,
    54, 84, 34, 53, 78, 40, 14, 5,
];

// Linearsearch 

const linearSearch = (arr, value) => {
    let returnVal = "nothing found";
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === value) {
            returnVal = i;
        }
    }
    return returnVal;
};

// linearSearch(arr, 1000)

console.log('linearSearch(arr, 1000)', linearSearch(arr, 1000))
// Binary

let sortedArr = arr.sort();

console.log('binarySearch(sortedArray, 78, 0, 92)', binarySearch(sortedArr, 78, 0, 92))
// 6 searches


// //find a book
// ************

// const findBook = (lib, dewey, title) => {
//     let start = 0;
//     let end = lib.length;
//     while (start < end) {
//         let middle = Math.floor((start + end) / 2);
//         if (lib[middle].dewey == dewey) {
//             if (lib[middle].title == title) {
//                 return lib[middle];
//             } else {
//                 for (let index = middle + 1; lib[index].dewey == dewey; index++) {
//                     if (lib[index].title == title) {
//                         return lib[index];
//                     }
//                 }
//                 for (let index = middle - 1; lib[index].dewey == dewey; index--) {
//                     if (lib[index].title == title) {
//                         return lib[index];
//                     }
//                 }
//                 return null;
//             }
//             if (lib[middle].dewey < dewey) {
//                 start = middle + 1;
//             } else {
//                 end = middle - 1;
//             }
//         }
//     }
//     return null;
// };



// Searching in a BST *****************

// Implement Different tree traversals ******************

// class BST {
//     constructor(key = null, value = null, parent = null) {
//         this.key = key;
//         this.value = value;
//         this.parent = parent;
//         this.left = null;
//         this.right = null;
//     }

//     insert(key, value) {

//         if (this.key == null) {
//             this.key = key;
//             this.value = value;
//         }


//         else if (key < this.key) {

//             if (this.left == null) {
//                 this.left = new BST(key, value, this);
//             }

//             else {
//                 this.left.insert(key, value);
//             }
//         } else {

//             if (this.right == null) {
//                 this.right = new BST(key, value, this);
//             } else {
//                 this.right.insert(key, value);
//             }
//         }
//     }

    
    
    

// Max Profit

const profit = arr => {
    let profit = 0;
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 === 1) {
            profit -= arr[i];
        } else {
            profit += arr[i];
        }
    }
    return profit;
};

const prices = [128, 97, 121, 123, 98, 97, 105]

console.log('profit(prices)', profit(prices))

