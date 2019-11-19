import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import {
  StudentRegister,
  Login,
  StudentHome,
  ClassRegister,
  DiariesViewer,
  TeacherHome,
} from '@/scenes'
import URLEnum from '@/enums/url-enum'
import { Header } from '@/components'

const App = () => (
  <>
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path={URLEnum.CLASS_REGISTER} component={ClassRegister} />
        <Route exact path={URLEnum.DIARIES} component={DiariesViewer} />
        <Route exact path={URLEnum.HOME_STUDENT} component={StudentHome} />
        <Route exact path={URLEnum.HOME_TEACHER} component={TeacherHome} />
        <Route exact path={URLEnum.LOGIN} component={Login} />
        <Route
          exact
          path={URLEnum.STUDENT_REGISTER}
          component={StudentRegister}
        />
      </Switch>
    </BrowserRouter>
  </>
)

export default App
