import React, { Component } from "react";
import {
  Grid,
  Row,
  Jumbotron,
  Button,
  Col,
  ProgressBar
} from "react-bootstrap";
import Items from "./items.js";
import { LinkContainer } from "react-router-bootstrap";

import "./Test.css";

class Test extends Component {
  constructor() {
    super();
    this.onAnswerInput = this.onAnswerInput.bind(this);
  }

  onAnswerInput = event => {
    const data = event.target.getAttribute("data");
    this.props.handleAnswer(data);
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.currentPosition === nextProps.totalQuestions) {
      this.props.history.push("/results");
    }
  }

  render() {
    const { item, totalQuestions, currentPosition } = this.props;
    return (
      <div>
        {
          item &&
          <Grid>
            <div className="question-block">
              <p className="lead">{item.question}</p>
              <hr />
              <Row>
                <Col sm={6} smOffset={3}>
                  {Object.entries(item.answers).map((answer, index) => {
                    const [description, value] = answer;
                    return (
                      <Button
                        key={index}
                        bsStyle="primary"
                        bsSize="large"
                        block
                        onClick={this.onAnswerInput}
                        data={value}
                      >
                        {description}
                      </Button>
                    );
                  })}
                </Col>
              </Row>
            </div>
            <ProgressBar
              active
              now={(currentPosition + 1) / totalQuestions * 100}
            />
          </Grid>
        }
      </div>
    );
  }
}

export default Test;
