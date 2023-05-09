//Se pide nombre de usuario y se muestra un mensaje con la promoción por el dia del amigo. Se da la opción de distintos pases al gimnasio por un mes en Sportclub a un precio más económico. Las opciones a escoger son entre pase full (acceso completo y todos los dias) o el acceso a una actividad hasta un límite de 4 veces por semana. Una vez seleccionada la opcion de pase full o pase personal se puede conocer los precios para hacer el regalo y agregarlo al carrito. En el caso de elegir el pase personal, se le da al usuario la posibilidad de elegir un deporte para agregarlo al carrito."

let usuario = prompt("Ingresa tu nombre");

//Inicio declaración de funciones:
function promocion(){console.log(usuario+", regalale a tu mejor amigo/a la oportunidad de entrenar en SportClub por un mes con una promoción especial. Por favor, elige si deseas regalarle un pase full con acceso a todas las actividades todos los dias, o un pase personal de hasta 4 veces por semana para un deporte a eleccion: \n- full \n- personal")}
function despedidafull(){console.log("Agredecemos tu consulta "+usuario+". Agregaste tu plan "+ OpcionFull+ " al carrito. Por cualquier duda, comunicate con nosotros por Whatsapp y los esperamos pronto!");}
function despedidapersonal(){console.log("Agredecemos tu consulta "+usuario+". Agregaste tu plan "+ OpcionPersonalizada+ " al carrito. Por cualquier duda, comunicate con nosotros por Whatsapp y los esperamos pronto!.");}
function mensajefull(){console.log("Elegiste la opcion de pase full con acceso a todas las actividades disponibles en SportClub.");}
function mensajepersonal(){console.log("Elegiste la opcion personalizada con acceso a una actividad de 1 a 4 veces por semana en SportClub.");}
function mensajeincorrecto(){alert("Plan seleccionado no corresponde con ninguna opción vigente. Por favor, ingresa la opción de plan full o plan personal.")}
//Fin declaración de funciones.


//Inicio nombre del usuario:
alert("Bienvenido/a "+ usuario+" a Sportclub! Tenemos una promoción por el día del amigo para vos y ese amigo/a especial.");
promocion();
//Fin nombre y seleccion del plan:


//Inicio: Condicional para conocer que plan eligió el usuario:
let OpcionFull = "full";
let OpcionPersonalizada = "personal";
let plan=prompt("Ingresa el plan que te gustaría regalar para ese gran amigo/a.")

if(plan.toLowerCase() == OpcionFull){mensajefull();}
    else if(plan.toLowerCase() == OpcionPersonalizada){mensajepersonal();}
    else{mensajeincorrecto()
        for (let i = 0; i >= 0; i++) {
            plan=prompt("Ingresa el plan que te gustaría regalar para ese gran amigo/a.")
            if(plan.toLowerCase() == OpcionFull){
                mensajefull();
            break;}
            else if(plan.toLowerCase() == OpcionPersonalizada){
                mensajepersonal();
                break;
                }
            else {
            mensajeincorrecto();}
        }
    }

//Fin: Condicional para conocer que plan eligió el usuario.


//Inicio: conocer los precios de los planes:
if (plan.toLowerCase() == OpcionFull){
    console.log("El precio especial por el día del amigo con su pase full es de $3,499.");
}
else{
    let PrecioUnitario=500;
    let limite = parseInt(prompt("Ingresa cuantas veces por semana quieres regalar el acceso a SportClub. El máximo es de 4 veces por semana."));
    if(limite==1){
        console.log("Seleccionaste el acceso de "+limite+" vez por semana.");}
    else{console.log("Seleccionaste el acceso de "+limite+" veces por semana.")}
    
    while (limite<=4){
        let resultado = limite*PrecioUnitario;
        if(limite==1){
            console.log("El precio especial por el día del amigo para "+limite+" vez por semana es de $" + resultado+".");}
        else{console.log("El precio especial por el día del amigo para "+limite+" veces por semana es de $" + resultado+".");}
        break;
    }
}
//Fin: conocer los precios de los planes:


//Inicio: conocer actividades que van a contratar para el plan personal:
if (plan.toLowerCase() == OpcionPersonalizada){
    for (let i = 0; i >= 0; i++) {
            let actividad = prompt(
              "Ingresa la actividad principal que deseas incluir en tu regalo.");
            if (actividad.toLowerCase() === "pileta" || actividad.toLowerCase() === "yoga" || actividad.toLowerCase() === "gimnasio" || actividad.toLowerCase() === "hiit" || actividad.toLowerCase() === "spinning" || actividad.toLowerCase() === "boxing" || actividad.toLowerCase() === "running" || actividad.toLowerCase() === "pilates") {
              alert("Optaste por la actividad de "+actividad);
              break;

            } else {
              alert("No es un actividad disponible en Sportclub. Por favor, consulta nuestras actividades en nuestro sitio web e intenta de nuevo.");
            }
          }
    }
//Fin: conocer actividad principal que van a contratar para el plan personal.

if(plan.toLowerCase() == OpcionFull){
    despedidafull();
}
else{despedidapersonal();}

