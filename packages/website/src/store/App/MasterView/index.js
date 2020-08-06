import {combineReducers} from 'redux';
import home from './Home';
import checkout from './Checkout';
import categoryView from './CategoryView';
import itemView from './ItemView';
import aboutUs from './AboutUs';
import header from './Header';

const reducer = combineReducers({
    home,
    checkout,
    categoryView,
    itemView,
    aboutUs,
    header
});

export default reducer;

