let totalNumbers = [2, 4, 5, 6, 7, 10, 23, 33, 45, 46, 57, 58, 78, 97, 454];
const target = 58;

function binarySearch(totalNumbers, target) {
  let start = 0;
  let end = totalNumbers.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (totalNumbers[mid] == target) {
      console.log("Item found in position", mid);
      return mid;
    }
    if (totalNumbers[mid] < target) {
      start = mid + 1;
    }
    if (totalNumbers[mid] > target) {
      end = mid - 1;
    }
  }
  return -1;
}

const index = binarySearch(totalNumbers, 8);
console.log(index);
