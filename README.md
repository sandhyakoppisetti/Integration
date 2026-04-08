This project demonstrates a complete Salesforce integration using Apex Callouts and Lightning Web Components (LWC) to fetch and display real‑time U.S. gas prices based on a user‑entered state. The solution connects to an external REST API, retrieves fuel price data, and renders both state‑level and city‑level information directly in the LWC UI without using Lightning Datatable.

🔧 Key Features
- Apex REST API Callout
Performs an HTTP GET request to an external gas price API using dynamic state input and authorization headers.
- JSON Parsing in LWC
The raw JSON response returned by Apex is parsed client‑side using native JavaScript.
- State Details Display
Shows complete state‑level fuel price information including gasoline, mid‑grade, premium, diesel, currency, and state name.
- City‑Wise Fuel Prices
Renders all cities returned by the API using LWC template loops, providing a clean and readable layout without relying on Lightning Datatable.
- Reactive UI Updates
Uses @wire and tracked properties to automatically update the UI when the user searches for a new state.
- Error Handling & User Feedback
Displays meaningful messages for invalid states, API errors, or parsing issues.

What This Project Demonstrates
- How to integrate Salesforce with external REST APIs using Apex
- How to pass user input from LWC to Apex
- How to deserialize and process JSON responses
- How to build dynamic UIs in LWC using template loops
- How to structure Apex + LWC for real‑world integration scenarios
- How to create a clean, functional UI without Lightning Datatable
This project is ideal for developers learning Salesforce integrations, preparing for interviews, or building portfolio‑ready LWC applications that showcase API connectivity and dynamic UI rendering.
