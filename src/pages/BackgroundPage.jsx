import React from 'react';
import { useParams } from 'react-router-dom';
import useResource from '../hooks/useResource';

const BackgroundPage = () => {
  const { index } = useParams();
  const { data, loading, error } = useResource('backgrounds', index);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading background: {error.message}</p>;

  return (
    <div className="flex flex-col align-center gap-1 p-2">
      <h4>{data.name}</h4>

      <div className="flex flex-col gap-1 align-center">
        <h5>Starting Proficiencies:</h5>
        <ul>
          {data.starting_proficiencies.map((prof) => (
            <li key={prof.index}>{prof.name}</li>
          ))}
        </ul>
      </div>

      <div className="flex flex-col gap-1 align-center">
        <h5>Feature:</h5>
        <strong>{data.feature.name}</strong>
        <p>{data.feature.desc.join(' ')}</p>
      </div>

      <div className="flex flex-col gap-1 align-center">
        <h5>Personality Traits:</h5>
        <ul>
          {data.personality_traits.from.options.map((trait, index) => (
            <li key={index}>{trait.string}</li>
          ))}
        </ul>
      </div>

      <div className="flex flex-col gap-1 align-center">
        <h5>Ideals:</h5>
        <ul>
          {data.ideals.from.options.map((ideal, index) => (
            <li key={index}>{ideal.desc}</li>
          ))}
        </ul>
      </div>

      <div className="flex flex-col gap-1 align-center">
        <h5>Bonds:</h5>
        <ul>
          {data.bonds.from.options.map((bond, index) => (
            <li key={index}>{bond.string}</li>
          ))}
        </ul>
      </div>

      <div className="flex flex-col gap-1 align-center">
        <h5>Flaws:</h5>
        <ul>
          {data.flaws.from.options.map((flaw, index) => (
            <li key={index}>{flaw.string}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BackgroundPage;
