import { DropdownMenu } from "radix-ui";
import useResource from "../hooks/useResource"
import { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import ClickableText from "../components/ClickableText";
import CategorySubMenu from "../components/CategorySubMenu";
import { useEffect } from "react";

export default function EquipmentLayout() {
  const [navOpen, setNavOpen] = useState(false);
  const [subNavOpen, setSubNavOpen] = useState({});

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
            <DropdownMenu.Content className="thin-border bg-dark-beige" asChild>
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
                      <DropdownMenu.SubContent className="thin-border bg-dark-beige">
                        <CategorySubMenu index={category.index} name='equipment' />
                      </DropdownMenu.SubContent>
                    </DropdownMenu.Portal>
                  </DropdownMenu.Sub>
                ))}
              </div>
            </DropdownMenu.Content>
          </DropdownMenu.Portal>
        </DropdownMenu.Root>
      </div>


    </>
  )
}