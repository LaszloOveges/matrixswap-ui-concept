import { ReactElement } from 'react';
import { AddOutlined, Settings, SwapVert } from '@mui/icons-material';
import { Button } from '@mui/material';

import MsToken, { MsTokenProps, TokenType } from '../token/token';
import maticIcon from './../../assets/image/matic.png';
import dfynIcon from './../../assets/image/dfyn.png';
import matrixIcon from './../../assets/image/matrix.webp';

export interface MsSwapProps {

}

const mockBaseToken: MsTokenProps = {
  type: TokenType.Base,
  icon: maticIcon,
  name: `Matic`,
  balance: 120,
  value: 120,
}

const mockTargetTokenList: MsTokenProps[] = [
  {
    type: TokenType.Target,
    icon: dfynIcon,
    name: `Dfyn`,
    balance: 2400,
    value: 2400 * (80 / 120),
    limit: mockBaseToken.balance,
    baseCurrency: mockBaseToken.name,
    baseValue: 80,
  },
  {
    type: TokenType.Target,
    icon: matrixIcon,
    name: `Matrix`,
    balance: 3600,
    value: 3600 * (40 / 120),
    limit: mockBaseToken.balance,
    baseCurrency: mockBaseToken.name,
    baseValue: 40,
  }
];

function MsSwap({
  ...props
}: MsSwapProps): ReactElement {
  return (
    <div className='ms-swap'>
      <div className="ms-swap__content">

        <div className="ms-swap__header">
          <div className="ms-swap__header__info">
            <h2 className="ms-swap__header__title">Swap</h2>
            {/* <p className="ms-swap__header__text">Trade single or multiple tokens at once</p> */}
          </div>
          <Settings className="ms-swap__header__settings" />
        </div>

        <div className="ms-swap__base-container">
          <MsToken {...mockBaseToken} />
        </div>

        <div className="ms-swap__separator">
          <div className="ms-swap__switch">
            <SwapVert className="ms-swap__switch__icon" />
          </div>
        </div>

        <div className="ms-swap__target-container">
          {mockTargetTokenList.map((targetToken) => (
            <MsToken {...targetToken} />
          ))}
          <div className="ms-swap__add-token">
            <AddOutlined /> Add token
          </div>
        </div>

        <div className="ms-swap__action">
          <Button className="ms-button ms-swap__button">Swap</Button>
        </div>

      </div>
    </div>
  );
}

export default MsSwap;
