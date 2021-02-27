import {ieFix} from './utils/ie-fix';
import {iosVhFix} from './utils/ios-vh-fix';

import {initModals} from './modules/init-modals';

import {pageStart} from './modules/pageStart';
import {showMenu} from './modules/showMenu';
import {showLeftBlock} from './modules/showLeftBlock';

// Utils
// ---------------------------------

ieFix();
iosVhFix();

// Modules
// ---------------------------------

initModals();
pageStart('loader');
showMenu('burger-menu', 'nav-menu');
showLeftBlock('main', 'main__wrapper--blue');
