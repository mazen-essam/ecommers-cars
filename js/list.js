let API;
// let cars = document.getElementById("feature_Cars");
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
   for (var i = 0; i < API.length; i++) {
      display += `<div class="col-lg-5 mt-3 mb-4">
      <div class="card">
         <img
            src="${API[i].img}"
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
            <a href="./details.html">view Details</a>
            </button>
         </div>
      </div>
   </div>`;

      // cars.csstest = ``;
   }
   listing_cars.innerHTML = display;
}
