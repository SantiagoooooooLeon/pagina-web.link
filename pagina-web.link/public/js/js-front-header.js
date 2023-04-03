window.addEventListener('load', function() {
  
  let boton = document.querySelector(".hamburger")

  let lista = document.querySelector("#menu")

  boton.addEventListener("click",function(){
    //muestra el menú
    lista.classList.toggle("mostrar")
  })

  lista.addEventListener("click",function(){
    //esconde el menu si pulsa el boton
    lista.classList.remove("mostrar")  
  })
  lista.addEventListener("mouseleave",function(){
    //esconde el menu si sale de el 
    lista.classList.remove("mostrar")  
  })

  boton.addEventListener("click", function() {
    //animacion del botón activada
    boton.classList.toggle("active");
  });

  lista.addEventListener("mouseleave",function(){
    //desactiva la animacion del botón
    boton.classList.remove("active")  
  })

});

