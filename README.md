# JobTrackingProjectWithReduxToolkit
Project Description:
This project aims to create a job tracking application. Users can list job listings, add new job postings, and view listings with various filters through this application.

Technologies Used:

React: The React library is used to create the user interface.
Redux Toolkit: Redux Toolkit is used for managing the application state.
Axios: The Axios library is used to make API requests.
React Router: React Router is used for page routing and navigation.
React Toastify: React Toastify is used for displaying notifications.
UUID: The UUID library is used to generate unique identifiers.
Used Components in the Project:

jobSlice: A reducer and actions created to manage the state related to job listings in the Redux store.
configureStore: The place where the Redux store is configured.
JobList: The main component where job listings are displayed. It fetches data from the API and displays filtered job listings from the Redux store.
AddJob: A component to add new job listings. Users can add a new job listing by filling out a form.
Header: A component for the page header and navigation links at the top of the page.
Filter: A component used to filter and sort job listings. Users can use search terms, status, type, and sorting options to filter job listings.
Used Concepts and Functions:

Various concepts like job status, type, and sorting options are implemented with filters and filter functions.
The Redux store contains job listings and filtered job listings.
API requests are made using Axios to retrieve job listing data, which is then updated in the Redux store.
Forms are used to add new job listings, and the Redux store is updated accordingly.
React Router is used to enable navigation between pages.
User notifications are displayed using React Toastify.
In this project, job listing management, listing display, and filtering are achieved primarily using React and Redux. With the technologies and components used, users can easily access and manage job listings.

Preview: 


https://github.com/nursedaturkcan/JobTrackingProjectWithReduxToolkit/assets/129687664/b28c3c6d-eaec-4cd9-abec-338f1247c3a2

