class Title {
    constructor(options) {

    }

    _getTemplate() {
        const titleElement = document.getElementById("card").content.cloneNode(true);
        return titleElement;
      }
}