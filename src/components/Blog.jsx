import React, { Component } from 'react';

class Blog extends Component {
  render() {
    const renderBlogItem = () => (
      <div className="blog__item">
        <img className="blog__item-image" src="http://www.fillmurray.com/200/300" />
        <div className="blog__item-content">
          <div className="blog__item-main">
            <div className="blog__item-title">
              Writing Serverless Apps with NodeJS
            </div>
            <div className="blog__item-summary">
              My journey in and around serverless architecture.
            </div>
          </div>
          <div className="blog__item-footer">
            <div className="blog__item-author">
              Blake Guilloud
            </div>
            <div className="blog__item-timestamp">
              8 / 27 / 17
            </div>
          </div>
        </div>
      </div>
    );

    return (
      <div className="blog">
        <div className="blog__item">
          <img className="blog__item-image" src="http://www.fillmurray.com/200/300" />
          <div className="blog__item-content">
            <div className="blog__item-main">
              <div className="blog__item-title">
                Writing Serverless Apps with NodeJS
              </div>
              <div className="blog__item-summary">
                My journey in and around serverless architecture.
              </div>
            </div>
            <div className="blog__item-footer">
              <div className="blog__item-author">
                Blake Guilloud
              </div>
              <div className="blog__item-timestamp">
                8 / 27 / 17
              </div>
            </div>
          </div>
        </div>
        <div className="blog__item">
          <img className="blog__item-image" src="http://www.fillmurray.com/500/300" />
          <div className="blog__item-content">
            <div className="blog__item-main">
              <div className="blog__item-title">
                Writing Serverless Apps with NodeJS
              </div>
              <div className="blog__item-summary">
                My journey in and around serverless architecture.
              </div>
            </div>
            <div className="blog__item-footer">
              <div className="blog__item-author">
                Blake Guilloud
              </div>
              <div className="blog__item-timestamp">
                8 / 27 / 17
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Blog;
