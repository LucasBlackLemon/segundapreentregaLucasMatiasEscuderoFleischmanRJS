


const product = [
    {id:'1', name:'Pikachu', category:'peluches',stock: 20 ,price:5000, imageUrl:'../../assets/img/peluche-pikachu.jpg'},
    {id:'2', name:'Charmander', category:'peluches',stock: 20 ,price:5000, imageUrl:'../../assets/img/peluche-charmander.jpg'},
    {id:'3', name:'Bulbasaur', category:'peluches',stock: 20, price:5000, imageUrl:'../../assets/img/peluche-bulbasaur.jpg'},
    {id:'4', name:'Mew', category:'remeras',stock: 20, price:8000, imageUrl:'../../assets/img/remera-mew.jpg'},
    {id:'5', name:'Squirtle', category:'remeras',stock: 20 ,price:8000, imageUrl:'../../assets/img/remera-squirtle.jpg'},
    {id:'6', name:'Gengar', category:'remeras',stock: 20, price:8000, imageUrl:'../../assets/img/remera-gengar.jpg'},
    {id:'7', name:'Equipo Roquet', category:'buzos',stock: 20, price:12000, imageUrl:'../../assets/img/buzo-equiporocket.jpg'},
    {id:'8', name:'Charmander', category:'buzos',stock: 20, price:12000, imageUrl:'../../assets/img/buzo-charmander.jpg'},
    {id:'9', name:'Jigglypuff', category:'buzos',stock: 20, price:12000, imageUrl:'../../assets/img/buzo-jigglypuff.jpg'},
    {id:'10', name:'Snorlax', category:'pijamas',stock: 20, price:18000, imageUrl:'../../assets/img/pijama-snorlax.jpg'},
    {id:'11', name:'Charizard', category:'pijamas',stock: 20 ,price:18000, imageUrl:'../../assets/img/pijama-charizard.jpg'},
    {id:'12', name:'Umbreon', category:'pijamas',stock: 20 ,price:18000, imageUrl:'../../assets/img/pijama-umbreon.jpg'},    
]

export const mfetch = (id) => {
    return new Promise((res, rej) => {
        setTimeout (()=>{
            res(id ? product.find(prod => prod.id === id) :product)
        }, 500)
    
    })
}