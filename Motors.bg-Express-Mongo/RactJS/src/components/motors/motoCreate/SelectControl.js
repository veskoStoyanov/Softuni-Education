import React from 'react'
import PropTypes from 'prop-types';

const SelectControl = (props) => {
    return (<div>
        <label htmlFor="category"><strong>City</strong></label>
        <select onChange={props.handleChange} name="city" id="category">
            <option value={props.city || 'Choose any city'}>{props.city || 'Choose any city'}</option>
            <option value="Blagoevgrad">Blagoevgrad</option>
            <option value="Burgas">Burgas</option>
            <option value="Varna">Varna</option>
            <option value="Veliko Turnovo">Veliko Turnovo</option>
            <option value="Vidin">Vidin</option>
            <option value="Vratsa">Vratsa</option>
            <option value="Gabrovo">Gabrovo</option>
            <option value="Dobrich">Dobrich</option>
            <option value="Kardzhali">Kardzhali</option>
            <option value="Kyustendil">Kyustendil</option>
            <option value="Lovech">Lovech</option>
            <option value="Montana">Montana</option>
            <option value="Pazardzhik">Pazardzhik</option>
            <option value="Pernik">Pernik</option>
            <option value="Pleven">Pleven</option>
            <option value="Plovdiv">Plovdiv</option>
            <option value="Razgrad">Razgrad</option>
            <option value="Ruse">Ruse</option>
            <option value="Silistra">Silistra</option>
            <option value="Sliven">Sliven</option>
            <option value="Smolyan">Smolyan</option>
            <option value="Sofia">Sofia</option>
            <option value="Stara Zagora">Stara Zagora</option>
            <option value="Targovishte">Targovishte</option>
            <option value="Haskovo">Haskovo</option>
            <option value="Shumen">Shumen</option>
            <option value="Yambol">Yambol</option>
        </select>
    </div>)
}

SelectControl.propTypes = {
    handleChange: PropTypes.func,
    city: PropTypes.string,

};

export default SelectControl;