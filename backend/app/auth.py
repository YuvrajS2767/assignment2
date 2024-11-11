from fastapi import Depends, HTTPException
from pydantic import BaseModel
import bcrypt
from .crud import get_user

class UserLogin(BaseModel):
    username: str
    password: str

async def login(user_login: UserLogin):
    user = get_user(user_login.username)
    if not user or not bcrypt.checkpw(user_login.password.encode(), user.password_hash.encode()):
        raise HTTPException(status_code=400, detail="Invalid credentials")
    return {"message": "Logged in successfully"}
