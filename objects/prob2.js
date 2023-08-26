//Given an object of student grades and their marks in the mentioned below format, print the highest scored student for each grade along with the total// 


let arr=[
   {
		grade: "V",
		students: [
			{name: "Nrupul", marks: [10, 20, 30]},
			{name: "Prateek", marks: [20, 30, 40]}
		]
	},
	 {
		grade: "VI",
		students: [
			{name: "Aman", marks: [10, 20, 30]},
			{name: "Albert", marks: [20, 30, 40]}
		]
	},
	 {
		grade: "VII",
		students: [
			{name: "Yogesh", marks: [10, 20, 30]},
			{name: "Sandhya", marks: [20, 30, 40]}
		]
	}
]
  
    let box=[]

for(let i=0;i<arr.length;i++){
  for(let j=0;j<arr[i].students.length;j++){
    let total=0;
    for(let k=0;k<arr[i].students[j].marks.length;k++){
    let bag =arr[i].students[j].marks[k]
      total=total+bag
    }
    box.push(total);
  }
  if( box[0]>box[1]){
    console.log(arr[i].grade+"-"+arr[i].students[0].name +"-"+box[0]);
    }
  else{
    console.log(arr[i].grade+"-"+arr[i].students[1].name+"-"+box[1])
  }
}
 
