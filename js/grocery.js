let form_head=document.querySelector(".form_head");
let user=document.querySelector(".user");
let trolley=document.querySelector(".trolley");
let marks =document.querySelectorAll(".marks span");
marks.forEach(function(ele){
    ele.addEventListener("click",function(){
       let one_item =this.getAttribute("data-text");  
     document.querySelector(`.${one_item}`).classList.toggle("active");

    })
})

// triger swiper 

              var swiper = new Swiper(".product_list", {
        slidesPerView: 3,
        spaceBetween:10,
         loop:true,
         grabCursor:true,
breakpoints:{
     0:{
                   slidesPerView:1,
         },
         768:{
                 slidesPerView: 2,
         },
        991:{
                 slidesPerView: 3,
         }
}
        
      });

                   var swiper = new Swiper(".customer_list", {
        slidesPerView: 3,
        spaceBetween:10,
         loop:true,
         grabCursor:true,
breakpoints:{
     0:{
                   slidesPerView:1,
         },
         768:{
                 slidesPerView: 2,
         },
        991:{
                 slidesPerView: 3,
         }
}
        
      });
// document.getElementById("menu").onclick=function(){
//   document.querySelector("nav").classList.toggle("active");
// }   