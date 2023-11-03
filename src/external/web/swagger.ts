import fs from 'fs'
import path from 'path'

import { validationMetadatasToSchemas } from 'class-validator-jsonschema'
import { Express, Request } from 'express'
import _ from 'lodash'
import {
    getMetadataArgsStorage,
} from 'routing-controllers'
import { routingControllersToSpec } from 'routing-controllers-openapi'
import {
    serve,
    setup,
} from 'swagger-ui-express'
import YAML from 'yaml'
export async function setupSwagger(
    app: Express,
) {
    const storage = getMetadataArgsStorage()
    const schemas = validationMetadatasToSchemas({
        refPointerPrefix: '#/components/schemas/',
    })

    const spec = routingControllersToSpec(storage, undefined, {
        servers: [
            {
                url: 'http://localhost:5000/',
                description: 'Development',
            },
        ],
        components: {
            schemas: _(schemas)
                .toPairs()
                .orderBy(([key]) => {
                    return [key.endsWith('Schema'), key]
                })
                .fromPairs()
                .value() as any,
            securitySchemes: {
                bearerAuth: {
                    scheme: 'bearer',
                    type: 'http',
                },
            },
        },
        info: {
            description: 'ECCOMECE TESTS',
            title: 'ECCOMERCE API',
            version: '1.0.0',
        },
    })

    fs.writeFileSync(path.resolve('swagger.yml'), YAML.stringify(spec))

    const serveInstance = setup(spec, {
        swaggerOptions: {
            persistAuthorization: true,
            authToken: '',
            requestInterceptor: (request: Request) => {
                request.headers.Authorization = `Bearer ${(window as any).ui.getConfigs().authToken
                    }`
                return request
            },
        },
    })

    app.use(`/docs`, serve)
    app.get(`/docs`, serveInstance)
}
