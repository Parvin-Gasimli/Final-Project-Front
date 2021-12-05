
let cardIcons = Array.from(document.querySelectorAll('.info_pro1'));

let basketProducts = (localStorage.getItem('basket')==null)?[]:JSON.parse(localStorage.getItem('basket'));

fillCard();

cardIcons.forEach(elem=>{
    elem.addEventListener('click',function(e){
        e.preventDefault();
        let productId = elem.getAttribute('data-productId');
        let productInfo = Array.from(document.querySelectorAll('.product_info')).find(x=>x.getAttribute('data-productId')==productId);
        let name = productInfo.querySelector('.product_title a').innerText;
        let price = productInfo.querySelector('span.price').innerText;
        let img = productInfo.previousElementSibling.querySelector('img').getAttribute('src');
        let productBasket = basketProducts.find(x=>x.id==productId);
        if(productBasket===undefined){
            let productBasket = {
                id:productId,
                name:name,
                image:img,
                price:price.slice(1),
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
    basketProducts.forEach(elem=>{
        document.querySelector('.cart_list').innerHTML+= 
            `
            <li>
                <a href="#" class="remove" data-productId=${elem.id}><i
                        class="fas fa-times"></i></a>
                <a href="#">
                    <img src="${elem.image}" alt="">
                    ${elem.name}
                </a>
                <span class="cart_quanity">
                    ${elem.count}*${elem.price}
                </span> 
            </li>
            `
        });
        let removeButtons = Array.from(document.querySelectorAll('.cart_list .remove'));
        removeButtons.forEach(elem=>{
            elem.addEventListener('click',function(){
                let productId=elem.getAttribute('data-productId');
                basketProducts=basketProducts.filter(x=>x.id!=productId);
                localStorage.setItem('basket',JSON.stringify(basketProducts));
                // elem.count--;
                elem.parentElement.remove();
                addedSpecificValues();
            })
        })

    addedSpecificValues();
}
function getSpecificValues(){
    let sum=0;
    basketProducts.forEach(elem=>{
        sum+=(+elem.count * +elem.price);
    })
    return {
        sum : sum,
        len : basketProducts.length
    };
}

function addedSpecificValues(){
    document.querySelector('.cart_count').innerText = getSpecificValues().len;
    document.querySelector('.total_price').innerText = getSpecificValues().sum;
}

let toast = document.getElementById("toast");
document.getElementById("show-toast").addEventListener("click", function () {
  toast.classList.add("toast-active");
});
document.getElementById("close-button").addEventListener("click", function () {
  toast.classList.remove("toast-active");
});