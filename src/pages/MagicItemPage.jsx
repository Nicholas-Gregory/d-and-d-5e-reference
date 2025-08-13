import { useParams } from "react-router";
import useResource from "../hooks/useResource";

export default function MagicItemPage() {
  const { index } = useParams();

  const {
    loading: loadingMagicItem,
    error: magicItemError,
    data: magicItem
  } = useResource('magic-items', index);

  if (loadingMagicItem) {
    return <div>Loading...</div>;
  }
  if (magicItemError) {
    return <div>Error loading magic item: {magicItemError.message}</div>;
  }

  return (
    <div className="flex flex-col align-center gap-1 p-2">
      <h4>{magicItem.name}</h4>

      <div className="flex flex-row gap-1 align-center">
        <h5>Category:</h5>
        <span>{magicItem.equipment_category.name}</span>
      </div>

      <div className="flex flex-row gap-1 align-center">
        <h5>Rarity:</h5>
        <span>{magicItem.rarity.name}</span>
      </div>

      {magicItem.desc && (
        <div className="flex flex-col gap-1 align-center">
          <h5>Description:</h5>
          <p>{magicItem.desc.join(' ')}</p>
        </div>
      )}

      {magicItem.image && (
        <img src={magicItem.image} alt={magicItem.name} className="thick-border p-1" />
      )}
    </div>
  )
}