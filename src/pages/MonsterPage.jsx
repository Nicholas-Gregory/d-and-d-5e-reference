import { Link, useParams } from "react-router";
import useResource from "../hooks/useResource";

export default function MonsterPage() {
  const { index } = useParams();

  const {
    loading: loadingMonster,
    error: monsterError,
    data: monster
  } = useResource('monsters', index);

  if (loadingMonster) {
    return <div>Loading...</div>;
  }
  if (monsterError) {
    return <div>Error loading monster: {monsterError.message}</div>;
  }

  return (
    <div className="flex flex-col align-center gap-1 p-2">
      <h4>{monster.name}</h4>

      <div className="flex flex-row gap-1 align-center">
        <h5>Size:</h5>
        <span>{monster.size}</span>
      </div>

      <div className="flex flex-row gap-1 align-center">
        <h5>Type:</h5>
        <span>{monster.type}</span>
      </div>

      <div className="flex flex-row gap-1 align-center">
        <h5>Alignment:</h5>
        <span>{monster.alignment}</span>
      </div>

      <div className="flex flex-row gap-1 align-center">
        <h5>Armor Class:</h5>
        <span>{monster.armor_class.map(ac => `${ac.value} (${ac.type})`).join(', ')}</span>
      </div>

      <div className="flex flex-row gap-1 align-center">
        <h5>Hit Points:</h5>
        <span>{monster.hit_points} ({monster.hit_dice})</span>
      </div>

      <div className="flex flex-row gap-1 align-center">
        <h5>Speed:</h5>
        <span>{Object.entries(monster.speed).map(([type, value]) => `${type}: ${value}`).join(', ')}</span>
      </div>

      <div className="flex flex-row gap-1 align-center">
        <h5>Abilities:</h5>
        <span>STR: {monster.strength}, DEX: {monster.dexterity}, CON: {monster.constitution}, INT: {monster.intelligence}, WIS: {monster.wisdom}, CHA: {monster.charisma}</span>
      </div>

      {monster.special_abilities && (
        <div className="flex flex-col gap-1 align-center">
          <h5>Special Abilities:</h5>
          {monster.special_abilities.map((ability, index) => (
            <div key={index} className="flex flex-col align-center">
              <strong>{ability.name}:</strong>
              <p>{ability.desc}</p>
            </div>
          ))}
        </div>
      )}

      {monster.actions && (
        <div className="flex flex-col gap-1 align-center">
          <h5>Actions:</h5>
          {monster.actions.map((action, index) => (
            <div key={index} className="flex flex-col align-center">
              <strong>{action.name}:</strong>
              <p>{action.desc}</p>
            </div>
          ))}
        </div>
      )}

      {monster.legendary_actions && (
        <div className="flex flex-col gap-1 align-center">
          <h5>Legendary Actions:</h5>
          {monster.legendary_actions.map((action, index) => (
            <div key={index} className="flex flex-col align-center">
              <strong>{action.name}:</strong>
              <p>{action.desc}</p>
            </div>
          ))}
        </div>
      )}

      {monster.image && (
        <img src={`https://www.dnd5eapi.co${monster.image}`} alt={monster.name} className="thick-border p-1" />
      )}
    </div>
  );
}