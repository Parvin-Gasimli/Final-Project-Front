
let cardIcons = Array.from(document.querySelectorAll('.info_pro1'));

let basketProducts = (localStorage.getItem('basket')==null)?[]:JSON.parse(localStorage.getItem('basket'));
console.log(basketProducts);

cardIcons.forEach(elem=>{
    elem.addEventListener('click',function(e){
        e.preventDefault();
        let productId = elem.getAttribute('data-productId');
        let productInfo = Array.from(document.querySelectorAll('.product_info')).find(x=>x.getAttribute('data-productId')==productId);
        let name = productInfo.querySelector('.product_title a').innerText;
        let price = productInfo.querySelector('span.price').innerText;
        let productBasket = basketProducts.find(x=>x.id==productId);
        if(productBasket===undefined){
            let productBasket = {
                id:productId,
                name:name,
                price:price,
                count:1
            }
            basketProducts.push(productBasket);
        }else{
            productBasket.count++;
        }
        localStorage.setItem('basket',JSON.stringify(basketProducts));
        fillCard();
    })
})

function fillCard(){
    document.querySelector('.cart_list').innerHTML="";
    JSON.parse(localStorage.getItem('basket')).forEach(elem=>{
        document.querySelector('.cart_list').innerHTML+= 
            `
            <li>
                <a href="#" class="remove"><i
                        class="fas fa-times"></i></a>
                <a href="#">
                    <img src="./images/cart_thamb1.jpg" alt="">
                    ${elem.name}
                </a>
                <span class="cart_quanity">
                    ${elem.count}*${elem.price}
                </span> 
            </li>
            `
        });
}
fillCard();

