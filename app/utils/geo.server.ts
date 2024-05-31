const DEFAULT_COUNTRY = 'DE'
const BLOCKED_COUNTRIES = ['RU', 'BY']

export const geoAccessCheck = ({ request }: { request: Request }) => {
  //console.log('x-vercel-ip-city', request.headers.get('x-vercel-ip-city'))
  //console.log('x-vercel-ip-country', request.headers.get('x-vercel-ip-country'))
  //x-vercel-ip-country-region
  const country = request.headers.get('x-vercel-ip-country') ?? DEFAULT_COUNTRY
  if (BLOCKED_COUNTRIES.includes(country)) throw new Response('Unavailable for legal reasons', { status: 451 })
  return null
}
