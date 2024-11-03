const checkApprox = (num1, num2, epsilon) => {

    return Math.abs(num1-num2)<epsilon;

}

const checkEqual = (num3, num4) => {
    return num3==num4;
}

console.log(checkApprox(10.003, 10.001, 0.005));
console.log(checkEqual(10.003, 10.0103));