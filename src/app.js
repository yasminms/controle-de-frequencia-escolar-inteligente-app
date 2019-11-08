import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { StudentRegister, Login, ClassRegister } from '@/scenes'
import { WrappedComponent } from '@/compositions/wrapped-component/wrapped-component'
import URLEnum from '@/enums/url-enum'

const App = () => (
  <>
    <BrowserRouter>
      <Switch>
        {/* <Route
          exact
          path={URLEnum.STUDENT_REGISTER}
          component={WrappedComponent(StudentRegister)}
        />
        <Route exact path={URLEnum.LOGIN} component={Login} /> */}
        <Route
          exact
          path={URLEnum.STUDENT_REGISTER}
          component={WrappedComponent(ClassRegister)}
        />
      </Switch>
    </BrowserRouter>
  </>
)

export default App
