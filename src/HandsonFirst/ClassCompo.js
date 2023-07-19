import React ,{Component} from 'react';
import '../Style.css';

class ClassCompo extends Component{
              render(){
                            return (
                                          <div className='components'>
                                          <div className='classComp' >
                            <h1 className='head'>This is created using Class Component</h1>   
                            <p className="para">This is done by External CSS</p>
              <p style={{color:'blue'}}>This is done by Internal CSS</p>           
                                          </div>
                                          </div>
                            )
              }
}

export default ClassCompo;