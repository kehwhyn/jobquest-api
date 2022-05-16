require('dotenv').config();

const express    = require('express')
const bodyParser = require('body-parser')
const cors       = require('cors')
const morgan = require('morgan')

const loginRouter = require('./routes/login')
const usersRouter = require('./routes/users')
const companiesRouter = require('./routes/companies')
const vacanciesRouter = require('./routes/vacancies')
const skillsRouter = require('./routes/skills')
const matchRouter = require('./routes/matches')
const routerPublic = require('./routes/public')
const buildBanner = require('./Helpers/Banner')
const TokenManager = require('./Helpers/AuthManager')
const config = require('./config/config')
const DatabaseUtils = require('./Helpers/DatabaseUtils')


setupServer()

function setupServer() {
    const app = express()
    const port = process.env.PORT || config.app.port
    app.use(cors({origin: '*'}))
    app.use(morgan('dev'))
    app.use(bodyParser.json())
    app.use('/api/login', loginRouter) //rotas de login -> públicas
    app.use('/api/public', routerPublic)
    app.use('/api/users', TokenManager.ensureUserToken, usersRouter) // TokenManager.ensureUserToken -> rota protegida por autenticação
    app.use('/api/companies', TokenManager.ensureUserToken, companiesRouter)
    app.use('/api/vacancies', TokenManager.ensureUserToken, vacanciesRouter)
    app.use('/api/skills', TokenManager.ensureUserToken, skillsRouter)
    app.use('/api/matches', TokenManager.ensureUserToken, matchRouter)
    app.listen(port, buildBanner(process.env.PORT || config.app.port))
    DatabaseUtils.checkDatabase()
    setupSwagger(app, port)
}

function setupSwagger(app, port) {

    const expressSwagger = require('express-swagger-generator')(app);

    let options = {
        swaggerDefinition: {
            info: {
                description: 'Backend for jobquest',
                title: 'JobQuest API',
                version: '1.0.0',
            },
            host: `localhost:${port}`,
            basePath: '/api',
            produces: [
                "application/json"
            ],
            schemes: ['http'],
            securityDefinitions: {
                JWT: {
                    type: 'apiKey',
                    in: 'header',
                    name: 'Authorization',
                    description: "",
                }
            }
        },
        basedir: __dirname, //app absolute path
        files: ['./routes/*.js'] //Path to the API handle folder
    };
    expressSwagger(options)
}