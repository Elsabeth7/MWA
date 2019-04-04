// use ES6 features
String.prototype.removeWords = function(badWords) {
    const updated = this.split(' ').map(w => {
        if(badWords.indexOf(w) !== -1) return "***"
        return w;
      }).join(' ')
      
      return updated;
  }
  
  let str = "This house is not good enough";
  let badWords = ['house', 'good'];
  

console.log(str.removeWords(badWords));
  
  
  //promises
  String.prototype.removeWords = function(badWords) {
      return new Promise((resolve, reject) => {
        const updated = this.split(' ').map(w => {
          if(badWords.indexOf(w) !== -1) return "***"
        return w;
      }).join(' ')
      
      resolve(updated);
    })
  }
  
  let str1 = "This house is not good enough";
  let badWords1 = ['house', 'good'];
  
 str1.removeWords(badWords1).then(console.log)

  //Async/Await
  async function test() {
    console.log(await str1.removeWords(badWords1));
  }

  test()
  
  //Observables
  const { from } = require('rxjs');
  from(str1.removeWords(badWords)).subscribe(console.log);


