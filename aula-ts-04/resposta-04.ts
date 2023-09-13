function multiply(num1: number, num2: number): number {
    return num1 * num2;
}

function sum(num1: number, num2: number): number {
    return num1 + num2;
}

function isEven(num: number): boolean {
    return num % 2 === 0;
}

function showResult(num: number) {
    const result: boolean = isEven(num);
    
    if(result) {
        console.log(`The result is ${result} and it's even!`);
    } else {
        console.log(`The result is ${result} and it's odd!`);
    }
}

function isInteger(input: string): boolean {
    const parsedInt = parseInt(input, 10);
    return !isNaN(parsedInt) && input.trim() === parsedInt.toString();
}

((): void => {
    const num1: string | null = prompt("First Number");
    const num2: string | null = prompt("Second Number");

    if (num1 === null || num2 === null) {

        alert("Function can not be executed with given inputs.\nTry again using only numbers.");

    } else {
        
        if (isInteger(num1) && isInteger(num2)) {

            const [num3, num4] = [parseInt(num1), parseInt(num2)];

            let result: number = sum(num3,num4);
            result += multiply(1,2);
            showResult(result);

        } else {

            alert("Function can not be executed with given inputs.\nTry again using only numbers.");

        }

    }
})();
