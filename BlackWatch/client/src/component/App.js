import React, { Fragment } from 'react'
import NavigationBar from './navigation/NavigationBar'
import { AppBody } from './body/AppBody'

export const App = () => (
    <Fragment>
        <NavigationBar />
        <div className='container-fluid'>
            <AppBody />
        </div>
    </Fragment>
)
