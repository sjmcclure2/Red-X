import { rest } from 'msw';

const BASE_URL = 'https://red-x-server.herokuapp.com/api';

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
  rest.get(BASE_URL + `/projects/:id`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([{   		
          id: 12059,
          name:	"renovate-testing",
          description:	"a small description",
          last_activity_at:	"2022-04-20T00:00:00.000Z",
          ssh_url_to_repo:	"git@repo1.dso.mil:brandt.w.keller/renovate-testing.git",
          http_url_to_repo:	"https://repo1.dso.mil/brandt.w.keller/renovate-testing.git",
          web_url:	"https://repo1.dso.mil/brandt.w.keller/renovate-testing",
          avatar_url:	null,
          project_owner_id:	4244,
          category_id:	5,
          status:	"active",
      }])
    ) 
  }),
  rest.get(BASE_URL + `project_owners/${1}`, (req, res, ctx) => {
    return res(
      ctx.json({})
    )
  }),
  rest.get(BASE_URL + `request/:id`, (req, res, ctx) => {
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
  rest.post(BASE_URL + `/requests`, (req, res, ctx) => {
    return res()
  }),
  rest.get(BASE_URL + '/requests/:id', (req, res, ctx) => {
    return res(ctx.json([{  	
      id: 1,
      user_id: 5118,
      title: "I'll hack the cross-platform COM microchip, that should alarm the EXE firewall!",
      description: "Aut fugit laborum nisi. Sed at harum officia et. Nisi eum mollitia iste exercitationem modi velit hic cumque voluptatem. Nihil neque omnis sed aspernatur ut neque corporis. Iste modi dolorem. Numquam ut ea eaque natus.",
      category_id: 6,
      priority: 2,
      is_resolved: true
    }]))
  })
]