let API;
let cars = document.getElementById("feature_Cars");
let car_img = document.getElementById("car_img");
let listing_cars = document.getElementById("listing_cars");
async function getImgs(callback) {
   let api = await fetch("js/api.json");
   //   .then((response) => response.json())
   //   .then((API) => console.log(API))
   //   .catch((error) => console.error(error));
   API = await api.json();
   console.log(API);
   callback(API);
}

async function displayApi() {
   try {
      await getImgs(Display);
   } catch {
      error();
   }
}
displayApi();
function Display(API) {
   let display = "";
   let display_cars = "";
   for (var i = 0; i < API.length; i++) {
      display += `
    <div class="col-lg-5 p-4 mb-5">
    <a href="#">${API[i].Name}</a>
    <p class="feature">${API[i].Price}</p>
    <div class="row justify-content-between align-items-center">
       <div class="col-lg-6">
          <div class="img overflow-hidden">
             <img src="${API[i].img}" alt="" id="car_img" />
          </div>
       </div>
       <div class="col-lg-6">
          <div class="item">
             <p>
                <i class="fa-solid fa-car-rear"></i>Pieces of
                Luggage: ${API[i].Luggage}
             </p>
          </div>
          <div class="item">
             <p><i class="fa-solid fa-door-open"></i>Doors: ${API[i].Door}</p>
          </div>
          <div class="item">
             <p>
                <i class="fa-solid fa-chair"></i>Maximum
                Passenger: ${API[i].Passenger}
             </p>
          </div>
       </div>
    </div>
    <button class="btn">VIEW DETAILS</button>
    </div>`;
      display_cars += `<div class="col-lg-5">
    <div class="card">
       <img
          src="imgs/F12.jpg"
          class="card-img-top"
          alt="Your Image"
          style="width: 100%"
       />
       <div class="card-body">
          <h5 class="card-title">${API[i].Name}</h5>
          <p class="card-text text-primary">
          ${API[i].Price}
             <span class="text-black">/day</span>
          </p>
          <div class="">
             <div>
                <p>
                   <i class="fa-solid fa-car-rear"></i>
                   Pieces of Luggage: ${API[i].Luggage}
             </div>
             <div>
                <p>
                   <i class="fa-solid fa-door-open"></i>
                   Doors: ${API[i].Door}
                </p>
             </div>
             <div>
                <p>
                   <i class="fa-solid fa-chair"></i>
                   Max Passengers: ${API[i].Passenger}
                </p>
             </div>
          </div>
          <button
             class="btn w-100 rounded text-uppercase p-2"
          >
             view details
          </button>
       </div>
    </div>
 </div>`;
      // cars.csstest = ``;
   }
   cars.innerHTML = display;
}

$(".owl-carousel").owlCarousel({
   loop: true,
   margin: 10,
   nav: true,
   items: 1,
   dots: false,
   responsive: {
      // 0: {
      //    items: 1,
      // },
      500: {
         items: 1,
      },
   },
});
