import { DropdownMenu, ScrollArea } from "radix-ui";
import useResource from "../hooks/useResource"
import { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import ClickableText from "../components/ClickableText";
import CategorySubMenu from "../components/CategorySubMenu";
import { useEffect } from "react";

export default function EquipmentLayout() {
  const [navOpen, setNavOpen] = useState(false);
  const [subNavOpen, setSubNavOpen] = useState({});
  const [indexInput, setIndexInput] = useState('');

  const navigate = useNavigate();

  const {
    loading: loadingCategories,
    error: categoriesError,
    data: categories
  } = useResource('equipment-categories');

  useEffect(() => {
    if (categories && categories.results.length > 0) {
      setSubNavOpen(categories.results.reduce((acc, category) => {
        acc[category.index] = false;
        return acc;
      }, {}));
    }
  }, [categories]);

  return (
    <>
      <h2>Equipment</h2>
      <div className="flex flex-row align-center gap-2">
        <h3>Browse</h3>
        <DropdownMenu.Root
          open={navOpen}
          onOpenChange={open => setNavOpen(open)}
        >
          <DropdownMenu.Trigger asChild>
            <button 
              className={`thin-border ${loadingCategories && 'bg-gray'} ${categoriesError && 'bg-red'} ${categories && 'bg-dark-beige'}`}
              disabled={loadingCategories || categoriesError}
              style={{ cursor: loadingCategories || categoriesError ? 'not-allowed' : 'pointer' }}
            >
              ...
            </button>
          </DropdownMenu.Trigger>

          <DropdownMenu.Portal> 
            <DropdownMenu.Content 
              className="thin-border bg-dark-beige"
              align="start"
            >
              <ScrollArea.Root>
                <ScrollArea.Viewport className="max-h-50 max-w-50">
                  <div className="flex flex-col">
                    {categories && categories.results.map(category => (
                      <DropdownMenu.Sub
                        key={category.index}
                        open={subNavOpen[category.index]}
                        onOpenChange={open => setSubNavOpen(prev => ({ ...prev, [category.index]: open }))}
                      >
                        <DropdownMenu.SubTrigger>
                          <ClickableText
                            text={category.name}
                            onClick={() => setSubNavOpen(prev => ({ ...prev, [category.index]: !prev[category.index] }))}
                          />
                        </DropdownMenu.SubTrigger>
                        <DropdownMenu.Portal>
                          <DropdownMenu.SubContent 
                            className="thin-border bg-dark-beige"
                            align="end"
                          >
                            <ScrollArea.Root>
                              <ScrollArea.Viewport className="max-h-25 max-w-50">
                                <CategorySubMenu 
                                  index={category.index} 
                                  name="equipment" 
                                  onClick={(item) => {
                                    setNavOpen(false);
                                    setSubNavOpen(prev => ({ ...prev, [category.index]: false }));
                                    navigate(`/${item.url.split('/').slice(-2).join('/')}`);
                                  }}
                                />
                              </ScrollArea.Viewport>
                              <ScrollArea.Scrollbar orientation="vertical" className="scroll-area-scrollbar">
                                <ScrollArea.Thumb className="scroll-area-thumb" />
                              </ScrollArea.Scrollbar>
                            </ScrollArea.Root>
                          </DropdownMenu.SubContent>
                        </DropdownMenu.Portal>
                      </DropdownMenu.Sub>
                    ))}
                  </div>
                </ScrollArea.Viewport>
                <ScrollArea.Scrollbar orientation="vertical" className="scroll-area-scrollbar">
                  <ScrollArea.Thumb className="scroll-area-thumb" />
                </ScrollArea.Scrollbar>
              </ScrollArea.Root>
            </DropdownMenu.Content>
          </DropdownMenu.Portal>
        </DropdownMenu.Root>
      </div>
 
      <form 
        className="flex flex-col align-center gap-2"
        onSubmit={e => {
          e.preventDefault();
          navigate(`${indexInput}`);
        }}
      >
        <label htmlFor="index-input"><h3>Enter Equipment Index:</h3></label>
        <div className="flex flex-row gap-1">
          <input type="text" id="index-input" value={indexInput} onChange={e => setIndexInput(e.target.value)} />
          <button 
            type="submit" 
            className="thin-border bg-dark-beige"
            disabled={!indexInput}
            style={{ cursor: !indexInput ? 'not-allowed' : 'pointer' }}
          >
            Go
          </button>
        </div>
      </form>

      <Outlet />
    </>
  )
}