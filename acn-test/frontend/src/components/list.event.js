import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import axios from "axios";

export default function List() {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        fetchEvents();
    }, []);

    const fetchEvents = async () => {
        await axios
            .get(`http://localhost:8000/api/v1/events`)
            .then(({ data }) => {
                setEvents(data);
            });
    };

    const deleteEvent = async (id) => {
        await axios
            .delete(`http://localhost:8000/api/v1/events/${id}`)
            .then(({}) => {
                fetchEvents();
            });
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <Link
                        className="btn btn-primary mb-2 float-end"
                        to={"/event/create"}
                    >
                        Create Event
                    </Link>
                </div>
                <div className="col-12">
                    <div className="card card-body">
                        <div className="table-responsive">
                            <table className="table table-bordered mb-0 text-center">
                                <thead>
                                    <tr>
                                        <th>Id</th>
                                        <th>Name</th>
                                        <th>Slug</th>
                                        <th>Start At</th>
                                        <th>End At</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {events.length > 0 &&
                                        events.map((row, key) => (
                                            <tr key={key}>
                                                <td>{row.id}</td>
                                                <td>{row.name}</td>
                                                <td>{row.slug}</td>
                                                <td>{row.startAt}</td>
                                                <td>{row.endAt}</td>
                                                <td>
                                                    <Link
                                                        to={`/v1/events/${row.id}`}
                                                        className="btn btn-success me-2"
                                                    >
                                                        Edit
                                                    </Link>
                                                    <Button
                                                        variant="danger"
                                                        onClick={() =>
                                                            deleteEvent(row.id)
                                                        }
                                                    >
                                                        Delete
                                                    </Button>
                                                </td>
                                            </tr>
                                        ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
