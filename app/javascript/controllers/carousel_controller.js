import { Controller } from '@hotwired/stimulus'

export default class extends Controller {
  static targets = ['wrapper']

  connect() {
    this.slideWidth = 0
    this.sliderCount = 4
  }

  next() {
    if (this.slideWidth === -870 * (this.sliderCount - 1)) {
      this.slideWidth = 0
    } else {
      this.slideWidth -= 870
    }
    this.updatePosition()
  }

  previous() {
    if (this.slideWidth === 0) {
      this.slideWidth = -870 * (this.sliderCount - 1)
    } else {
      this.slideWidth += 870
    }
    this.updatePosition()
  }

  updatePosition() {
    if (this.hasWrapperTarget) {
      this.wrapperTarget.style.marginLeft = `${this.slideWidth}px`
    }
  }
}
