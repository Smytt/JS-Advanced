class Task {
    constructor(title, deadline) {
        this.title = title
        this.status = 'Open'
        this.icons = {
            Open: "\u2731",
            InProgress: "\u219D",
            Complete: "\u2714",
            Overdue: "\u26A0"
        }
        this.deadline = deadline;
    }

    get deadline() {
        return this._deadline;
    }

    set deadline(value) {
        if (value < new Date())
            throw new Error('Invalid date')
        this._deadline = value;
    }

    get rank() {
        switch (this._status) {
            case 'Complete' :
                return 1
            case 'Open': {
                if (this.isOverdue) return 4
                return 2
            }
            case 'In Progress': {
                if (this.isOverdue) return 4
                return 3
            }
        }
    }

    get status() {
        if (this.isOverdue) return 'Overdue'
        return this._status;
    }

    set status(value) {
        this._status = value;
    }

    get isOverdue() {
        return new Date() > this._deadline && this._status !== 'Complete'
    }

    static comparator(a, b) {
        if (a.rank > b.rank) return -1
        if (a.rank < b.rank) return 1
        if (a.deadline > b.deadline) return 1
        if (a.deadline < b.deadline) return -1
        return 0
    }

    toString() {
        let isOverdue = ''
        if (this._status !== 'Complete')
            isOverdue = this.isOverdue ? ` (overdue)` : ` (deadline: ${this._deadline})`
        let str = `[${this.icons[this.status.replace(' ', '')]}] ${this.title}${isOverdue}`


        return str
    }
}

let date1 = new Date();
date1.setDate(date1.getDate() + 7); // Set date 7 days from now
let task1 = new Task('JS Homework', date1);
let date2 = new Date();
date2.setFullYear(date2.getFullYear() + 1); // Set date 1 year from now
let task2 = new Task('Start career', date2);
console.log(task1 + '\n' + task2);
let date3 = new Date();
date3.setDate(date3.getDate() + 3); // Set date 3 days from now
let task3 = new Task('football', date3);
// Create two tasks with deadline set to current time
let task4 = new Task('Task 4', new Date());
let task5 = new Task('Task 5', new Date());
task1.status = 'In Progress';
task3.status = 'In Progress';
task5.status = "Complete";
let tasks = [task1, task2, task3, task4, task5];
setTimeout(() => {
    tasks.sort(Task.comparator);
    console.log(tasks.join('\n'));
}, 1000); // Sort and print one second later

// should throw an Error
// let overdueTask = new Task('Overdue Task', new Date(2005, '4', '20'));
// should throw an Error
// task1.deadline = new Date(2005, '4', '20');