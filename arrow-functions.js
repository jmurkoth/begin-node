var square = (x) =>  x * x;
   
console.log(square(9));

var user = {
    name: 'Andrew',
    sayHi:()=>{
        console.log('Hi');
    }
  };
user.sayHi();

var getUser =(userId,callback)=>{
    var user={id :userId, name:"Jeevan"};
    setTimeout(() => {    callback(user);  }, 3000);
}

getUser(32,(user)=>{
 console.log(user);
});