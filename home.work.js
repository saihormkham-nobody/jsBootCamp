const studentList = [
    {name: "Kyaw", gender:"F", age:21, GPA:4.0},
    {name: "Kyaw", gender:"F", age:21},
    {name: "Kyaw", gender:"F", age:21},
    {name: "Kyaw", gender:"F", age:21},
    {name: "Kyaw", gender:"F"},
    {name: "Kyaw", gender:"F"},
    {name: "Kyaw", gender:"F"},
    {name: "Kyaw", gender:"M"},
    {name: "Kyaw", gender:"M"},
    {name: "Kyaw", gender:"M"},
];

const filter = (list,callBack)=>{

}

const maleStudentList = filter(studentList, (e)=>{return e.gender === "M"})
// [{name: "Kyaw", gender:"M"},{name: "Kyaw", gender:"M"},{name: "Kyaw", gender:"M"}]

const studentOver18;

const maleStudentOver18;

const studentNameWhoHasJohn;

const qualifiedStudent;
// over 18, under 25, GPA > 3