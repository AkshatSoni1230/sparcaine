from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI(title="Sparcaine API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], 
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class ContactForm(BaseModel):
    name: str
    company: str
    email: str
    phone: str
    country: str
    message: str

@app.get("/")
def health_check():
    return {"status": "Sparcaine Backend is running."}

@app.post("/api/contact-backup")
def save_contact_backup(form_data: ContactForm):
    return {"message": "Lead received and backed up successfully."}
