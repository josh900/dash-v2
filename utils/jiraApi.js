// utils/jiraApi.js
import axios from 'axios';

const fetchIssuesFromJira = async (jql) => {
  const apiUrl = `${process.env.REACT_APP_JIRA_DOMAIN}/rest/api/3/search`;
  const headers = {
    Authorization: `Basic ${btoa(process.env.REACT_APP_JIRA_API_KEY)}`,
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
