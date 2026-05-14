---
id: transformation-execution
title: Transformation and Execution
sidebar_position: 5
---

# 4. MDA Model Transformation and Execution

The "magic" of MDA lies in automating the transition from high-level stakeholder requirements to running systems.

## Approaches to Execution
There are two primary ways to move from a model to a running system:

1.  **Transformation:** Using a pattern to generate source code or schemas.
2.  **Model Execution:** Using an engine to interpret the model directly as "source code."

## The PIM to PSM Pattern
*   **PIM (Platform Independent Model):** Describes the "What" and "Why."
*   **PSM (Platform Specific Model):** Describes the "How" for a specific tech stack.
*   **Transformation Specs:** The rules that map the PIM to the PSM.

### Example: The `Person` Entity
Imagine a neutral PIM defining a `Person` with a `Name` and `Address`.
*   **Transformation A (Java):** Generates POJOs with Hibernate annotations.
*   **Transformation B (XML):** Generates an XSD schema.
*   **Transformation C (SQL):** Generates `CREATE TABLE` scripts.

## Benefits and Trade-offs
*   **Pros:** High stakeholder engagement (they can read the PIM), reusable transformations, and consistent, high-quality output.
*   **Cons:** Upfront investment is required to define or acquire transformation rules; stakeholders must learn to interpret business models.