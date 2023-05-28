//As {} seriam tipo uma tag para o JAVASCRIT nos arquvos .JSX, .JS
const TemplateExpressions = () => {
    const data = {
        name: "Edson",
        age: 20,
        job: "Programador"
    }

    return (
      <div> 
        <h1>Olá {data.name}, tudo bem?</h1>
        <p>Você atua como: {data.job}, e você tem: {data.age} anos </p>
        <p>{100 + 1}</p>
      </div> 
    )
  }
  export default TemplateExpressions;