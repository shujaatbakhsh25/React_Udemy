import React from 'react'
import ReactDOM from 'react-dom'
import CommentDetail from './CommentDetail'
import faker from 'faker'
import ApprovalCard from './ApprovalCard'

const App = () => {
    return (
    <div className="ui container comments">
        <ApprovalCard>
            <h4>Warning</h4>
            Are you sure?
        </ApprovalCard>
        <ApprovalCard>
            <CommentDetail author="Sam" timeAgo="Today at 4:50PM" image={faker.image.avatar()}/>
        </ApprovalCard>
        <ApprovalCard>
            <CommentDetail author="Hero" timeAgo="Today at 5:50PM" image={faker.image.avatar()}/>
        </ApprovalCard>
        <ApprovalCard>
            <CommentDetail author="Picolo" timeAgo="Today at 9:00AM" image={faker.image.avatar()}/>
        </ApprovalCard>   
    </div>
    );
}

ReactDOM.render(<App /> , document.getElementById('root'))