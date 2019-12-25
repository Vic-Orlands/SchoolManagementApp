 // declaration of variables
 let Students
 let subjects = ["Mathematics","English"]
 let surename = document.querySelector('#size1');
 let middlename = document.querySelector('#size2');
 let userName = document.querySelector('#size3');
 let lastName = document.querySelector('#size3');
 let button = document.querySelector('button');
 let ss1 = document.querySelector('#ss1');
 let ss2 = document.querySelector('#ss2');
 let ss3 = document.querySelector('#ss3');
 let male = document.querySelector('#male');
 let female = document.querySelector('#female');
 let DOB = document.querySelector('#dob');
 

//choosing subjects
 let subChs = function (e) {setTimeout(console.log,500,subjects)

    if (e.target.checked!==true&&e.target.checked!==undefined){
    subjects.push(e.target.value);
  }else if(subjects.indexOf(e.target.value)!==-1){
     
      subjects.splice(subjects.indexOf(e.target.value),1);
  };
  
 };
 document.querySelector('.sub').addEventListener('mouseup',subChs)
 
//this function creates students
 let crtStdnt = function () {
     if(surename.value==''||middlename.value==''||lastName.value==''||DOB.value==''){
     document.querySelector('i span').textContent = 'please fill the required field'    
     }else if(subjects.length!==9){
        document.querySelector('i span').textContent = 'choose 9 subjetcs'    

    }else if(!subjects.includes('Mathematics')||!subjects.includes('English')){
        document.querySelector('i span').textContent = 'choose English and Mathematics' 
    }else{
        document.querySelector('i span').textContent = 'updated' 
        //validating the gender
        let gender;
        if (male.checked===true) {
            gender='male'
        }else{
            gender='female'
        };

        //validating the class
        if(ss1.selected===true){
            clas = 'SS1';
        }else if(ss2.selected===true){
            clas = 'SS2';
        }else if(ss3.selected===true){
            clas = 'SS3';
        };

            
        //details of each student

        let student ={};
        student.name =`${surename.value.trim()} ${middlename.value.trim()} ${lastName.value.trim()}`;
        student.gender = gender;
        student.DOB = DOB.value;
        student.class = clas;
        student.subject = subjects;

        if (localStorage.getItem('Students')===null) {
            Students = [];
        }else{
            Students = JSON.parse(localStorage.getItem('Students'))
        };
        Students.push(student);
        localStorage.setItem('Students',JSON.stringify(Students));

        //clearing the fields after update
        surename.value =''
        middlename.value ='';
        lastName.value ='';
        DOB.value ='';
     };
    
 };
 button.addEventListener('click',crtStdnt)