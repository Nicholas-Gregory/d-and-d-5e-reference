import { Link, useParams } from "react-router";
import useResource from "../hooks/useResource";

export default function EquipmentPage() {
  const { index } = useParams();

  const {
    loading: loadingEquipment,
    error: equipmentError,
    data: equipment
  } = useResource('equipment', index);

  if (loadingEquipment) {
    return <div>Loading...</div>;
  } else if (equipmentError) {
    return <div>Error loading equipment: {equipmentError.message}</div>;
  } else {
    return (
      <div className="flex flex-col align-center gap-1 p-2">
        <h4>{equipment.name}</h4>
        <p>{equipment.desc}</p>

        <div className="flex flex-row gap-1 align-center">
          <h5>Cost:</h5>
          <span>{equipment.cost.quantity} {equipment.cost.unit}</span>
        </div>

        <div className="flex flex-row gap-1 align-center">
          <h5>Weight:</h5>
          <span>{equipment.weight} lb</span>
        </div>

        {equipment.weapon_category && (
          <div className="flex flex-row gap-1 align-center">
            <h5>Weapon Category:</h5>
            <span>{equipment.weapon_category}</span>
          </div>
        )}

        {equipment.weapon_range && (
          <div className="flex flex-row gap-1 align-center">
            <h5>Weapon Range:</h5>
            <span>{equipment.weapon_range}</span>
          </div>
        )}

        {equipment.damage && (
          <div className="flex flex-col align-center">
            <h5>Damage:</h5>
            <div className="flex flex-row gap-1 align-center">
              Dice: {equipment.damage.damage_dice}
            </div>
            <div className="flex flex-row gap-1 align-center">
              Type: <Link to={`/damage-types/${equipment.damage.damage_type.index}`}>
                {equipment.damage.damage_type.name}
              </Link>
            </div>
          </div>
        )}

        {equipment.range && (
          <div className="flex flex-col gap-1 align-center">
            <h5>Range:</h5>
            <div className="flex flex-row gap-1 align-center">
              Normal: {equipment.range.normal} ft
            </div>
            {equipment.range.long && (
              <div className="flex flex-row gap-1 align-center">
                Long: {equipment.range.long} ft
              </div>
            )}
          </div>
        )}

        {equipment.armor_category && (
          <div className="flex flex-row gap-1 align-center">
            <h5>Armor Category:</h5>
            <span>{equipment.armor_category}</span>
          </div>
        )}

        {equipment.stealth_disadvantage && <strong>Stealth Disadvantage</strong>}

        {equipment.str_minimum !== null || undefined && (
          <div className="flex flex-row gap-1 align-center">
            <h5>Strength Minimum:</h5>
            <span>{equipment.str_minimum}</span>
          </div>
        )}

        {equipment.armor_class && (
          <div className="flex flex-row gap-1 align-center">
            <h5>Armor Class:</h5>
            <span>
              {equipment.armor_class.base}
              {equipment.armor_class.dex_bonus && (<span> + Dexterity Modifier</span>)}
              {equipment.armor_class.max_bonus && (
                <span> (max {equipment.armor_class.max_bonus})</span>
              )}
            </span>
          </div>
        )}

        {equipment.image && (
          <img src={equipment.image} alt={equipment.name} className="thick-border p-1" />
        )}

        {equipment.properties && equipment.properties.length > 0 && (
          <div className="flex flex-col gap-1 align-center">
            <h5>Properties:</h5>
            {equipment.properties.map((property) => (
              <div key={property.index} className="flex flex-row gap-1 align-center">
                <Link to={`/weapon-properties/${property.index}`}>
                  {property.name}
                </Link>
              </div>
            ))}
          </div>
        )}

        {equipment.tool_category && (
          <div className="flex flex-row gap-1 align-center">
            <h5>Tool Category:</h5>
            <span>{equipment.tool_category}</span>
          </div>
        )}

        {equipment.vehicle_category && (
          <div className="flex flex-row gap-1 align-center">
            <h5>Vehicle Category:</h5>
            <span>{equipment.vehicle_category}</span>
          </div>
        )}

        {equipment.speed && (
          <div className="flex flex-row gap-1 align-center">
            <h5>Speed:</h5>
            <span>{equipment.speed.quantity} {equipment.speed.unit}</span>
          </div>
        )}
      </div>
    );
  }
}