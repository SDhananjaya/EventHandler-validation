// class componet useing state
import react, { Fragment } from "react"
//import Text from './Text'
//import Fun1 from './Fun1'
//import Funprops from './Funprops'
import EventClick from "./EventClick";
import EventChang from "./EventChang"
import EventSubmit from "./EventSubmit";
class App extends react.Component{
    render(){
        let name="Welcome"
        return(
            <div>
                <center>
                  <h2>{name}</h2>
                  <EventClick/>
                  <EventChang/>
                  <EventSubmit/>
                </center>
            </div>
          
        )
    }
}
export default App;