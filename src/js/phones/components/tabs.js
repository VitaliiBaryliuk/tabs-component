import Component from '../../component.js';

export default class Tabs extends Component {
  constructor({
    element,
    tabs = []
  }) {
    super({ element });
    this._element = element;
    this._tabs = tabs;
    this._render();

    // this.on('click', 'details-link', (event) => {
    //   const phoneItem = event.target.closest('[data-element="phone-item"]');
    //   this.emit('phone-selected', phoneItem.dataset.phoneId);
    // });
  }


  _render() {
    this._element.innerHTML = `
      <h1>Tabs</h1>
    `;
  }

  // _render() {
  //   this._element.innerHTML = `
  //   <ul class="catalog__list">
  //      ${this._phones.map(phone => `
  //       <li class="catalog__item" data-phone-id="${phone.id}"  data-element="phone-item">
  //       <div class="catalog__product">
  //         <div class="catalog__product-photo-wrapper">
  //           <a href="#!phones/${phone.id}">
  //             <img class="catalog__product-photo" data-element="details-link" src="${phone.imageUrl}">
  //           </a>
  //         </div>
  //         <div class="catalog__product-info">
  //           <h2 class="catalog__product-title">
  //             <a class="catalog__product-link" href="#" data-element="details-link">
  //               ${phone.name}
  //             </a>
  //           </h2>
  //           <p class="catalog__product-desc">
  //           ${phone.age}, ${phone.snippet}
  //           </p>
  //         </div>
  //         <div class="catalog__button-wrapper">
  //         <div class="catalog__to-cart-button button to-cart" data-element="to-cart">Add to cart</div>
  //         </div>
  //       </div>
  //     </li>
  //     `).join('')}
  //   </ul>`;
  // }
}
