// app/api/jira.js
const JIRA_API_URL = `${process.env.JIRA_DOMAIN}/rest/api/3/search`;

export async function fetchJiraIssues(jql) {
  const response = await fetch(JIRA_API_URL, {
    method: 'POST',
    headers: {
      'Authorization': `Basic ${Buffer.from(`${process.env.JIRA_USER_EMAIL}:${process.env.JIRA_API_KEY}`).toString('base64')}`,
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify({ jql })
  });

  if (!response.ok) {
    throw new Error('Failed to fetch Jira issues');
  }

  return response.json();
}