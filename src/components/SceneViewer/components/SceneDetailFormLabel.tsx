import React, { ChangeEvent } from 'react';
import Form from 'react-bootstrap/Form';

export default ({
    value,
    onChange,
}: {
    value: string;
    onChange: (evt: ChangeEvent<HTMLInputElement>) => void;
}) => (
    <Form.Group>
        <Form.Label>Reference name</Form.Label>
        <Form.Control
            type="text"
            value={value}
            name="label"
            onChange={onChange}
        />
        <Form.Text className="text-muted">
            A reference name; keep it short, but descriptive.
        </Form.Text>
    </Form.Group>
);
