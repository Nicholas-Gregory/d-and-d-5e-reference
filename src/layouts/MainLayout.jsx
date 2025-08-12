import { DropdownMenu } from 'radix-ui';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function MainLayout() {
  const [navOpen, setNavOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="flex flex-col justify-center">
      <div className="flex flex-row align-center gap-2">
        <h1>D&D 5e Reference</h1>
        <DropdownMenu.Root
          open={navOpen}
          onOpenChange={open => setNavOpen(open)}
        >
          <DropdownMenu.Trigger asChild>
            <button
              className="thick-border"
              style={{ height: '2rem' }}
            >
              ...
            </button>
          </DropdownMenu.Trigger>

          <DropdownMenu.Portal>
            <DropdownMenu.Content className="thick-border bg-dark-beige">
              <DropdownMenu.Item onSelect={() => navigate('/ability-scores')}>
                Ability Scores
              </DropdownMenu.Item>
              <DropdownMenu.Item onSelect={() => navigate('/backgrounds')}>
                Backgrounds
              </DropdownMenu.Item>
              <DropdownMenu.Item onSelect={() => navigate('/classes')}>
                Classes
              </DropdownMenu.Item>
              <DropdownMenu.Item onSelect={() => navigate('/conditions')}>
                Conditions
              </DropdownMenu.Item>
              <DropdownMenu.Item onSelect={() => navigate('/damage-types')}>
                Damage Types
              </DropdownMenu.Item>
              <DropdownMenu.Item onSelect={() => navigate('/equipment')}>
                Equipment
              </DropdownMenu.Item>
              <DropdownMenu.Item onSelect={() => navigate('/feats')}>
                Feats
              </DropdownMenu.Item>
              <DropdownMenu.Item onSelect={() => navigate('/languages')}>
                Languages
              </DropdownMenu.Item>
              <DropdownMenu.Item onSelect={() => navigate('/magic-items')}>
                Magic Items
              </DropdownMenu.Item>
              <DropdownMenu.Item onSelect={() => navigate('/monsters')}>
                Monsters
              </DropdownMenu.Item>
              <DropdownMenu.Item onSelect={() => navigate('/proficiencies')}>
                Proficiencies
              </DropdownMenu.Item>
              <DropdownMenu.Item onSelect={() => navigate('/alignments')}>
                Alignments
              </DropdownMenu.Item>
              <DropdownMenu.Item onSelect={() => navigate('/equipment-categories')}>
                Equipment Categories
              </DropdownMenu.Item>
              <DropdownMenu.Item onSelect={() => navigate('/features')}>
                Features
              </DropdownMenu.Item>
              <DropdownMenu.Item onSelect={() => navigate('/magic-schools')}>
                Magic Schools
              </DropdownMenu.Item>
              <DropdownMenu.Item onSelect={() => navigate('/races')}>
                Races
              </DropdownMenu.Item>
              <DropdownMenu.Item onSelect={() => navigate('/rule-sections')}>
                Rule Sections
              </DropdownMenu.Item>
              <DropdownMenu.Item onSelect={() => navigate('/rules')}>
                Rules
              </DropdownMenu.Item>
              <DropdownMenu.Item onSelect={() => navigate('/spells')}>
                Spells
              </DropdownMenu.Item>
              <DropdownMenu.Item onSelect={() => navigate('/subclasses')}>
                Subclasses
              </DropdownMenu.Item>
              <DropdownMenu.Item onSelect={() => navigate('/subraces')}>
                Subraces
              </DropdownMenu.Item>
              <DropdownMenu.Item onSelect={() => navigate('/traits')}>
                Traits
              </DropdownMenu.Item>
              <DropdownMenu.Item onSelect={() => navigate('/skills')}>
                Skills
              </DropdownMenu.Item>
              <DropdownMenu.Item onSelect={() => navigate('/weapon-properties')}>
                Weapon Properties
              </DropdownMenu.Item>
            </DropdownMenu.Content>
          </DropdownMenu.Portal>
        </DropdownMenu.Root>
      </div>
    </div>
  );
}