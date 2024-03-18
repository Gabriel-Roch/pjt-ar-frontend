

const base_url = "http://localhost:8080"

export async function Get(url: string) {
    try {
        const options = {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        }
        const response = await fetch(base_url + url, options)
        const responseJson = await response.json()
        return responseJson
    } catch (error) {
        return error
    }
}

export async function Delete(url: string, id: number | string) {
    try {
        const options = {
            method: "DELETE"
        }
        const response = await fetch(base_url + url + "?id=" + id, options)
        const responseJson = await response.json()
        return responseJson
    } catch (error) {
        return error
    }
}

export async function Post(url: string, body: any) {
    try {
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: body
        }
        const response = await fetch(base_url + url, options)
        const responseJson = await response.json()
        return responseJson
    } catch (error) {
        return error
    }
}

