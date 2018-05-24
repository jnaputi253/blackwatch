import React from 'react'

const Bucket = ({ bucketName, creationDate }) => (
    <tr>
        <td>{bucketName}</td>
        <td>{creationDate}</td>
    </tr>
)

export default Bucket
