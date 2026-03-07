import httpx
from fastapi import FastAPI, HTTPException
from schemas import leetcodeuser
app = FastAPI()
LEETCODE_URL = "https://leetcode.com/graphql"
@app.post("/login")
async def get_data(username: str):
    query = """
    query userPublicProfile($username: String!) {
      matchedUser(username: $username) {
        profile { ranking }
        submitStats {
          acSubmissionNum { difficulty count }
        }
      }
    }
    """
    variables = {"username": username}
    async with httpx.AsyncClient() as client:
        response = await client.post(
            LEETCODE_URL, 
            json = {"query": query, "variables": variables}
        )
        res_data = response.json()
        if res_data.get("data").get("matchedUser") is None:
            return None
        return res_data["data"]["matchedUser"]
async def login_user(user: leetcodeuser):
    data = await get_data(user.username)
    if data is None:
        raise HTTPException(status_code=404, detail = 'user not found on leetcode')
    current_rank = data["profile"]["ranking"]
    submission_list = data["SubmitStats"]["acSubmissionNum"]
    total_solved = next(item["count"] for item in submission_list if item["difficulty"] == "All")
    easy_solved = next(item["count"] for item in submission_list if item["difficulty"] == "Easy")
    medium_solved = next(item["count"] for item in submission_list if item["difficulty"] == "Medium")
    hard_solved = next(item["count"] for item in submission_list if item["difficulty"] == "Hard")
    return {"status": "success",
             "username": user.username, 
             "rank" : current_rank,
             "total_solved" : total_solved,
             "easy_solved": easy_solved,
             "medium_solved":medium_solved,
             "hard_solved": hard_solved
             }
    
