import http from 'k6/http';
import { check } from 'k6';

// Replace with your actual Grafana URL and API key
const BASE_URL = 'https://your-grafana-instance.com/api';
const API_KEY = 'Bearer YOUR_GRAFANA_API_KEY';

export default function () {
    // -------------------------------
    // GET Request: Fetch a dashboard
    // -------------------------------
    let getRes = http.get(`${BASE_URL}/dashboards/uid/your-dashboard-uid`, {
        headers: {
            'Authorization': API_KEY,
            'Content-Type': 'application/json',
        },
    });

    check(getRes, {
        'GET dashboard status is 200': (r) => r.status === 200,
    });

    // -------------------------------
    // POST Request: Create a dashboard
    // -------------------------------
    const payload = JSON.stringify({
        dashboard: {
            id: null,
            uid: null,
            title: "New Dashboard from k6",
            timezone: "browser",
            panels: [],
        },
        folderId: 0,
        overwrite: false
    });

    let postRes = http.post(`${BASE_URL}/dashboards/db`, payload, {
        headers: {
            'Authorization': API_KEY,
            'Content-Type': 'application/json',
        },
    });

    check(postRes, {
        'POST dashboard status is 200': (r) => r.status === 200,
    });
}
