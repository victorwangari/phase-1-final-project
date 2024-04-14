// get list 
const navToggle = document.getElementById('nav-toggle');
const navigation = document.querySelector('.navigation');

navToggle.addEventListener('click', () => {
  navToggle.setAttribute('aria-expanded', navigation.style.display === 'block' ? 'false' : 'true');
  navigation.style.display = navigation.style.display === 'block' ? 'none' : 'block';
});

// declaring variables


const model = document.getElementById('list');
const picture = document.getElementById('picture');
const type = document.getElementById('type')
const title = document.getElementById('model')
const description = document.getElementById('description')
const buybutton = document.getElementById('buy-button')
const price = document.getElementById('price')
const availableshoes =document.getElementById('remaining')

// list shoes model in the available shoes is shop.html
function getModel(){
    fetch('https://sharks-db.onrender.com/shoes')
      .then(res => res.json())
      .then(data =>{ data.map(item =>{
        let li = document.createElement('li')
        li.id= item.id
        li.innerHTML= `
        ${item.model}
        `
        model.appendChild(li)
        displayProduct(item)
      })
      firstProduct(data[0])}
      )
}
getModel()
// displaying all products 
function displayProduct(item){
  const products = document.getElementById(item.id)
  products.addEventListener('click', event => {
    picture.src = item.image
    title.textContent = item.model
    price.textContent = item.price
    type.textContent = item.type
    description.textContent = item.description
    availableshoes.textContent= item.capacity - item.sold 
  })

}
// dispalying the first product
function firstProduct(item) {
  picture.src = item.image
    title.textContent = item.model
    price.textContent = item.price
    type.textContent = item.type
    description.textContent = item.description
    availableshoes.textContent= item.capacity - item.sold 
} 
