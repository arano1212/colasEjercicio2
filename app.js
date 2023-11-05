//COLAS
//ejercicio1
//1.- Se tiene una cola de colores y se tiene que dividir en dos colas, respetando el orden y alternando a partir de su índice. los pares en una y los nones en otra.
//Cola original: [ amarillo, rosa, rojo, verde, azul, negro, morado, blanco]
//Cola 1: [ amarillo, rojo, azul, morado]
//Cola 2: [rosa, verde, negro, blanco]
 /*class Queue{
    constructor(){
        this.queue =[];
    }

    enqueue(item){
        this.queue.push(item);
    }

    dequeue(){
        if (this.queue.length >0) {
            return this.queue.shift();
            
        } else {
            return null 
        }
    }

    peek(){
        if (this.queue.length > 0) {
            return this.queue[0];
            
        } else {
            return null 
        }
    }


    back(){
        if (this.queue.length > 0) {
            return this.queue[this.queue.length -1];
            
        } else {
            return null 
        }
    }

    getSize(){
        return this.queue.length;
    }
 }

//Cola original: [ amarillo, rosa, rojo, verde, azul, negro, morado, blanco]
 const myQueue = new Queue();

myQueue.enqueue( "amarillo");
myQueue.enqueue( "rosa");
myQueue.enqueue( "rojo");
myQueue.enqueue( "verde");
myQueue.enqueue( "azul");
myQueue.enqueue( "negro");
myQueue.enqueue( "morado");
myQueue.enqueue( "blanco");


console.log(myQueue);



function dividirQueue(queue) {
  const myQueue1 = new Queue();
  const myQueue2 = new Queue();

  const queueOriginalSize = queue.getSize();


for (let i = 0; i < queueOriginalSize; i++) {
  const item = queue.dequeue();

  if (i%2 === 0 ) {
    myQueue1.enqueue(item);

    
  } else {
     myQueue2.enqueue(item);
  }
    
}

return [myQueue1, myQueue2];
}


const [colaNones, colaPares] =  dividirQueue(myQueue);
console.log(`esta cola es de nones `, colaNones);
console.log(`esta cola es de pares`, colaPares);*/



//ejercico 2
//Se tiene una cola en la cual se han repartido tickets con el orden de atención. Sin embargo, llegada la hora de inicio hay muchos “colados”, es por esto que se le ordena al vigilante que retire a todos aquellos que no tienen ticket. Muestra la cola inicial, qué elementos fueron retirados de la cola y la cola final.
//Sugerencia: desencolar cada elemento, si tiene el ticket se vuelve a encolar, si no se retira.
//Cola: [ 
//           { user:‘User1’, ticket:true },
//          { user:‘User2’, ticket:true },
//          { user:‘User3’, ticket:false },
//          { user:‘User4’, ticket:true },
//          { user:‘User5’, ticket:false },
//          { user:‘User6’, ticket:false },
//          { user:‘User7’, ticket:true },
//          { user:‘User8’, ticket:true },
//          { user:‘User9’, ticket:true },
//          { user:‘User10’, ticket:false },
//          { user:‘User11’, ticket:true },
class Queue{
    constructor(){
        this.queue =[];
    }

    enqueue(user){
        this.queue.push(user);
    }

    dequeue(){
        if (this.queue.length >0) {
            return this.queue.shift();
            
        } else {
            return null 
        }
    }

    peek(){
        if (this.queue.length > 0) {
            return this.queue[0];
            
        } else {
            return null 
        }
    }


    back(){
        if (this.queue.length > 0) {
            return this.queue[this.queue.length -1];
            
        } else {
            return null 
        }
    }

    getSize(){
        return this.queue.length;
    }
 }


 const myTicket = new Queue();
 myTicket.enqueue({ user: 'User1', ticket:true },);
 myTicket.enqueue({ user: 'User2', ticket:true },);
 myTicket.enqueue({ user: 'User3', ticket:false },);
 myTicket.enqueue({ user: 'User4', ticket:true },)
 myTicket.enqueue({ user: 'User5', ticket:false },)
 myTicket.enqueue({ user: 'User6', ticket:false },)
 myTicket.enqueue({ user: 'User7', ticket:true },)
 myTicket.enqueue({ user: 'User8', ticket:true },)
 myTicket.enqueue({ user: 'User9', ticket:true },)
 myTicket.enqueue({ user: 'User10', ticket:false },)
 myTicket.enqueue({ user: 'User11', ticket:true },)

 console.log(myTicket);


 function tickets(queue) {
  const myQueue1 = new Queue();
  const myQueue2 = new Queue();

  const queueOriginalSize = queue.getSize();


for (let i = 0; i < queueOriginalSize; i++) {
const user = queue.dequeue();

  if (user.ticket === true ) {
    myQueue1.enqueue(user);

    
  } else {
     myQueue2.enqueue(user);
  }
    
}

return [myQueue1, myQueue2];
}


const [ conTickets, sinTickets] =  tickets(myTicket);
console.log(`estos usuarios tiene tickets`, conTickets);
console.log(`estos usuarios no tiene tickets`, sinTickets);

