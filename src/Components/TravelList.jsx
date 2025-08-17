import travelPlansData from "../assets/travel-plans.json";


function TravelList() {
// let travelPlan
// if (travelPlan <= 350){
//     Great Deal 

//     if (travelPlan >= 1500){
//         Plan Premium
//     }
// }
// }

//conditional rendering en react, dentro del return, abrir una llave, poner una condicion booleana
  return (
    <div className="main-container">
      
        {travelPlansData.map((eachElement) => {
          return (
            <div className="each-card">
              <img src={eachElement.image}></img>
              <div>
                <h3>{eachElement.destination}</h3>
                <p>{eachElement.description}</p>
                <p><span>Price:</span> {eachElement.totalCost}€</p>
              </div>
            </div>

          );
        })}
      </div>
   {travelPlan <= 350 ? <Great Deal/> : <Premium />}
  );
}

export default TravelList;


// Update the TravelList component to display labels based on the cost (totalCost property) of each travel plan. Here’s how you should implement it:

// Travel plans that cost 350 or less should have a label Great Deal.

// Travel plans that cost 1500 or more should have the label Premium.


// Additionally, if the travel plan includes an all-inclusive package (allInclusive property), render a label All Inclusive in addition to the cost label.

