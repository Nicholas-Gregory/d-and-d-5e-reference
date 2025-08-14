import { useParams } from "react-router";
import useResource from "../hooks/useResource";

export default function TraitPage() {
  const { index } = useParams();

  const {
    loading: loadingTrait,
    error: traitError,
    data: trait
  } = useResource('traits', index);

  if (loadingTrait) {
    return <div>Loading...</div>;
  }
  if (traitError) {
    return <div>Error loading trait: {traitError.message}</div>;
  }

  return (
    <div className="flex flex-col align-center gap-1 p-2">
      <h4>{trait.name}</h4>

      {trait.desc && (
        <div className="flex flex-col gap-1 align-center">
          <h5>Description:</h5>
          {trait.desc.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      )}

      {trait.races && trait.races.length > 0 && (
        <div className="flex flex-col gap-1 align-center">
          <h5>Races:</h5>
          <ul>
            {trait.races.map((race, index) => (
              <li key={index}>{race.name}</li>
            ))}
          </ul>
        </div>
      )}

      {trait.proficiencies && trait.proficiencies.length > 0 && (
        <div className="flex flex-col gap-1 align-center">
          <h5>Proficiencies:</h5>
          <ul>
            {trait.proficiencies.map((proficiency, index) => (
              <li key={index}>{proficiency.name}</li>
            ))}
          </ul>
        </div>
      )}

      {trait.traits && trait.traits.length > 0 && (
        <div className="flex flex-col gap-1 align-center">
          <h5>Sub-Traits:</h5>
          <ul>
            {trait.traits.map((subTrait, index) => (
              <li key={index}>{subTrait.name}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}