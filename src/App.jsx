import { BrowserRouter, Route, Routes } from 'react-router'
import './style.css'
import MainLayout from './layouts/MainLayout'
import EquipmentPage from './pages/EquipmentPage'
import CategoryLayout from './layouts/CategoryLayout'


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainLayout />}>
            <Route path='/ability-scores'>
              <Route path='/ability-scores/:index' />
            </Route>
            <Route path='/backgrounds'>
              <Route path='/backgrounds/:index' />
            </Route>
            <Route path='/classes'>
              <Route path='/classes/:index'>
                <Route path='/classes/:index/spellcasting' />
                <Route path='/classes/:index/multi-classing' />
                <Route path='/classes/:index/subclasses' />
                <Route path='/classes/:index/spells' />
                <Route path='/classes/:index/features' />
                <Route path='/classes/:index/proficiencies' />
                <Route path='/classes/:index/levels'>
                  <Route path='/classes/:index/levels/:spell_level/spells' />
                  <Route path='/classes/:index/levels/:class_level'>
                    <Route path='/classes/:index/levels/:class_level/features' />
                  </Route>
                </Route>
              </Route>
            </Route>
            <Route path='/conditions'>
              <Route path='/conditions/:index' />
            </Route>
            <Route path='/damage-types'>
              <Route path='/damage-types/:index' />
            </Route>
            <Route path='/equipment' element={<CategoryLayout categoryPath={['equipment-categories']} categoryName="Equipment" />}>
              <Route path='/equipment/:index' element={<EquipmentPage />} />
            </Route>
            <Route path='/feats'>
              <Route path='/feats/:index' />
            </Route>
            <Route path='/languages'>
              <Route path='/languages/:index' />
            </Route>
            <Route path='/magic-items'>
              <Route path='/magic-items/:index' />
            </Route>
            <Route path='/monsters'>
              <Route path='/monsters/:index' />
            </Route>
            <Route path='/proficiencies'>
              <Route path='/proficiencies/:index' />
            </Route>
            <Route path='/alignments'>
              <Route path='/alignments/:index' />
            </Route>
            <Route path='/features'>
              <Route path='/features/:index' />
            </Route>
            <Route path='/magic-schools'>
              <Route path='/magic-schools/:index' />
            </Route>
            <Route path='/races'>
              <Route path='/races/:index'>
                <Route path='/races/:index/subraces' />
                <Route path='/races/:index/proficiencies' />
                <Route path='/races/:index/traits' />
              </Route>
            </Route>
            <Route path='/rule-sections'>
              <Route path='/rule-sections/:index' />
            </Route>
            <Route path='/rules'>
              <Route path='/rules/:index' />
            </Route>
            <Route path='/spells'>
              <Route path='/spells/:index' />
            </Route>
            <Route path='/subclasses'>
              <Route path='/subclasses/:index'>
                <Route path='/subclasses/:index/features' />
                <Route path='/subclasses/:index/levels'>
                  <Route path='/subclasses/:index/levels/:subclass_level'>
                    <Route path='/subclasses/:index/levels/:subclass_level/features' />
                  </Route>
                </Route>
              </Route>
            </Route>
            <Route path='/subraces'>
              <Route path='/subraces/:index'>
                <Route path='/subraces/:index/proficiencies' />
                <Route path='/subraces/:index/traits' />
              </Route>
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
    </>
  )
}

export default App
