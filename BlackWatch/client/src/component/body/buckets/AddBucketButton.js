import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

const AddBucketButton = ({ onAddClicked }) => (
    <div id='bucketActions' className='container'>
        <button onClick={onAddClicked} className='btn btn-info float-right my-2'>
            Create Bucket
        </button>
    </div>
)

AddBucketButton.propTypes = {
    onAddClicked: PropTypes.func.isRequired
}

export default AddBucketButton