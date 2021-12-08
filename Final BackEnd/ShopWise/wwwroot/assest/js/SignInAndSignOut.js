const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

if(sign_up_btn!=null)
{
  sign_up_btn.addEventListener("click", () => {
    container.classList.add("sign-up-mode");
  });
}

if(sign_in_btn!=null){
  sign_in_btn.addEventListener("click", () => {
    container.classList.remove("sign-up-mode");
  });
  
}