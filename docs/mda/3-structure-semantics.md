---
id: structure-semantics
title: Structure and Semantics
sidebar_position: 3
---

# 2. The Structure and Semantics of Models

If models are the foundation of MDA, then **structure** (organization) and **semantics** (meaning) are the bedrock.

## From Whiteboard Sketches to Durable Knowledge
Informal sketches are useful for brainstorming, but they lack durability. A photo of a whiteboard is just a static image. MDA transforms these concepts into **semantic data**—the underlying facts behind the pictures.

Once captured as semantic data, you can:
*   Query and analyze the architecture.
*   Repurpose data for different views (e.g., a security view vs. a functional view).
*   Automatically derive code or tests.

:::note
**Semantics** refers to the precise meaning defined by MDA standards. This ensures that both humans and tools interpret the model the same way.
:::

## The Domain Subject Area
Models always describe a specific **Domain**—the slice of reality or business logic we are addressing.
*   **Broad Domains:** Healthcare, Telecommunications, Finance.
*   **Specific Domains:** A hospital's patient intake process or a specific warehouse's inventory logic.

## Viewpoints and Views
Stakeholders require different perspectives on the same domain.
*   **Viewpoint:** The set of rules or "lens" used to look at the system (e.g., a Security Viewpoint).
*   **View:** The actual representation created using that lens.

### Separation of Concerns
Separating these views allows specialists (e.g., security experts and database architects) to work in parallel without cluttering each other's workspaces.