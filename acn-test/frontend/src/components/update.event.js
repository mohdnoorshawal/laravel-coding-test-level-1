import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

export default function EditUser() {
    const navigate = useNavigate();

    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [slug, setSlug] = useState("");
    const [startAt, setStartAt] = useState("");
    const [endAt, setEndAt] = useState("");
    const [validationError, setValidationError] = useState({});

    useEffect(() => {
        fetchEvent();
    }, []);

    const fetchEvent = async () => {
        await axios
            .get(`http://localhost:8000/api/v1/events/${id}`)
            .then(({ data }) => {
                const { id, name, slug, startAt, endAt } = data.event;
                setId(id);
                setName(name);
                setSlug(slug);
                setStartAt(startAt);
                setEndAt(endAt);
            });
    };
    const updateEvent = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("_method", "PATCH");
        formData.append("id", id);
        formData.append("name", name);
        formData.append("slug", slug);
        formData.append("startAt", startAt);
        formData.append("endAt", endAt);

        await axios
            .post(`http://localhost:8000/api/v1/events/${id}`, formData)
            .then(({}) => {
                navigate("/");
            });
    };

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-12 col-sm-12 col-md-6">
                    <div className="card">
                        <div className="card-body">
                            <h4 className="card-title">Update Event</h4>
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
                                <Form onSubmit={updateEvent}>
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
                                        Update
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
