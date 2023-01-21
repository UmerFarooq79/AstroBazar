import React from 'react';

const PostComments = () => (
    <div className="ps-post-comments">
        <h3>4 Comments</h3>
        <div className="ps-block--comment">
            <div className="ps-block__thumbnail">
                <img
                    src="http://1.gravatar.com/avatar/af7935f33b10cec23f77b8d9717641df?s=70&amp;d=mm&amp;r=g"
                    alt="martfury"
                />
            </div>
            <div className="ps-block__content">
                <h5>
                    Jason bradley<small>MARCH 12, 2013 AT 1:17 PM</small>
                </h5>
                <p>
                    Cras id nulla at metus congue auctor. Suspendisse auctor dictum orci quis
                    interdum. Nullam et eleifend metus. Integer in est orci. Duis hendrerit ex
                    metus, vel tempor sem aliquet nec. Donec ornare hend rerit bibendum.
                </p>
                <a className="ps-block__reply" href="#">
                    Reply
                </a>
            </div>
        </div>
        <div className="ps-block--comment">
            <div className="ps-block__thumbnail">
                <img
                    src="http://2.gravatar.com/avatar/b2c1febfd11117eef66c351c1d4c10f1?s=70&amp;d=mm&amp;r=g"
                    alt="martfury"
                />
            </div>
            <div className="ps-block__content">
                <h5>
                    Jared Erickson<small>MARCH 12, 2013 AT 1:17 PM</small>
                </h5>
                <p>
                    Ut tellus ligula, interdum a interdum ut, egestas ut ipsum. Vivamus viverra
                    consequat ipsum, nec auctor dolor eleifend sit amet. Nulla cursus fringilla
                    metus a dictum
                </p>
                <a className="ps-block__reply" href="#">
                    Reply
                </a>
                <div className="ps-block--comment">
                    <div className="ps-block__thumbnail">
                        <img
                            src="http://2.gravatar.com/avatar/25df3939b2e33bd19783411afd5bc6e3?s=70&amp;d=mm&amp;r=g"
                            alt="martfury"
                        />
                    </div>
                    <div className="ps-block__content">
                        <h5>
                            Chris Ames<small>MARCH 14, 2013 AT 8:01 AM</small>
                        </h5>
                        <p>
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                            dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                        <a className="ps-block__reply" href="#">
                            Reply
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <form className="ps-form--post-comment" action="do_action" method="post">
            <h3>Leave a comment</h3>
            <div className="form-group">
                <textarea
                    className="form-control"
                    rows="8"
                    placeholder="Your comment *"
                    required></textarea>
            </div>
            <div className="row">
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 ">
                    <div className="form-group">
                        <input className="form-control" type="text" placeholder="Your name*" />
                    </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 ">
                    <div className="form-group">
                        <input className="form-control" type="text" placeholder="your email*" />
                    </div>
                </div>
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ">
                    <div className="form-group">
                        <input className="form-control" type="text" placeholder="your website" />
                    </div>
                </div>
            </div>
            <div className="form-group submit">
                <button className="ps-btn">Post Comment</button>
            </div>
        </form>
    </div>
);

export default PostComments;
