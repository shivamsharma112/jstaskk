function func(){
  let value = document.getElementById("inp").value;
   user_input =value.toUpperCase();
   console.log(`Search code is ${user_input}`)
  let url = "data.json";

  fetch(url).then((response)=>{
    return response.json();
  }).then((data)=>{
    data.map(element=>{

      if(element.code == user_input){
        console.log(`Data found `);
        console.log(element);
     
      }

    })
  })
}
// const data= require('./data.json');
//      let value="AAE";
//      data.map(x=>{
//     if(x.code==value){
//         console.log(x);
//     }
// });


