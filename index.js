let bapi= async(data)=>{
  await fetch(data)
  .then(response => {return response.json()})
  .then(data => console.error(data));
}

module.exports= bapi  