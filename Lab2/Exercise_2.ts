// Similar outcome to exercise 1 but with the implementation of an interface 
// interface provides blueprints for the class
interface TaskInterface { 

    // array of strings
    tasks: string[];
    
    // functions
    addTask(task: string): number;
    listAllTasks(): void;
    deleteTask(task: string): number;
}

class Task implements TaskInterface { 
    tasks: string[] = [];

    addTask = (task:string):number => { 
        this.tasks.push(task);
        console.log(task + " has been added to the array!");
        return this.tasks.length;
    }

    listAllTasks = ():void => { 
        this.tasks.forEach(element => {
        console.log(element);
        });
    }

    deleteTask = (task:string):number => { 
        if(this.tasks.includes(task)) { 
            // find the index of the element
            let index = this.tasks.indexOf(task);
            this.tasks.splice(index, 1);
            console.log(task + " has been removed from the array");
        }
        else { 
            console.log("The string " + task + " never existed in the array");
        }
        return this.tasks.length;
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