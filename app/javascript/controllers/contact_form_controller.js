import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="contact-form"
export default class extends Controller {
  static targets = ["form", "overlay", "content"]

  connect() {
    // Set up click handlers for all call-to-action buttons
    this.setupCallToActionButtons()
    this.isOpen = false
  }

  setupCallToActionButtons() {
    const callToActionButtons = document.querySelectorAll('.call-contact-form')
    callToActionButtons.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault()
        this.open()
      })
    })
  }

  open() {
    if (this.hasFormTarget) {
      this.formTarget.style.display = 'flex'
      document.body.style.overflow = 'hidden'
      this.isOpen = true

      // Set up click outside detection when modal opens
      this.setupClickOutside()
    }
  }

  setupClickOutside() {
    // Add click listener to document to detect clicks outside modal
    this.boundClickOutside = this.handleClickOutside.bind(this)
    // Use setTimeout to avoid immediate trigger from the click that opened the modal
    setTimeout(() => {
      document.addEventListener('click', this.boundClickOutside, true)
    }, 0)
  }

  handleClickOutside(event) {
    // Only close if modal is open and click is outside the overlay content
    if (!this.isOpen || !this.hasOverlayTarget) return

    // Check if click is outside the overlay target (form content)
    if (!this.overlayTarget.contains(event.target)) {
      this.close()
      // Remove the listener after closing
      document.removeEventListener('click', this.boundClickOutside, true)
    }
  }

  close(event) {
    // If called from an event, only close if clicking on the overlay itself
    if (event && event.target !== this.overlayTarget) {
      return
    }
    if (this.hasFormTarget) {
      this.formTarget.style.display = 'none'
      document.body.style.overflow = 'unset'
      this.isOpen = false

      // Remove click outside listener
      if (this.boundClickOutside) {
        document.removeEventListener('click', this.boundClickOutside, true)
      }
    }
  }

  disconnect() {
    // Clean up listener when controller disconnects
    if (this.boundClickOutside) {
      document.removeEventListener('click', this.boundClickOutside, true)
    }
  }

  // Called when form is successfully submitted via Turbo
  messageSent(event) {
    // Close the form after successful submission
    if (event.detail && event.detail.success !== false) {
      this.close()
    }
  }
}
