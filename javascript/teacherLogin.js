//Declearation of variables
let p;
let name = document.querySelector('#flux')
let password = document.querySelector('#flux1')
let form = document.querySelector('form')
let teachers = JSON.parse(localStorage.getItem('Teachers'))
let span = document.querySelector('span')
document.querySelector('body').addEventListener('click',function (e){
   console.log(e.target)
})
console.log(span)

//this validtes the user of the app on login
let valUser = function (e) {
   //prevents enpty fields
    if (name.value==''||password.value==''){
        span.textContent = 'fill up the fields' 
        e.preventDefault();
      //Directs admin login to principals dashboard  
     }else if (name.value=='Admin'&&password.value=='Admin'){
      form.action = 'principal.html'
     }else{
          teachers.forEach(teacher=> {
             //checks for correct teacher password
               if (teacher.username===name.value) {
                     p =teacher.password
                     e.preventDefault()
                     //checks for teachers gender and changer icon and title
                     if (teacher.gender==='female') {
                            document.querySelector('#ua').textContent = 'Aunty';
                            document.querySelector('#female').style.display = 'inline'; 
                            document.querySelector('#male').style.display = 'none'; }
                            document.querySelector('#nm')   .textContent = teacher.name;      
                            e.preventDefault()
                     }

               }
          )
        
        if (password.value!==p){
         span.textContent = 'wrong password'
         e.preventDefault()
        }else{
           document.querySelector('.lgin').style.display = 'none';
           document.querySelector('.tchr').style.display = 'block';
           e.preventDefault()
        }
    }
     
 };
 form.addEventListener('submit',valUser)