from pydantic import BaseModel 
class leetcodeuser(BaseModel):
    username: str
    total_solved: int
    rank: int
    easy_solved : int
    medium_solved : int
    hard_solved : int