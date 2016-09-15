import React, { Component } from 'react';

class Homepage extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-sm-offset-3">
              <p>Hello, this is the React MPLS Meetup. We gather to share experiences, questions and things we've learned. We do tutorials, lightning talks, presentations, workshops, and socialize.<br/><br/></p>

              <p className="text-center"><a target="_blank" href="//feedback.reactmpls.io" className="btn-primary btn">Leave feedback</a></p>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-4 col-sm-offset-4">
              <div className="panel panel-success">
                <div className="panel-heading">Next meetup</div>
                <div className="panel-body">
                  <p><strong>When?</strong><br/>
                    October 20, 2016 at 6:30 - 8:30pm</p>
                  <p><strong>Where?</strong><br/>
                      Object Partners Inc<br/>
                    1515 Central Ave NE #100<br/>
                  Minneapolis, MN 55403</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Homepage;
