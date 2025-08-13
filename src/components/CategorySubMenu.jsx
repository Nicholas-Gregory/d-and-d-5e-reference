import { DropdownMenu } from 'radix-ui';
import useResource from '../hooks/useResource';
import ClickableText from './ClickableText';
import { useNavigate } from 'react-router';

export default function CategorySubMenu({ index, name, onClick }) {
  const navigate = useNavigate();

  const {
    loading: loadingCategory,
    error: categoryError,
    data: category
  } = useResource('equipment-categories', index);

  if (loadingCategory) {
    return <div className='thin-border bg-dark-beige'>
      Loading...
    </div>;
  } else if (categoryError) {
    return <div className='thin-border bg-red'>
      Error loading category
    </div>;
  } else {
    return (
      <div className="flex flex-col">
        {category && category[name].map(item => (
          <DropdownMenu.Item key={item.index} asChild>
            <ClickableText
              text={item.name}
              onClick={() => onClick(item)}
            />
          </DropdownMenu.Item>
        ))}
      </div>
    )
  }
}