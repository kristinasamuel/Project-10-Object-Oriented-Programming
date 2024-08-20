#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
class Student {
    name;
    constructor(n) {
        this.name = n;
    }
}
class Person {
    students = [];
    addStudent(obj) {
        this.students.push(obj);
    }
}
console.log(chalk.bold.redBright("\n\tWelcome to the Object Priented Program!\t\n"));
const persons = new Person();
const programStart = async (persons) => {
    do {
        const answers = await inquirer.prompt({
            name: "Select",
            type: "list",
            message: chalk.italic.yellow("Whom would you like to interect"),
            choices: ["staff", "student", "exit"]
        });
        if (answers.Select == "staff") {
            console.log(chalk.magenta("You approach the staff room,please feel free to ask any question"));
        }
        else if (answers.Select == "student") {
            const answers = await inquirer.prompt({
                name: "student",
                type: "input",
                message: chalk.blue("Enter the student's name you wish to engage with ")
            });
            const student = persons.students.find(val => val.name == answers.student);
            if (!student) {
                const name = new Student(answers.student);
                persons.addStudent(name);
                console.log(chalk.green(`hello i am ${name.name}, Nice to meet you!`));
                console.log(chalk.whiteBright("New Student added"));
                console.log(chalk.red("Current Student List"));
                console.log(persons.students);
            }
            else {
                console.log(chalk.cyanBright(`hello i am ${student.name}, Nice to see you again!`));
                console.log(chalk.green("Existing student list:"));
                console.log(persons.students);
            }
        }
        else if (answers.Select == "exit") {
            console.log(chalk.cyanBright("\n***** Exiting the program *******"));
            process.exit();
        }
    } while (true);
};
programStart(persons);
