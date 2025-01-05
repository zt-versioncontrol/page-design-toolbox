const vueTmplate = require('./VueTemplate.cjs')
const testingTemplate = require('./TestingTemplate.cjs')
const storiesTemplate = require('./StoriesTemplate.cjs')
const mdxTemplate = require('./MdxTemplate.cjs')
const fs = require('node:fs');
// TODO: improve error handling
const componentName = process.argv[2]

if(!componentName){
  console.error('Component name was not provided')
  process.exit(1)
}

// TODO: use fs.existsSync() instead
try{
  fs.readdirSync(`./src/components/${componentName}`, { recursive: true })
  console.error(`A component with the name ${componentName} already exists`)
  process.exit(1)
}catch{
  //
}

fs.mkdirSync(`./src/components/${componentName}`, { recursive: true })	

fs.writeFileSync(`./src/components/${componentName}/${componentName}.vue`, vueTmplate.vueTemplateGenerator(componentName), err => {
  if (err) {
    console.error('Error while generating vue file: ', err);
  } else {
    //
  }
})

fs.writeFileSync(`./src/components/${componentName}/${componentName}.test.ts`, testingTemplate.testingTemplateGenerator(componentName), err => {
  if (err) {
    console.error('Error while generating test file: ', err);
  } else {
    //
  }
})

fs.writeFileSync(`./src/components/${componentName}/${componentName}.stories.ts`, storiesTemplate.storiesTemplateGenerator(componentName), err => {
  if (err) {
    console.error('Error while generating stories file: ', err);
  } else {
    //
  }
})

fs.writeFileSync(`./src/components/${componentName}/${componentName}.mdx`, mdxTemplate.mdxTemplateGenerator(componentName), err => {
  if (err) {
    console.error('Error while generating mdx file: ' ,err);
  } else {
    //
  }
})

console.log(`Generated component ${componentName}`)