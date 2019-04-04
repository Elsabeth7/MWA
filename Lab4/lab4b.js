//how to get info from current os
const os = require('os');

const totalMemory = os.totalmem();
const cores = os.cpus();

(function () {
    console.log('Checking your system....')

    if((totalMemory * 1e-9) < 4){
        console.log('This app needs at least 4 GB of RAMA')
        return;
    }

    if(cores < 2){
        console.log('Processor is not supported')
        return
    }

    console.log('System is checked successfully')
})()
