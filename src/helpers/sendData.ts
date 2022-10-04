import { IData } from './../interfaces/IData'

const BACKEND_URL = 'https://hookb.in/eK160jgYJ6UlaRPldJ1P'

export async function sendData(data: IData) {
  console.log('You send this data:', data)

  try {
    const response = await fetch(BACKEND_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })

    const responseData = await response.json()

    console.log('Response:', responseData)
  } catch (error) {
    console.error(error)
  }
}
