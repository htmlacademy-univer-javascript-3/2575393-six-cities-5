import {BookmarkButtonVariants} from '../../types/variants.ts';
import classNames from 'classnames';
import {useAuthorization} from '../services/use-authorization.ts';
import {useNavigate} from 'react-router-dom';
import {AppRoute} from '../../const.ts';

const variantData = {
  card: {
    classPrefix: 'place-card',
    svgSizes: {width: '18', height: '19'}
  },
  full: {
    classPrefix: 'offer',
    svgSizes: {width: '31', height: '33'}
  },
};

type BookMarkButtonController = {
  variant: BookmarkButtonVariants;
  isFavorite?: boolean;
  onClick: () => void;
};

export function useBookmarkButton({variant, isFavorite, onClick}: BookMarkButtonController) {
  const {
    classPrefix,
    svgSizes
  } = variantData[variant];

  const isAuthorized = useAuthorization();
  const navigate = useNavigate();
  const handleButtonClick = () => {
    if (isAuthorized) {
      onClick();
    } else {
      navigate(AppRoute.Login);
    }
  };

  const buttonClassName = classNames(
    'button',
    `${classPrefix}__bookmark-button`,
    {[`${classPrefix}__bookmark-button--active`]: isFavorite}
  );

  const svgClassName = `${classPrefix}__bookmark-icon`;

  return {
    handleButtonClick,
    buttonClassName,
    svgClassName,
    svgWidth: svgSizes.width,
    svgHeight: svgSizes.height
  };
}
