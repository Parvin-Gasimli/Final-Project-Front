
let cardIcons = Array.from(document.querySelectorAll('.info_pro1'));

let basketProducts = (localStorage.getItem('basket') == null) ? [] : JSON.parse(localStorage.getItem('basket'));

fillCard();

cardIcons.forEach(elem => {
    elem.addEventListener('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
        let productId = elem.getAttribute('data-productId');
        let productInfo = Array.from(document.querySelectorAll('.product_info')).find(x => x.getAttribute('data-productId') == productId);

        // console.log(productId);
        let name = productInfo.querySelector('.product_title a').innerText;
        let price = productInfo.querySelector('span.price').innerText;
        let img = productInfo.previousElementSibling.querySelector('img').getAttribute('src');
        let productBasket = basketProducts.find(x => x.id == productId);
        if (productBasket === undefined) {
            let productBasket = {
                id: productId,
                name: name,
                image: img,
                price: price.slice(1),
                count: 1
            }
            basketProducts.push(productBasket);
        } else {
            productBasket.count++;
        }
        localStorage.setItem('basket', JSON.stringify(basketProducts));
        fillCard();
    })
})

function fillCard() {
    if (document.querySelector('.cart_list') != null) {
        document.querySelector('.cart_list').innerHTML = "";
        basketProducts.forEach(elem => {
            document.querySelector('.cart_list').innerHTML +=
                `
            <li>
                <a href="#" class="remove" data-productId=${elem.id}><i
                        class="fas fa-times"></i></a>
                <a href="#">
                    <img src="${elem.image}" alt="">
                    ${elem.name}
                </a>
                <span class="cart_quanity">
                    ${elem.count}X ${elem.price + "$"}
                </span> 
            </li>
            `
        });
        let removeButtons = Array.from(document.querySelectorAll('.cart_list .remove'));
        removeButtons.forEach(elem => {
            elem.addEventListener('click', function () {
                let productId = elem.getAttribute('data-productId');
                basketProducts = basketProducts.filter(x => x.id != productId);
                localStorage.setItem('basket', JSON.stringify(basketProducts));
                // elem.count--;
                elem.parentElement.remove();
                addedSpecificValues();
                confirm("Mehsulu silmek Istediyinize eminsinizmi");
            })

        })

        addedSpecificValues();
    }
}
function getSpecificValues() {
    let sum = 0;
    basketProducts.forEach(elem => {
        sum += (+elem.count * +elem.price);
    })
    return {
        sum: sum,
        len: basketProducts.length
    };
}

function addedSpecificValues() {
    document.querySelector('.cart_count').innerText = getSpecificValues().len;
    document.querySelector('.total_price').innerText = getSpecificValues().sum;
}

//sweet code>>))) 
//sweet toast in jsss

const toasticon = Array.from(document.querySelectorAll(".info_pro1"))
toasticon.forEach(elem => {
    elem.addEventListener("click", function () {
        var x = document.getElementById("toast")
        x.className = "show";
        setTimeout(function () { x.className = x.className.replace("show", ""); }, 6000);
    })
})



// //darkMode but don't runmm


// function toggle_light_mode() {
//     var app = document.getElementsByTagName("BODY")[0];
//     if (localStorage.lightMode == "dark") {
//         localStorage.lightMode = "light";
//         app.setAttribute("light-mode", "light");
//     } else {
//         localStorage.lightMode = "dark";
//         app.setAttribute("light-mode", "dark");
//     }
// }

// window.addEventListener(
//     "storage",
//     function () {
//         if (localStorage.lightMode == "dark") {
//             app.setAttribute("light-mode", "dark");
//         } else {
//             app.setAttribute("light-mode", "light");
//         }
//     },
//     false
// );





//Modal Cart and plus and minus
// const plusdata=document.querySelector(".spinner-next")
// const minusdata=document.querySelector(".spinner-prev")
// const inputData=document.querySelector(".number-spinner")


// plusdata.addEventListener('click', function () {
//     inputData.value = parseInt(inputData.value) + 1;
//     })

//     minusdata.addEventListener('click', function () {
//         if (parseInt(inputData.value) > 1) {
//             inputData.value = parseInt(inputData.value) - 1;
//         } else {
//             inputData.value = parseInt(inputData.value) - 0;
//         }
//     })



const starIcon = document.getElementById("star1")

