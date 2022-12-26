
document.body.addEventListener("click", function(e){
    var btn = e.target
    if(btn.classList.contains("btn")) btn.classList.toggle("open_btn");
})