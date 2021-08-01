// promise == either Resolve or Reject 


let myPromise = new Promise(function(resolve, reject){

    let x = 100;

    if(x > 50){
        resolve('I kept my promise')
    } else{
        reject('Sorry I could not kep my promise')
    }
   
});

myPromise.then(
    function(res){
        console.log('I am from then method');
        console.log(res);
    }
).catch(
    function(err){
        console.log('I am from catch method');
        console.log(err);
    }
);



