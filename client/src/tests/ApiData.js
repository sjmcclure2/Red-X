const apiData = {
  users: [
    {
      id: 1, 
      username: 's.person',
      password_hash: '3jd03nd9',
      email: 'scott.mcclure.1@us.af.mil',
      first_name: 'Scott', 
      last_name: 'Person', 
      isAdmin: true,
    }
  ],
  requests: [
    {
      id: 4,
      user_id: 1,
      description: 'This is a request description',
      category_id: 2,
      is_resolved: false,
      prioity: 1  
    }
  ],
  projects: [
    {
     id: 2443,
     name: 'random-repository-name',
     description: 'this is the project description',
     last_activity_at: '2022-04-18T05:00:00.000Z',
     ssh_url_to_repo: 'git@repo1.dso.mil:dsop/frontiertechnology/cortex/application-api.git',
     http_url_to_repo: 'git@repo1.dso.mil:dsop/frontiertechnology/cortex/application-api.git',
     web_url: 'https://repo/application/api',
     avatar_url: 'http://someUrl',
     project_owner_id: 1,
     category_id: 2,
     status: 'active'
    }
  ]  
}

module.exports = apiData;