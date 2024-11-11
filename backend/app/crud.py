from sqlalchemy.orm import Session
from .models import User, Document
from .schemas import UserCreate

def get_user(db: Session, username: str):
    return db.query(User).filter(User.username == username).first()

def create_user(db: Session, user: UserCreate):
    db_user = User(username=user.username, password_hash=user.password_hash)
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user
