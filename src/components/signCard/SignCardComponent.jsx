import React, { useState } from 'react'

import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import Paper from '@material-ui/core/Paper'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import LockOpen from '@material-ui/icons/LockOpen'
import AccountCircle from '@material-ui/icons/AccountCircle'
import VpnKey from '@material-ui/icons/VpnKey'

import SignInFormComponent from './signInForm/'
// import SignUpFormComponent from './signInForm/'

const SignCardComponent = ({ classes, ...props }) => {
  console.log(props)
  const activeTab = props.activeTab
  const [tabValueState, setTabValueState] = useState(activeTab)

  const changeTab = (event, value) => {
    setTabValueState(value)
  }

  return (
    <Card>
      <CardHeader title={<h4>Login</h4>} className={classes.cardHeader}>
        <LockOpen />
        <LockOpen />
        <LockOpen />
      </CardHeader>
      <Paper className={classes.paperTabs}>
        <Tabs
          value={tabValueState}
          onChange={changeTab}
          centered
          indicatorColor='secondary'
          textColor='secondary'
        >
          <Tab icon={<LockOpen />} label='LOGIN' className={classes.tabs} />
          <Tab
            icon={<AccountCircle />}
            label='REGISTER'
            className={classes.tabs}
          />
          <Tab
            icon={<VpnKey />}
            label='LOST PASSWORD'
            className={classes.tabs}
          />
        </Tabs>
      </Paper>
      {tabValueState === 0 && <SignInFormComponent />}
      {tabValueState === 1 && <SignInFormComponent />}
      {tabValueState === 2 && <SignInFormComponent />}
    </Card>
  )
}
export default SignCardComponent
