class Task {
    constructor() {
        this.tasks = [];
        this.addTask = (task) => {
            this.tasks.push(task);
            console.log(task + " has been added to the array!");
            return this.tasks.length;
        };
        this.listAllTasks = () => {
            this.tasks.forEach(element => {
                console.log(element);
            });
        };
        this.deleteTask = (task) => {
            if (this.tasks.includes(task)) {
                // find the index of the element
                let index = this.tasks.indexOf(task);
                this.tasks.splice(index, 1);
                console.log(task + " has been removed from the array");
            }
            else {
                console.log("The string " + task + " never existed in the array");
            }
            return this.tasks.length;
        };
    }
}
// Test my class
let myTask = new Task();
myTask.addTask("Squidward");
console.log(myTask.tasks.length);
myTask.addTask("Plankton");
console.log(myTask.tasks.length);
myTask.listAllTasks();
myTask.deleteTask("Mr. Krabs");
console.log(myTask.deleteTask("Plankton"));
