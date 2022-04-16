// Enter number only
let beven= (number)=>{
  try{
    if (number%2==0 && Number.isInteger(number)){
      return `${number} is even number`
    }else if(number%2==1 && Number.isInteger(number)){
      return `${number} is Odd number`
    }else{
      throw new Error(`${number} invalid input enter number only`)
    } 
  }catch(error){
     return error;
  }
}

module.exports= BEVEN