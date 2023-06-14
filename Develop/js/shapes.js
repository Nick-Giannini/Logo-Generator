const generateSVG = require('./svg');


class Shapes {
    contructor(text, textColor, shape, shapeColor) {
        this.text = '';
        this.textColor = '';
        this.shape = '';
        this.shapeColor = '';
    }

}

class Square extends Shapes {
    contructor() {
    }

    setColor(color) {
        this.shapeColor = color
    }
    render(){
        return `<rect x="90" y="40" width="120" height="120" fill=${color}/>`

    }

}

class Triangle extends Shapes {
    contructor() {
    }

    setColor(color) {
        this.shapeColor = `<polygon points="150, 18 244, 182 56, 182" fill=${color}/>`
    }
    render() {
        return`<polygon points="150, 18 244, 182 56, 182" fill=${color}/>`



    }
}


class Circle extends Shapes {
    contructor() {
    }

    setColor(color) {
        this.shapeColor = `<circle cx="150" cy="100" r="80" fill=${color}/>`
    }
    render() {


    }

}





