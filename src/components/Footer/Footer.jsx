/*!

=========================================================
* Light Bootstrap Dashboard React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { Component } from "react";
import { Grid, Row, Col } from "react-bootstrap";

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <Grid fluid>
        <Row>
            <Col lg={3} sm={6}>
             home
            </Col>
            <Col lg={3} sm={6}>
              movility
            </Col>
            <Col lg={3} sm={6}>
             Contact
            </Col>
            <Col lg={3} sm={6}>
              Enquery
            </Col>
          </Row>
        

           <p className="copyright pull-right">
            &copy; {new Date().getFullYear()}{" "}
            <a href="">
              Muka Team
            </a>
            , made with love for a better web
          </p>
        </Grid>
      </footer>
    );
  }
}

export default Footer;
