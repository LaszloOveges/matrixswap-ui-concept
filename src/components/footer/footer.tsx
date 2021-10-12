import { BarChartSharp, MenuBookOutlined, Telegram } from '@mui/icons-material';
import { ReactElement } from 'react';

export interface MsFooterProps {

}

function MsFooter({
  ...props
}: MsFooterProps): ReactElement {
  return (
    <div className="ms-footer">
      <ul className="ms-footer__menu">
        <li className="ms-footer__menupoint">
          <a className="ms-footer__link" href="https://docs.matrixswap.io/" target="_blank" rel="noreferrer">
            <MenuBookOutlined />
            Documents
          </a>
        </li>
        <li className="ms-footer__menupoint">
          <a className="ms-footer__link" href="https://t.me/matrixswapofficial" target="_blank" rel="noreferrer">
            <Telegram />
            Telegram
          </a>
        </li>
        <li className="ms-footer__menupoint">
          <a className="ms-footer__link" href="https://matrixswap.netlify.app/analytics" target="_blank" rel="noreferrer">
            <BarChartSharp />
            Analytics
          </a>
        </li>
      </ul>
    </div>
  );
}

export default MsFooter;
