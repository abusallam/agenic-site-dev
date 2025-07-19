"""
Mock Supabase Service

This module provides a mock Supabase service for the ADK Agent.
In a real-world scenario, this would use the Supabase Python client
to interact with the database.
"""

def save_customer_data(customer_data: dict) -> dict:
    """
    Simulates saving customer data to Supabase.

    In this mock version, it returns a dictionary with a dummy customer ID
    and a success status.

    Args:
        customer_data: A dictionary containing the customer's data.

    Returns:
        A dictionary containing the new customer ID and status.
    """
    print(f"Saving customer data to Supabase: {customer_data}")
    result = {
        "customer_id": f"supa-customer-{hash(str(customer_data))}",
        "status": "saved",
    }
    return result

def save_service_details(customer_id: str, service_details: dict) -> dict:
    """
    Simulates saving service details for a customer to Supabase.

    Args:
        customer_id: The ID of the customer.
        service_details: A dictionary containing the details of the provisioned service.

    Returns:
        A dictionary containing the service ID and status.
    """
    print(f"Saving service details for customer {customer_id}: {service_details}")
    result = {
        "service_id": f"supa-service-{hash(str(service_details))}",
        "status": "saved",
    }
    return result
