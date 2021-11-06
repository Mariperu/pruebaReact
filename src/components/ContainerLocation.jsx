import React from 'react';
import { Card, Container, Button, Row, Col } from "react-bootstrap";

export default function ContainerLocation({locations}) {
    return (
        <div>
            <Container>
                <Row>
                    {
                        locations.map((item, id) => (
                            <Col key={item.id}>
                            <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="" />
                            <Card.Body>
                                <Card.Title>{item.name}</Card.Title>
                                <Card.Subtitle>{item.type}</Card.Subtitle>
                                <Card.Text>{item.url}</Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                            </Card>
                            </Col>
                        ))
                    }
                </Row>
            </Container>
        </div>
    )
}
