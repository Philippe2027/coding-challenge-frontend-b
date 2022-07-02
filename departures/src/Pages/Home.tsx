import React, { useState, useEffect } from 'react';

import { Alert, Container, Row, Col } from 'react-bootstrap';

import { fetchDepartures, TQueryParams } from '../Connections/connections';

import { BusbudLogo } from '../Components/Icons';

export const origin = "f2m673"; //(Québec - geohash: f2m673)
export const destination = "f25dvk"; //(Montréal - geohash: f25dvk)
export const date = "2022-08-02"; //(the 2nd of August 2021) for 1 adult.

export const queryParams: Array<TQueryParams> = [
    { key: 'adult', value: '1' },
    { key: 'child', value: '0' },
    { key: 'senior', value: '0' },
    { key: 'lang', value: 'EN' },
    { key: 'currency', value: 'CAD' },
];

const busbudColorLight = '#def7fb';
const busbudColorDark = '#edfcf9';
const titleTextColor = '#0274ca';

const Home = () => {
    const [departures, setDepartures] = useState([]);

    const fetchDeparturesFromAPI = async () => {
        const _departures = await fetchDepartures(origin, destination, date, queryParams);

        console.log('Departures Result 2 = ', _departures);


    }

    useEffect(() => {
        fetchDeparturesFromAPI();
    }, []);

    return (
        <div className="HomeContainer">
            {/* {Alerts()} */}
            {Form()}
        </div>
    );
}

const Alerts = () => {
    return (
        <div>
            {['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'].map((variant) => (
                <Alert key={variant} variant={variant}>
                    This is a {variant} alert—check it out!
                </Alert>
            ))}
        </div>
    )
}

const Form = () => {
    return (
        <Container style={{ backgroundColor: busbudColorDark }}>
            <Row style={{ backgroundColor: busbudColorLight }}>
                <Col>
                    <div style={{ display: 'flex', color: titleTextColor, justifyContent: 'flex-start', padding: '4px 10px 4px 10px' }}>
                        <BusbudLogo />
                        <div style={{ display: 'flex', alignItems: 'flex-end', flexGrow: 1, padding: '0px 10px 3px 20px' }}>
                            Departures (Coding Challenge)
                        </div>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col sm={8}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        sm=8
                    </div>
                </Col>
                <Col sm={4}>sm=4</Col>
            </Row>
            <Row>
                <Col sm>sm=true</Col>
                <Col sm>sm=true</Col>
                <Col sm>sm=true</Col>
            </Row>
        </Container>
    );
}

export default Home;