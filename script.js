var btn = document.getElementById("btn")
btn.addEventListener("click", inserir)

function inserir(){
    //ocultar pg 1 e exibir pg 2 
    let p1 = document.getElementById("page1")
    let p2 = document.getElementById("page2")

    p1.style.display = "none"
    p2.style.display = "flex"

    // inserir cdg em html
    let codeHtml = document.getElementById("codeHtml").value
    
    p2.innerHTML = codeHtml

    // inserir cdg em js
    let codeJs = document.getElementById("codeJs")
    document.getElementById("jsUser").innerHTML = codeJs

}