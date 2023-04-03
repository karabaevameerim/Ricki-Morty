let list = document.querySelector('.list');
let z = fetch('https://rickandmortyapi.com/api/character');
z.then((res) => {
  return res.json();
}).then((info) => {
  info.results.forEach((elem) => {
    list.innerHTML += `
  <li style = "font-size: 16px;list-style-type: none;display:flex;justify-content: space-between; margin-bottom: 18.2px;">${elem.name}</li>
  <img
          src="${elem.image}"  
          alt="image"
          width="50"
        />
 `;
  });
});
// fetch('https://rickandmortyapi.com/api/character').then((res) => {
//   return res.json();
// }).then((info) => {
  
   
//     fetch('http://localhost:8012/characters',{
//       method:"POST",
//       headers:{"Content-type": "application/json"},
//       body:JSON.stringify(info.results)})

//   });


let list2 = document.querySelector(".list2");
let results = fetch('http://localhost:8012/characters');
results.then((res)=>{
 res.json().then((data)=>{
  // console.log(data)
  data[0].forEach((e)=>{
    list2.innerHTML +=`<li style = "font-size: 16px;list-style-type: none;display:flex;justify-content: space-between  class="li1">${e.name}</li><br> <img width="50" src="${e.image}" class="imgList1">`
  })
 })
//   // console.log(res);
})