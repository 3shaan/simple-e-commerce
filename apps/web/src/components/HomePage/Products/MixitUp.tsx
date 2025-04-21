import mixitup from "mixitup";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    mixitup(".items", {
      selectors: {
        target: ".item",
      },
      animation: {
        duration: 600,
      },
    });
  }, []);

  return (
    <div className="">
      {/* <div className=" flex gap-2">
        <button type="button" data-filter="all">
          All
        </button>
        <button type="button" data-filter=".fruit">
          Fruits
        </button>
        <button type="button" data-filter=".vegetable">
          Vegetables
        </button>
        <button type="button" data-filter=".dairy">
          Dairy
        </button>
      </div>
      <div className="items">
        <div className="item fruit">Apple</div>
        <div className="item fruit">Banana</div>
        <div className="item vegetable">Carrot</div>
        <div className="item vegetable">Broccoli</div>
        <div className="item dairy">Milk</div>
        <div className="item dairy">Cheese</div>
        <div className="item fruit">Orange</div>
        <div className="vegetable">Spinach</div>
      </div> */}
    </div>
  );
}

export default App;
