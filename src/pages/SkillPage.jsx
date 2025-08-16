import { Link, useParams } from "react-router";
import useResource from "../hooks/useResource";

export default function SkillPage() {
  const { index } = useParams();

  const {
    loading: loadingSkill,
    error: skillError,
    data: skill
  } = useResource('skills', index);

  if (loadingSkill) {
    return <div>Loading...</div>;
  }
  if (skillError) {
    return <div>Error loading skill: {skillError.message}</div>;
  }

  return (
    <div className="flex flex-col align-center gap-1 p-2">
      <h4>{skill.name}</h4>

      <p>{skill.desc}</p>

      <div className="flex flex-row gap-1 align-center">
        <h5>Ability:</h5>
        <span><Link to={`/ability-scores/${skill.ability_score.index}`}>{skill.ability_score.name}</Link></span>
      </div>
    </div>
  )
}