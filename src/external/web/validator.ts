import {
    ClassConstructor,
    ClassTransformOptions,
    TransformPlainToInstance,
} from 'class-transformer'
import { Body, ParamOptions, Params, QueryParams } from 'routing-controllers'
import { ResponseSchema } from 'routing-controllers-openapi'

export function StrictQueryParams(options?: ParamOptions) {
    return QueryParams({
        validate: {
            whitelist: true,
        },
        ...options,
    })
}

export function StrictParams(options?: ParamOptions) {
    return Params({
        validate: {
            whitelist: true,
        },
        ...options,
    })
}

export function StrictBody(options?: ParamOptions) {
    return Body({
        validate: {
            whitelist: true,
        },
        ...options,
    })
}

declare type MethodDecorator = <T>(
    target: object,
    propertyKey: string | symbol,
    descriptor: TypedPropertyDescriptor<T>,
) => TypedPropertyDescriptor<T> | void

export function Serializer(
    classType: ClassConstructor<unknown>,
    opt?: {
        openApi?: {
            contentType?: string
            description?: string
            statusCode?: string | number
            isArray?: boolean
        }
        classTransformer?: ClassTransformOptions
    },
): MethodDecorator {
    const transformFn = TransformPlainToInstance(classType, opt?.classTransformer)
    const schemaFn = ResponseSchema(classType, opt?.openApi)
    return function (value, key, descriptor) {
        transformFn(value, key, descriptor)
        schemaFn(value, key as string, descriptor)
    }
}

export function ArraySerializer(
    classType: ClassConstructor<unknown>,
    opt?: {
        openApi?: {
            contentType?: string
            description?: string
            statusCode?: string | number
            isArray?: boolean
        }
        classTransformer?: ClassTransformOptions
    },
): MethodDecorator {
    const transformFn = TransformPlainToInstance(classType, opt?.classTransformer)
    const schemaFn = ResponseSchema(classType, { ...opt?.openApi, isArray: true })
    return function (value, key, descriptor) {
        transformFn(value, key, descriptor)
        schemaFn(value, key as string, descriptor)
    }
}