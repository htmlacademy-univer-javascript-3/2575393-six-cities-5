/* eslint-disable react-refresh/only-export-components */
import {PremiumSignVariants} from '../../types/variants.ts';
import {memo} from 'react';

type PremiumSignProps = {
  show?: boolean;
  variant: PremiumSignVariants;
}

function PremiumSign({ show, variant } : PremiumSignProps) {
  const className = variant === 'card' ? 'place-card__mark' : 'offer__mark';
  return (
    show && (
      <div className={className}>
        <span>Premium</span>
      </div>
    )
  );
}

export default memo(PremiumSign);
