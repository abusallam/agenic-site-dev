"""
Mock Authentication Service

This module provides a mock authentication service for the ADK Agent.
In a real-world scenario, this would integrate with an actual authentication
provider (e.g., via SMS, email, or WhatsApp).
"""

def authenticate_user(user_identifier: str, otp: str) -> bool:
    """
    Simulates user authentication.

    In this mock version, it always returns True to simulate a successful
    authentication, regardless of the input.

    Args:
        user_identifier: The user's identifier (e.g., phone number, email).
        otp: The one-time password provided by the user.

    Returns:
        True if authentication is successful, False otherwise.
    """
    print(f"Attempting to authenticate user: {user_identifier}")
    # In a real implementation, you would verify the OTP here.
    # For this mock service, we will always consider it successful.
    return True
