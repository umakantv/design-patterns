
# Command Pattern

Command Patterns encapsulate a request as an object, thereby letting you parameterize other objects with different requests, queue or log requests, and support undoable operations.  

It enables us to decouple the operation being performed from the invoker and the client.

| Component | Role 
| - | -
| Receiver | action()
| Command | execute() & undo()
| Invoker | setCommand()
| Client | createCommand()



<script src="https://utteranc.es/client.js"
  repo="umakantv/design-patterns"
  issue-term="pathname"
  label="Comment"
  theme="preferred-color-scheme"
  crossorigin="anonymous"
  async>
</script>