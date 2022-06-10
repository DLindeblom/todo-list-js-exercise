//function to keep track of tasks and completion
function newTask(title, description) {
  const task = {
    title: title,
    description: description,
    complete: false,

    // moved the log function into objhect as method to track each task
    logState: function() {
      console.log(`${this.title} has${this.complete ? " " : " not "}been completed`);
    },

    //methood when called changes the propety of false to true, marking the task complete
    markComplete: function() {
      this.complete = true;
    }
  };
  return task;
}



// DRIVER CODE BELOW

const task1 = newTask("Clean cat litter", "Take all the poop out of the litter box");
const task2 = newTask("Do laundry", "😨");
const tasks = [task1, task2];

// newTask("Clean Cat Litter"); // task 0
// newTask("Do Laundry"); // task 1

task1.logState(); // Clean Cat Litter has not been completed
task1.markComplete();
task1.logState(); // Clean Cat Litter has been completed
