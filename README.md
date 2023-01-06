# Design Patterns

- [Design Patterns](#design-patterns)
  - [Patterns](#patterns)
  - [Principles](#principles)
    - [Encapsulate what varies](#encapsulate-what-varies)
    - [Favor composition over inheritance](#favor-composition-over-inheritance)
    - [Program to interface, not implementations](#program-to-interface-not-implementations)
    - [Loosely coupled designs between objects](#loosely-coupled-designs-between-objects)
    - [Open-Closed Priciple](#open-closed-priciple)


## Patterns

1. [Strategy Pattern](./01.%20Strategy%20Pattern/)
2. [Observer Pattern](./02.%20Observer%20Pattern/)
3. [Decorator Pattern](./03.%20Decorator%20Pattern/)

## Principles

### Encapsulate what varies
Whenever the changes arrive, we can change only those parts since it is encapsulated.  
For example, if we have to make a decision, we should encapsulate it so that any changes in the decision criteria don't affect the rest of the code.  

### Favor composition over inheritance
Instead of hiding `flying` and `quacking` logic in each type of `Duck` class, we extract them out for reuse and composition.  
Any class can now included these behaviors to reuse the code. It is also easier to add more behaviors.  

### Program to interface, not implementations
Implementation comes with the baggage of strictly being tied to the implementing class. With interface, we can change the behiour at run time.

### Loosely coupled designs between objects

Loosely couple designs allow us to build flexible OO systems that can handle changes because they minimize the interdependency between objects.

### Open-Closed Priciple

Classes should be open for extension, but closed for modification.  

We should try to design code in such a way that any further changes should be avoided in the existing classes.  
Whenever we need to make changes, we should try to do it via extending the existing code. For example, if we need to add more `flying` behaviors, or add more observers, we don't have to change the existing classes.  
Decorator Pattern also takes care of this very well.  

> We should not apply Open-Closed Principle in areas of code that needs to be extended. Applying the Open-Closed Priniciple EVERYWHERE is wasterful and unnecessary, and can lead to complex, hard-to-understand code.
