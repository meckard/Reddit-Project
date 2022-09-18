

const redditUrl = "https://www.reddit.com/r/popular.json"

export default async function GetSubredditPosts () {
    const response = await fetch(redditUrl)
    const json = await response.json()
  
    return json.data.children.map((post) => post.data)
  }

