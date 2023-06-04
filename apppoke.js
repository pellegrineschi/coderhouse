class Pokemon{
    constructor(nombre,nivel, energia){
        this.nombre = nombre;
        this.nivel = nivel;
        this.energia = energia;
    }

    entrenar(){
        if (this.energia <= 1){
            alert("no se puede entrenar a " + this.nombre + ", por que tiene poca energia");
        }else{
            this.energia -= 1;
            this.nivel += 1;
            console.log(this.nombre + " a subido al nivel " + this.nivel + " y su energia es " + this.energia);
        }
    }

    alimentar(){
        if (this.energia < 10){
            this.energia += 1;
            alert("la energia de " + this.nombre + " es " + this.energia);
        }else {
            alert("la energia de " + this.nombre + "esta al maximo");
        }
    }

    restarEnergia(cantidad){
        if (this.energia > 1){
            this.energia = this.energia - cantidad;
            console.log("la energia de " + this.nombre + " es " + this.energia);
        }else{
            console.log(this.nombre + " esta incapacitado");
        }
    }

    atacar(objetivo){
        objetivo.restarEnergia(1);  
    }
}

let chanmander = new Pokemon ("chanmander", 1, 10);
let bulbasour = new Pokemon ("bulbasour", 1, 10);