import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import Styles from './SlideBar.module.css';
import { Unstable_NumberInput as NumberInput } from '@mui/base/Unstable_NumberInput';


export const SlideBar: React.FC = () => {
  const [value, setValue] = React.useState<number[]>([-3, 15]);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
    console.log(newValue)
  };

  return (
    <>
      <div className={Styles.container}>
        <div className={Styles.flexItem}>
          <h3>RBR</h3>
        </div>

        <div className={Styles.flexItem}>
          <Box sx={{ width: 200 }}>
            <Slider
              getAriaLabel={() => 'PBR Range'}
              value={value}
              min={-3}
              max={15}
              step={0.1}
              onChange={handleChange}
              valueLabelDisplay="auto"
            />
          </Box>

          <div className={Styles.container}>
            <input
              className="input-left"
              type="number"
              value={value[0]}
              min={-5}
              max={14}
              onChange={(e) => setValue([Number(e.target.value), value[1]])}
            />

            <input
              className="input-right"
              type="number"
              value={value[1]}
              min={-5}
              max={15}
              onChange={(e) => setValue([value[0], Number(e.target.value)])}
            />
          </div>

        </div>
      </div>
    </>
  );
}
