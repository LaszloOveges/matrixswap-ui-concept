import { Fragment, ReactElement, useState } from 'react';

import matrixSwapWave from '../../assets/video/ms-bg-wave.mp4';
import nukeIcon from '../../assets/svg/nuke-icon.svg';
import { Button } from '@mui/material';

export interface MsWalletProps {

}

function MsWallet({
  ...props
}: MsWalletProps): ReactElement {
  const [isNoteShown, setIsNoteShown] = useState(false);
  return (
    <Fragment>
      <div className='ms-wallet'>
        <div className='ms-wallet__info'>
          <video className='ms-wallet__bg' id='wallet-bg-video' autoPlay loop muted>
            <source src={matrixSwapWave} type='video/mp4' />
          </video>
          <div className='ms-wallet__content'>
            <p className='ms-wallet__protocol'>Polygon wallet</p>
            <p className='ms-wallet__id'>0xcagfd3k...k9fef3ae</p>
          </div>
          <div className={`ms-wallet__note ${isNoteShown ? `ms-wallet__note--visible` : ``}`}>
            Swap all your tokens to a selected stable coin.
          </div>
        </div>
        <div className='ms-wallet__action'>
          <Button 
            className="ms-button ms-wallet__button"
            onMouseEnter={() => setIsNoteShown(true)}
            onMouseLeave={() => setIsNoteShown(false)}
          >
            <img className='ms-wallet__nuke' src={nukeIcon} alt="Nuke button" />
          </Button>
        </div>
      </div>
    </Fragment>
  );
}

export default MsWallet;
