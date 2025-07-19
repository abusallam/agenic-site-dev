"""
ADK Agent Package

This module defines the agent and its tools for the ADK evaluation framework.
"""

import json
from google.adk.agents.base_agent import BaseAgent
from google.adk.tools.function_tool import FunctionTool
from google.genai.types import Content, Part
from . import agent_logic

# Create a tool by wrapping the existing function.
# The ADK will automatically generate the name, description, and schema
# from the function's definition and docstring.
new_customer_tool = FunctionTool(agent_logic.handle_new_customer_request)

class RootAgent(BaseAgent):
    """The root agent for our application."""

    def __init__(self):
        # Initialize the agent with a name, description, and the tool.
        super().__init__(
            name="my_adk_agent",
            description="An agent for handling new customer requests.",
            sub_agents=[new_customer_tool]
        )

# Instantiate the agent for the ADK to discover.
agent = RootAgent()
