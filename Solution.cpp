
#include <algorithm>
#include <vector>
using namespace std;

class Solution {
    
public:

    int findTheDistanceValue(vector<int>& firstInput, vector<int>& secondInput, int threshold) {
        sort(secondInput.begin(), secondInput.end());
        int distance = firstInput.size();

        for (const auto& n : firstInput) {
            int left = 0;
            int right = secondInput.size() - 1;

            while (left <= right) {
                int mid = left + (right - left) / 2;
                if (abs(n - secondInput[mid]) <= threshold) {
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
};
