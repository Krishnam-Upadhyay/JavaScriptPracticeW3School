/* /* /* 'let animal = {
    eats:true,
    walk(){
        console.log("animal walk")
       
    }
};
let rabbit = {
    jumps:true,
    __proto__:animal


};
rabbit.walk= function(){
   console.log("Rabbit ! Bounce -bounce!");
};

rabbit.walk();



' */
/* let user = {
    name:"John",
    surname: "Smith",
    set fullName(value){
        [this.name,this.surname] = value.split(" ");
    },
    get fullName(){
        return this.name+" "+this.surname;

    }

}

let admin = {
    __proto__:user,

    
    isAdmin :true
};

admin.fullName = "Krishnam Upadhyay";
console.log(admin.fullName); */

//animal has methods
/* let animal ={
    walk(){
        if(!this.isSleeping) {
            console.log("I walk");

        }
    },
    sleep(){
        this.isSleeping = true;

    }
}

let rabbit = {
    jumps:true,
    __proto__:animal
};
 */
//for..in loops over both own and inherited keys
/* for(let prop in rabbit){
    console.log(prop);
}

//object.keys only returns own keys
console.log(Object.keys(rabbit))

 */
/* 
let animal = {
    eats:true
};
let rabbit = {
    jumps:true,
    __proto__:animal
};
for(let prop in rabbit){
    let isOwn = rabbit.hasOwnProperty(prop);
    if(isOwn){
        console.log("Our : "+prop);
    }else{
        console.log("Inherited: " +prop);
    }

} */

//task 2Searching algorithm

/* let animal = {
    jumps:null
} ;
let rabbit ={
    __proto__:animal,
    jumps:true
};

console.log(rabbit.jumps);
delete rabbit.jumps;
console.log(rabbit.jumps);
delete animal.jumps;
console.log(animal.jumps);

let head ={
    glasses : 1,
};
let table = {
    pen:3,
    __proto__:head
}

let bed = {
    sheet:1,
    pillow:2,
    __proto__:table
};

let pockets = {
    money:2000,
    __proto__:bed
}

console.log(pockets.pen) */

/* let animal ={
    eat(){
        this.full = true;

    }
};

let rabbit = {
    __proto__:animal
};
console.log(rabbit.eat());

 */

let hamster = {
    stomach:[],
    eat(food){
        this.stomach.push(food);
    }
};
let speedy ={
    stomach:[],
    __proto__: hamster
};

let lazy = {
    stomach:[],
    __proto__:hamster
};
//this on found the food
speedy.eat("apple");
console.log(speedy.stomach);
console.log(lazy.stomach);