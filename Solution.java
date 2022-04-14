
import java.util.Arrays;

public class Solution {

    public int findTheDistanceValue(int[] firstInput, int[] secondInput, int threshold) {
        Arrays.sort(secondInput);
        int distance = firstInput.length;

        for (int n : firstInput) {
            int left = 0;
            int right = secondInput.length - 1;

            while (left <= right) {
                int mid = left + (right - left) / 2;
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
    }
}
