// /* eslint-disable react/prop-types */

// const PlaceTree = ({ place }) => {
//   const childPlaces = place.childPlaces;
//   return (
//     <li>
//       {place.title}
//       {childPlaces.length > 0 && (
//         <ol>
//           {childPlaces.map((place) => (
//             <PlaceTree key={place.id} place={place} />
//           ))}
//         </ol>
//       )}
//     </li>
//   );
// };

// export default PlaceTree;

/* eslint-disable react/prop-types */

const PlaceTree = ({ id, placesById, onComplete, parentId }) => {
  const place = placesById[id];
  const childIds = place.childIds;
  return (
    <li>
      {place.title}{" "}
      <button onClick={() => onComplete(parentId, id)}>Complete</button>
      {childIds.length > 0 && (
        <ol>
          {childIds.map((id) => (
            <PlaceTree
              key={id}
              id={id}
              parentId={parentId}
              placesById={placesById}
              onComplete={onComplete}
            />
          ))}
        </ol>
      )}
    </li>
  );
};

export default PlaceTree;
