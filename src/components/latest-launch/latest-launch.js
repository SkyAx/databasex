import React, {
    Component
} from 'react';
import {
    Segment,
    Header,
    Card,
    List,
    Image, Tab
} from 'semantic-ui-react';
import DatabasexService from "../../services/databasex-service";

export default class LatestLaunch extends Component {
    databasexService = new DatabasexService();

    state = {
        launch: {
            firstStage: {},
            secondStage: {
                orbitParams: {}
            },
            links: {}
        },
        loading: true
    };

    constructor() {
        super();
        this.updateLaunch();
    }

    onLaunchLoaded = (launch) => {
        this.setState({
            launch: launch,
            loading: false
        });
    };

    updateLaunch() {
        this.databasexService
            .getLaunch('latest')
            .then(this.onLaunchLoaded);
    }

    getFlightDate(date) {
        const d = new Date(date);
        return `${d.toLocaleDateString('ru-RU')} ${d.getHours()}:${d.getMinutes()}`;
    }

    panes = [
        {
            menuItem: 'First stage',
            render: () =>
                <Tab.Pane>
                    <List>
                        <List.Item><b>Core serial:</b> {this.state.launch.firstStage.coreSerial}</List.Item>
                        <List.Item><b>Flight:</b> {this.state.launch.firstStage.flight}</List.Item>
                        <List.Item><b>Block:</b> {this.state.launch.firstStage.block}</List.Item>
                        <List.Item><b>Landing status:</b> {this.state.launch.firstStage.landSuccess ? 'Success' : 'Failed'}
                        </List.Item>
                        <List.Item><b>Landing intent:</b> {this.state.launch.firstStage.landingIntent ? 'Yes' : 'No'}</List.Item>
                        <List.Item><b>Reused:</b> {this.state.launch.firstStage.reused ? 'Yes' : 'No'}</List.Item>
                    </List>
                </Tab.Pane>
        },
        {
            menuItem: 'Second stage',
            render: () =>
                <Tab.Pane>
                    <List>
                        <List.Item><b>Block:</b> {this.state.launch.secondStage.block}</List.Item>
                        <List.Item><b>Payloads:</b> {this.state.launch.secondStage.payloadId ? 'Yes' : 'No'}</List.Item>
                        <List.Item><b>Payload type:</b> {this.state.launch.secondStage.payloadType}</List.Item>
                        <List.Item><b>Payload ID:</b> {this.state.launch.secondStage.payloadId}</List.Item>
                        <List.Item><b>Customers:</b> {this.state.launch.secondStage.customers}</List.Item>
                        <List.Item><b>Nationality:</b> {this.state.launch.secondStage.nationality}</List.Item>
                        <List.Item><b>Manufacturer:</b> {this.state.launch.secondStage.manufacturer}</List.Item>
                        <List.Item><b>Payload mass:</b> {this.state.launch.secondStage.payloadMassKg} kg.</List.Item>
                    </List>
                </Tab.Pane>
        },
        {
            menuItem: 'Orbit parameters',
            render: () =>
                <Tab.Pane>
                    <List>
                        <List.Item><b>Orbit type:</b> {this.state.launch.secondStage.orbitParams.referenceSystem}</List.Item>
                        <List.Item><b>Orbit regime:</b> {this.state.launch.secondStage.orbitParams.regime}</List.Item>
                        <List.Item><b>Periapsis:</b> {this.state.launch.secondStage.orbitParams.periapsisKm} km.</List.Item>
                        <List.Item><b>Apoapsis:</b> {this.state.launch.secondStage.orbitParams.apoapsisKm} km.</List.Item>
                        <List.Item><b>Degrees:</b> {this.state.launch.secondStage.orbitParams.inclinationDeg} °</List.Item>
                        <List.Item><b>Rotation period:</b> {this.state.launch.secondStage.orbitParams.periodMin} min</List.Item>
                        <List.Item><b>Lifespan years:</b> {this.state.launch.secondStage.orbitParams.lifespanYears}</List.Item>
                    </List>
                </Tab.Pane>
        },
        {
            menuItem: 'Details',
            render: () =>
                <Tab.Pane>
                    <p>{this.state.launch.details}</p>
                </Tab.Pane>
        },
        {
            menuItem: 'Video',
            render: () =>
                <Tab.Pane>
                    <iframe
                        title={this.state.launch.missionName}
                        width={"100%"}
                        height={"480"}
                        src={`https://www.youtube.com/embed/${this.state.launch.links.youtubeId}`}
                        frameBorder={0}
                    >
                        {this.state.launch.missionName}
                    </iframe>
                </Tab.Pane>
        }
    ];

    render({launch} = this.state) {
        return (
            <Segment className={'launch'}
                     color={launch.launchSuccess ? 'green' : 'red'}
                     loading={this.state.loading}>
                <Header as={'h1'} className={'launch-heading'}>
                    Mission {launch.flightNumber}: <a href={launch.links.wikipedia}
                                                      target={'_blank'}>{launch.missionName}</a>
                    <Header.Subheader>{this.getFlightDate(launch.launchDate)}</Header.Subheader>
                </Header>
                <Card className={'launch-container'}>
                    <Image src={launch.links.image}
                           alt={launch.missionName}
                           className={'launch-image'}/>
                    <Card.Content>
                        <Card.Meta
                            className={'launch-desc-min'}
                        >
                            <p><b>Rocket:</b> {launch.rocketName}</p>
                            <p><b>Launch site:</b> {launch.launchSite}</p>
                        </Card.Meta>
                        <Card.Description>
                            <Tab panes={this.panes}/>
                        </Card.Description>
                    </Card.Content>
                </Card>
            </Segment>
        )
    }
}