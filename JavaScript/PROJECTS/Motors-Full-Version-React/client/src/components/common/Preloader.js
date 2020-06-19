import React from 'react';
import { connect } from 'react-redux';

import '../../style/preloader.css';

const Preloader = ({ loading }) => {
    if (!loading) return null;

    return (<div className="preloader">
        {loading && <h2>Loading &hellip;</h2>}
    </div>);
};

export default connect((state) => ({

    loading: state.ajaxCalls > 0

}))(Preloader);