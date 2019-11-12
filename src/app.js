import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import {
  StudentRegister,
  Login,
  StudentHome,
  ClassRegister,
  LinkStudentToClass,
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
          path={URLEnum.STUDENT_REGISTER}
          component={WrappedComponent(StudentRegister)}
        />
        <Route
          path={URLEnum.CLASS_REGISTER}
          exact
          component={WrappedComponent(StudentRegister)}
        />
        <Route exact path={URLEnum.LOGIN} component={Login} />
        <Route
          exact
          path={URLEnum.CLASS_REGISTER}
          component={WrappedComponent(ClassRegister)}
        />
        <Route
          exact
          path='/vincular-aluno'
          component={WrappedComponent(LinkStudentToClass)}
        />
        <Route exact path='/tabela' component={WrappedComponent(StudentHome)} />
        <Route
          exact
          path={URLEnum.DIARIES}
          component={WrappedComponent(DiariesViewer)}
        />
      </Switch>
    </BrowserRouter>
  </>
)

export default App
