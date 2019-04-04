

Array.prototype.even = async function(){
    return (this.filter(e => e%2==0))
}
//using promise
Array.prototype.evenP =  function(){
    return new Promise ((resolve,reject)=>{
        resolve(this.filter(e => e%2==0))
  
    })
    
}


Array.prototype.odd = async function(){
    return (this.filter(e => e%2==1))
}

const arr = [1,2,3,4,5,6,7,8];


console.log('Start');
arr.even()
.then(console.log);
arr.odd().then(console.log);
console.log('Done');
//using promise

arr.evenP().then(console.log);