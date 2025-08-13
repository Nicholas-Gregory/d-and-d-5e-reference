import { useEffect, useState } from "react";
import useResource from "../hooks/useResource";
import ClickableText from "./ClickableText";
import { useNavigate } from "react-router";
import { DropdownMenu, ScrollArea } from "radix-ui";

export default function CategoryDropdown({ categoryPath, categoryName, isNull, close }) {
  const [leaf, setLeaf] = useState(false);
  const [lastClicked, setLastClicked] = useState(null);

  const navigate = useNavigate();

  const {
    loading: loadingCategory,
    error: categoryError,
    data: categoryData
  } = useResource(...categoryPath);

  const leafClick = (item) => {
    navigate(`/${item.url.split('/').slice(-2).join('/')}`);
    close();
  };

  const renderChild = (isNullResult) => {
    setLeaf(isNullResult)
    if (isNullResult) {
      leafClick(lastClicked);
      setLastClicked(null);
    }
  }

  useEffect(() => {
    if (categoryError && categoryError.status === 404) {
      console.log('here')
      isNull(true);
    } else {
      isNull(false);
      // console.log(categoryData)
    }
  }, [categoryError, isNull]);

  if (loadingCategory) {
    return <div>Loading...</div>;
  }
  if (categoryError && categoryError.status !== 404) {
    return <div>Error loading category: {categoryError.message}</div>;
  } else if (categoryData && (categoryData.results || categoryData[categoryName])) {
    console.log(categoryData);
    return (
      <div className="flex flex-col">
        {leaf ? (
          (categoryData.results || categoryData[categoryName]).map(item => (
            <DropdownMenu.Item key={item.index}>
              <ClickableText
                text={item.name}
                onClick={() => leafClick(item)}
              />
            </DropdownMenu.Item>
          ))
        ) : (
          (categoryData.results || categoryData[categoryName]).map((item, index) => (
            <DropdownMenu.Sub key={item.index} defaultOpen>
              <DropdownMenu.SubTrigger>
                <ClickableText text={item.name} onClick={() => setLastClicked(item)} />
              </DropdownMenu.SubTrigger>

              <DropdownMenu.Portal>
                <DropdownMenu.SubContent
                  className="thin-border bg-dark-beige"
                  align="end"
                >
                  <ScrollArea.Root>
                    <ScrollArea.Viewport className="max-h-25 max-w-50">
                      <CategoryDropdown
                        categoryPath={[...categoryPath, item.index]}
                        categoryName={categoryName}
                        isNull={renderChild}
                        close={close}
                      />
                    </ScrollArea.Viewport>

                    <ScrollArea.Scrollbar orientation="vertical" className="scroll-area-scrollbar">
                      <ScrollArea.Thumb className="scroll-area-thumb" />
                    </ScrollArea.Scrollbar>
                  </ScrollArea.Root>
                </DropdownMenu.SubContent>
              </DropdownMenu.Portal>
            </DropdownMenu.Sub>
          ))
        )}
      </div>
    );
  } else {
    return null;
  }
}