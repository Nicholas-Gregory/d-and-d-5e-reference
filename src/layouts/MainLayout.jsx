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
            <DropdownMenu.Content className="thick-border bg-dark-beige" asChild>
              <div className="flex flex-col">
                <DropdownMenu.Item asChild>
                  <ClickableText
                    text="Ability Scores"
                    onClick={() => {
                      setNavOpen(false);
                      navigate('/ability-scores')
                    }}
                  />
                </DropdownMenu.Item>
                <DropdownMenu.Item asChild>
                  <ClickableText
                    text="Backgrounds"
                    onClick={() => {
                      setNavOpen(false);
                      navigate('/backgrounds');
                    }}
                  />
                </DropdownMenu.Item>
                <DropdownMenu.Item asChild>
                  <ClickableText
                    text="Classes"
                    onClick={() => {
                      setNavOpen(false);
                      navigate('/classes');
                    }}
                  />
                </DropdownMenu.Item>
                <DropdownMenu.Item asChild>
                  <ClickableText
                    text="Conditions"
                    onClick={() => {
                      setNavOpen(false);
                      navigate('/conditions');
                    }}
                  />
                </DropdownMenu.Item>
                <DropdownMenu.Item asChild>
                  <ClickableText
                    text="Damage Types"
                    onClick={() => {
                      setNavOpen(false);
                      navigate('/damage-types');
                    }}
                  />
                </DropdownMenu.Item>
                <DropdownMenu.Item asChild>
                  <ClickableText
                    text="Equipment"
                    onClick={() => {
                      setNavOpen(false);
                      navigate('/equipment');
                    }}
                  />
                </DropdownMenu.Item>
                <DropdownMenu.Item asChild>
                  <ClickableText
                    text="Feats"
                    onClick={() => {
                      setNavOpen(false);
                      navigate('/feats');
                    }}
                  />
                </DropdownMenu.Item>
                <DropdownMenu.Item asChild>
                  <ClickableText
                    text="Languages"
                    onClick={() => {
                      setNavOpen(false);
                      navigate('/languages');
                    }}
                  />
                </DropdownMenu.Item>
                <DropdownMenu.Item asChild>
                  <ClickableText
                    text="Magic Items"
                    onClick={() => {
                      setNavOpen(false);
                      navigate('/magic-items');
                    }}
                  />
                </DropdownMenu.Item>
                <DropdownMenu.Item asChild>
                  <ClickableText
                    text="Monsters"
                    onClick={() => {
                      setNavOpen(false);
                      navigate('/monsters');
                    }}
                  />
                </DropdownMenu.Item>
                <DropdownMenu.Item asChild>
                  <ClickableText
                    text="Proficiencies"
                    onClick={() => {
                      setNavOpen(false);
                      navigate('/proficiencies');
                    }}
                  />
                </DropdownMenu.Item>
                <DropdownMenu.Item asChild>
                  <ClickableText
                    text="Alignments"
                    onClick={() => {
                      setNavOpen(false);
                      navigate('/alignments');
                    }}
                  />
                </DropdownMenu.Item>
                <DropdownMenu.Item asChild>
                  <ClickableText
                    text="Features"
                    onClick={() => {
                      setNavOpen(false);
                      navigate('/features');
                    }}
                  />
                </DropdownMenu.Item>
                <DropdownMenu.Item asChild>
                  <ClickableText
                    text="Magic Schools"
                    onClick={() => {
                      setNavOpen(false);
                      navigate('/magic-schools');
                    }}
                  />
                </DropdownMenu.Item>
                <DropdownMenu.Item asChild>
                  <ClickableText
                    text="Races"
                    onClick={() => {
                      setNavOpen(false);
                      navigate('/races');
                    }}
                  />
                </DropdownMenu.Item>
                {/* <DropdownMenu.Item asChild>
                  <ClickableText
                    text="Rule Sections"
                    onClick={() => {
                      setNavOpen(false);
                      navigate('/rule-sections');
                    }}
                  />
                </DropdownMenu.Item> */}
                <DropdownMenu.Item asChild>
                  <ClickableText
                    text="Rules"
                    onClick={() => {
                      setNavOpen(false);
                      navigate('/rule-sections');
                    }}
                  />
                </DropdownMenu.Item>
                <DropdownMenu.Item asChild>
                  <ClickableText
                    text="Spells"
                    onClick={() => {
                      setNavOpen(false);
                      navigate('/spells');
                    }}
                  />
                </DropdownMenu.Item>
                <DropdownMenu.Item asChild>
                  <ClickableText
                    text="Subclasses"
                    onClick={() => {
                      setNavOpen(false);
                      navigate('/subclasses');
                    }}
                  />
                </DropdownMenu.Item>
                <DropdownMenu.Item asChild>
                  <ClickableText
                    text="Subraces"
                    onClick={() => {
                      setNavOpen(false);
                      navigate('/subraces');
                    }}
                  />
                </DropdownMenu.Item>
                <DropdownMenu.Item asChild>
                  <ClickableText
                    text="Traits"
                    onClick={() => {
                      setNavOpen(false);
                      navigate('/traits');
                    }}
                  />
                </DropdownMenu.Item>
                <DropdownMenu.Item asChild>
                  <ClickableText
                    text="Skills"
                    onClick={() => {
                      setNavOpen(false);
                      navigate('/skills');
                    }}
                  />
                </DropdownMenu.Item>
                <DropdownMenu.Item asChild>
                  <ClickableText
                    text="Weapon Properties"
                    onClick={() => {
                      setNavOpen(false);
                      navigate('/weapon-properties');
                    }}
                  />
                </DropdownMenu.Item>
              </div>
            </DropdownMenu.Content>
          </DropdownMenu.Portal>
        </DropdownMenu.Root>
      </div>

      <Outlet />
    </div>
  );
}