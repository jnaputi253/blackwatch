import React, { Component } from 'react'
import Bucket from './Bucket'
import './bucketListStyles.css'

export default class BucketList extends Component {

    _renderBuckets = () => {
        return this.props.buckets.map(bucket => {
            return <Bucket
                        key={bucket.bucketName}
                        bucketName={bucket.bucketName}
                        creationDate={bucket.creationDate}
                    />
        })
    }

    render = () => (
        <div id='bucketList' className='text-center'>
            <table className='table table-bordered table-striped'>
                <thead>
                    <tr>
                        <th scope='col'>Bucket Name</th>
                        <th scope='col'>Creation Date</th>
                    </tr>
                </thead>
                <tbody>
                    {this._renderBuckets()}
                </tbody>
            </table>
        </div>
    )
}