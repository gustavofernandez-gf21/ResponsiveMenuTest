/*#############funciones y funciones en un array clase 40################*/
/*var bankBalance = 500;

var transaction = function(priceOfSale){
    if(priceOfSale <= bankBalance){
        bankBalance -= priceOfSale;
        console.log("Purchase successfull")
        console.log("Fondos restantes: "+ bankBalance);
    }else{
        console.log("Insuficient funds");
        console.log("Fondos: "+bankBalance);
    }
}

var printCustomerName = function(first, last){
    console.log("First Name: "+first+" Last Name: "+last);
}

var applyForCreditCard = function(){
    console.log("Funcion aplicar para tarjeta");
}

var bankOperations = [];
bankOperations.push(printCustomerName);
bankOperations.push(applyForCreditCard);
bankOperations.push(transaction);

bankOperations[2](400);*/


/*############### Objects clase 41 ###################*/

//creando un constructor
function Student(firstName, LastName, age){
    this.firstName = firstName;
    this.lastName = LastName;
    this.age = age;
    this.greeting = function(){
    return "Hi, I'm "+this.firstName+" "+this.lastName+" and I'm "+this.age;
    }
}

//agregando estudiantes a un array a travez del constructor
var students = [];
students.push(new Student("Michael", "Lamar",8));
students.push(new Student("Peter", "Michael",9));
students.push(new Student("James", "Peter", 10));

var student1 = students[1];

//for in, se usa para iterar sobre todos los valores key (claves) de un objeto, en este caso el console.log, devuelve todas las variables que tiene el objeto, incluida la funcion
for(var key in student1){
    console.log(student1[key]);
}

/*var student = {
    firstName: "John",
    LastName: "Parker",
    age: 7,
    greeting: function(){
    return "Hi, I'm "+this.firstName+" and I'm "+this.age;
}
};

//create an empty object
var student1 = new Object();
student1.firstName = "Michael";
student1.lastName = "Ramson";
student1.age = 7;

var student2 = {};
student2.firstName = "Peter";
student2.lastName = "Robins";
student2.age = 8;

var students = [];
students.push(student);
students.push(student1);
students.push(student2);

for( var i = 0; i < students.length; i++){
    console.log(students[i]);
}*/






























