class Uno{
    constructor(){
        this.a=null;
        this.b=null;
    }
    //crea métodos para consultar y editar las propiedades
    editaA(A){
        this.a= "Su dato es " + A;
    }
    editaB(B){
        this.b= "su dato es " + B;
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
        this.c= " Su parametro seleccioando es " + dato1;
        this.d= " Su parametro seleccioando es " + dato2;
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