function calcular(){
    let numero1 = document.getElementById("numero1").value;
    let numero2 = document.getElementById("numero2").value;
    
    /* ----------------------------- Utilizar isNaN ----------------------------- */
    if(numero1 == "" || numero2 == ""){
        alert("Se necesitan llenar todos los campos");
    }
    /* ------------------------------- Operador OR ------------------------------ */
    else if(isNaN(numero1) || isNaN(numero2)){
        alert("Solo puede ingresar números");
       }

       else{
           numero1 = parseFloat(numero1);
           numero2 = parseFloat(numero2);

           
           if(numero1 == numero2){
            alert("Los números son iguales");
           }
           /* --------------------------------- else if -------------------------------- */
           else if(numero1 > numero2){
            alert("Número 1 es mayor");
           }
           else{
            alert("Número 2 es mayor");
           }
       }   
}

/* ------------------------------- Ciclo while ------------------------------ */
function ejemplo_while(){
    let i = 10
    while(i < 10){
        console.log("Estoy dentro del ciclo")
        i++;
    }
}

/* ----------------------------- Ciclo do while ----------------------------- */
function ejemplo_do_while(){
    let i = 10
    do{
        let vueltas = 0;
        console.log("Estoy dentro del ciclo");
        /* ---------------------------- operador != y AND --------------------------- */
        if(i != 9 && vueltas == 0){
            console.log("Es la unica vuelta")
        }
    }
    while(i < 10);
}
