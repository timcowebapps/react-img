'use strict';

/* Внешние зависимости */
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Microdata } from 'timcowebapps-react-utils';

/* Внутрение зависимости */
import { ImageObject } from '../src/index';

import 'timcowebapps-scss-dir/_reboot.scss';
var styles: any = require('./index.scss');

const App: React.StatelessComponent<any> = (props: any) => {
	return (
		<ImageObject schema={{
			properties: {
				microdataUsed: false,
				microdata: {
				} as Microdata.IImageObject,
				src: "http://via.placeholder.com/440x650",
				classes: {
					pipeline: styles,
					block: "img"
				}
			}
		}} />
	);
}

ReactDOM.render(
	<App />,
	document.getElementById('react-view')
);
