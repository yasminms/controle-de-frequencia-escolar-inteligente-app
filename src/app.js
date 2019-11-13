import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import {
  StudentRegister,
  Login,
  StudentHome,
  ClassRegister,
  DiariesViewer,
} from '@/scenes'
import { WrappedComponent } from '@/compositions/wrapped-component/wrapped-component'
import URLEnum from '@/enums/url-enum'

const App = () => (
  <>
    <BrowserRouter>
      <Switch>
        <Route
          exact
          path={URLEnum.CLASS_REGISTER}
          component={WrappedComponent(ClassRegister)}
        />
        <Route
          exact
          path={URLEnum.DIARIES}
          component={WrappedComponent(DiariesViewer)}
        />
        <Route
          exact
          path={URLEnum.HOME}
          component={WrappedComponent(StudentHome)}
        />
        <Route exact path={URLEnum.LOGIN} component={Login} />
        <Route
          exact
          path={URLEnum.STUDENT_REGISTER}
          component={WrappedComponent(StudentRegister)}
        />
      </Switch>
    </BrowserRouter>
  </>
)

export default App
