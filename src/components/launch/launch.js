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


export default class Launch extends Component{
    databasexService = new DatabasexService();

    state = {
        flight_number: 74,
        mission_name: 'Iridium NEXT Mission 8',
        mission_id: [
            'F3364BF'
        ],
        launch_year: '2019',
        launch_date_unix: 1547220660,
        launch_date_utc: '2019-01-11T15:31:00.000Z',
        launch_date_local: '2019-01-11T07:31:00-08:00',
        is_tentative: false,
        tentative_max_precision: 'hour',
        tbd: false,
        launch_window: 0,
        rocket: {
            rocket_id: 'falcon9',
            rocket_name: 'Falcon 9',
            rocket_type: 'FT',
            first_stage: {
                cores: [
                    {
                        core_serial: 'B1049',
                        flight: 2,
                        block: 5,
                        gridfins: true,
                        legs: true,
                        reused: true,
                        land_success: true,
                        landing_intent: true,
                        landing_type: 'ASDS',
                        landing_vehicle: 'JRTI'
                    }
                ]
            },
            second_stage: {
                block: 5,
                payloads: [
                    {
                        payload_id: 'Iridium NEXT 8',
                        norad_id: [
                            43922,
                            43923,
                            43924,
                            43925,
                            43926,
                            43927,
                            43928,
                            43929,
                            43930,
                            43931
                        ],
                        reused: false,
                        customers: [
                            'Iridium Communications'
                        ],
                        nationality: 'United States',
                        manufacturer: 'Thales Alenia Space',
                        payload_type: 'Satellite',
                        payload_mass_kg: 9600,
                        payload_mass_lbs: 21164.38,
                        orbit: 'PO',
                        orbit_params: {
                            reference_system: 'geocentric',
                            regime: 'low-earth',
                            longitude: null,
                            semi_major_axis_km: 7155.806,
                            eccentricity: 0.0000817,
                            periapsis_km: 777.086,
                            apoapsis_km: 778.256,
                            inclination_deg: 86.3965,
                            period_min: 100.403,
                            lifespan_years: 15,
                            epoch: '2019-02-15T22:21:50.000Z',
                            mean_motion: 14.34217075,
                            raan: 32.7976,
                            arg_of_pericenter: 71.8698,
                            mean_anomaly: 288.2587
                        }
                    }
                ]
            },
            fairings: {
                reused: false,
                recovery_attempt: false,
                recovered: null,
                ship: null
            }
        },
        ships: [
            'JRTI-2',
            'NRCQUEST',
            'PACIFICFREEDOM'
        ],
        telemetry: {
            flight_club: 'https://www.flightclub.io/result?code=IRD8'
        },
        launch_site: {
            site_id: 'vafb_slc_4e',
            site_name: 'VAFB SLC 4E',
            site_name_long: 'Vandenberg Air Force Base Space Launch Complex 4E'
        },
        launch_success: true,
        links: {
            mission_patch: 'https://images2.imgbox.com/80/ae/1JL1ZzXD_o.png',
            mission_patch_small: 'https://images2.imgbox.com/11/f0/xPDcIpmS_o.png',
            reddit_campaign: 'https://www.reddit.com/r/spacex/comments/a699fh/iridium_next_constellation_mission_8_launch/',
            reddit_launch: 'https://www.reddit.com/r/spacex/comments/aemq2i/rspacex_iridium_next_8_official_launch_discussion/',
            reddit_recovery: 'https://www.reddit.com/r/spacex/comments/aewp4r/iridium_8_recovery_thread/',
            reddit_media: 'https://www.reddit.com/r/spacex/comments/aeoxve/rspacex_iridium_next_8_media_thread_videos_images/',
            presskit: 'https://www.spacex.com/sites/spacex/files/iridium8presskit.pdf',
            article_link: 'https://spaceflightnow.com/2019/01/11/spacex-begins-2019-with-eighth-and-final-for-upgraded-iridium-network/',
            wikipedia: 'https://en.wikipedia.org/wiki/Iridium_satellite_constellation#Next-generation_constellation',
            video_link: 'https://youtu.be/VshdafZvwrg',
            youtube_id: 'VshdafZvwrg',
            flickr_images: [
                'https://farm5.staticflickr.com/4866/39745612523_14270b4b9d_o.jpg',
                'https://farm8.staticflickr.com/7833/39745612923_21aa442350_o.jpg',
                'https://farm5.staticflickr.com/4881/39745613173_e99b09c000_o.jpg',
                'https://farm8.staticflickr.com/7882/39745613513_6cdd4581af_o.jpg',
                'https://farm8.staticflickr.com/7807/39745613733_1a7b70e54a_o.jpg',
                'https://farm5.staticflickr.com/4891/39745614053_43855205bc_o.jpg'
            ]
        },
        details: 'SpaceX\'s first flight of 2019 will be the eighth and final launch of its planned Iridium flights. Delivering 10 satellites to low earth orbit, this brings the total up to 75 and completes the Iridium NEXT constellation. This mission launches from SLC-4E at Vandenberg AFB. The booster is expected to land on JRTI.',
        upcoming: false,
        static_fire_date_utc: '2019-01-06T13:51:00.000Z',
        static_fire_date_unix: 1546782660,
        timeline: {
            webcast_liftoff: 960,
            go_for_prop_loading: -2280,
            rp1_loading: -2100,
            stage1_lox_loading: -2100,
            stage2_lox_loading: -960,
            engine_chill: -420,
            prelaunch_checks: -60,
            propellant_pressurization: -60,
            go_for_launch: -45,
            ignition: -3,
            liftoff: 0,
            maxq: 61,
            meco: 147,
            stage_sep: 150,
            second_stage_ignition: 158,
            fairing_deploy: 193,
            first_stage_boostback_burn: 193,
            first_stage_entry_burn: 330,
            first_stage_landing: 434,
            'seco-1': 526,
            second_stage_restart: 3108,
            'seco-2': 3111,
            payload_deploy: 3412
        }
    };

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
                        <List.Item><b>Core serial:</b> {this.state.rocket.first_stage.cores[0].core_serial}</List.Item>
                        <List.Item><b>Flight:</b> {this.state.rocket.first_stage.cores[0].flight}</List.Item>
                        <List.Item><b>Block:</b> {this.state.rocket.first_stage.cores[0].block}</List.Item>
                        <List.Item><b>Landing status:</b> {this.state.rocket.first_stage.cores[0].land_success ? 'Success' : 'Failed'}</List.Item>
                        <List.Item><b>Landing intent:</b> {this.state.rocket.first_stage.cores[0].landing_intent ? 'Yes': 'No'}</List.Item>
                        <List.Item><b>Reused:</b> {this.state.rocket.first_stage.cores[0].reused ? 'Yes' : 'No'}</List.Item>
                    </List>
                </Tab.Pane>
        },
        {
            menuItem: 'Second stage',
            render: () =>
                <Tab.Pane>
                    <List>
                        <List.Item><b>Block:</b> {this.state.rocket.first_stage.cores[0].block}
                        </List.Item>
                        <List.Item><b>Payloads:</b> {this.state.rocket.second_stage.payloads[0] ? 'Yes' : 'No'}
                        </List.Item>
                        <List.Item><b>Payload
                            type:</b> {this.state.rocket.second_stage.payloads[0].payload_type}
                        </List.Item>
                        <List.Item><b>Payload
                            ID:</b> {this.state.rocket.second_stage.payloads[0].payload_id}
                        </List.Item>
                        <List.Item><b>Customers:</b> {this.state.rocket.second_stage.payloads[0].customers}
                        </List.Item>
                        <List.Item><b>Nationality:</b> {this.state.rocket.second_stage.payloads[0].nationality}
                        </List.Item>
                        <List.Item><b>Manufacturer:</b> {this.state.rocket.second_stage.payloads[0].manufacturer}
                        </List.Item>
                        <List.Item><b>Payload
                            mass:</b> {this.state.rocket.second_stage.payloads[0].payload_mass_kg} kg.</List.Item>
                    </List>
                </Tab.Pane>
        },
        {
            menuItem: 'Orbit parameters',
            render: () =>
                <Tab.Pane>
                    <List>
                        <List.Item>
                            <b>Orbit type:</b> {this.state.rocket.second_stage.payloads[0].orbit_params.reference_system}
                        </List.Item>
                        <List.Item>
                            <b>Orbit regime:</b> {this.state.rocket.second_stage.payloads[0].orbit_params.regime}
                        </List.Item>
                        <List.Item><b>Periapsis:</b> {this.state.rocket.second_stage.payloads[0].orbit_params.periapsis_km} km.</List.Item>
                        <List.Item><b>Apoapsis:</b> {this.state.rocket.second_stage.payloads[0].orbit_params.apoapsis_km} km.</List.Item>
                        <List.Item><b>Degrees:</b> {this.state.rocket.second_stage.payloads[0].orbit_params.inclination_deg} °</List.Item>
                    </List>
                </Tab.Pane>
        },
        {
            menuItem: 'Details',
            render: () =>
                <Tab.Pane>
                    <p>{this.state.details}</p>
                </Tab.Pane>
        },
        {
            menuItem: 'Video',
            render: () =>
                <Tab.Pane>
                    <iframe
                        title={this.state.mission_name}
                        width={"100%"}
                        height={"480"}
                        src={`https://www.youtube.com/embed/${this.state.links.youtube_id}`}
                        frameBorder={0}
                    >123
                    </iframe>
                </Tab.Pane>
        }
    ];

    render() {
        return (
            <Segment className={'launch'}
                     color={this.state.launch_success ? 'green' : 'red'}>
                <Card className={'launch-container'}>
                    <Image src={this.state.links.flickr_images[0]}
                           alt={this.state.mission_name}
                           className={'launch-image'}/>
                    <Card.Content>
                        <Card.Header as={'h1'}>
                            <Header as={'h1'}
                                    className={'launch-heading'}>
                                Mission: <a href={this.state.links.wikipedia}>{this.state.mission_name}</a>
                                <Header.Subheader>{this.getFlightDate(this.state.launch_date_utc)}</Header.Subheader>
                            </Header>
                        </Card.Header>
                        <Card.Meta
                            className={'rocket-filter'}
                        ><a href={'/falcon-9'}>{this.state.rocket.rocket_name}</a></Card.Meta>
                        <Card.Description>
                            <Tab panes={this.panes}/>
                        </Card.Description>
                    </Card.Content>
                </Card>
            </Segment>
        )
    }
}