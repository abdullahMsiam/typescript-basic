# Why Are Type Guards Necessary?

**Discuss Various Types of Type Guards and Their Use Cases**

TypeScript's static typing system helps developers ensure the safety and correctness of code by catching errors during compile-time. However, in certain situations, TypeScript may not be able to infer the exact type of a variable, especially when working with union types, object properties, or external inputs. This is where **Type Guards** become necessary.

In this guide, we will discuss what type guards are, why they are necessary, and explore different types of type guards available in TypeScript.

---

## Table of Contents

- [What Are Type Guards?](#what-are-type-guards)
- [Why Are Type Guards Necessary?](#why-are-type-guards-necessary)
- [Types of Type Guards](#types-of-type-guards)
  - [1. `typeof` Type Guard](#typeof-type-guard)
  - [2. `instanceof` Type Guard](#instanceof-type-guard)
  - [3. User-defined Type Guards](#user-defined-type-guards)
- [Use Cases of Type Guards](#use-cases-of-type-guards)
- [Conclusion](#conclusion)

---

## What Are Type Guards?

A **Type Guard** is a TypeScript feature that narrows the type of a variable within a certain block of code. They allow the developer to perform type checking and then refine the variable's type, helping TypeScript's type system infer the correct type at runtime.

Type Guards are useful when working with union types or when you need to ensure that a variable is of a specific type before performing operations on it.

---

## Why Are Type Guards Necessary?

TypeScript's type system is powerful, but there are situations where TypeScript's type inference is not sufficient. This can occur in cases like:

- **Union Types**: When a variable can be of multiple types, TypeScript might not know which type you're working with.
- **External Inputs**: When you get data from an external source (like a user input or API response), TypeScript doesn't know the exact structure or type of the data.
- **Narrowing Types**: To access properties or methods specific to a certain type, you need to narrow down the type of a variable.

Without type guards, TypeScript might not allow you to access specific properties or methods on an object if it can't guarantee that the object has the correct type. Type Guards provide a mechanism to help TypeScript identify the type more accurately.

---

## Types of Type Guards

### 1. `typeof` Type Guard

The `typeof` operator in TypeScript can be used to narrow types when you're working with primitive types (like `string`, `number`, `boolean`, etc.).

#### Example:

```typescript
function isString(value: string | number): boolean {
  if (typeof value === "string") {
    console.log(value.toUpperCase()); // TypeScript knows 'value' is a string here
    return true;
  }
  return false;
}
```
