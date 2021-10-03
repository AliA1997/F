import React from 'react';
import { Card as BootstrapCard } from 'react-bootstrap';
import './styles.scss';

export default function Card(props) {
    return (
        <BootstrapCard className="winedown-card">
            <BootstrapCard.Header>Header</BootstrapCard.Header>
            <BootstrapCard.Body>Body</BootstrapCard.Body>
            <BootstrapCard.Footer>Footer</BootstrapCard.Footer>
        </BootstrapCard>
    );
}