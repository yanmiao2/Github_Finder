//racf
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AlertContext from '../../context/alert/alertContext';

const Alert = () => {
    const alertContext = useContext(AlertContext);
    const { alert, clearAlert } = alertContext;
    return (
        alert && (
            <div className={`alert alert-${alert.type}`}>
                <i className='fas fa-info-circle'>
                    {' '}
                    {alert.msg}&nbsp;&nbsp;&nbsp;
                </i>
                <Link
                    class='fas fa-times-circle text-danger'
                    aria-hidden='true'
                    onClick={clearAlert}
                ></Link>
            </div>
        )
    );
};
export default Alert;
