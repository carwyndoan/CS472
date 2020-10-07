String.prototype.filter = function (arr) {
    //return (this.split(" ")).filter(x => Array.from(arr).indexOf(x) < 0).join(" ");
    let str = this;
    Array.from(arr).forEach(elem => {
        str = str.replaceAll(elem, "");
    })
    return str;
};

Array.prototype.bubbleSort = function () {
    let n = this.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (this[j] > this[j + 1]) {
                // swap arr[j+1] and arr[j] 
                let temp = this[j];
                this[j] = this[j + 1];
                this[j + 1] = temp;
            }
        }
    }
    return this;
};

// Exercise 3:
// 1. Create an function called Teacher derived from a Person function constructor, and implement 
// a method called teach that receives a string called subject, and prints out: [teacher's name] 
// is now teaching [subject]. Create a Teacher object and call its teach method.
// 2. Also do the same thing using Object.create. When using Object.create you will need 
// a factory function instead of a function constructor in order to pass parameters 
// such as ‘name’ to be set in the prototype.
/* Function constructor */
function Person(name) {
    this.name = name;
}
function Teacher(name) {
    Person.call(this, name);
}
Teacher.prototype = Object.create(Person.prototype); //inherits prototypes of Person
Teacher.prototype.teach = function (subject) {
    console.log(this.name + " is now teaching " + subject);
};
const teacher = new Teacher("Tina Xing");
teacher.teach("WAP");

/* Object constructor */
const personObj = {
    setName: function (name) {
        this.name = name;
    }
};
const teacherObj = Object.create(personObj);
teacherObj.teach = function (subject) {
    console.log(this.name + " is now teaching " + subject);
};
const teacher1 = Object.create(teacherObj);
teacher1.setName("Tina Xing");
teacher1.teach("WAP");

/*
Exercise 4:
Write code that will create person, student, and professor objects.
• Person objects have
    o name and age fields
    o a greeting method that prints out: “Greetings, my name is [name] and I am [age] years old.”
    o a salute method that prints out: “Good morning!, and in case I dont see you, good afternoon, 
    good evening and good night!”
• Student objects inherit name, age, and salute from person. 
    They also have a field ‘major’ and have their own greeting method. 
    Their greeting is “Hey, my name is [name] and I am studying [major]. 
    The greeting should be output to the console.
• Professor objects inherit name, age, and salute from person. 
    They also have a field ‘department’ and have their own greeting method. 
    Their salutation is “Good day, my name is [name] and I am in the [department] department.” 
    Output it to the console.
• Create a professor object and a student object. Call both the greeting and salutation methods on each.
• Do this exercise once using the object prototype approach for inheritance 
    and then using the function constructor approach.
*/

/* Object prototype approach */
const person2 = {
    name: "Default",
    age: 10,
    greeting: function() {
        console.log("Greetings, my name is " + this.name + " and I am "+ this.age + " years old.");
    },
    salute: function() {
        console.log("Good morning!, and in case I dont see you, good afternoon, good evening and good night!");
    }
};

const student2 = Object.create(person2);
student2.greeting = function() {
    console.log("Hey, my name is " + this.name + " and I am studying " + this.major + ".");
}
student2.setMajor = function(major) {
    this.major = major;
};
const std2 = Object.create(student2);
std2.name = "Student 2";
std2.setMajor("CS");
std2.greeting();

const professor2 = Object.create(person2);
professor2.setDepartment = function(department) {
    this.department = department;
};
professor2.salute = function() {
    console.log("Good day, my name is " + this.name + " and I am in the " + this.department + " department.");
};
const prof2 = Object.create(professor2);
prof2.name = "Professor 2";
prof2.setDepartment("CS");
prof2.salute();
/* Function constructor approach */
function Person3(name, age) {
    this.name = name;
    this.age = age;
}
Person3.prototype.greeting = function() {
    console.log("Greetings, my name is " + this.name + " and I am "+ this.age + " years old.");
};
Person3.prototype.salute = function() {
    console.log("Good morning!, and in case I dont see you, good afternoon, good evening and good night!");
};

function Student3(name, age, major) {
    Person3.apply(this, [name, age]);
    this.major = major;
}
Student3.prototype = Object.create(Person3.prototype);
Student3.prototype.greeting = function() {
    console.log("Hey, my name is " + this.name + " and I am studying " + this.major + ".");
}
const std3 = new Student3("Student 3", 42, "CS");
std3.greeting();

function Professor3(name, age, department) {
    Person3.call(this, name, age);
    this.department = department;
}
Professor3.prototype = Object.create(Person3.prototype);
Professor3.prototype.salute = function() {
    console.log("Good day, my name is " + this.name + " and I am in the " + this.department + " department.");
};
const prof3 = new Professor3("Professor 3", 20, "CS");
prof3.salute();
