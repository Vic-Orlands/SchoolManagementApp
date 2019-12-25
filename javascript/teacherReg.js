
        
       
        // declaration of variables
        let Teachers
        let lastName = document.querySelector('#size2');
        let userName = document.querySelector('#size3')
        let firstName = document.querySelector('#size1');
        let phone = document.querySelector('#size4');
        let password = document.querySelector('#size5');
        let cmfpassword = document.querySelector('#size6');
        let subject = document.querySelector('#size7');
        let yes = document.querySelector('#yes');
        let no = document.querySelector('#no');
        let male = document.querySelector('#male');
        let female = document.querySelector('#female');

        // the function creates a teacher and add to the database.
        let crtTchr = function (e) {
            //validating the gender
            let gender;
            if (male.checked===true) {
                gender='male'
            }else{
                gender='female'
            };
          
            //validating the form teacher
            let formt;
            if(yes.checked===true){
                formt='yes'
            }else{
                formt='no'
            } 
           
            // validating the required fields
            if (phone.style.color == 'red'||name.value ==''||phone.value ==''||password.value ==''||subject.value ==''||cmfpassword.value==''||userName.style.color == 'red'||userName.value ==''){
                document.querySelector('.form span').textContent = 'fill all required field!!!'
            }else{
                document.querySelector('.form span').textContent = ''
            // Details of each teacher
                let teacher = {};
                teacher.name = `${firstName.value.trim()} ${lastName.value.trim()}`;
                teacher.username = userName.value.trim();
                teacher.gender= gender;
                teacher.phone = phone.value.trim();
                teacher.password = password.value.trim();
                teacher.subject = subject.value.trim();
                teacher.formTeacher = formt;
                

                if(localStorage.getItem('Teachers') === null) {
                    Teachers = [];
                }else{
                    Teachers = JSON.parse(localStorage.getItem('Teachers'))  
                };
                Teachers.push(teacher);
                localStorage.setItem('Teachers',JSON.stringify(Teachers));
            
                //clearing the input after sign up
                userName.value ='';
                lastName.value ='';
                firstName.value ='';
                phone.value ='';
                password.value ='';
                subject.value ='';
                cmfpassword.value='';
            }
            document.querySelector('.form span').textContent = 'application successful';
        }       
        document.querySelector('.btn').addEventListener('click',crtTchr);
       
          //passward and confirm password reconcillation
          let passcnf = function (){
        if(password.value!== cmfpassword.value) {
            cmfpassword.value='';
            document.querySelector('.conpass span').textContent = 'passwords do not match!!!';
        }else{
            document.querySelector('.conpass span').textContent = '';
        }

          };

        //Checking if a Usernmae already exists in the data base  
        let userNmVal = function () {
            Teachers = JSON.parse(localStorage.getItem('Teachers'));
            Teachers.forEach(teacher=>{
               if(teacher.username==userName.value.trim()) {
                   document.querySelector('.user span').textContent = 'username already exists!!!';
                   userName.style.color = 'red';
               }else{
                document.querySelector('.user span').textContent = '';
                userName.style.color = 'black';                   
               }
            })
        }
        //Checking if a Number already exists in the data base
        let phnVal = function () {
            Teachers = JSON.parse(localStorage.getItem('Teachers'));
            Teachers.forEach(teacher=>{
               if(teacher.phone==phone.value.trim()) {
                   document.querySelector('.phone span').textContent = 'phone number already exists!!!';
                   phone.style.color = 'red';
               }else{
                document.querySelector('.phone span').textContent = '';
                phone.style.color = 'black';                   
               }
            })
        }
        phone.addEventListener('blur',phnVal);
        userName.addEventListener('blur',userNmVal);
        cmfpassword.addEventListener('blur',passcnf);
        