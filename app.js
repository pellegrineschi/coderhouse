let opcion; 

while (opcion != "salir") {
  opcion = prompt("Elija una opcion: login, invitado, salir");

  switch (opcion) {
    case "login":
      let usuario = prompt("ingrese usuario");
      let clave = prompt("ingrese clave");
      
      
      if (usuario == "matias" && clave == "1234") {
        let ron = 3500;
        let vodka = 2500;
        let opcion1;
        
        opcion1 = prompt("elija una opcion \n precios \n lista \n info");
        if (opcion1 == "precios" || opcion1 =="lista" ||opcion1 == "info") {
          switch (opcion1) {
            case "precios":
              let producto = prompt(
                "elija un producto de la lista \n ron \n vodka"
              );
              if (producto == "ron") {
                alert("el precio del ron es de " + ron);
              } else if (producto == "vodka") {
                alert("el precio del vodka es " + vodka);
              } else {
                alert("elija un producto de la lista");
              }
              break;
            case "lista":
              alert("lista de productos \n ron \n vodka");
              break;
            case "info":
              alert("siguenos en nuestras redes sociales como @cotelbar");
              break;
          }
          break;
        }else {
          alert("eleji una opcion de la lista");
          break;
        }
      } else {
        alert("usuario o contraseña incorrectos");
        break;
      }
    case "invitado":
      alert("ingresaste en modo invitado");
      break;
  }
  break;
}
