/* eslint-disable react-refresh/only-export-components */
import {useBookmarkButton} from '../../hooks/components/use-bookmark-button.ts';
import {BookmarkButtonVariants} from '../../types/variants.ts';
import {memo} from 'react';

type BookmarkButtonProps = {
  isFavorite?: boolean;
  variant: BookmarkButtonVariants;
  onClick: () => void;
}

function BookmarkButton({isFavorite, variant, onClick}: BookmarkButtonProps): JSX.Element {
  const {
    handleButtonClick,
    buttonClassName,
    svgClassName,
    svgWidth,
    svgHeight
  } = useBookmarkButton({variant, isFavorite, onClick});


  return (
    <button className={buttonClassName} type="button" onClick={handleButtonClick}>
      <svg className={svgClassName} width={svgWidth} height={svgHeight}>
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">To bookmarks</span>
    </button>
  );
}

export default memo(BookmarkButton);
