const HOST = 'https://rebrickable.com/api/v3';

export async function getUserToken(apiKey, username, password) {
  const body = new URLSearchParams({ username, password })

  const response = await fetch(HOST + '/users/_token/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': `key ${apiKey}`,
      'Accept': 'application/json'
    },
    body
  })
  const json = await response.json()

  return json['user_token']
}

export async function getAllParts(apiKey, userToken, onProgress) {
  let result = []
  let nextPageUrl = `${HOST}/users/${userToken}/allparts/`

  while (nextPageUrl) {
    const json = await getAllPartsPage(apiKey, nextPageUrl)

    nextPageUrl = json['next']
    result = result.concat(json['results'])

    if (typeof onProgress === 'function') {
      onProgress(result.length, json['count'])
    }
  }

  return result
}

async function getAllPartsPage(apiKey, pageUrl) {
  const response = await fetch(pageUrl, {
    headers: {
      'Authorization': `key ${apiKey}`,
      'Accept': 'application/json'
    }
  })

  if (response.status >= 400) {
    const errorMessage = await response.json()['detail']
    throw new Error(errorMessage)
  }

  return await response.json()
}
