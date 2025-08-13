import React from 'react';
import { useParams } from 'react-router-dom';
import useResource from '../hooks/useResource';

const FeatPage = () => {
  const { index } = useParams();
  const { data, loading, error } = useResource('feats', index);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading feat: {error.message}</p>;

  return (
    <div className="flex flex-col align-center gap-1 p-2">
      <h4>{data.name}</h4>

      {data.prerequisites.length > 0 && (
        <div className="flex flex-col gap-1 align-center">
          <h5>Prerequisites:</h5>
          <ul>
            {data.prerequisites.map((prereq, index) => (
              <li key={index}>{prereq.ability_score.name} {prereq.minimum_score}</li>
            ))}
          </ul>
        </div>
      )}

      <div className="flex flex-col gap-1 align-center">
        <h5>Description:</h5>
        <p>{data.desc.join(' ')}</p>
      </div>
    </div>
  );
};

export default FeatPage;
