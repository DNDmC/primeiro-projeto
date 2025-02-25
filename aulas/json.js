// JSON - JavaScript Object Notation
// Chave e valor com o objetivo de transferir dado 


// Criação do JSON
let invoice = {
    name: "Filipe",
    age: 26,
    products: {
        0: ["Mouse 2GWM", 29.90],
        1: ["Teclado Mecânico", 129,99],
        2: ["Monitor", 899.99],
        3: ["TV 100 polegadas", 1000.90]
    }
}

generateInvoice(invoice)

function generateInvoice(invoice){
    console.log(`O comprador é ${invoice.name} `)
    console.log(`A idade é: ${invoice.age}`)
    console.log("-----------")

    for(let index in invoice.products){
        let[productName, productPrice] = invoice.products[index]
        console.log(`- ${productName}: R$ ${productPrice}`)
    } 
}