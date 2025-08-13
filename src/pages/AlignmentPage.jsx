import { useParams } from "react-router";
import useResource from "../hooks/useResource";

export default function AlignmentPage() {
  const { index } = useParams();

  const {
    loading: loadingAlignment,
    error: alignmentError,
    data: alignment
  } = useResource('alignments', index);

  if (loadingAlignment) {
    return <div>Loading...</div>;
  }
  if (alignmentError) {
    return <div>Error loading alignment: {alignmentError.message}</div>;
  }

  return (
    <div className="flex flex-col align-center gap-1 p-2">
      <h4>{alignment.name} ({alignment.abbreviation})</h4>

      <div className="flex flex-col gap-1 align-center">
        <h5>Description:</h5>
        <p>{alignment.desc}</p>
      </div>
    </div>
  );
}
