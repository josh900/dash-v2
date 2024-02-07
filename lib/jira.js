export async function fetchJiraIssues(jql) {
    const JIRA_API_URL = `${process.env.JIRA_DOMAIN}/rest/api/3/search`;
    const auth = Buffer.from(`${process.env.JIRA_USER_EMAIL}:${process.env.JIRA_API_KEY}`).toString('base64');

    try {
        const response = await fetch(JIRA_API_URL, {
            method: 'POST',
            headers: {
                'Authorization': `Basic ${auth}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ jql }),
        });

        if (!response.ok) throw new Error('Failed to fetch Jira issues');
        return await response.json();
    } catch (error) {
        console.error(error);
        throw error;
    }
}