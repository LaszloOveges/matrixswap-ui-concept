import { ReactElement } from 'react';

import MsLogo from '../logo/logo';
import MsWallet from '../wallet/wallet';

export interface MsHeaderProps {

}

function MsHeader({
  ...props
}: MsHeaderProps): ReactElement {
  return (
    <div className='ms-header'>
      <div className='ms-header__logo'>
        <MsLogo />
      </div>
      <div className='ms-header__wallet'>
        <MsWallet />
      </div>
    </div>
  );
}

export default MsHeader;
