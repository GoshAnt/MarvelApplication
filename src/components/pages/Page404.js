import ErrorMessage from "../errorMessage/ErrorMessage";
import { Link } from "react-router-dom";

const Page404  = () => {
 return(
    <div>
    <ErrorMessage/>
  
        <p
       style={{'text-align': 'center', 'font-size': '24px','font-weigth': 'bold'}}
       >Page is not exist</p>
       <Link style={{ 'color': '#9f0013','display': 'block','text-align': 'center', 'margin-top': '20px', 'font-size': '24px'}} to={"/"}> Back To Home Page</Link>
      
  </div>
 )
}
export default Page404;