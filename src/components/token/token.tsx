import { MenuItem, Select, Slider } from '@mui/material';
import React, { Fragment, ReactElement } from 'react';
import Input from '@mui/material/Input';
import { InfoOutlined } from '@mui/icons-material';

export enum TokenType {
  Base = 'base',
  Target = 'target',
}

export interface MsTokenProps {
  type?: TokenType;
  icon?: string;
  name?: string;
  balance?: number;
  limit?: number;
  value?: number;
  baseCurrency?: string;
  baseValue?: number;
}

function MsToken({
  type = TokenType.Base,
  baseValue = 0,
  balance = 0,
  limit = 0,
  value = 0,
  ...props
}: MsTokenProps): ReactElement {
  const limitInOwnCurrency = balance * (baseValue / limit);
  const [inputValue, setInputValue] = React.useState(value);
  const handleSliderChange = (event: any, newValue: any) => {
    setInputValue(newValue);
  };
  const handleInputChange = (event: any) => {
    setInputValue(event.target.value === '' ? Number() : Number(event.target.value));
  };
  const handleBlur = () => {
    if (inputValue < 0) {
      setInputValue(0);
    } else if (inputValue > limitInOwnCurrency) {
      setInputValue(limitInOwnCurrency);
    }
  };
  return (
    <div className={`ms-token ${type === TokenType.Base ? `ms-token--base` : `ms-token--target`}`}>
      <div className="ms-token__currency">
        <div className="ms-token__currency__icon">
          <img className='ms-token__currency__icon__img' src={props.icon} alt={props.name} />
        </div>
      </div>
      <div className="ms-token__content">
        <div className="ms-token__info">
          <Select 
            className="ms-select ms-token__name" 
            value={props.name} 
            inputProps={{ readOnly: true }}
          >
            <MenuItem value={props.name}>{props.name}</MenuItem>
          </Select>
          <p className='ms-token__balance'>
            Balance: {balance} {props.name}
          </p>
        </div>
        <div className="ms-token__control">
          <div className="ms-token__control__field">
            <div className="ms-token__control__input">
              <Input
                className={`ms-input ms-input--right ${type === TokenType.Base ? `ms-input--readonly` : ``} ms-token__value`} 
                value={inputValue}
                onChange={handleInputChange}
                onBlur={handleBlur}
                disableUnderline={true}
                readOnly={type === TokenType.Base}
                inputProps={{
                  step: 1,
                  min: 0,
                  max: limitInOwnCurrency,
                  type: 'number',
                  'aria-labelledby': 'input-slider',
                }}
              />
            </div>
            {type === TokenType.Target && 
              <Fragment>
                <div className="ms-token__control__slider">
                  <Slider
                    value={typeof inputValue === 'number' ? inputValue : 0}
                    onChange={handleSliderChange}
                    aria-labelledby="input-slider"
                    max={balance}
                  />
                </div>
                <p className='ms-token__base-value'>
                  = {baseValue} {props.baseCurrency} <InfoOutlined />
                </p>
              </Fragment>
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default MsToken;
