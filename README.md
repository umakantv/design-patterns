# Design Patterns

## Principles

### Encapsulate what varies
Whenever the changes arrive, we can change only those parts since it is encapsulated.  
For example, if we have to make a decision, we should encapsulate it so that any changes in the decision criteria don't affect the rest of the code.  

### Favor composition over inheritance
Instead of hiding `flying` and `quacking` logic in each type of `Duck` class, we extract them out for reuse and composition.  
Any class can now included these behaviors to reuse the code. It is also easier to add more behaviors.  

### Program to interface, not implementations
Implementation comes with the baggage of strictly being tied to the implementing class. With interface, we can change the behiour at run time.

## Patterns

1. [Strategy Pattern](./01.%20Strategy%20Pattern/README.md)