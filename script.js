document.addEventListener("click",(event)=>{
    if(event.target.className == "analises"){
        document.querySelector("#popup").innerHTML = event.target.querySelector(".desc").innerHTML;
        document.querySelector("#popup").classList.add("pop_ativo");
    }
})

document.addEventListener("keydown",(event) =>{
    if(event.key == "Escape"){
        if(document.querySelector("#popup").className == "pop_ativo"){
            document.querySelector("#popup").classList.remove("pop_ativo");
        }
    }
})

document.addEventListener("click",(event)=>{
    console.log(event.target);
    if(event.target.className == "sair"){
        document.querySelector("#popup").classList.remove("pop_ativo");
    }
})