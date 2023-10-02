let keys = document.getElementsByClassName("btn");
const btn_keys = Array.from(keys);

/*key pad reading*/
btn_keys.forEach(
    (key)=>{
        key.addEventListener("click",function (){
            console.log("Key pressed "+ this.innerText)
        })
})
