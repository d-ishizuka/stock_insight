# stock_insight

## How to Debug React/Django Connection
- Add ```import pdb``` and ```pdb.set_trace()```
- Request from Frontend(React) -> then debugger stops code processing
- Command ```docker ps``` and check backend container_id
- Command ```docker attach ${container_id}```
- Then, pdb console starts and you can check variables and functions

※ NOTE : Confirm ```tty: true``` and ```stdin_open: true```
