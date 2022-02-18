import {buildLocalesCollection} from '@w3f/gatsby-theme-w3f/src/cms/collections/locales.js';
import translations from '../../../content/locales/en/translations.json';

const stringFiles = [
    {
        name: 'translations',
        strings: translations,
    }
]
const locales = buildLocalesCollection(stringFiles);

export default locales
