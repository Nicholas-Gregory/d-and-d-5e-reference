import { useParams } from "react-router";
import useResource from "../hooks/useResource";

export default function SpellPage() {
  const { index } = useParams();

  const {
    loading: loadingSpell,
    error: spellError,
    data: spell
  } = useResource('spells', index);

  if (loadingSpell) {
    return <div>Loading...</div>;
  }
  if (spellError) {
    return <div>Error loading spell: {spellError.message}</div>;
  }

  return (
    <div className="flex flex-col align-center gap-1 p-2">
      <h4>{spell.name}</h4>

      <div className="flex flex-row gap-1 align-center">
        <h5>Level:</h5>
        <span>{spell.level}</span>
      </div>

      <div className="flex flex-row gap-1 align-center">
        <h5>School:</h5>
        <span>{spell.school.name}</span>
      </div>

      <div className="flex flex-row gap-1 align-center">
        <h5>Range:</h5>
        <span>{spell.range}</span>
      </div>

      <div className="flex flex-row gap-1 align-center">
        <h5>Components:</h5>
        <span>{spell.components.join(', ')}</span>
      </div>

      {spell.material && (
        <div className="flex flex-row gap-1 align-center">
          <h5>Material:</h5>
          <span>{spell.material}</span>
        </div>
      )}

      <div className="flex flex-row gap-1 align-center">
        <h5>Duration:</h5>
        <span>{spell.duration}</span>
      </div>

      <div className="flex flex-row gap-1 align-center">
        <h5>Casting Time:</h5>
        <span>{spell.casting_time}</span>
      </div>

      {spell.desc && (
        <div className="flex flex-col gap-1 align-center">
          <h5>Description:</h5>
          <p>{spell.desc.join(' ')}</p>
        </div>
      )}

      {spell.higher_level && (
        <div className="flex flex-col gap-1 align-center">
          <h5>At Higher Levels:</h5>
          <p>{spell.higher_level.join(' ')}</p>
        </div>
      )}
    </div>
  );
}