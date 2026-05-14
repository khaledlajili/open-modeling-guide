---
id: basic-concepts
title: Basic Concepts
sidebar_position: 4
---

# 3. Basic Concepts of MDA

Understanding MDA requires a firm grasp of its core terminology.

### System
A collection of components and relationships organized for a purpose. In MDA, "System" is inclusive of software, hardware, people, and business processes.

### Model
A selective representation of a system. A valid MDA model includes:
*   In-scope information.
*   **Integrity rules** (constraints).
*   Defined **meanings** for all terms.

### Modeling Language
The medium used to express the model. It defines the syntax (notations), semantics (meanings), and integrity rules. Examples include UML, BPMN, and SQL DDL. A **metamodel** is a model that defines the modeling language itself.

### Architecture
1.  **(Noun):** The set of models representing the system.
2.  **(Verb):** The activity of creating and managing those models.

### Abstraction
The process of focusing on essential concepts while hiding irrelevant details.
*   **Abstract:** High-level, tech-neutral (e.g., "A way to identify a user").
*   **Concrete:** Low-level, tech-specific (e.g., "A 256-bit OAuth2 JWT").

### Architectural Layers
MDA categorizes models into three primary layers of abstraction:

| Layer | Technical Term | Description |
| :--- | :--- | :--- |
| **Business / Domain** | **CIM** | Computation Independent Model: Real-world rules and people. |
| **Logical System** | **PIM** | Platform Independent Model: System interactions without tech specifics. |
| **Implementation** | **PSM** | Platform Specific Model: Design tied to a specific technology (Java, .NET, etc.). |

### Transformation
The process of generating one model or artifact from another using defined patterns.
*   **Forward Engineering:** Moving from Abstract (PIM) to Concrete (PSM/Code).
*   **Reverse Engineering:** Moving from Concrete (Code) to Abstract (Models).

### Platform
The environment where the system runs. This can be a **Business Platform** (organizational structure) or a **Technology Platform** (Cloud providers, OSGi, Spring Boot).