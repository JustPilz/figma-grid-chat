import 'styles/index.scss';
import Scrollbar from 'smooth-scrollbar';

let options = {alwaysShowTracks: true};
Scrollbar.init(document.querySelector('#messages'), options);
