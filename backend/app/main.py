from fastapi import FastAPI
from .document_upload import upload_document, query_document
from .auth import login

app = FastAPI()

@app.post("/upload/")
async def upload(file: UploadFile = File(...)):
    return await upload_document(file)

@app.post("/query/")
async def query(query_text: str):
    return await query_document(query_text)

@app.post("/login/")
async def login_endpoint(user_login: UserLogin):
    return await login(user_login)
