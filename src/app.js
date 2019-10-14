import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { StudentRegister } from '@/scenes'
import URLEnum from '@/enums/url-enum'

const App = () => (
  <div>
    <BrowserRouter>
      <Switch>
        <Route
          exact
          path={URLEnum.STUDENT_REGISTER}
          component={StudentRegister}
        />
      </Switch>
    </BrowserRouter>
  </div>
)

export default App
