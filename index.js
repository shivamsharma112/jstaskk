// console.log('wrh')
function fetch_detail(){
  let user_input  = document.getElementById("input").value;
  

  console.log(`Search code is ${user_input.toUpperCase()}`)
  let url = "data.json";

  fetch(url).then((response)=>{
    return response.json();
  }).then((user_data)=>{
    user_data.map(element=>{

      if(element.code == user_input.toUpperCase()){
        console.log(`Data found `);
        console.log(element);
        
      }
    })
  })
document.getElementById("input").value="";
}



