#! /usr/bin/env node

import inquirer from "inquirer";

let task : any[] = [];

let exit;

while (exit !== "Exit") {
    let operations = await inquirer.prompt({
        message:"What would you like to do ?",
        type:"list",
        choices:["Add Task", "View Task", "Edit Task","Delete Task", "Exit"],
        name:"operation"
    })

// Exit code
    if (operations.operation === "Exit") {
        console.log("Exiting the application.");
        exit ="Exit";
    }

//View Task
    else if (operations.operation === "View Task") {
        if (task.length === 0) {
            console.log("No task to view");
        }
        else{
            console.log(task);
        }
        
    }

//Add Task
    else if (operations.operation === "Add Task") {
        let addTask = await  inquirer.prompt({
            message:"Add your task",
            type:"input",
            name:"newTask"
        })
        task.push(addTask.newTask);
        console.log(`${addTask.newTask} has been added`);

    }

 //Edit Task
    else if (operations.operation === "Edit Task") {
        let taskEdit = await inquirer.prompt({
            message:"Enter the task you want to edit ?",
            type:"input",
            name:"editTask"
        })

        if(task.includes(taskEdit.editTask)) {

            console.log("Task Edited");

            let newTask = await inquirer.prompt({
                message:"Enter new task",
                type:"input",
                name:"newTask",
            })
            let itemIndex = task.indexOf(taskEdit.editTask);            
            task[itemIndex] = newTask.newTask;
            console.log(`${taskEdit.editTask} has been edited into ${newTask.newTask}`);
        }

        else {
            console.log("Task not found");
        }
    }

 //Delete Task
    else if (operations.operation === "Delete Task") {
        let deleteOperation = await  inquirer.prompt({
            message:"Enter the task you want to delete",
            type:"input",
            name:"removeTask"
        })
        if (task.includes(deleteOperation.removeTask)){
            let itemIndex = task.indexOf(deleteOperation.removeTask);
            task.splice(itemIndex,1); 
            console.log(`${deleteOperation.removeTask} has been removed`)
        }
        else {
            console.log("Task not found");
        }
        }

      
}


