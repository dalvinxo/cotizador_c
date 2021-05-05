export function getDiferentYear(year){
    return new Date().getFullYear() - year;
}

//calcular el total a pagar segun la marca
export function totalMarca(marca){

    let incremento;

    switch(marca){

        case 'americano':
            incremento = 1.15;
            break;

        case 'europeo':
            incremento = 1.30;
            break;

        case 'asiatico':
            incremento = 1.05;
            break;
        
        default:
            break;
    }

    return incremento;


}


//calcular el tipo de plan
export function getPlan(plan){

    return (plan.trim() === 'basico')?1.20:1.50;

}

export function primeraMayuscula(texto = ''){

    return texto.charAt(0).toUpperCase() + texto.slice(0);

}