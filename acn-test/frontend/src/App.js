import * as React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.css";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import EditEvent from "./components/update.event";
import EventList from "./components/list.event";
import CreateEvent from "./components/create.event";

function App() {
    return (
        <Router>
            <Navbar bg="primary">
                <Container>
                    <Link to={"/"} className="navbar-brand text-white">
                        ACN Coding Test
                    </Link>
                </Container>
            </Navbar>

            <Container className="mt-5">
                <Row>
                    <Col md={12}>
                        <Routes>
                            <Route
                                path="/event/create"
                                element={<CreateEvent />}
                            />
                            <Route
                                path="/v1/events/:id"
                                element={<EditEvent />}
                            />
                            <Route exact path="/" element={<EventList />} />
                        </Routes>
                    </Col>
                </Row>
            </Container>
        </Router>
    );
}

export default App;
