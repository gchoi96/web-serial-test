import { useRef, useEffect } from "react";
import { Input } from "./App.styles";
import useSerialKeyboard from "./hooks/useKeyboard";
import Keyboard from "./components/Keyboard/Keyboard";
function App() {
  const { requestPort, port, log, press, release, keyStateMap } = useSerialKeyboard();
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [log]);

  const onKeyboard = async (e) => {
    const { code, type } = e;
    if (type === "keydown") press(code);
    else release(code);
    e.preventDefault();
  };

  const onFocus = (e) => {
    if (port.usbProductId) return;

    alert("포트를 선택해주세요");
    e.target.blur();
  };

  return (
    <div className="App">
      <div style={{display:"flex"}}>
        <div>
          <button onClick={requestPort}>포트 선택</button>
          <p>{`productId: ${port.usbProductId}`}</p>
          <p>{`vendorId: ${port.usbVendorId}`}</p>
        </div>
        <Input
          onFocus={onFocus}
          onKeyDown={onKeyboard}
          onKeyUp={onKeyboard}
          value="클릭 후 입력"
        ></Input>
      </div>
      <Keyboard keyStateMap={keyStateMap} />
    </div>
  );
}

export default App;
