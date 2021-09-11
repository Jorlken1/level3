import React from 'react'
import { Switch, Redirect, Route } from 'react-router-dom'

import List from './List'
import Add from './Add'
import { withAuth,withLogin } from '../../utils/hoc'

// ES7装饰器
// @withLogin
class Class extends React.Component{
    componentDidMount(){
        console.log('Class.componentDidMount')
    }
    render(){
        console.log('Class.props', this.props)
    const { path } = this.props.match
    return (
        <div>
            Class
            <Switch>
                <Route path={path + "/list"} component={List} />
                <Route path={path + "/add"} component={Add} />
                <Redirect from={path + ""} to={path + "/list"} exact />

            </Switch>
        </div>
    )
    }
}

// function Class(props) {
//     console.log('Class.props', props)
//     const { path } = props.match
//     return (
//         <div>
//             Class
//             <Switch>
//                 <Route path={path + "/list"} component={List} />
//                 <Route path={path + "/add"} component={Add} />
//                 <Redirect from={path + ""} to={path + "/list"} exact />

//             </Switch>
//         </div>
//     )
// }

// Class = withLogin(Class);

export default Class;