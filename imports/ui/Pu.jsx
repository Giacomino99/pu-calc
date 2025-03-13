import React, { useState } from 'react'
import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';

export function Pu() {
    const [puWp, setPuWp] = useState(0);
    const [puDensity, setPuDensity] = useState(0);
    const [celluloseWp, setCelluloseWp] = useState(0);
    const [celluloseDensity, setCelluloseDensity] = useState(1);
    const [puPercent, setPuPercent] = useState(0);
    const [cellulosePercent, setCellulosePercent] = useState(0);
    const [desiredQuantity, setDesiredQuantity] = useState(0);
    const [result, setResult] = useState(null);

    function handleCalculate(e) {
        e.preventDefault();
        const cellulose_mass = (desiredQuantity * (cellulosePercent / 100)) / (celluloseWp/100);
        const pu_mass = (desiredQuantity * (puPercent / 100)) / (puWp / 100);
        const water_mass = desiredQuantity - cellulose_mass - pu_mass;

        const result = {
            cellulose_name: `Cellulose (${celluloseWp}%)`,
            cellulose_mass: cellulose_mass.toFixed(3),
            cellulose_wp: cellulosePercent,
            cellulose_ml: (cellulose_mass / celluloseDensity).toFixed(3),
            pu_name: `PU/PP (${puWp}%)`,
            pu_mass: pu_mass.toFixed(3),
            pu_wp: puPercent,
            pu_ml: (pu_mass / puDensity).toFixed(3),
            water_name: 'DI Water',
            water_mass: water_mass.toFixed(3),
            water_wp: ((water_mass*100) / desiredQuantity).toFixed(3),
            water_ml: water_mass.toFixed(3)
        };
        setResult(result);
    }

    return (
        <>
        <div className='header'>
            <div className='logo-link'>
                <img className='logo' src='/logo.svg' alt='Soarce Logo'/>
                <h1 className='header-text'>Soarce Web Utility</h1>
            </div>
        </div>
        <div className='horizontal center pu-container'>
            <div className='vertical'>
            <form className='vertical pu-input-container pu-bg' onSubmit={handleCalculate}>
                <div className='horizontal'>
                <div className='vertical pu-input-container'>
                    <label htmlFor='pw-wp'>Initial Sizing Agent Weight Percent:</label>
                    <div className='input-group'>
                        <input 
                            type='number'
                            required
                            className='s-input pu-input'
                            min={0}
                            max={100}
                            step='any'
                            name='pu-wp'
                            onChange={(e) => setPuWp(e.target.value)}
                        />
                        <span className='input-addon'>%</span>
                    </div>
                    <label htmlFor='pw-wp'>Initial Sizing Agent Density:</label>
                    <div className='input-group'>
                        <input 
                            type='number'
                            // required
                            className='s-input pu-input'
                            min={0}
                            max={100}
                            step='any'
                            name='pu-density'
                            onChange={(e) => setPuDensity(e.target.value)}
                        />
                        <span className='input-addon'>g/mL</span>
                    </div>
                </div>
                <div className='vertical pu-input-container'>
                    <label htmlFor='cellulose-wp'>Initial Cellulose Weight Percent:</label>
                    <div className='input-group'>
                        <input
                            type='number'
                            required
                            className='s-input pu-input'
                            min={0}
                            max={100}
                            step='any'
                            name='cellulose-wp'
                            onChange={(e) => setCelluloseWp(e.target.value)}
                        />
                        <span className='input-addon'>%</span>
                    </div>
                    <label htmlFor='cellulose-wp'>Initial Cellulose Density:</label>
                    <div className='input-group'>
                        <input
                            type='number'
                            // required
                            className='s-input pu-input'
                            min={0}
                            max={100}
                            value={1}
                            step='any'
                            name='cellulose-density'
                            onChange={(e) => setCelluloseDensity(e.target.value)}
                        />
                        <span className='input-addon'>g/mL</span>
                    </div>
                </div>
                </div>
                <div className='vertical pu-input-container'>
                <label htmlFor='pu-solution-percentage'>Desired Sizing Agent Percentage in Solution:</label>
                <div className='input-group'>
                    <input
                        type='number'
                        required
                        className='s-input pu-input'
                        min={0}
                        max={100}
                        step='any'
                        name='pu-solution-percentage'
                        onChange={(e) => setPuPercent(e.target.value)}
                    />
                    <span className='input-addon'>%</span>
                </div>
                <label htmlFor='cellulose-solution-percentage'>Desired Cellulose Percentage in Solution:</label>
                <div className='input-group'>
                    <input
                        type='number'
                        required
                        className='s-input pu-input'
                        min={0}
                        max={100}
                        step='any'
                        name='cellulose-solution-percentage'
                        onChange={(e) => setCellulosePercent(e.target.value)}
                    />
                    <span className='input-addon'>%</span>
                </div>
                <label htmlFor='desired-quantity'>Desired Quantity:</label>
                <div className='input-group'>
                    <input
                        type='number'
                        required
                        className='s-input pu-input'
                        min={0}
                        step='any'
                        name='desired-quantity'
                        onChange={(e) => setDesiredQuantity(e.target.value)}
                    />
                    <span className='input-addon'>g</span>
                </div>
                <button className='s-button submit-button' type='submit'>Calculate</button>
                </div>
            </form>
                {result && (
                    <div className='result-table-container'>
                        <table className='result-table'>
                            <thead>
                                <tr>
                                    <th>Material Name</th>
                                    <th>Mass (g)</th>
                                    <th>Volume (mL)</th>
                                    {/* <th>Weigth Percent</th> */}
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{result.pu_name}</td>
                                    <td>{result.pu_mass}</td>
                                    {/* <td>{result.pu_wp}%</td> */}
                                    <td>{result.pu_ml}</td>
                                </tr>
                                <tr>
                                    <td>{result.cellulose_name}</td>
                                    <td>{result.cellulose_mass}</td>
                                    {/* <td>{result.cellulose_wp}%</td> */}
                                    <td>{result.cellulose_ml}</td>
                                </tr>
                                <tr>
                                    <td>{result.water_name}</td>
                                    <td>{result.water_mass}</td>
                                    {/* <td>{result.water_wp}%</td> */}
                                    <td>{result.water_ml}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
            </div>
        </>
    )
}