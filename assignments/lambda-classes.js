// CODE here for your Lambda Classes

class Person {
    constructor(attributes){
        this.name = attributes.name;
        this.age = attributes.age;
        this.location = attributes.location;
        this.gender = attributes.gender;
    }

    speak() {
        console.log(`Hello my name is ${this.name}, I am from ${this.location}`);
    }
}

class Instructor extends Person{
    constructor(attributes){
        super(attributes);
        this.specialty = attributes.specialty;
        this.favLanguage = attributes.favLanguage;
        this.catchPhrase = attributes.catchPhrase;
    }

    demo(subject){
        console.log(`Today we are learning about ${subject}`);
    }

    grade(student, subject){
        console.log(`${student.name} receives a perfect score on ${subject}`);
    }

    changeGrade(student, typeOfChange){
        const changeAmt = Math.floor(student.grade * Math.random());
        if(typeOfChange === "subtract"){
            student.grade -= changeAmt;
            console.log(`${student.name}'s grade was ${typeOfChange}ed by ${changeAmt}.`);
        } else if(typeOfChange === "add"){
            student.grade += changeAmt;
            console.log(`${student.name}'s grade was ${typeOfChange}ed by ${changeAmt}.`);
        } else{
            console.log("Need to input whether you want to subtract/add to the grade");
        }
    }
}


class Student extends Person{
    constructor(attributes){
        super(attributes);
        this.previousBackground = attributes.previousBackground;
        this.className = attributes.className;
        this.favSubjects = attributes.favSubjects;
        this.grade = attributes.grade;
    }

    listsSubjects(){
        console.log(...this.favSubjects);
    }

    PRAssignment(subject){
        console.log(`${this.name} has submitted a PR for ${subject}`);
    }

    sprintChallenge(subject){
        console.log(`${this.name} has begun sprint challenge on ${subject}`);
    }

    graduate(){
        if(this.grade > 70){
            console.log("You passed!");
        } else {
            console.log("You need to redo some assignments.");
        }
    }
}

class ProjectManager extends Instructor{
    constructor(attributes){
        super(attributes);
        this.gradClassName = attributes.gradClassName;
        this.favInstructor = attributes.favInstructor;
    }

    standUp(channel){
        console.log(`${this.name} announces to ${channel}, @channel standy times!​​​​​`);
    }

    debugsCode(student, subject){
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}`);
    }
}


//tests Person Class
let guy = {
    name: "Joe",
    age: 40,
    location: "Montreal",
    gender: "Male"
};

const averageJoe = new Person(guy);
averageJoe.speak();



//tests student class
let student = {
    name: "Joe",
    age: 40,
    location: "Montreal",
    gender: "Male"
}

student.previousBackground = "chemist";
student.className = "web17";
student.favSubjects = ['Html', 'CSS', 'JavaScript'];
student.grade = 85;

const studentOne = new Student(student);

studentOne.listsSubjects();
studentOne.PRAssignment("Math");
studentOne.sprintChallenge("Math");
studentOne.graduate();



// tests Instructor class
let instructor = {
    name: "Joe",
    age: 40,
    location: "Montreal",
    gender: "Male"
}

instructor.specialty = "front-end";
instructor.favLanguage = "Python";
instructor.catchPhrase = "hey";

const instructOne = new Instructor(instructor);

instructOne.demo("Math");
instructOne.grade(student, "math")
instructOne.changeGrade(student, "subtract");
instructOne.changeGrade(student, "add");
instructOne.changeGrade(student, "nothing");



//tests PM class
let pm = {
    name: "Joe",
    age: 40,
    location: "Montreal",
    gender: "Male"
}

pm.gradClassname = "web14";
pm.favInstructor = "Josh";

const pmOne = new ProjectManager(pm);

pmOne.standUp("web17");
pmOne.debugsCode(student, "math");
pmOne.changeGrade(student, "subtract");
pmOne.changeGrade(student, "add");
pmOne.changeGrade(student, "nothing");