// import { useState } from "react";
// import { initialTravelPlan } from "../data/places";
// import PlaceTree from "./PlaceTree";

// const TravelPlan = () => {
//   const [plan, setPlan] = useState(initialTravelPlan);

//   const planets = plan.childPlaces;
//   return (
//     <>
//       <h2>Places to visit</h2>
//       <ol>
//         {planets.map((place) => (
//           <PlaceTree key={place.id} place={place} />
//         ))}
//       </ol>
//     </>
//   );
// };

// export default TravelPlan;

import { useState } from "react";
import { initialTravelPlan } from "../data/places-normalization";
import PlaceTree from "./PlaceTree";

const TravelPlan = () => {
  const [plan, setPlan] = useState(initialTravelPlan);

  const root = plan[0];

  const planetIds = root.childIds;

  const handleComplete = (parentId, childId) => {
    const parent = plan[parentId];
    const nextParent = {
      ...parent,
      childIds: parent.childIds.filter((id) => id !== childId),
    };
    setPlan({
      ...plan,
      [parentId]: nextParent,
    });
  };
  return (
    <>
      <h2>Places to visit</h2>
      <ol>
        {planetIds.map((placeId) => (
          <PlaceTree
            key={placeId}
            id={placeId}
            placesById={plan}
            onComplete={handleComplete}
            parentId={0}
          />
        ))}
      </ol>
    </>
  );
};

export default TravelPlan;
