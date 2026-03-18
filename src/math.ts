import { Plugin } from '@ckeditor/ckeditor5-core';
import { Widget } from '@ckeditor/ckeditor5-widget';

import MathUI from './mathui';
import MathEditing from './mathediting';
import AutoMath from './automath';

export default class Math extends Plugin {
	public static get requires() {
		return [ MathEditing, MathUI, AutoMath, Widget ] as const;
	}

	public static get pluginName() {
		return 'Math' as const;
	}
}
