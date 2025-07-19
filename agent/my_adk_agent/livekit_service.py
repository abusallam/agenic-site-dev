"""
Mock Livekit Service

This module provides a mock Livekit service for the ADK Agent.
In a real-world scenario, this would integrate with the Livekit API
to create rooms and generate access tokens.
"""

import uuid

def create_livekit_session(user_id: str) -> dict:
    """
    Simulates the creation of a Livekit session.

    In this mock version, it returns a dictionary with a dummy room name
    and access token.

    Args:
        user_id: The ID of the user for whom the session is being created.

    Returns:
        A dictionary containing the Livekit room name and access token.
    """
    print(f"Creating Livekit session for user: {user_id}")
    session_details = {
        "room_name": f"livekit-room-{user_id}-{uuid.uuid4()}",
        "access_token": f"dummy-livekit-token-{uuid.uuid4()}",
    }
    return session_details
