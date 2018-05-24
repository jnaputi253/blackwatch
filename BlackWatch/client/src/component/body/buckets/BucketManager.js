import React, { Component } from 'react'
import axios from 'axios'
import NoBuckets from './NoBuckets'
import BucketList from './BucketList'

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

    // TODO: send this down to <BucketList />
    onAddClicked = () => {
        alert('Add button pressed')
    }

    // TODO: send this down to <BucketList />
    onDeleteClicked = () => {
        alert('Delete button pressed')
    }

    render = () => {
        if (this.state.isLoading) {
            return <h1>Fetching buckets</h1>
        }

        console.log(this.state.buckets)

        return this.state.buckets.length === 0
            ? <NoBuckets />
            : <BucketList buckets={this.state.buckets} />
    }
}
