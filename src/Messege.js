// class componet useing props
import React from "react"
class Messege extends React.Component{
    state={
       /* name:'Vishal',
        age:26,
        mail:'vishal@getTemplateInstallPackage.com'*/
    }
    render(){
        return(
            <div>
                <center>
                    <h2>Name:{this.props.name} age:{this.props.age} and mail:{this.props.mail}</h2>
                </center>
            </div>
        )
    }
}
export default Messege;