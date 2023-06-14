const fs = require('fs');

function generateSVG(logo){
    fs.writeFile('logo.svg', logo, (err) => err ? console.error(err) : console.log('Done!')
    );
}






const expectedSvg =
    `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><text x="150" y="125" font-size="60" text-anchor="middle" fill=${textColor}>${text}</text></svg>`;