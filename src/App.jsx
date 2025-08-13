import { BrowserRouter, Route, Routes } from 'react-router'
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


function App() {
  return (
    <BrowserRouter>
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
          <Route path='/magic-items'>
            <Route path='/magic-items/:index' />
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
          <Route path='/rules' element={<CategoryLayout categoryPath={['rules']} categoryName="Subsections" />}>
            <Route path='/rules/:index' element={<RulesPage />} />
          </Route>
          <Route path='/spells'>
            <Route path='/spells/:index' />
          </Route>
          <Route path='/subclasses'>
            <Route path='/subclasses/:index' />
          </Route>
          <Route path='/subraces'>
            <Route path='/subraces/:index' />
          </Route>
          <Route path='/traits'>
            <Route path='/traits/:index' />
          </Route>
          <Route path='/skills'>
            <Route path='/skills/:index' />
          </Route>
          <Route path='/weapon-properties'>
            <Route path='/weapon-properties/:index' />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
