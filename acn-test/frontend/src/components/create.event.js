import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import axios from "axios";
import Alert from "react-bootstrap/Alert";
import { useNavigate } from "react-router-dom";

export default function CreateEvent() {
    const navigate = useNavigate();

    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [slug, setSlug] = useState("");
    const [startAt, setStartAt] = useState("");
    const [endAt, setEndAt] = useState("");
    const [validationError, setValidationError] = useState({});
    const createEvent = async (e) => {
        e.preventDefault();

        const formData = new FormData();

        formData.append("id", id);
        formData.append("name", name);
        formData.append("slug", slug);
        formData.append("startAt", startAt);
        formData.append("endAt", endAt);

        await axios
            .post(`http://localhost:8000/api/v1/events`, formData)
            .then(({}) => {
                <Alert variant="success">
                    <p className="mb-0">Success</p>
                </Alert>;
                navigate("/");
            });
    };

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-12 col-sm-12 col-md-6">
                    <div className="card">
                        <div className="card-body">
                            <h4 className="card-title">Create Event</h4>
                            <hr />
                            <div className="form-wrapper">
                                {Object.keys(validationError).length > 0 && (
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="alert alert-danger">
                                                <ul className="mb-0">
                                                    {Object.entries(
                                                        validationError
                                                    ).map(([key, value]) => (
                                                        <li key={key}>
                                                            {value}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                )}
                                <Form onSubmit={createEvent}>
                                    <Row>
                                        <Col>
                                            <Form.Group controlId="id">
                                                <Form.Label>Id</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    value={id}
                                                    onChange={(event) => {
                                                        setId(
                                                            event.target.value
                                                        );
                                                    }}
                                                />
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <Form.Group controlId="name">
                                                <Form.Label>Name</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    value={name}
                                                    onChange={(event) => {
                                                        setName(
                                                            event.target.value
                                                        );
                                                    }}
                                                />
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Row className="my-3">
                                        <Col>
                                            <Form.Group controlId="slug">
                                                <Form.Label>Slug</Form.Label>
                                                <Form.Control
                                                    as="textarea"
                                                    rows={3}
                                                    value={slug}
                                                    onChange={(event) => {
                                                        setSlug(
                                                            event.target.value
                                                        );
                                                    }}
                                                />
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Row className="my-3">
                                        <Col>
                                            <Form.Group controlId="startAt">
                                                <Form.Label>
                                                    Start At
                                                </Form.Label>
                                                <Form.Control
                                                    as="date"
                                                    value={startAt}
                                                    onChange={(event) => {
                                                        setStartAt(
                                                            event.target.value
                                                        );
                                                    }}
                                                />
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Row className="my-3">
                                        <Col>
                                            <Form.Group controlId="endAt">
                                                <Form.Label>End At</Form.Label>
                                                <Form.Control
                                                    as="date"
                                                    value={endAt}
                                                    onChange={(event) => {
                                                        setEndAt(
                                                            event.target.value
                                                        );
                                                    }}
                                                />
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Button
                                        variant="primary"
                                        className="mt-2"
                                        size="lg"
                                        block="block"
                                        type="submit"
                                    >
                                        Save
                                    </Button>
                                </Form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
