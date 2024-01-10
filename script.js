let string = "";
let buttons = document.querySelectorAll("#btn");
// buttons.forEach(button => {
//     button.onclick = () => {
//         console.log("clicked");
//     };
// });



buttons.onclick=()=>{
    console.log("clicked")
}
buttons.forEach(button => {
    button.addEventListener("click" , (e)=>{
        if(e.target.innerHTML== "="){
            string= eval(string);
            document.querySelector("#text").value=string;
        }
        else if(e.target.innerHTML== "C"){
            string= "";
            document.querySelector("#text").value=string;
        }
        else{
        console.log("clicked");
        string = string + e.target.innerHTML;
        document.querySelector("#text").value=string;
    }})
});



// Array.from(buttons).forEach((btn)=>{
//    btn.addEventListener("clicked" , ()=>{
//     console.log("clicked")
//    })
// })