import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard'
/**
 * Props - communicating data from parent to child.
 * Goal - To customize of configure the child component.
 */

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <CommentDetail
                    author="Sam"
                    timeAgo="today at 4pm"
                    text="good blog"
                    fakerImage={faker.image.people()}
                />
            </ApprovalCard>

            <CommentDetail
                author="Alex"
                timeAgo="today at 5pm"
                text="informative blog"
                fakerImage={faker.image.people()} />
            <CommentDetail
                author="Jane"
                timeAgo="today at 6pm"
                text="good blog post"
                fakerImage={faker.image.people()}
            />
        </div>
    )
};
ReactDOM.render(<App />, document.querySelector('#root'));