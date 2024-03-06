import Button from "./Button";

import { GoDatabase, GoCloud, GoBellFill } from "react-icons/go";

function App() {
  return (
    <div>
      <div>
        <Button success rounded outline>
          <GoBellFill /> Click me!!
        </Button>
      </div>
      <div>
        <Button danger outline>
          <GoCloud /> Buy now!
        </Button>
      </div>
      <div>
        <Button warning>
          <GoDatabase /> See deal!
        </Button>
      </div>
      <div>
        <Button secondary outline>
          Hide Ads
        </Button>
      </div>
      <div>
        <Button primary rounded>
          Something
        </Button>
      </div>
    </div>
  );
}

export default App;
