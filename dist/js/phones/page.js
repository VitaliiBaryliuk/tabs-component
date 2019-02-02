import PhoneCatalog from './components/phone-catalog.js';
import bdService from './services/bd-service.js';


export default class Page {
  constructor({ element }) {
    this._element = element;

    this.tabsComponent = new Tabs({
      element: this._element.querySelector('[data-component="tabs"]'),
      phones: bdService.getAll()
    });

    tabsComponent.subscribe(
      'tab-selected', 
      ({ title, content }) => {
      console.log(`Tab ${ title } was selected \n ${content}`);
    });

  }
}
