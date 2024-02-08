// utils/jiraApi.js
import axios from 'axios';

const fetchIssuesFromJira = async (jql) => {
  const apiUrl = `https://skoop-jira.atlassian.net/rest/api/3/search`;
  const headers = {
    Authorization: `Basic am9zaG1Ac2tvb3AuZGlnaXRhbDpBVEFUVDN4RmZHRjAwZDZrZTJKMFZJYmFLQkt2LUtjTlh3NmtJeWhJaUVjTzVOc1pqU2pVamc3YXg2VlFReHROOHE4RTBjeHhQM0VDNS1HeEZlcUdXa3BGTjRuQWt0R0QwNGRoaldmZWJ2Y3BwVnJuZWxRVHZyMkdqb0ZZUHlrTFFJZ0d1Y29WVXRmSDdyZVFOUWpwQnd4WVlaN3FBcUlvejk0WXlzNmF1bjRJNTZXQTZvNlhrWGM9MjUxOTIzNjk=`,
    'Content-Type': 'application/json',
  };

  try {
    const response = await axios.post(apiUrl, { jql }, { headers });
    return response.data.issues; // Assuming the response contains an array of issues
  } catch (error) {
    console.error('Error fetching issues from Jira:', error);
    return [];
  }
};

export default fetchIssuesFromJira;
