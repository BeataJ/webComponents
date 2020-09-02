const template = document.createElement('template');
template.innerHTML = `
  <style>
    h3 {
      color: 
    }
  </style>
  <div class="user-card">
    <h3></h3>
  </div>
`;

class UserCard extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));

    this.innerHTML = ``;
  }
}

window.customElements.define('user-card', UserCard);
