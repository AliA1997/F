import React from 'react';
import { Card as BootstrapCard } from 'react-bootstrap';
import format from 'date-fns/format';
import './styles.scss';
export default function Card({
    wine,
    vintage,
    gws,
    ci,
    nbj,
    country_id,
    country,
    date_created,
    date_updated
}) {
    return (
        <BootstrapCard className="winedown-card">
            <BootstrapCard.Header>Header</BootstrapCard.Header>
            <BootstrapCard.Body>
                {wine}<br/>
                {vintage}<br/>
                {gws}<br/>
                {ci}<br/>
                {nbj}<br/>
                {country}<br/>
            </BootstrapCard.Body>
            <BootstrapCard.Footer>
                Date Created: {date_created}
            </BootstrapCard.Footer>
        </BootstrapCard>
    );
}