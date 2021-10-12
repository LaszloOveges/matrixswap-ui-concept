import { ReactElement } from 'react';

import matrixSwapLogo from './../../assets/svg/matrixswap-logo-text.svg';

export interface MsLogoProps {

}

function MsLogo({
  ...props
}: MsLogoProps): ReactElement {
  return (
    <img className='ms-logo' src={matrixSwapLogo} alt="MatrixSwap" />
  );
}

export default MsLogo;
