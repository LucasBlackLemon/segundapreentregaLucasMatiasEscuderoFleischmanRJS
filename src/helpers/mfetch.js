


// const product = [
//     {id:'1', name:'Pikachu', category:'Peluches',stock: 20 ,price:5000, imageUrl:'../../assets/img/peluche-pikachu.jpg'},
//     {id:'2', name:'Charmander', category:'Peluches',stock: 20 ,price:5000, imageUrl:'../../assets/img/peluche-charmander.jpg'},
//     {id:'3', name:'Bulbasaur', category:'Peluches',stock: 20, price:5000, imageUrl:'../../assets/img/peluche-bulbasaur.jpg'},
//     {id:'4', name:'Mew', category:'Remeras',stock: 20, price:8000, imageUrl:'../../assets/img/remera-mew.jpg'},
//     {id:'5', name:'Squirtle', category:'Remeras',stock: 20 ,price:8000, imageUrl:'../../assets/img/remera-squirtle.jpg'},
//     {id:'6', name:'Gengar', category:'Remeras',stock: 20, price:8000, imageUrl:'../../assets/img/remera-gengar.jpg'},
//     {id:'7', name:'Equipo Roquet', category:'Buzos',stock: 20, price:12000, imageUrl:'../../assets/img/buzo-equiporocket.jpg'},
//     {id:'8', name:'Charmander', category:'Buzos',stock: 20, price:12000, imageUrl:'../../assets/img/buzo-charmander.jpg'},
//     {id:'9', name:'Jigglypuff', category:'Buzos',stock: 20, price:12000, imageUrl:'../../assets/img/buzo-jigglypuff.jpg'},
//     {id:'10', name:'Snorlax', category:'Pijamas',stock: 20, price:18000, imageUrl:'../../assets/img/pijama-snorlax.jpg'},
//     {id:'11', name:'Charizard', category:'Pijamas',stock: 20 ,price:18000, imageUrl:'../../assets/img/pijama-charizard.jpg'},
//     {id:'12', name:'Umbreon', category:'Pijamas',stock: 20 ,price:18000, imageUrl:'../../assets/img/pijama-umbreon.jpg'},    
// ]

export const mfetch = (id) => {
    return new Promise((res, rej) => {
        setTimeout (()=>{
            res(id ? product.find(prod => prod.id === id) :product)
        }, 1000)
    
    })
}