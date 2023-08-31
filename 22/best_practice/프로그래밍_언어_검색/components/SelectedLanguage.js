class SelectedLanguage {
  $container = document.createElement("div");
  MAX_DISPLAY_COUNT = 5;
  constructor({ $target, selectedLanguages }) {
    this.selectedLanguages = selectedLanguages;

    this.$container.className = "SelectedLanguage";

    $target.append(this.$container);

    this.render();
  }

  setSelectedLanguages(nextSelectedLanguages) {
    this.selectedLanguages = nextSelectedLanguages;

    if (this.selectedLanguages.length > this.MAX_DISPLAY_COUNT) {
      const startPosition =
        this.selectedLanguages.length - this.MAX_DISPLAY_COUNT;
      this.selectedLanguages = this.selectedLanguages.slice(
        startPosition,
        this.startPosition + MAX_DISPLAY_COUNT
      );
    }

    this.render();
  }

  render() {
    this.$container.innerHTML = `
    <ul>
      ${this.selectedLanguages.map((item) => `<li>${item}</li>`).join("")}
    </ul>
    `;
  }
}

export default SelectedLanguage;
