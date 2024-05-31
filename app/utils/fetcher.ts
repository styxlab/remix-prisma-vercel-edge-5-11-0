/*
    await fetcher(`/api/unsplash?url=${triggerUrl}`, {
      body: JSON.stringify(data),
    })

*/

const domain = process.env.SITE_URL
const host = domain && domain.includes('localhost') ? 'http://localhost:3000' : domain
type WithError<T extends {}> = T & { error?: object }

export const fetcher = async <T extends Record<keyof T, unknown>>(input: RequestInfo, init?: RequestInit): Promise<WithError<T>> => {
  if (init && init.body && !init.method) init.method = 'POST'

  if (`${process.env.PROTECTED_ROUTE_SECRET}`.length === 0) {
    console.log('WARNING: PROTECTED_ROUTE_SECRET in fetcher is empty!')
  }

  const headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${process.env.PROTECTED_ROUTE_SECRET}`
  }

  const res = await fetch(`${host}${input}`, {
    ...init,
    headers: { ...init?.headers, ...headers },
  })
  return res.status > 300 ? { error: { status: res.status } } : await res.json()
}
