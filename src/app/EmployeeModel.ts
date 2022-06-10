export class EmployeeModel {

    name: String;
    gender: String;
    department: String;
    salary: number;
    notes: String
    profilePic: String;
constructor(name: String, gender: String, department: String,salary: number, notes: String,profilePic: String){
    this.name=name;
    this.gender=gender;
    this.department=department;
    this.salary=salary;
    this.notes=notes;
    this.profilePic=profilePic;
}
}