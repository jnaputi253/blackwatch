import React, { Fragment } from 'react'
import { AppJumbotron } from './app-jumbo/AppJumbotron'
import BucketManager from './buckets/BucketManager'

export const AppBody = () => (
    <Fragment>
        <AppJumbotron />
        <BucketManager />
    </Fragment>
)