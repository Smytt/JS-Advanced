function personAndTeacher() {
    class Person {
        constructor(name, email) {
            this.name = name
            this.email = email
        }

        toString() {
            let keys = ''
            Object.keys(this).forEach(key => {
                keys += key + ": " + this[key] + ', '
            })

            return `${this.constructor.name} (${keys.substr(0, keys.length - 2)})`
        }
    }

    class Teacher extends Person {
        constructor (name, email, subject) {
            super(name, email);
            this.subject = subject
        }
    }

    class Student extends Person {
        constructor (name, email, course) {
            super(name, email);
            this.course = course
        }
    }

    return {
        Person,
        Student,
        Teacher
    }
}

let classes = personAndTeacher();
let Person = classes.Person;
let Teacher = classes.Teacher;
let Student = classes.Student;

let t = new Teacher("Gosho",'gosh@gosh.com',"Graphics");

console.log(t.toString())