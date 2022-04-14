
/**
 * @param {number[]} firstInput
 * @param {number[]} secondInput
 * @param {number} threshold
 * @return {number}
 */
var findTheDistanceValue = function (firstInput, secondInput, threshold) {
    secondInput.sort((x, y) => x - y);
    let distance = firstInput.length;

    for (let n of firstInput) {
        let left = 0;
        let right = secondInput.length - 1;

        while (left <= right) {
            let mid = left + Math.floor((right - left) / 2);
            if (Math.abs(n - secondInput[mid]) <= threshold) {
                distance--;
                break;
            }
            if (n > secondInput[mid]) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
    }
    return distance;
};
