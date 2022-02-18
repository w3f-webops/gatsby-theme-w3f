import translations from '../../../content/locales/en/translations.json';
import {buildLocalesCollection} from './locales';

const stringFiles = [
  {
    name: 'translations',
    strings: translations,
  }
]
const locales = buildLocalesCollection(stringFiles);

export default {
  locales
};
