import { ReactElement } from 'react';

import MatrixBgGrid from '../../assets/video/ms-bg-grid.mp4';
import MsHeader from '../header/header';
import MsFooter from '../footer/footer';
import MsSwap from '../swap/swap';

export interface MsLayoutProps {

}

function MsLayout({
  ...props
}: MsLayoutProps): ReactElement {
  const setPlayBack = (event: any) => {
    (event.target as HTMLMediaElement).playbackRate = 0.6
  };
  return (
    <div className="ms-layout">
      <div className="ms-layout__bg-beam-1"></div>
      <div className="ms-layout__bg-beam-2"></div>
      <div className="ms-layout__bg-anim">
        <video onCanPlay={setPlayBack} className='ms-layout__bg-anim__video' id='wallet-bg-video' autoPlay loop muted>
          <source src={MatrixBgGrid} type='video/mp4' />
        </video>
      </div>
      <div className="ms-layout__header">
        <MsHeader />
      </div>
      <div className="ms-layout__content">
        <MsSwap />
      </div>
      <div className="ms-layout__footer">
        <MsFooter />
      </div>
    </div>
  );
}

export default MsLayout;
