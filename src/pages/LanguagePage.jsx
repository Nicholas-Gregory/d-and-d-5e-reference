import React from 'react';
import { useParams } from 'react-router-dom';
import useResource from '../hooks/useResource';

const LanguagePage = () => {
  const { index } = useParams();
  const { data, loading, error } = useResource('languages', index);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading language: {error.message}</p>;

  return (
    <div className="flex flex-col align-center gap-1 p-2">
      <h4>{data.name}</h4>

      <div className="flex flex-row gap-1 align-center">
        <h5>Type:</h5>
        <span>{data.type}</span>
      </div>

      <div className="flex flex-row gap-1 align-center">
        <h5>Script:</h5>
        <span>{data.script}</span>
      </div>

      <div className="flex flex-col gap-1 align-center">
        <h5>Typical Speakers:</h5>
        <ul>
          {data.typical_speakers.map((speaker, index) => (
            <li key={index}>{speaker}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default LanguagePage;
