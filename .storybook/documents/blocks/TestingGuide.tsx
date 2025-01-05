const TestingGuide = ({ of }) => {
  const graphicalDesignSpecifications: string[] | undefined = of.documentation?.testingGuide?.graphicalDesignSpecifications
  const context = of.documentation?.testingGuide?.context
  const features = of.documentation?.testingGuide?.features
  const parameters = of.documentation?.testingGuide?.parameters

  let graphicalDesignSpecificationsBlock
  let contextBlock
  let featuresBlock
  let parametersBlock

  if(graphicalDesignSpecifications){
    graphicalDesignSpecificationsBlock = (
      <>
        <p><b>Graphical Design Specifications</b></p>
        <ul>
          {graphicalDesignSpecifications.map((spec, index) => <li key={index}>{spec}</li>)}
        </ul>
      </>
    )
  }

  if(context){
    contextBlock = (
      <>
        <p><b>Context</b></p>
        <p>{context}</p>
      </>
    )
  }

  if(features){
    featuresBlock = (
      <>
        <p><b>Features</b></p>
        <ul>
          {features.map((feature, index) => <li key={index}>{feature}</li>)}
        </ul>
      </>
    )
  }

  if(parameters){
    parametersBlock = (
      <>
        <p><b>Parameters</b></p>
        <ul>
          {parameters.map((param, index) => <li key={index}>{param.name}: {param.description}</li>)}
        </ul>
      </>
    )
  }

  return (
    <>
    <h2>Testing Guide</h2>
    {graphicalDesignSpecificationsBlock}
    {contextBlock}
    {featuresBlock}
    {parametersBlock}
    </>
  )
  
}

export default TestingGuide;