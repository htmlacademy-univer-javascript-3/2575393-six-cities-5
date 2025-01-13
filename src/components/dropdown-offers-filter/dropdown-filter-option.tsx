
import classNames from 'classnames';
import React from 'react';
import {useAppDispatch} from '../../hooks/services/redux.ts';
import {setSortingOrder} from '../../store/data-process/data-process.slice.ts';
import {SortingOrder} from '../../const.ts';

type DropdownFilterOptionProps = {
  sortingOption: SortingOrder;
  isActive: boolean;
  dropdownStateSetter: React.Dispatch<React.SetStateAction<boolean>>;
}

function DropdownFilterOption({sortingOption, isActive, dropdownStateSetter} : DropdownFilterOptionProps) : JSX.Element {
  const dispatch = useAppDispatch();
  const className = classNames('places__option', {'places__option--active' : isActive});
  const handleSortingOptionOnClick = () => {
    dropdownStateSetter((state) => !state);
    dispatch(setSortingOrder(sortingOption));
  };

  return (
    <li className={className} tabIndex={0} onClick={handleSortingOptionOnClick}>{sortingOption}</li>
  );
}

export default DropdownFilterOption;
