# Ticket Breakdown

We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**

Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".

You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here

# 1. Add a new column to the Agents table to store the custom id

- **Acceptance Criteria**
  - The new column is nullable
  - The new column is a string following a pattern that is defined by the Facility
  - The custom id must be unique for each Agent
  - The new column is named `custom_id`
- **Time Estimate**
  - 30 minutes
- **Implementation Details**

  - Add a new migration to the database to add the new column to the Agents table
  - Update the `Agent` model to include the new column
  - Run the migration

  # 2. Add custom ID to existing Agents

- **Acceptance Criteria**
- Every existing Agent need to have a custom id
- The custom id must be unique for each Agent
- The custom id must follow the pattern defined by the Facility
- **Time Estimate**
  - 45 minutes
- **Implementation Details**
  - Write a script to generate a custom id for each Agent based on the Facility's pattern
  - Write a script to update the database with the new custom id

# 3. Add the ability to set the custom id when creating an Agent

- **Acceptance Criteria**
  - The custom id can be set when creating an Agent on the UI
  - The custom id must be required when creating an Agent on the UI
  - A validation error is shown if the custom id is not unique
  - A validation error is shown if the custom id does not match the pattern
  - A new text input is added to the Agent creation form
  - The new text input is required
  - The new text input is labeled "Custom ID"
  - The new text input is named "custom_id"
  - The new text input is validated using the same rules as the database
- **Time Estimate**

  - 2 hours

- **Implementation Details**
  - Make sure to use a text input
  - Make sure the design matches the rest of the app
  - Make sure to use the same validation rules as the database

# 4. Add the ability to set the custom id when updating an Agent

- **Acceptance Criteria**

  - When updating an Agent, the custom id can be set on the UI
  - When updating an Agent, the custom id must be required on the UI
  - When updating an Agent, a validation error is shown if the custom id is not unique
  - When updating an Agent, a validation error is shown if the custom id does not match the pattern

- **Time Estimate**
  - 1 hour
- **Implementation Details**

# 5. Custom ID must be shown when generating a report

- **Acceptance Criteria**

  - The custom id must be shown on the report
  - The custom id must be shown in the same place as the internal id
  - The custom id must be shown in the same format as the internal id
  - The custom id must be shown instead of the internal id

- **Time Estimate**
  - 1 hour
- **Implementation Details**
  - Update the `generateReport` function to use the custom id instead of the internal id
