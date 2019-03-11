export default class DatabasexService {

    _apiBase = 'https://api.spacexdata.com/v3';

    async getResource(url) {
        const res = await fetch(`${this._apiBase}${url}`);
        if (!res.ok) {
            throw new Error(`Could not fetch ${url}` +
                `, received ${res.status}`)
        }
        return await res.json();
    };

    async getAllLaunches() {
        const res = await this.getResource(`/launches/`);
        return res.results.map(this._transformLaunch)
    }

    async getLaunch(id) {
        const launch = await this.getResource(`/launches/${id}/`);
        return this._transformLaunch(launch);
    }

    _transformLaunch(launch) {
        return {
            flightNumber: launch.flight_number,
            missionName: launch.mission_name,
            launchDate: launch.launch_date_utc,
            rocketName: launch.rocket.rocket_name,
            firstStage: {
                coreSerial: launch.rocket.first_stage.cores[0].core_serial,
                flight: launch.rocket.first_stage.cores[0].flight,
                block: launch.rocket.first_stage.cores[0].block,
                reused: launch.rocket.first_stage.cores[0].reused,
                landSuccess: launch.rocket.first_stage.cores[0].land_success,
                landingIntent: launch.rocket.first_stage.cores[0].landing_intent
            },
            secondStage: {
                block: launch.rocket.second_stage.block,
                payloadId: launch.rocket.second_stage.payloads[0].payload_id,
                customers: launch.rocket.second_stage.payloads[0].customers,
                nationality: launch.rocket.second_stage.payloads[0].nationality,
                manufacturer: launch.rocket.second_stage.payloads[0].manufacturer,
                payloadType: launch.rocket.second_stage.payloads[0].payload_type,
                payloadMassKg: launch.rocket.second_stage.payloads[0].payload_mass_kg,
                orbitParams: {
                    referenceSystem: launch.rocket.second_stage.payloads[0].orbit_params.reference_system,
                    regime: launch.rocket.second_stage.payloads[0].orbit_params.regime,
                    periapsisKm: launch.rocket.second_stage.payloads[0].orbit_params.periapsis_km,
                    apoapsisKm: launch.rocket.second_stage.payloads[0].orbit_params.apoapsis_km,
                    inclinationDeg: launch.rocket.second_stage.payloads[0].orbit_params.inclination_deg,
                    periodMin: launch.rocket.second_stage.payloads[0].orbit_params.period_min,
                    lifespanYears: launch.rocket.second_stage.payloads[0].orbit_params.lifespan_years,
                }
            },
            launchSite: launch.launch_site.site_name_long,
            launchSuccess: launch.launch_success,
            links: {
                missionPatch: launch.links.mission_patch,
                presskit: launch.links.presskit,
                wikipedia: launch.links.wikipedia,
                youtubeId: launch.links.youtube_id,
                image: launch.links.flickr_images[0]
            },
            details: launch.details
        }
    }
}