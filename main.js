let keys = document.getElementsByClassName("btn");
const btn_keys = Array.from(keys);
let data_to_send = null;
/*key pad reading*/
btn_keys.forEach(
    (key)=>{
        key.addEventListener("click",function (){
            data_to_send = this.innerText;
            console.log("Key pressed "+ data_to_send);
            fetch("http://192.168.2.210:80/data",{
                method:'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(data_to_send)
            })
            .then(response => response.json())
            .then(data => {console.log(data)})
        })
})
