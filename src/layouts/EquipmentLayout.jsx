import { DropdownMenu } from "radix-ui";
import useResource from "../hooks/useResource"

export default function EquipmentLayout() {
  const {
    loading: loadingCategories,
    error: categoriesError,
    data: categories
  } = useResource('equipment-categories');

  return (
    <>
      <h2>Equipment</h2>
      <div className="flex flex-row align-center gap-2">
        <h3>Browse</h3>
        <DropdownMenu.Root>
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
            <DropdownMenu.Content className="thin-border bg-dark-beige">
              {/* {categories && categories.map(category => (

              )} */}
            </DropdownMenu.Content>
          </DropdownMenu.Portal>
        </DropdownMenu.Root>
      </div>


    </>
  )
}