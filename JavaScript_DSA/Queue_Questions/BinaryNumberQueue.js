function generateBinaryNumbers(N) {
    const queue = [];
    const result = [];

    queue.push("1");

    for (let i = 0; i < N; i++) {
        const current = queue.shift();
        result.push(current);

        queue.push(current + "0");
        queue.push(current + "1");
    }

    return result;
}

const N = 10;
const binaryNumbers = generateBinaryNumbers(N);
console.log(`Binary numbers from 1 to ${N}:`);
console.log(binaryNumbers.join(", "));
