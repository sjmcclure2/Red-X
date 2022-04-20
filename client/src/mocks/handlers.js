import { rest } from 'msw';

const BASE_URL = 'http://localhost:8080/api';

export const handlers = [
  rest.get(BASE_URL, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        categories:	"http://https://red-x-server.herokuapp.com:4000/api/categories",
        project_owners:	"http://https://red-x-server.herokuapp.com:4000/api/project_owners",
        projects:	"http://https://red-x-server.herokuapp.com:4000/api/projects",
        requests:	"http://https://red-x-server.herokuapp.com:4000/api/requests",
        users:	"http://https://red-x-server.herokuapp.com:4000/api/users"
      })
    )
  }),
  rest.get(BASE_URL + `/projects/${2443}`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
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
      })
    ) 
  }),
  rest.get(BASE_URL + `project_owners/${1}`, (req, res, ctx) => {
    return res(
      ctx.json({})
    )
  }),
  rest.get(BASE_URL + `request/${4}`, (req, res, ctx) => {
    return res (
      ctx.json([{
        id: 4,
        user_id: 1,
        description: 'This is a request description',
        category_id: 2,
        is_resolved: false,
        prioity: 1   
      }])
    )
  }),
  rest.get(BASE_URL + `users/${1}`, (req, res, ctx) => {
    return res(
      ctx.json({
        id: 1, 
        username: 's.person',
        password_hash: '3jd03nd9',
        email: 'scott.mcclure.1@us.af.mil',
        first_name: 'Scott', 
        last_name: 'Person', 
        isAdmin: true,
      })
    )
  }),
  rest.get(BASE_URL + `project_owners/${1}`, (req, res, ctx) => {
    return res(
      ctx.json({})
    )
  }),
]