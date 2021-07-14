const readlineSync = require("readline-sync");

let emp=[
    {
        id: 1,
        name: "Sameer",
        dept: "Computer"
    }
];

while(1){
    console.log("Please Enter your operation");
    let operation = readlineSync.question("1. Create Employee... 2. Edit Employee... 3. Delete Employee... 4. Show Employees... 5. Exit ");
    if(operation==1){
        [id,name,dept]=valueInputter();
        emp.push({id:id,name:name,dept:dept});
    }
    else if(operation==2){
        [id,name,dept]=valueInputter();
        let found=0;
        emp.map(employee=>{
            if(employee.id==id){
                found=1;
                employee.name=name;
                employee.dept=dept
            }
        })
        if(found==0){
            console.log("Employee not found");
        }
    }
    else if(operation==3){
        let removeid=readlineSync.question("Enter id");
        emp=emp.filter(employee=>employee.id!=removeid);
    }
    else if(operation==4){
        emp.map(employees=>{
            console.log(employees.id,employees.name,employees.dept)
        })
    }
    else{
        process.sig
        process.exit(0);
    }
}

function valueInputter(){
    let id = readlineSync.question("Enter id ");
    let name = readlineSync.question("Enter Name ");
    let dept = readlineSync.question("Enter Department ");
    return [id,name,dept]
}