import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
  return (
    <div className="ui container comments">
      {/* You can pass plain text */}
      <ApprovalCard>
        <div>
          <h4>Warning!</h4>
          Are you sure?
        </div>
      </ApprovalCard>

      {/* and you can pass JSX */}
      <ApprovalCard>
        <CommentDetail
          author="Sam"
          timeAgo="Today at 04:45PM"
          commentText="Nice blog post!"
          imgSource="https://source.unsplash.com/random"
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author="Alex"
          timeAgo="Today at 02:00AM"
          commentText="Amazing!"
          imgSource="https://source.unsplash.com/random"
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author="Jane"
          timeAgo="Yesterday at 05:00PM"
          commentText="Big fan of yours."
          imgSource="https://source.unsplash.com/random"
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));

if (module.hot) {
  module.hot.accept();
}
