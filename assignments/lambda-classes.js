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
}


class Student extends Person{
    constructor(attributes){
        super(attributes);
        this.previousBackground = attributes.previousBackground;
        this.className = attributes.className;
        this.favSubjects = attributes.favSubjects;
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
        console.log(`${this.name} debugs ${student.name}'s code on ${this.subject}`);
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

const studentOne = new Student(student);

studentOne.listsSubjects();
studentOne.PRAssignment("Math");
studentOne.sprintChallenge("Math");


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