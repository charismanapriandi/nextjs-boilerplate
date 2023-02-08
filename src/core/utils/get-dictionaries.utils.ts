import id from 'locales/id.json';
import en from 'locales/en.json';

type Lang = 'id' | 'en';

export default function getDictionaries(lang: Lang): typeof id {
  switch (lang) {
    case 'en':
      return en
    case 'id':
      return id
  }
}
