
import DropdownFilterOption from './dropdown-filter-option.tsx';
import {useDropdownOffersFilter} from '../../hooks/components/use-dropdown-offers-filter.ts';
import {SortingOrder} from '../../const.ts';

function DropdownFilter() {
  const {handleSortingOnClick, currentSortingOrder, dropdownIsOpen, setDropdownIsOpen} = useDropdownOffersFilter();

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by </span>
      <span className="places__sorting-type" tabIndex={0} onClick={handleSortingOnClick}>
        {currentSortingOrder}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      {dropdownIsOpen &&
        <ul className="places__options places__options--custom places__options--opened">
          {Object.values(SortingOrder).map((value) => (
            <DropdownFilterOption
              dropdownStateSetter={setDropdownIsOpen}
              sortingOption={value}
              isActive={currentSortingOrder === value}
              key={value}
            />
          ))}
        </ul>}
    </form>
  );
}

export default DropdownFilter;
