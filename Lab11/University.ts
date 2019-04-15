class University {
    name: String;
    dept: String;

    constructor(name: String, dept: String){
        this.name = name;
        this.dept = dept;
    }
    graduation(year: number):void {
        console.log(`Graduation ${this.dept} ${year} student`);
    }
    
}

let mum  = new University("MUM", "Computer Science");
mum.graduation(2020);
