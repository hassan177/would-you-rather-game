import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import '../css/poll.css'

class Poll extends Component {
    render() {
        return (
            <Card className="card-view">
                <Card.Img className="card-view-img" variant="top" src={this.props.questionAuthor.avatarURL} />
                <Card.Body>
                    <Card.Title>{ this.props.questionAuthor.name  } asks</Card.Title>
                    <Card.Text>
                        Would you rather
                    </Card.Text>
                    <Link to={`/questions/${this.props.ques.id}`}><Button variant="warning" block onClick={this.routeChange}>View Poll</Button></Link>
                </Card.Body>
            </Card>
        )
    }
}

function mapStateToProps({ users }, {ques}) {
    return {
        questionAuthor: users[ques.author] 
    }
}

export default connect(mapStateToProps)(Poll)