import { Controller } from '@hotwired/stimulus'

export default class extends Controller {
  static targets = ['tag']

  connect() {
    this.tagWidth = 0
    this.counter = 0
    // Initialize transition and set initial state
    this.initializeTransitions()
    // Wait for next frame to ensure CSS is fully applied before first animation
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        this.startAnimation()
      })
    })
  }

  initializeTransitions() {
    this.tagTargets.forEach(tag => {
      const h3Elements = tag.querySelectorAll('h3')
      h3Elements.forEach(h3 => {
        // Ensure transition is applied from the start (matching CSS)
        h3.style.transition = 'margin-left 3s ease'
        // Set initial margin-left to 0 explicitly to avoid flash
        h3.style.marginLeft = '0%'
      })
    })
  }

  disconnect() {
    if (this.interval) {
      clearInterval(this.interval)
    }
  }

  startAnimation() {
    this.interval = setInterval(() => {
      if (this.counter === 0) {
        this.tagWidth -= 100
        this.counter = 1
      } else {
        this.tagWidth += 100
        this.counter = 0
      }
      this.updateTags()
    }, 5500)
  }

  updateTags() {
    this.tagTargets.forEach(tag => {
      const h3Elements = tag.querySelectorAll('h3')
      // Update the first h3 in each tag container
      if (h3Elements.length > 0) {
        const firstH3 = h3Elements[0]
        // Ensure transition is always applied (matching CSS)
        if (!firstH3.style.transition) {
          firstH3.style.transition = 'margin-left 3s ease'
        }
        // Use requestAnimationFrame to ensure smooth transition
        requestAnimationFrame(() => {
          firstH3.style.marginLeft = `${this.tagWidth}%`
        })
      }
    })
  }
}