if(starIcon!=null){
    starIcon.addEventListener("click", function (e) {
        e.preventDefault();
       
        let icon1 = document.querySelector('.comment-stars .far')
        
        icon1.classList.remove("far");
        icon1.classList.add("fas")
    
    })
}

const starIcon2 = document.getElementById("star2")
if(starIcon2!=null){
    starIcon2.addEventListener("click", function (e) {
        e.preventDefault();
        let icon1 = document.querySelector('.comment-stars .far')
        icon1.classList.remove("far");
        icon1.classList.add("fas")
        let icon2 = document.querySelector('.comment-stars .far')
        icon2.classList.remove("far");
        icon2.classList.add("fas")
    
    
    })
}
const starIcon3 = document.getElementById("star3")
if(starIcon3!=null){
    starIcon3.addEventListener("click", function (e) {
        e.preventDefault();
        let icon1 = document.querySelector('.comment-stars .far')
      
        icon1.classList.remove("far");
        icon1.classList.add("fas")
        let icon2 = document.querySelector('.comment-stars .far')
        icon2.classList.remove("far");
        icon2.classList.add("fas")
        let icon3 = document.querySelector('.comment-stars .far')
        icon3.classList.remove("far");
        icon3.classList.add("fas")
    
    
    })
}
const starIcon4 = document.getElementById("star4")
if(starIcon4!=null){
    starIcon4.addEventListener("click", function (e) {
        e.preventDefault();
        let icon1 = document.querySelector('.comment-stars .far') 
        icon1.classList.remove("far");
        icon1.classList.add("fas")
        let icon2 = document.querySelector('.comment-stars .far')
        icon2.classList.remove("far");
        icon2.classList.add("fas")
        let icon3 = document.querySelector('.comment-stars .far')
        icon3.classList.remove("far");
        icon3.classList.add("fas")
        let icon4 = document.querySelector('.comment-stars .far')
        icon4.classList.remove("far");
        icon4.classList.add("fas")
    
    
    })
}

const starIcon5 = document.getElementById("star5")
if(starIcon5!=null){
    starIcon5.addEventListener("click", function (e) {
        e.preventDefault();
        let icon1 = document.querySelector('.comment-stars .far')
        icon1.classList.remove("far");
        icon1.classList.add("fas")
        let icon2 = document.querySelector('.comment-stars .far')
        icon2.classList.remove("far");
        icon2.classList.add("fas")
        let icon3 = document.querySelector('.comment-stars .far')
        icon3.classList.remove("far");
        icon3.classList.add("fas")
        let icon4 = document.querySelector('.comment-stars .far')
        icon4.classList.remove("far");
        icon4.classList.add("fas")
        let icon5 = document.querySelector('.comment-stars .far')
    
        icon5.classList.remove("far");
        icon5.classList.add("fas")
        // console.log(icon5);
    
    
    
    })
    
}

$(document).ready(function () {

    $("#stars li")
      .on("mouseover", function () {
        var onStar = parseInt($(this).data("value"), 10); 
  
        $(this)
          .parent()
          .children("li.star")
          .each(function (e) {
            if (e < onStar) {
              $(this).addClass("hover");
            } else {
              $(this).removeClass("hover");
            }
          });
      })
      .on("mouseout", function () {
        $(this)
          .parent()
          .children("li.star")
          .each(function (e) {
            $(this).removeClass("hover");
          });
      });
  
   
    $("#stars li").on("click", function () {
      var onStar = parseInt($(this).data("value"), 10); 
      var stars = $(this).parent().children("li.star");
  
      for (i = 0; i < stars.length; i++) {
        $(stars[i]).removeClass("selected");
      }
  
      for (i = 0; i < onStar; i++) {
        $(stars[i]).addClass("selected");
      }
  
      var ratingValue = parseInt(
        $("#stars li.selected").last().data("value"),
        10
      );
      var msg = "";
      if (ratingValue > 1) {
        msg = "Thanks! You rated this " + ratingValue + " stars.";
      } else {
        msg =
          "We will improve ourselves. You rated this " + ratingValue + " stars.";
      }
      responseMessage(msg);
    });
  });
  
  function responseMessage(msg) {
    $(".success-box").fadeIn(200);
    $(".success-box div.text-message").html("<span>" + msg + "</span>");
  }
  