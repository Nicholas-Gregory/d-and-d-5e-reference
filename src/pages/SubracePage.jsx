import { useParams } from "react-router";
import useResource from "../hooks/useResource";

export default function SubracePage() {
  const { index } = useParams();

  const {
    loading: loadingSubrace,
    error: subraceError,
    data: subrace
  } = useResource('subraces', index);

  if (loadingSubrace) {
    return <div>Loading...</div>;
  }
  if (subraceError) {
    return <div>Error loading subrace: {subraceError.message}</div>;
  }

  return (
    <div className="flex flex-col align-center gap-1 p-2">
      <h4>{subrace.name}</h4>

      <div className="flex flex-row gap-1 align-center">
        <h5>Parent Race:</h5>
        <span>{subrace.race.name}</span>
      </div>

      <div className="flex flex-col gap-1 align-center">
        <h5>Description:</h5>
        <p>{subrace.desc}</p>
      </div>

      {subrace.ability_bonuses.length > 0 && (
        <div className="flex flex-col gap-1 align-center">
          <h5>Ability Bonuses:</h5>
          <ul>
            {subrace.ability_bonuses.map((bonus, index) => (
              <li key={index}>{bonus.ability_score.name}: +{bonus.bonus}</li>
            ))}
          </ul>
        </div>
      )}

      {subrace.starting_proficiencies.length > 0 && (
        <div className="flex flex-col gap-1 align-center">
          <h5>Starting Proficiencies:</h5>
          <ul>
            {subrace.starting_proficiencies.map((proficiency, index) => (
              <li key={index}>{proficiency.name}</li>
            ))}
          </ul>
        </div>
      )}

      {subrace.traits?.length > 0 && (
        <div className="flex flex-col gap-1 align-center">
          <h5>Traits:</h5>
          <ul>
            {subrace.traits.map((trait, index) => (
              <li key={index}>{trait.name}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}