class Prime {
 primes = [];   
  isPrime(num) {
   return num == 2 
  

}
  getNthPrime(num) {    
   let numToCheck = 2;
   while (this.primes.length < num ){
     let isPrimeFlag = true;
     for (let i = 2; i < numToCheck; i ++){
        if(numToCheck % i == 0){    
            isPrimeFlag = false;         
            break;            
        }
     } 
     if (isPrimeFlag == true){
        this.primes.push(numToCheck);
     }
     numToCheck ++
   }


   return this.primes;
}
}


const bill = new Prime();
const total = bill.getNthPrime(20).reduce((acc,cur) => acc+cur, 0)/ 20
console.log(bill.getNthPrime(20), "yo", total.toFixed())

module.exports = Prime;


// a whole number greater than 1 that cannot be exactly divided 
// by any whole number other than itself and 1 (e.g. 2, 3, 5, 7, 11).
// "prime numbers are very useful in cryptography"