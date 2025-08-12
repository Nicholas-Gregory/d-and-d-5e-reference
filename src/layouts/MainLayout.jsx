import { DropdownMenu } from 'radix-ui';
import { Outlet, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import ClickableText from '../components/ClickableText';

export default function MainLayout() {
  const [navOpen, setNavOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="flex flex-col align-center">
      <div className="flex flex-row align-center gap-2">
        <h1>D&D 5e Reference</h1>
        <DropdownMenu.Root
          open={navOpen}
          onOpenChange={open => setNavOpen(open)}
        >
          <DropdownMenu.Trigger asChild>
            <button
              className="thick-border bg-dark-beige"
              style={{ 
                height: '2rem',
                cursor: 'pointer'
              }}
            >
              ...
            </button>
          </DropdownMenu.Trigger>

          <DropdownMenu.Portal>
            <DropdownMenu.Content className="thick-border bg-dark-beige">
              <DropdownMenu.Item>
                <ClickableText
                  text="Ability Scores"
                  onClick={() => navigate('/ability-scores')}
                />
              </DropdownMenu.Item>
              <DropdownMenu.Item>
                <ClickableText
                  text="Backgrounds"
                  onClick={() => navigate('/backgrounds')}
                />
              </DropdownMenu.Item>
              <DropdownMenu.Item>
                <ClickableText
                  text="Classes"
                  onClick={() => navigate('/classes')}
                />
              </DropdownMenu.Item>
              <DropdownMenu.Item>
                <ClickableText
                  text="Conditions"
                  onClick={() => navigate('/conditions')}
                />
              </DropdownMenu.Item>
              <DropdownMenu.Item>
                <ClickableText
                  text="Damage Types"
                  onClick={() => navigate('/damage-types')}
                />
              </DropdownMenu.Item>
              <DropdownMenu.Item>
                <ClickableText
                  text="Equipment"
                  onClick={() => navigate('/equipment')}
                />
              </DropdownMenu.Item>
              <DropdownMenu.Item>
                <ClickableText
                  text="Feats"
                  onClick={() => navigate('/feats')}
                />
              </DropdownMenu.Item>
              <DropdownMenu.Item>
                <ClickableText
                  text="Languages"
                  onClick={() => navigate('/languages')}
                />
              </DropdownMenu.Item>
              <DropdownMenu.Item>
                <ClickableText
                  text="Magic Items"
                  onClick={() => navigate('/magic-items')}
                />
              </DropdownMenu.Item>
              <DropdownMenu.Item>
                <ClickableText
                  text="Monsters"
                  onClick={() => navigate('/monsters')}
                />
              </DropdownMenu.Item>
              <DropdownMenu.Item>
                <ClickableText
                  text="Proficiencies"
                  onClick={() => navigate('/proficiencies')}
                />
              </DropdownMenu.Item>
              <DropdownMenu.Item>
                <ClickableText
                  text="Alignments"
                  onClick={() => navigate('/alignments')}
                />
              </DropdownMenu.Item>
              <DropdownMenu.Item>
                <ClickableText
                  text="Features"
                  onClick={() => navigate('/features')}
                />
              </DropdownMenu.Item>
              <DropdownMenu.Item>
                <ClickableText
                  text="Magic Schools"
                  onClick={() => navigate('/magic-schools')}
                />
              </DropdownMenu.Item>
              <DropdownMenu.Item>
                <ClickableText
                  text="Races"
                  onClick={() => navigate('/races')}
                />
              </DropdownMenu.Item>
              <DropdownMenu.Item>
                <ClickableText
                  text="Rule Sections"
                  onClick={() => navigate('/rule-sections')}
                />
              </DropdownMenu.Item>
              <DropdownMenu.Item>
                <ClickableText
                  text="Rules"
                  onClick={() => navigate('/rules')}
                />
              </DropdownMenu.Item>
              <DropdownMenu.Item>
                <ClickableText
                  text="Spells"
                  onClick={() => navigate('/spells')}
                />
              </DropdownMenu.Item>
              <DropdownMenu.Item>
                <ClickableText
                  text="Subclasses"
                  onClick={() => navigate('/subclasses')}
                />
              </DropdownMenu.Item>
              <DropdownMenu.Item>
                <ClickableText
                  text="Subraces"
                  onClick={() => navigate('/subraces')}
                />
              </DropdownMenu.Item>
              <DropdownMenu.Item>
                <ClickableText
                  text="Traits"
                  onClick={() => navigate('/traits')}
                />
              </DropdownMenu.Item>
              <DropdownMenu.Item>
                <ClickableText
                  text="Skills"
                  onClick={() => navigate('/skills')}
                />
              </DropdownMenu.Item>
              <DropdownMenu.Item>
                <ClickableText
                  text="Weapon Properties"
                  onClick={() => navigate('/weapon-properties')}
                />
              </DropdownMenu.Item>
            </DropdownMenu.Content>
          </DropdownMenu.Portal>
        </DropdownMenu.Root>
      </div>

      <Outlet />
    </div>
  );
}