"""
Core Google ADK Agent Logic

This module contains the main orchestration logic for the ADK Agent.
It handles the end-to-end process of a new customer request.
"""

from . import auth_service, livekit_service, mcp_service, supabase_service

def handle_new_customer_request(customer_requirements: dict) -> dict:
    """
    Handles a new customer request by orchestrating calls to various services.

    Args:
        customer_requirements: A dictionary containing the customer's initial
                               requirements and contact info.

    Returns:
        A dictionary containing the result of the process.
    """
    print("--- Starting new customer request ---")

    # 1. Authenticate the user
    user_identifier = customer_requirements.get("contact")
    otp = customer_requirements.get("otp")
    if not auth_service.authenticate_user(user_identifier, otp):
        print("Authentication failed.")
        return {"status": "error", "message": "Authentication failed"}
    print("User authenticated successfully.")

    # 2. Create a Livekit session for requirement gathering
    livekit_session = livekit_service.create_livekit_session(user_identifier)
    print(f"Livekit session created: {livekit_session}")

    # 3. Determine the service type (MVP: default to simple_chatbot)
    service_type = "simple_chatbot"
    print(f"Service type determined: {service_type}")

    # 4. Save initial customer data to Supabase
    customer_data = {"contact": user_identifier, "requirements": customer_requirements}
    db_customer = supabase_service.save_customer_data(customer_data)
    customer_id = db_customer.get("customer_id")
    print(f"Customer data saved with ID: {customer_id}")

    # 5. Trigger n8n workflow via MCP
    n8n_result = mcp_service.trigger_n8n_workflow(service_type, customer_requirements)
    print(f"n8n workflow triggered: {n8n_result}")

    # 6. Save service details to Supabase
    service_details = {
        "type": service_type,
        "n8n_workflow_id": n8n_result.get("workflow_id"),
        "livekit_room": livekit_session.get("room_name"),
    }
    db_service = supabase_service.save_service_details(customer_id, service_details)
    print(f"Service details saved: {db_service}")

    print("--- New customer request handled successfully ---")

    return {
        "status": "success",
        "customer_id": customer_id,
        "service_id": db_service.get("service_id"),
        "livekit_session": livekit_session,
    }
