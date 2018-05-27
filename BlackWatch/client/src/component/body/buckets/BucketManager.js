import React, { Component } from 'react'
import axios from 'axios'
import FetchingBuckets from './FetchingBuckets'
import NoBuckets from './NoBuckets'
import BucketList from './BucketList'
import AddBucketButton from './AddBucketButton'

export default class BucketManager extends Component {

    constructor() {
        super()
        this.state = {
            buckets: [],
            isLoading: true
        }
    }

    _setFetchedBuckets = (res) => {
        const fetchedBuckets = res.data.buckets
        const currentBuckets = this.state.buckets

        this.setState({
            buckets: [...currentBuckets, ...fetchedBuckets],
            isLoading: !this.state.isLoading
        })

        console.log(this.state.buckets)
    }

    componentDidMount = () => {
        axios.get('/api/values/buckets')
            .then(response => this._setFetchedBuckets(response))
            .catch(error => console.log(error))
    }

    onAddClicked = () => {
        alert('Add button pressed')
    }

    render = () => {
        if (this.state.isLoading) {
            return <FetchingBuckets />
        }

        if (this.state.buckets.length === 0) {
            return <NoBuckets />
        }

        return (
            <div id='bucketSection'>
                <AddBucketButton onAddClicked={this.onAddClicked} />
                <BucketList buckets={this.state.buckets} />
            </div>
        )
    }
}
