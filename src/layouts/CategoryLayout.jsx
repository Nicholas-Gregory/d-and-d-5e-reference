import { Outlet, useLocation, useNavigate } from "react-router";
import useResource from "../hooks/useResource";
import path from "path";
import CategoryDropdown from "../components/CategoryDropdown";
import { DropdownMenu, ScrollArea } from "radix-ui";
import { useState } from "react";

export default function CategoryLayout({ categoryPath, categoryName }) {
  const [navOpen, setNavOpen] = useState(false);

  const navigate = useNavigate();

  return (
    <>
      <h2>{categoryName}</h2>
      <div className="flex flex-row align-center gap-2">
        <h3>Browse</h3>
        <DropdownMenu.Root
          open={navOpen}
          onOpenChange={(open) => setNavOpen(open)}
        >
          <DropdownMenu.Trigger asChild>
            <button className="thin-border bg-dark-beige" style={{ height: '2rem', cursor: 'pointer' }}>
              ...
            </button>
          </DropdownMenu.Trigger>

          <DropdownMenu.Portal>
            <DropdownMenu.Content className="thin-border bg-dark-beige" align="start">
              <ScrollArea.Root>
                <ScrollArea.Viewport className="max-h-50 max-w-50">
                  <CategoryDropdown
                    categoryPath={categoryPath}
                    categoryName={categoryName.toLowerCase()}
                    isNull={() => {}}
                    close={() => setNavOpen(false)}
                  />
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
          className="flex flex-col align-center gap-1"
          onSubmit={(e) => {
            e.preventDefault();
            navigate(`/${categoryName.toLowerCase()}/${e.target.elements.index.value}`);
          }}
        >
          <label htmlFor="index">Go to Item:</label>
          <div className="flex flex-row align-center gap-1">
            <input
              type="text"
              name="index"
              placeholder="Enter index"
              className="thin-border"
            />
            <button type="submit" className="thin-border bg-dark-beige">
              Go
            </button>
          </div>
        </form>

      <Outlet />
    </>
  );
}