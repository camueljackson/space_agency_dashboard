import React, { Component } from 'react';
import { Jumbotron, Button, Row, Col } from 'react-bootstrap';
import '../../App.css';


class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {

        return (
            <div>
                <Jumbotron>
                    <h1>Follow your favourite missions!</h1>
                    <p>
                        Navigate to an agency to find out about current missions.
                </p>
                    <p>
                        <Button className="learn-more" variant="info" href="/about">Learn more</Button>
                    </p>
                </Jumbotron>
                <Row>
                    <Col>
                        <div style={{
                            textAlign: 'center', marginBottom: 30, fontSize: 25, color: '#898787'
                        }}>
                            Your News
                        </div>
                        <div style={{ textAlign: 'center', textDecoration: 'italic' }} >
                            Please select agencies to receive their latest news
                        </div>
                    </Col>

                    <Col>
                        <div style={{
                            textAlign: 'center', marginBottom: 30, fontSize: 25, color: '#898787'
                        }}>
                            Recent Tweets
                        </div>
                        <div style={{ textAlign: 'center' }} >
                            Please select agencies to receive their latest tweets
                            <p>* IDEAS: *</p>
                            <p>* connect Weather app for best stargazing nights</p>
                            <p>* Add profile functionality - Login, Personal Preferences - Linked to SQL DB</p>
                        </div>
                    </Col>

                </Row>
            </div>
        );
    }
}

export default Home;