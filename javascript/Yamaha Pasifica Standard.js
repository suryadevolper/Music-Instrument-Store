let buys = document.getElementById('buy').innerText;
let names = document.getElementById("name").innerText;
let price = document.getElementById("price").innerText;
let images = document.getElementById("image").getAttribute('src');

console.log(parseInt(price));


function AddToCart() {
    if (confirm("Add To Cart This Product") === true) {

        localStorage.setItem('a', buys),
        localStorage.setItem('b', names),
        localStorage.setItem('c', price),
        localStorage.setItem('d', images)

        
        window.location.href = "./Cart_Add.html"
    }
    else{
        alert("Please Add To cart")
    }

    
}


