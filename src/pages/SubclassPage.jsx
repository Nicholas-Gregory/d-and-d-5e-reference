import { useParams } from "react-router";
import useResource from "../hooks/useResource";

export default function SubclassPage() {
  const { index } = useParams();

  const {
    loading: loadingSubclass,
    error: subclassError,
    data: subclass
  } = useResource('subclasses', index);

  if (loadingSubclass) {
    return <div>Loading...</div>;
  }
  if (subclassError) {
    return <div>Error loading subclass: {subclassError.message}</div>;
  }

  return (
    <div className="flex flex-col align-center gap-1 p-2">
      <h4>{subclass.name}</h4>

      <div className="flex flex-row gap-1 align-center">
        <h5>Class:</h5>
        <span>{subclass.class.name}</span>
      </div>

      <div className="flex flex-row gap-1 align-center">
        <h5>Flavor:</h5>
        <span>{subclass.subclass_flavor}</span>
      </div>

      {subclass.desc && (
        <div className="flex flex-col gap-1 align-center">
          <h5>Description:</h5>
          <p>{subclass.desc.join(' ')}</p>
        </div>
      )}

      {subclass.spells && subclass.spells.length > 0 && (
        <div className="flex flex-col gap-1 align-center">
          <h5>Spells:</h5>
          {subclass.spells.map((spell, index) => (
            <div key={index} className="flex flex-col align-center">
              <strong>{spell.name}:</strong>
              <p>{spell.desc}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}