//
// Raw browser window variable (popuated via /public/env.js file)
//
export interface IWindow {
    VP4API_URL : string,  // Vantage Point URL (usually http://localhost:5001)
    WSAPI_URL : string,   // Scheduler URL (usually http://localhost:5000)
    TLEAPI_URL : string,  // TLE API URL (usually http://localhost:5002)
    API_TIMEOUT_MINUTES : number,  // Shared across all APIs, note: time is minutes
    LastURL : string,      // Last URL sent to default Axios instance 
    DEFAULT_TEST_COMPANY : number  // Test company to use
}