const $ = document.querySelector.bind(document);

function add( a, b) {
    const c = a + b;
    return c
}
const output = add(2, 2);



$("#output").innerHTML = output;
console.log(output);
