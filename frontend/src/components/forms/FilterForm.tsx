import React, { useState } from 'react';
import { Range } from 'react-range';
import styles from './FilterForm.module.css';

const FilterForm = () => {
  const [industry, setIndustry] = useState('');
  const [pbr, setPbr] = useState([-3, 20]);
  const [per, setPer] = useState([-3, 50]);
  const [dividedYield, setDividedYield] = useState([0, 20]);
  const [payoutRatio, setPayoutRatio] = useState([0, 100]);
  const [equityRatio, setEquityRatio] = useState([-10, 100]);
  const [sigma, setSigma] = useState([-3, 3]);

  const [stockOptions, setStockOptions] = useState({
    fiveDaysMARise: false,
    twentyFiveDaysMARise: false,
    seventyFiveDaysMARise: false
  })

  const handleSliderChange = (setter) => (values) => { setter(values) };
  const handleSelectChange = (e) => { setIndustry(e.target.value); };
  const handleCheckboxChange = (setter) => (e) => {
    const {name, checked } = e.target;
    setter((prevState) => ({ ...prevState, [name]: checked}));
  };

  return (
    <form className={styles.form}>
      <h3>ファンダメンタルデータ</h3>
      <div className={styles.field}>
        <label>業種選択</label>
        <select value={industry} onChange={handleSelectChange}>
          <option value="all">全ての業種</option>
          <option value="finance">金融</option>
        </select>
      </div>
      <div className={styles.field}>
        <label>PBR</label>
        <div className={styles.rangeInput}>
          <input
            type="number"
            min={-3}
            max={20}
            step={0.1}
            value={pbr[0]}
            onChange={(e) => setPbr([Number(e.target.value), pbr[1]])}
          />
          <Range
            step={0.1}
            min={-3}
            max={20}
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
            max={20}
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
            max={50}
            step={0.1}
            value={per[0]}
            onChange={(e) => setPbr([Number(e.target.value), per[1]])}
          />
          <Range
            step={0.1}
            min={-3}
            max={50}
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
            max={50}
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

      <h3>株価データ</h3>
      <div className={styles.field}>
        <label>
          <input type="checkbox" name="fiveDaysMARise" checked={stockOptions.fiveDaysMARise} onChange={handleCheckboxChange(setStockOptions)}/>
          5日移動平均線が上昇している
        </label>
      </div>
      <div className={styles.field}>
        <label>
          <input type="checkbox" name="twentyFiveDaysMARise" checked={stockOptions.twentyFiveDaysMARise} onChange={handleCheckboxChange(setStockOptions)}/>
          25日移動平均線が上昇している
        </label>
      </div>
      <div className={styles.field}>
        <label>
          <input type="checkbox" name="seventyFiveDaysMARise" checked={stockOptions.seventyFiveDaysMARise} onChange={handleCheckboxChange(setStockOptions)}/>
          75日移動平均線が上昇している
        </label>
      </div>
      <div className={styles.field}>
        <label>25日移動平均線に対する分散値</label>
        <div className={styles.rangeInput}>
          <input type="number" value={sigma[0]} onChange={(e) => setSigma([Number(e.target.value), sigma[1]])} />
          <Range
            step={0.1}
            min={-3}
            max={3}
            values={sigma}
            onChange={handleSliderChange(setSigma)}
            renderTrack={({ props, children }) => (
              <div {...props} className={styles.track}>
                {children}
              </div>
            )}
            renderThumb={({ props }) => <div {...props} className={styles.thumb} />}
          />
          <input type="number" value={sigma[1]} onChange={(e) => setSigma([sigma[0], Number(e.target.value)])} />
        </div>
      </div>
    </form>
  );
};

export default FilterForm;
