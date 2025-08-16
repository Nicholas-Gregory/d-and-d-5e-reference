import { useParams } from "react-router";
import useResource from "../hooks/useResource";
import { Link } from "react-router-dom";

export default function FeaturePage() {
  const { index } = useParams();

  const {
    loading: loadingFeature,
    error: featureError,
    data: feature
  } = useResource('features', index);

  if (loadingFeature) {
    return <div>Loading...</div>;
  }
  if (featureError) {
    return <div>Error loading feature: {featureError.message}</div>;
  }

  return (
    <div className="flex flex-col align-center gap-1 p-2">
      <h4>{feature.name}</h4>

      <div className="flex flex-row gap-1 align-center">
        <h5>Class:</h5>
        <span><Link to={`/classes/${feature.class.index}`}>{feature.class.name}</Link></span>
      </div>

      <div className="flex flex-row gap-1 align-center">
        <h5>Level:</h5>
        <span>{feature.level}</span>
      </div>

      {feature.prerequisites.length > 0 && (
        <div className="flex flex-col gap-1 align-center">
          <h5>Prerequisites:</h5>
          <ul>
            {feature.prerequisites.map((prerequisite, index) => (
              <li key={index}>{prerequisite}</li>
            ))}
          </ul>
        </div>
      )}

      <div className="flex flex-col gap-1 align-center">
        <h5>Description:</h5>
        {feature.desc.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </div>
  );
}
