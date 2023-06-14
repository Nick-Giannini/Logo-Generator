const generateSVG = require('./svg');


class Shapes {
    contructor() {
        this.color = '';
    }
    setText(text, textColor) {

    };
    setColor(shapeColor) {


    }
    render() {
        generateSVG(dismensions)
    }
}

class Square extends Shapes {
    contructor() {
        this.dismensions = `<rect x="90" y="40" width="120" height="120" fill=${color} />`;
    }
}

class Triangle extends Shapes {
    contructor() {
        this.dismensions = `<polygon points="150, 18 244, 182 56, 182" fill=${color} />`;
    }
}
class Circle extends Shapes {
    contructor() {
        this.dismensions = `<circle cx="150" cy="100" r="80" fill=${color} />`;
    }

}




