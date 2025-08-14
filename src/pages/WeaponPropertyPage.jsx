import { useParams } from "react-router";
import useResource from "../hooks/useResource";

export default function WeaponPropertyPage() {
  const { index } = useParams();

  const {
    loading: loadingWeaponProperty,
    error: weaponPropertyError,
    data: weaponProperty
  } = useResource('weapon-properties', index);

  if (loadingWeaponProperty) {
    return <div>Loading...</div>;
  }
  if (weaponPropertyError) {
    return <div>Error loading weapon property: {weaponPropertyError.message}</div>;
  }

  return (
    <div className="flex flex-col align-center gap-1 p-2">
      <h4>{weaponProperty.name}</h4>
      
      <p>{weaponProperty.desc}</p>
    </div>
  );
}