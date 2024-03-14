let addBtn = document.querySelector('.add');
let subBtn = document.querySelector('.sub');
let qty = document.querySelector('#qtyBox');
addBtn.addEventListener('click',()=>{
    qty.value = parseInt(qty.value) + 1;
    pricetotal()
});


subBtn.addEventListener('click',()=>{
       if(qty.value <=0){
        qty.value = 0;
      
       }
       else{
        qty.value = parseInt(qty.value) - 1;
       }
    
});

let ajoutBtn = document.querySelector('.ajout');
let substitutBtn = document.querySelector('.substitut');
let qtx = document.querySelector('#qtxBox');
ajoutBtn.addEventListener('click',()=>{
    qtx.value = parseInt(qtx.value) + 1;
 
});


substitutBtn.addEventListener('click',()=>{
       if(qtx.value <=0){
        qtx.value = 0;
      
       }
       else{
        qtx.value = parseInt(qtx.value) - 1;
       }
       
});

let addsBtn = document.querySelector('.adds');
let subsBtn = document.querySelector('.subs');
let qtq = document.querySelector('#qtqBox');
addsBtn.addEventListener('click',()=>{
    qtq.value = parseInt(qtq.value) + 1;
 
});


subsBtn.addEventListener('click',()=>{
       if(qtq.value <=0){
        qtq.value = 0;
      
       }
       else{
        qtq.value = parseInt(qtq.value) - 1;
       }
       
});
document.addEventListener('Domcontentloaded',function(){
    const item = document.getElementById('item');
    const totalpricedisplay=document.getElementById('total-price');

    let totalPrice = parseFloat(totalpricedisplay.textContent);
    item.addEventListener('click',function(e) {
        if(e.target.classlist.contains('remove')){
            removeFromcart(e.target.parentElement);
            
        }
    }
    )

});
function removeFromcart(item){
    const quantity = parseInt(item.querySelector('.quantity').textContent);
    const itemprice= parseFloat(item.dataset.price);
    totalprice -=itemprice;
    updateTotalprice();
}

          


          document.querySelectorAll('.heart').forEach(heart => {
            heart.addEventListener('click', () => {
                heart.style.color = heart.style.color === 'red' ? 'grey' : 'red';
            });
          }); 
          document.querySelectorAll('.remove').forEach(removeButton => {
            removeButton.addEventListener('click', () => {
                removeButton.parentElement.remove();
                updateTotal();
            });
          });
         