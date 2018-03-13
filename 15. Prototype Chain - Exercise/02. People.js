function solve() {
    class Employee {
        constructor(name, age) {
            if (new.target === Employee) {
                throw new Error('Cannot initialize abstract class')
            }
            this.name = name
            this.age = age
            this.salary = 0
            this.tasks = []
            this.currentTask = 0
        }

        work() {
            console.log(this.tasks[this.currentTask++])
            this.currentTask = this.currentTask % this.tasks.length
        }

        collectSalary() {
            console.log(`${this.name} received ${this.salary} this month.`)
        }
    }

    class Junior extends Employee {
        constructor(name, age) {
            super(name, age)
            this.tasks = [`${this.name} is working on a simple task.`]
        }
    }

    class Senior extends Employee {
        constructor(name, age) {
            super(name, age)
            this.tasks = [`${this.name} is working on a complicated task.`,
                `${this.name} is taking time off work.`,
                `${this.name} is supervising junior workers.`,]
        }
    }

    class Manager extends Employee {
        constructor(name, age, tasks) {
            super(name, age)
            this.dividend = 0
            this.tasks = [`${this.name} scheduled a meeting.`,
                `${this.name} is preparing a quarterly report.`,]
        }

        collectSalary() {
            console.log(`${this.name} received ${this.salary + this.dividend} this month.`)
        }
    }

    return {
        Employee,
        Junior,
        Senior,
        Manager
    }
}

result = solve();

var guy1 = new result.Junior('dragan', 23);
var guy1parent = Object.getPrototypeOf(Object.getPrototypeOf(guy1));
var guy2 = new result.Senior('petkan', 24);
var guy2parent = Object.getPrototypeOf(Object.getPrototypeOf(guy2));
var guy3 = new result.Manager('bojan', 25);
var guy3parent = Object.getPrototypeOf(Object.getPrototypeOf(guy3));

guy1.salary = 1000;
guy2.salary = 2000;
guy3.salary = 3000;
guy3.dividend = 500;

guy3.collectSalary()