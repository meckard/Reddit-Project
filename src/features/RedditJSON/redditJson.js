
export const API_URL = 'https://www.reddit.com'
const redditUrl = "https://www.reddit.com/r/popular.json"

export default async function GetSubredditPosts () {
    const response = await fetch(redditUrl)
    const json = await response.json()
  
    return json.data.children.map((post) => post.data)
  }

  export const getPostComments = async (permalink) => {
    const response = await fetch(`${API_URL}${permalink}.json`)
    const json = await response.json()

    return json[1].data.children.map((subreddit) => subreddit.data)
  }
