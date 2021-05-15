import React,{useState} from 'react';
import {Badge, Card, Button, Collapse, Container} from 'react-bootstrap';
import ReactMarkdown from 'react-markdown';

export default function Job({job}) {
    const [open, setOpen] = useState(false);
    return (
        
        <Container className="my-4">

        <Card className="mb-3">
            <Card.Body>
                <div className="d-flex justify-content-between">
                    <div>
                        <Card.Title>{job.title} - 
                        <span className="font-weight-light text-muted">{job.company}</span>
                        </Card.Title>
                        <Card.Subtitle className="text-muted mb-2">
                            {new Date(job.created_at).toLocaleDateString()}
                        </Card.Subtitle>
                        <Badge className="mr-2 mb-2" variant="secondary">{job.type}</Badge>
                        <Badge variant="secondary" className="mb-2">{job.location}</Badge>
                        <div style={{wordBreak: 'break-all'}}>
                            <ReactMarkdown children={job.how_to_apply} />
                        </div>
                    </div>
                    <img className="d-none d-md-block" height="50" source={job.company_logo} />
                </div>
                <Card.Text>
                    <Button variant="primary" onClick={() => setOpen(open => !open)}>
                        {!open? 'View Details' : 'Hide Details'}
                        </Button>
                </Card.Text>
                <Collapse in={open}>
                    <ReactMarkdown children={job.description} />
                </Collapse>
                
            </Card.Body>
        </Card>
        </Container>
    )
}
