import React from 'react';
import { useParams } from 'react-router-dom';
import useResource from '../hooks/useResource';

const ClassPage = () => {
  const { index } = useParams();
  const { data, loading, error } = useResource('classes', index);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading class: {error.message}</p>;

  return (
    <div className="flex flex-col align-center gap-1 p-2">
      <h4>{data.name}</h4>

      <div className="flex flex-row gap-1 align-center">
        <h5>Hit Die:</h5>
        <span>d{data.hit_die}</span>
      </div>

      <div className="flex flex-col gap-1 align-center">
        <h5>Proficiencies:</h5>
        <ul>
          {data.proficiencies.map((prof) => (
            <li key={prof.index}>{prof.name}</li>
          ))}
        </ul>
      </div>

      <div className="flex flex-col gap-1 align-center">
        <h5>Saving Throws:</h5>
        <ul>
          {data.saving_throws.map((save) => (
            <li key={save.index}>{save.name}</li>
          ))}
        </ul>
      </div>

      <div className="flex flex-col gap-1 align-center">
        <h5>Starting Equipment:</h5>
        <ul>
          {data.starting_equipment.map((item, index) => (
            <li key={index}>{item.equipment.name} (x{item.quantity})</li>
          ))}
        </ul>
      </div>

      {data.spellcasting && (
        <div className="flex flex-col gap-1 align-center">
          <h5>Spellcasting:</h5>
          <p>{data.spellcasting.info.map((info) => info.desc.join(' ')).join(' ')}</p>
        </div>
      )}
    </div>
  );
};

export default ClassPage;
