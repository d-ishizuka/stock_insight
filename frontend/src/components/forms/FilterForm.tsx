import React, { useState } from 'react';
import { Range } from 'react-range';
import styles from './FilterForm.module.css';

const FilterForm = () => {
  const [pbr, setPbr] = useState([-3, 15]);
  const [per, setPer] = useState([-3, 50]);

  const handleSliderChange = (setter) => (values) => { setter(values)};

  return (
    <form className={styles.form}>
      <div className={styles.field}>
        <label>PBR</label>
        <div className={styles.rangeInput}>
          <input
            type="number"
            min={-3}
            max={15}
            step={0.1}
            value={pbr[0]}
            onChange={(e) => setPbr([Number(e.target.value), pbr[1]])}
          />
          <Range
            step={0.1}
            min={-3}
            max={15}
            values={pbr}
            onChange={handleSliderChange(setPbr)}
            renderTrack={({ props, children }) => (
              <div {...props} className={styles.track}>
                {children}
              </div>
            )}
            renderThumb={({ props }) => <div {...props} className={styles.thumb} />}
          />
          <input
            type="number"
            min={-3}
            max={15}
            step={0.1}
            value={pbr[1]}
            onChange={(e) => setPbr([pbr[0], Number(e.target.value)])}
          />
        </div>
      </div>
      <div className={styles.field}>
        <label>PER</label>
        <div className={styles.rangeInput}>
          <input
            type="number"
            min={-3}
            max={15}
            step={0.1}
            value={per[0]}
            onChange={(e) => setPbr([Number(e.target.value), per[1]])}
          />
          <Range
            step={0.1}
            min={-3}
            max={100}
            values={per}
            onChange={handleSliderChange(setPer)}
            renderTrack={({ props, children }) => (
              <div {...props} className={styles.track}>
                {children}
              </div>
            )}
            renderThumb={({ props }) => <div {...props} className={styles.thumb} />}
          />
          <input
            type="number"
            min={-3}
            max={15}
            step={0.1}
            value={per[1]}
            onChange={(e) => setPbr([per[0], Number(e.target.value)])}
          />
        </div>
      </div>
    </form>
  );
};

export default FilterForm;
