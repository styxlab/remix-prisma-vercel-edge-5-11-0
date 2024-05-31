export const getRequestOrigin = (headers: Headers): string => `${headers.get('x-forwarded-proto') === `https` ? `https` : `http`}://${headers.get('host')}`

export const getRequestAuth = (headers: Headers) => {
    const token = headers.get('Authorization') ?? ''
    return token.replace('Bearer ', '')
}
