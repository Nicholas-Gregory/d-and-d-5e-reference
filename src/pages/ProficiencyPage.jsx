import { useParams } from "react-router";
import useResource from "../hooks/useResource";

export default function ProficiencyPage() {
  const { index } = useParams();

  const {
    loading: loadingProficiency,
    error: proficiencyError,
    data: proficiency
  } = useResource('proficiencies', index);

  if (loadingProficiency) {
    return <div>Loading...</div>;
  }
  if (proficiencyError) {
    return <div>Error loading proficiency: {proficiencyError.message}</div>;
  }

  return (
    <div className="flex flex-col align-center gap-1 p-2">
      <h4>{proficiency.name}</h4>

      <div className="flex flex-row gap-1 align-center">
        <h5>Type:</h5>
        <span>{proficiency.type}</span>
      </div>

      {proficiency.classes.length > 0 && (
        <div className="flex flex-col gap-1 align-center">
          <h5>Classes:</h5>
          <ul>
            {proficiency.classes.map((cls) => (
              <li key={cls.index}>{cls.name}</li>
            ))}
          </ul>
        </div>
      )}

      {proficiency.races.length > 0 && (
        <div className="flex flex-col gap-1 align-center">
          <h5>Races:</h5>
          <ul>
            {proficiency.races.map((race) => (
              <li key={race.index}>{race.name}</li>
            ))}
          </ul>
        </div>
      )}

      {proficiency.reference && (
        <div className="flex flex-row gap-1 align-center">
          <h5>Reference:</h5>
          <span>{proficiency.reference.name}</span>
        </div>
      )}
    </div>
  );
}
