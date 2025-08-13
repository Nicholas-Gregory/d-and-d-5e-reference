import React from 'react';
import { useParams } from 'react-router-dom';
import useResource from '../hooks/useResource';

const AbilityScorePage = () => {
  const { index } = useParams();
  const { data, loading, error } = useResource('ability-scores', index);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading ability score: {error.message}</p>;

  return (
    <div className="flex flex-col align-center gap-1 p-2">
      <h4>{data.full_name} ({data.name})</h4>
      <p>{data.desc.join(' ')}</p>

      {data.skills.length > 0 && (
        <div className="flex flex-col gap-1 align-center">
          <h5>Associated Skills:</h5>
          <ul>
            {data.skills.map((skill) => (
              <li key={skill.index}>{skill.name}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default AbilityScorePage;
