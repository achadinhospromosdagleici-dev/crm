import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["spinner"]

  connect() {
    // Escuta cliques pois a mudança de estágio é um link com turbo_method: :patch
    this.element.addEventListener("click", this.showLoading.bind(this))
  }

  showLoading() {
    if (this.hasSpinnerTarget && this.spinnerTarget.classList.contains('hidden')) {
      this.spinnerTarget.classList.remove("hidden")
      this.element.classList.add("opacity-50", "pointer-events-none")
    }
  }

  // O componente será substituído pelo Turbo Stream, 
  // então não precisamos esconder o loading manualmente na maioria dos casos.
}
