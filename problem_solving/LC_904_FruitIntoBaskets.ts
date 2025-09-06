function totalFruit(fruits: number[]): number {
    let start: number = 0
    let maxFruits: number = 0
    let fruitsCountMap: { [key: number]: number } = {};
    for (let end = 0; end < fruits.length; end++) {
        if (fruitsCountMap[fruits[end]] != undefined) {
            fruitsCountMap[fruits[end]]++;
        } else {
            fruitsCountMap[fruits[end]] = 1
        }
        while (Object.keys(fruitsCountMap).length > 2) {
            fruitsCountMap[fruits[start]]--;
            if (fruitsCountMap[fruits[start]] == 0) {
                delete fruitsCountMap[fruits[start]];
            }
            start++;
        }
        maxFruits = Math.max(maxFruits, (end - start + 1));

    }
    return maxFruits;
};

console.log(totalFruit([0, 1, 2, 2]));
console.log(totalFruit([1, 2, 3, 2, 2]));