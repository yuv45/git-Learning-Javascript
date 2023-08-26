// Create an object with the following functionality

// Ability to add 3 students details and their marks in 3 subjects
// Method to find the student with the least total.
// Method to find the student with the highest total.//


solution:-



 let details = 
  {
    data : [],
     addStudent : function(name,english,maths,science)
      {
        obj = {};
        obj.name = name;
        obj.english = english;
        obj.maths = maths;
        obj.science = science;

        this.data.push(obj)
      },
  
 

    print : function()
             {
  console.log(this.data)
            },
    maxmarks:function()
      {
       let max = -Infinity;
       let min=Infinity;
        let maxmarks;
        let minmarks;
        for(i=0;i<this.data.length;i++){
          let total=this.data[i].english+this.data[i].maths+
            this.data[i].science
          if(total>max){
            max=total;
            maxstudent=this.data[i].name;
          }
         else if(total>min);
          min=total;
          minstudent=this.data[i].name;
        }
        console.log("Student Name:"+minstudent," Minimum Total:"+ " " +min);
        console.log("Student Name:"+maxstudent," Maximum Total:"+" "+max);
      }
  }

details.addStudent("Vinay",90,95,98,96)
details.addStudent("Harsh",80,65,78,76)
details.addStudent("Ayush",70,55,88,86)
details.addStudent("Simran",60,75,48,88)
details.maxmarks()
