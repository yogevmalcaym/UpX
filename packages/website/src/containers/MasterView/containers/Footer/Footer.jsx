import React from 'react';
import classNames from 'classnames';
import {connect} from "react-redux";
import styled from 'styled-components';
import * as styles from './styles';
import T from './translations';
import {getAppContext} from 'store/App/AppContext/selectors';

const aboutUsComponent = styled(({className, phoneNumber, email, location}) => {

    const {address, long, lat} = location || {};
    const details = [
        {name: T.EMAIL_TEXT, value: email},
        {name: T.PHONE_NUMBER_TEXT, value: phoneNumber},
        {name: T.ADDRESS_TEXT, value: address}
    ].map(({name, value}) =>
        <div {...{key: name, className: 'field'}}>
            <p className='name'>{name}</p>
            <p className='value'>{value}</p>
        </div>
    );

    return <div {...{className: classNames(className, 'footer')}}>
        <div className="details">
            {details}
        </div>

        <div className="mapouter">
            <div className="gmap_canvas">
                <iframe
                    {...{
                        width: '100%',
                        height: '100%',
                        id: 'gmap_canvas',
                        src: `https://maps.google.com/maps?q=${long},${lat}&t=&z=13&ie=UTF8&iwloc=&output=embed`,
                        frameBorder: '0',
                        scrolling: 'no',
                        marginHeight: '0',
                        marginWidth: '0',
                    }} />
            </div>
        </div>
    </div>
})`${styles.Footer}`;


const mapStateToProps = state => {

    const {
        phoneNumber,
        location,
        email
    } = getAppContext({state});

    return {
        phoneNumber,
        location,
        email
    };
};


export default connect(mapStateToProps)(aboutUsComponent);
