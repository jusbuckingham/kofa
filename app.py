import streamlit as st
from api.ballotpedia import get_candidates_by_criteria
from utils.visualizations import display_candidate_info
from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv()

def main():
    st.title("Voter Preferences Analysis")

    # Create a text input widget for user to enter search criteria
    criteria = st.text_input("Enter criteria (e.g., 'affirmative action')")

    if criteria:
        # Fetch candidates based on the entered criteria
        candidates = get_candidates_by_criteria(criteria)
        
        # Check if candidates are found
        if candidates:
            # Display information for each candidate
            for candidate in candidates:
                display_candidate_info(candidate)
        else:
            # Show a message if no candidates are found
            st.write("No candidates found for the given criteria.")

if __name__ == "__main__":
    main()
