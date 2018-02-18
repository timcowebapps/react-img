'use strict';

/* Внешние зависимости. */
import * as _ from 'lodash';
import * as React from 'react';
import * as PropTypes from 'prop-types';
import { Classes, Microdata } from 'timcowebapps-react-utils';

/* Внутренние зависимости. */
import { ImageObjectProps } from './img-props';

const ImageObject: React.StatelessComponent<any> = (props: ImageObjectProps.IProps) => {
	const { schema, ...attributes } = props;
	const options = _.merge({}, this.default.defaultProps.schema, schema);

	const microdata: Microdata.IImageObject = options.properties.microdata;
	const microdataAttrs = options.properties.microdataUsed ? {
		imageobject: {
			itemScope: true,
			itemType: "http://schema.org/ImageObject"
		},
		content: {
			itemProp: "contentUrl"
		}
	} : {};

	return (
		<div className={options.properties.classes.pipeline[options.properties.classes.block]} {...microdataAttrs.imageobject}>
			<img src={schema.properties.src} alt={schema.properties.alt} {...microdataAttrs.content} />
			{!_.isEmpty(microdata.name) ? <span itemProp="name">{microdata.name}</span> : null}
			{!_.isEmpty(microdata.author) ? <span itemProp="author">{microdata.author}</span> : null}
			{!_.isEmpty(microdata.contentLocation) ? <span itemProp="contentLocation">{microdata.contentLocation}</span> : null}
			{!_.isEmpty(microdata.description) ? <span itemProp="description">{microdata.description}</span> : null}
			{!_.isEmpty(microdata.datePublished) ? <meta itemProp="datePublished" content={microdata.datePublished} /> : null}
		</div>
	);
};

ImageObject.propTypes = ImageObjectProps.types;
ImageObject.defaultProps = ImageObjectProps.defaults;

export default ImageObject;
