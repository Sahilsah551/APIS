async function makeupdata(){
    let response=await fetch("http://makeup-api.herokuapp.com/api/v1/products.json");
    console.log(response)
    let data=await response.json();
    console.log(data)
    let display="";
    data.map((values)=>{
        display +=`
        <div class="card-group">
        <div class="card">
          <img src="${values.image_link}" class="card-img-top" alt="">
          <div class="card-body">
            <h1 class="card-title">${values.brand}</h1>
            <h3 class="card-text">${values.price}</h3>
            <p class="card-text"><small class="text-body-secondary">${values.description}</small></p>
          </div>
        </div>
        `
        
      

    })
    document.getElementById("root").innerHTML=display;
}
makeupdata();