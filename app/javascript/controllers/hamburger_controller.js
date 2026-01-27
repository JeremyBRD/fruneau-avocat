import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="hamburger"
export default class extends Controller {
  static targets = ["menu", "button"]

  toggle() {
    if (this.hasMenuTarget && this.hasButtonTarget) {
      this.buttonTarget.classList.toggle('menu-anim')
      this.menuTarget.classList.toggle('circle-anim')
    }
  }
}
