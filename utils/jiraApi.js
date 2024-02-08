// utils/jiraApi.js
import axios from 'axios';

const fetchIssuesFromJira = async (jql) => {
  const apiUrl = `https://skoop-jira.atlassian.net/rest/api/3/search`;
  const headers = {
    Authorization: `Basic ATATT3xFfGF00d6ke2J0VIbaKBKv-KcNXw6kIyhIiEcO5NsZjSjUjg7ax6VQQxtN8q8E0cxxP3EC5-GxFeqGWkpFN4nAktGD04dhjWfebvcppVrnelQTvr2GjoFYPykLQIgGucoVUtfH7reQNQjpBwxYYZ7qAqIoz94Yys6aun4I56WA6o6XkXc=25192369`,
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
