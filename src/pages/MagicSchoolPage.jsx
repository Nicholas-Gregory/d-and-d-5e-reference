import { useParams } from "react-router";
import useResource from "../hooks/useResource";

export default function MagicSchoolPage() {
  const { index } = useParams();

  const {
    loading: loadingMagicSchool,
    error: magicSchoolError,
    data: magicSchool
  } = useResource('magic-schools', index);

  if (loadingMagicSchool) {
    return <div>Loading...</div>;
  }
  if (magicSchoolError) {
    return <div>Error loading magic school: {magicSchoolError.message}</div>;
  }

  return (
    <div className="flex flex-col align-center gap-1 p-2">
      <h4>{magicSchool.name}</h4>

      <div className="flex flex-col gap-1 align-center">
        <h5>Description:</h5>
        <p>{magicSchool.desc}</p>
      </div>
    </div>
  );
}
