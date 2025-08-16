import { useParams } from "react-router";
import useResource from "../hooks/useResource";
import Markdown from "markdown-to-jsx";

export default function RulesPage() {
  const { index } = useParams();

  const {
    loading: loadingRules,
    error: rulesError,
    data: rules
  } = useResource('rule-sections', index);

  if (loadingRules) {
    return <div>Loading...</div>;
  }
  if (rulesError) {
    return <div>Error loading rules: {rulesError.message}</div>;
  }

  return (
    <div className="flex flex-col align-center gap-1 p-2">
      <h4>{rules.name}</h4>

      <div className="flex flex-col gap-1 align-center">
        <h5>Description:</h5>
        <Markdown>{rules.desc}</Markdown>
      </div>
    </div>
  )
}