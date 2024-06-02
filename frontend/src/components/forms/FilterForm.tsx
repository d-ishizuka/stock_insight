import React, { useState } from 'react';
import { Range } from 'react-range';
import styles from './FilterForm.module.css';

const FilterForm = () => {
  const [pbr, setPbr] = useState([-3, 15]);
  const [per, setPer] = useState([-3, 50]);
  const [dividedYield, setDividedYield] = useState([0, 20]);
  const [payoutRatio, setPayoutRatio] = useState([0, 100]);
  const [equityRatio, setEquityRatio] = useState([-10, 100]);
  const [sigma, setSigma] = useState([-3, 3]);

  const handleSliderChange = (setter) => (values) => { setter(values)};

  return (
    <form className={styles.form}>
      <p>株式データ</p>
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

      <div className={styles.field}>
        <label>配当利回り</label>
        <div className={styles.rangeInput}>
          <input
            type="number"
            min={0}
            max={20}
            step={0.1}
            value={dividedYield[0]}
            onChange={(e) => setDividedYield([Number(e.target.value), dividedYield[1]])}
          />
          <Range
            min={0}
            max={20}
            step={0.1}
            values={dividedYield}
            onChange={handleSliderChange(setDividedYield)}
            renderTrack={({ props, children }) => (
              <div {...props} className={styles.track} >
                { children}
              </div>
            )}
            renderThumb={({ props }) => <div {...props} className={styles.thumb} />}
          />
          <input
            type="number"
            min={0}
            max={20}
            step={0.1}
            value={dividedYield[1]}
            onChange={(e) => setDividedYield([dividedYield[0], Number(e.target.value)])}
          />
        </div>
      </div>

      <div className={styles.field}>
        <label>配当性向</label>
        <div className={styles.rangeInput}>
          <input
            type="number"
            min={0}
            max={100}
            step={0.1}
            value={payoutRatio[0]}
            onChange={(e) => setPayoutRatio([Number(e.target.value), payoutRatio[1]])}
          />
          <Range
            min={0}
            max={100}
            step={0.1}
            values={payoutRatio}
            onChange={handleSliderChange(setPayoutRatio)}
            renderTrack={({ props, children }) => (
              <div {...props} className={styles.track} >
                { children}
              </div>
            )}
            renderThumb={({ props }) => <div {...props} className={styles.thumb} />}
          />
          <input
            type="number"
            min={0}
            max={100}
            step={0.1}
            value={payoutRatio[1]}
            onChange={(e) => setPayoutRatio([payoutRatio[0], Number(e.target.value)])}
          />
        </div>
      </div>

      <div className={styles.field}>
        <label>自己資本比率</label>
        <div className={styles.rangeInput}>
          <input
            type="number"
            min={0}
            max={100}
            step={0.1}
            value={equityRatio[0]}
            onChange={(e) => setEquityRatio([Number(e.target.value), equityRatio[1]])}
          />
          <Range
            min={-10}
            max={100}
            step={0.1}
            values={equityRatio}
            onChange={handleSliderChange(setEquityRatio)}
            renderTrack={({ props, children }) => (
              <div {...props} className={styles.track} >
                { children}
              </div>
            )}
            renderThumb={({ props }) => <div {...props} className={styles.thumb} />}
          />
          <input
            type="number"
            min={0}
            max={100}
            step={0.1}
            value={equityRatio[1]}
            onChange={(e) => setEquityRatio([equityRatio[0], Number(e.target.value)])}
          />
        </div>
      </div>
    </form>
  );
};

export default FilterForm;
