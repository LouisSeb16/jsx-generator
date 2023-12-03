const fs = require('fs-extra');
const path = require('path');
const argv = require('yargs').argv;

const generateJSX = async (componentName: string) => {

    const jsx = `
    import React from 'react';

    const ${componentName} = () => {
      return (
        <div>
          <h1>${componentName} Component</h1>
          {/* Add your JSX content here */}
        </div>
      );
    };

    export default ${componentName};
  `;

    // Write the JSX to a file
    const filePath = path.join(__dirname, '..', 'src/components', `${componentName}.tsx`);
    await fs.outputFile(filePath, jsx);
    console.log(`Component '${componentName}' generated successfully at path: ${filePath}`);
};

// Parse command-line arguments using yargs

const { name: nameOfComponent, props } = argv;
if (!nameOfComponent) {
    console.error('Please provide a component name using --name', nameOfComponent, argv);
    process.exit(1);
}

generateJSX(nameOfComponent);