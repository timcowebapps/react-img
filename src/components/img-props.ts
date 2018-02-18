'use strict';

/* Внешние зависимости. */
import * as React from 'react';
import * as PropTypes from 'prop-types';
import { IJsonSchema } from 'timcowebapps-react-utils';

export namespace ImageObjectProps {
	export interface IProps extends React.Props<any> {
		/**
		 * Схема.
		 * 
		 * @type {IJsonSchema}
		 * @memberof IImgProps
		 */
		schema: IJsonSchema;
	}

	export const types = {
		schema: PropTypes.shape({
			properties: PropTypes.shape({
				src: PropTypes.string.isRequired,
				alt: PropTypes.string,
				microdataUsed: PropTypes.bool,
				microdata: PropTypes.shape({
					name: PropTypes.string,
					author: PropTypes.string,
					contentLocation: PropTypes.string,
					description: PropTypes.string,
					datePublished: PropTypes.string
				}),
				classes: PropTypes.shape({
					pipeline: PropTypes.object.isRequired,
					block: PropTypes.string,
					//modifiers: PropTypes.oneOfType
				})
			})
		})
	}

	export const defaults = {
		schema: {
			properties: {
				src: "",
				alt: "",
				microdataUsed: false,
				microdata: {
					name: "",
					author: "",
					contentLocation: "",
					description: "",
					datePublished: ""
				},
				classes: {
					pipeline: null,
					block: "img"
				}
			}
		}
	};
};
