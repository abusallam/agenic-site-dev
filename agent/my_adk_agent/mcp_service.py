"""
Mock MCP Service

This module provides a mock MCP service for the ADK Agent.
In a real-world scenario, this would make a request to the MCP server,
which in turn would trigger a workflow in n8n.
"""

def trigger_n8n_workflow(workflow_type: str, customer_requirements: dict) -> dict:
    """
    Simulates triggering an n8n workflow via MCP.

    In this mock version, it returns a dictionary with a dummy workflow ID
    and a success status.

    Args:
        workflow_type: The type of workflow to trigger (e.g., "simple_chatbot").
        customer_requirements: A dictionary containing the customer's requirements.

    Returns:
        A dictionary containing the workflow ID and status.
    """
    print(f"Triggering n8n workflow of type '{workflow_type}' with requirements: {customer_requirements}")
    result = {
        "workflow_id": f"n8n-workflow-{workflow_type}-12345",
        "status": "triggered",
    }
    return result
