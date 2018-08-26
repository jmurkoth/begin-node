var somePromise = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        //resolve('Hey this worked');
        reject('Something bad happened');
    },2500);

});
somePromise.then((message)=>{
    console.log(message);
}, (errormessage)=>{
    console.log(`ERROR : ${errormessage}`);
});


var add = (a,b)=> new Promise(
    (resolve, reject)=>{
      if (typeof a ==='number' && typeof b ==='number')
      {
          resolve( a + b);
      }else{
          reject('Arguments must be numbers');
      }

    });

add('l','m').then((message)=>{
    console.log(message);
},(error)=>{
    console.log(error);
});
add(2,4).then((message)=>{
    console.log(message);
},(error)=>{
    console.log(error);
});