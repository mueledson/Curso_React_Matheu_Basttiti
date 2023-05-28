import Events from "./Events";
import Hierarquia from "./Hierarquia";
import TemplateExpressions from "./TemplateExpressions";

const Title = () => {
  return (
    <div> 
      <Hierarquia/>
      <h1>Fundamentos React</h1>
      <TemplateExpressions/>
      <Events/>
    </div> 
  )
}

export default Title;