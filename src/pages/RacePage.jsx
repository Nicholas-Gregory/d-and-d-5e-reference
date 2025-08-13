import { useParams } from "react-router";
import useResource from "../hooks/useResource";

export default function RacePage() {
  const { index } = useParams();

  const {
    loading: loadingRace,
    error: raceError,
    data: race
  } = useResource('races', index);

  if (loadingRace) {
    return <div>Loading...</div>;
  }
  if (raceError) {
    return <div>Error loading race: {raceError.message}</div>;
  }

  return (
    <div className="flex flex-col align-center gap-1 p-2">
      <h4>{race.name}</h4>

      <div className="flex flex-row gap-1 align-center">
        <h5>Speed:</h5>
        <span>{race.speed} ft.</span>
      </div>

      <div className="flex flex-col gap-1 align-center">
        <h5>Ability Bonuses:</h5>
        <ul>
          {race.ability_bonuses.map((bonus, index) => (
            <li key={index}>{bonus.ability_score.name}: +{bonus.bonus}</li>
          ))}
        </ul>
      </div>

      <div className="flex flex-row gap-1 align-center">
        <h5>Alignment:</h5>
        <p>{race.alignment}</p>
      </div>

      <div className="flex flex-row gap-1 align-center">
        <h5>Age:</h5>
        <p>{race.age}</p>
      </div>

      <div className="flex flex-row gap-1 align-center">
        <h5>Size:</h5>
        <span>{race.size}</span>
      </div>

      <div className="flex flex-row gap-1 align-center">
        <h5>Size Description:</h5>
        <p>{race.size_description}</p>
      </div>

      {race.languages.length > 0 && (
        <div className="flex flex-col gap-1 align-center">
          <h5>Languages:</h5>
          <ul>
            {race.languages.map((language, index) => (
              <li key={index}>{language.name}</li>
            ))}
          </ul>
        </div>
      )}

      <div className="flex flex-row gap-1 align-center">
        <h5>Language Description:</h5>
        <p>{race.language_desc}</p>
      </div>

      {race.traits.length > 0 && (
        <div className="flex flex-col gap-1 align-center">
          <h5>Traits:</h5>
          <ul>
            {race.traits.map((trait, index) => (
              <li key={index}>{trait.name}</li>
            ))}
          </ul>
        </div>
      )}

      {race.subraces.length > 0 && (
        <div className="flex flex-col gap-1 align-center">
          <h5>Subraces:</h5>
          <ul>
            {race.subraces.map((subrace, index) => (
              <li key={index}>{subrace.name}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
