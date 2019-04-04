//a. dns corre module,resolve4() 
const dns = require('dns');
dns.resolve4('http://www.mum.edu/',(err,data)=>{
    if(err){
        console.log(err.message);
    }else{
    console.log(data);
    }
});

//b. convert the callback function to promise object
const {promisify} = require ('util');
const fs = require('fs');
const readResolver4 = promisify(dns.resolve4);
readResolver4('http://www.mum.edu/')
.then((data)=> console.log(data))
.catch((err)=>console.log(err.message));

//c. converitng to async/await
async function asynAwaitFunction(){
try {
    const readResolver4 = promisify(dns.resolve4);
const data = await readResolver4('http://www.mum.edu/');
console.log(data);


} catch (error) {
    console.log(error.message);
}
}

asynAwaitFunction('http://www.mum.edu/');
