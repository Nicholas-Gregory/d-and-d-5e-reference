import { HashRouter, Route, Routes } from 'react-router'
import './style.css'
import MainLayout from './layouts/MainLayout'
import EquipmentPage from './pages/EquipmentPage'
import CategoryLayout from './layouts/CategoryLayout'
import MonsterPage from './pages/MonsterPage'
import RulesPage from './pages/RulesPage'
import AbilityScorePage from './pages/AbilityScorePage'
import BackgroundPage from './pages/BackgroundPage'
import ClassPage from './pages/ClassPage'
import ConditionPage from './pages/ConditionPage'
import DamageTypePage from './pages/DamageTypePage'
import FeatPage from './pages/FeatPage'
import LanguagePage from './pages/LanguagePage'
import ProficiencyPage from './pages/ProficiencyPage'
import AlignmentPage from './pages/AlignmentPage'
import FeaturePage from './pages/FeaturePage'
import MagicSchoolPage from './pages/MagicSchoolPage'
import RacePage from './pages/RacePage'
import MagicItemPage from './pages/MagicItemPage'
import SpellPage from './pages/SpellPage'
import SubclassPage from './pages/SubclassPage'
import SubracePage from './pages/SubracePage'
import TraitPage from './pages/TraitPage'
import SkillPage from './pages/SkillPage'
import WeaponPropertyPage from './pages/WeaponPropertyPage'


function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<MainLayout />}>
          <Route path='/ability-scores' element={<CategoryLayout categoryPath={['ability-scores']} categoryName="Ability Scores" />}>
            <Route path='/ability-scores/:index' element={<AbilityScorePage />} />
          </Route>
          <Route path='/backgrounds' element={<CategoryLayout categoryPath={['backgrounds']} categoryName="Backgrounds" />}>
            <Route path='/backgrounds/:index' element={<BackgroundPage />} />
          </Route>
          <Route path='/classes' element={<CategoryLayout categoryPath={['classes']} categoryName="Classes" />}>
            <Route path='/classes/:index' element={<ClassPage />} />
          </Route>
          <Route path='/conditions' element={<CategoryLayout categoryPath={['conditions']} categoryName="Conditions" />}>
            <Route path='/conditions/:index' element={<ConditionPage />} />
          </Route>
          <Route path='/damage-types' element={<CategoryLayout categoryPath={['damage-types']} categoryName="Damage Types" />}>
            <Route path='/damage-types/:index' element={<DamageTypePage />} />
          </Route>
          <Route path='/equipment' element={<CategoryLayout categoryPath={['equipment-categories']} categoryName="Equipment" />}>
            <Route path='/equipment/:index' element={<EquipmentPage />} />
          </Route>
          <Route path='/feats' element={<CategoryLayout categoryPath={['feats']} categoryName="Feats" />}>
            <Route path='/feats/:index' element={<FeatPage />} />
          </Route>
          <Route path='/languages' element={<CategoryLayout categoryPath={['languages']} categoryName="Languages" />}>
            <Route path='/languages/:index' element={<LanguagePage />} />
          </Route>
          <Route path='/magic-items' element={<CategoryLayout categoryPath={['magic-items']} categoryName="Magic Items" />}>
            <Route path='/magic-items/:index' element={<MagicItemPage />} />
          </Route>
          <Route path='/monsters' element={<CategoryLayout categoryPath={['monsters']} categoryName="Monsters" />}>
            <Route path='/monsters/:index' element={<MonsterPage />} />
          </Route>
          <Route path='/proficiencies' element={<CategoryLayout categoryPath={['proficiencies']} categoryName="Proficiencies" />}>
            <Route path='/proficiencies/:index' element={<ProficiencyPage />} />
          </Route>
          <Route path='/alignments' element={<CategoryLayout categoryPath={['alignments']} categoryName="Alignments" />}>
            <Route path='/alignments/:index' element={<AlignmentPage />} />
          </Route>
          <Route path='/features' element={<CategoryLayout categoryPath={['features']} categoryName="Features" />}>
            <Route path='/features/:index' element={<FeaturePage />} />
          </Route>
          <Route path='/magic-schools' element={<CategoryLayout categoryPath={['magic-schools']} categoryName="Magic Schools" />}>
            <Route path='/magic-schools/:index' element={<MagicSchoolPage />} />
          </Route>
          <Route path='/races' element={<CategoryLayout categoryPath={['races']} categoryName="Races" />}>
            <Route path='/races/:index' element={<RacePage />} />
          </Route>
          <Route path='/rule-sections' element={<CategoryLayout categoryPath={['rules']} categoryName="Subsections" />}>
            <Route path='/rule-sections/:index' element={<RulesPage />} />
          </Route>
          <Route path='/spells' element={<CategoryLayout categoryPath={['spells']} categoryName="Spells" />}>
            <Route path='/spells/:index' element={<SpellPage />} />
          </Route>
          <Route path='/subclasses' element={<CategoryLayout categoryPath={['subclasses']} categoryName="Subclasses" />}>
            <Route path='/subclasses/:index' element={<SubclassPage />} />
          </Route>
          <Route path='/subraces' element={<CategoryLayout categoryPath={['subraces']} categoryName="Subraces" />}>
            <Route path='/subraces/:index' element={<SubracePage />} />
          </Route>
          <Route path='/traits' element={<CategoryLayout categoryPath={['traits']} categoryName="Traits" />}>
            <Route path='/traits/:index' element={<TraitPage />} />
          </Route>
          <Route path='/skills' element={<CategoryLayout categoryPath={['skills']} categoryName="Skills" />}>
            <Route path='/skills/:index' element={<SkillPage />} />
          </Route>
          <Route path='/weapon-properties' element={<CategoryLayout categoryPath={['weapon-properties']} categoryName="Weapon Properties" />}>
            <Route path='/weapon-properties/:index' element={<WeaponPropertyPage />} />
          </Route>
        </Route>
      </Routes>
    </HashRouter>
  )
}

export default App
