class Uno{
    constructor(){
        this.a=null;
        this.b=null;
    }
    //crea métodos para consultar y editar las propiedades
    editaA(A){
        this.a=A;
    }
    editaB(B){
        this.b=B
    }
    consultaA(){
        return this.a;
    }
    consultaB(){
        return this.b
    }
    
}

class Dos{
    constructor(dato1, dato2){
        this.c=dato1;
        this.d=dato2;
    }
    //crea metodos para consultar las propiedades
    consultaC(){
        return this.c;
    }
    consultaD(){
        return this.d;
    }
}

export {Uno};
export {Dos};