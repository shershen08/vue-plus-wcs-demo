class CurrentTime extends HTMLElement {
    connectedCallback() {
      this.innerHTML = new Date();
  
      setInterval(() => this.innerHTML = new Date(), 1000)
    }
  }
  
  // Define it as a custom element
customElements.define('current-time', CurrentTime);