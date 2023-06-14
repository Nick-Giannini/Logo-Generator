const fs = require('fs');


class Svg {
    constructor() {
        this.svgText = '';
    }

    setText(text, color) {
        this.svgText = `<text x="150" y="125" font-size="60" text-anchor="middle" fill=${color}>${text}</text>`
    }

    render() {
        return `< svg version = "1.1" width = "300" height = "200" xmlns = "http://www.w3.org/2000/svg" >${svgText}</svg >`;

    }

}
