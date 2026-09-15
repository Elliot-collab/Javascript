// 1. Utan argument och utan return
function hello() {
    console.log("Hej!");
}

hello();


// 2. Med argument utan return
function greet(name) {
    console.log("Hej " + name);
}

greet("Oscar");


// 3. Med argument och med return
function add(a, b) {
    return a + b;
}

let result = add(5, 3);
console.log(result);


// 4. Utan argument och med return
function getNumber() {
    return 10;
}

let number = getNumber();
console.log(number);