import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="presentation"
export default class extends Controller {
  static values = { bgUrl: String }

  connect() {
    // Set background image for mobile view
    if (window.matchMedia("(max-width: 900px)").matches && this.hasBgUrlValue) {
      this.element.style.backgroundImage = `url('${this.bgUrlValue}')`
    }

    // Listen for window resize
    this.handleResize = this.handleResize.bind(this)
    window.addEventListener('resize', this.handleResize)
  }

  disconnect() {
    window.removeEventListener('resize', this.handleResize)
  }

  handleResize() {
    if (window.matchMedia("(max-width: 900px)").matches && this.hasBgUrlValue) {
      this.element.style.backgroundImage = `url('${this.bgUrlValue}')`
    } else {
      this.element.style.backgroundImage = ''
    }
  }
}
