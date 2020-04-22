
let array = [1,3,56,90,4,100];

let mayores50 = array.filter(function(element){
    return element>50;
});

console.log(mayores50);


let carrito = [
    {prod: 'remera',
    precio: 10},
    {prod: 'remera',
    precio: 10},
    {prod: 'remera',
    precio: 10},
    {prod: 'zapatos',
    precio: 20},
    {prod: 'zapatos',
    precio: 20},    
]


let totalCart = carrito.reduce(function(total, element){
    return total + element.precio;
}, 0);
// el cero, es el valor inicial, para que JS sepa que queremos sumar

console.log(totalCart);

let carritoConDescuento = carrito.map(function(element){
    if(element.prod === 'remera'){
        return element.precio*0.5;
    }
    return element.precio;
});

console.log(carritoConDescuento);

carrito.forEach(function(element){
    console.log('Producto: ' + element.prod + ' Precio: ' + element.precio);
});

