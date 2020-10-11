import React from 'react';
import toastr from 'toastr';

import './no-found.css';

import text from '../../infrastructore/textDescription';

const NotFound = () => {
    toastr.success(text['noPage']);

    return (
        <div id="no-found">
            <img src="https://image.shutterstock.com/image-vector/template-reports-page-not-found-600w-493602739.jpg" alt="noPage" />
        </div>
    )
}

export default NotFound;



