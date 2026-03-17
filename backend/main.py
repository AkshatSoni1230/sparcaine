import os
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from dotenv import load_dotenv
from twilio.rest import Client
from twilio.base.exceptions import TwilioRestException

# Load environment variables from the .env file
load_dotenv()

app = FastAPI(title="Sparcaine API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173", "http://127.0.0.1:5173"], 
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

# Retrieve sensitive credentials
TWILIO_SID = os.getenv("TWILIO_ACCOUNT_SID")
TWILIO_TOKEN = os.getenv("TWILIO_AUTH_TOKEN")
TWILIO_NUMBER = os.getenv("TWILIO_WHATSAPP_NUMBER")
MY_NUMBER = os.getenv("MY_PERSONAL_WHATSAPP")

@app.get("/")
def health_check():
    return {"status": "Sparcaine Backend is running securely."}

@app.post("/api/contact")
def process_contact_form(form_data: ContactForm):
    # Format the message exactly how you want to read it on your phone
    message_body = (
        f"🚨 *New Sparcaine Lead* 🚨\n\n"
        f"👤 *Name:* {form_data.name}\n"
        f"🏢 *Company:* {form_data.company}\n"
        f"✉️ *Email:* {form_data.email}\n"
        f"📞 *Phone:* {form_data.phone}\n"
        f"🌍 *Country:* {form_data.country}\n"
        f"💬 *Message:* {form_data.message}"
    )

    try:
        # Initialize the Twilio client
        client = Client(TWILIO_SID, TWILIO_TOKEN)

        # Attempt to send the WhatsApp message
        message = client.messages.create(
            from_=TWILIO_NUMBER,
            body=message_body,
            to=MY_NUMBER
        )
        
        print(f"Success! Message sent with SID: {message.sid}")
        return {"status": "success", "message": "Lead processed and sent to WhatsApp."}

    except TwilioRestException as e:
        # If Twilio fails (bad keys, unregistered number, etc.), it loudly prints the error 
        # to your terminal and forces a 500 error back to React.
        print(f"❌ Twilio Error: {e.msg}")
        raise HTTPException(status_code=500, detail="Failed to send WhatsApp message via Twilio.")
    except Exception as e:
        # Catch-all for any other backend failures
        print(f"❌ System Error: {str(e)}")
        raise HTTPException(status_code=500, detail="Internal server error.")