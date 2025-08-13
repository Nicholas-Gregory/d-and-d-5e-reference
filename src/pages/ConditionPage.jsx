import React from 'react';
import { useParams } from 'react-router-dom';
import useResource from '../hooks/useResource';

const ConditionPage = () => {
  const { index } = useParams();
  const { data, loading, error } = useResource('conditions', index);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading condition: {error.message}</p>;

  return (
    <div className="flex flex-col align-center gap-1 p-2">
      <h4>{data.name}</h4>
      <p>{data.desc.join(' ')}</p>
    </div>
  );
};

export default ConditionPage;
