import { KeyS, KeyM, KeyL, KeyXL, KeyXXL, Row } from "./Keyboard.styles";

function Keyboard({ keyStateMap }) {
  return (
    <div>
      <div>
        <Row>
          <KeyS isPressed={keyStateMap.Escape}>ESC</KeyS>
          {new Array(9).fill(null).map((_, idx) => (
            <KeyS isPressed={keyStateMap[`F${idx}`]} key={`F${idx}`}>
              F{idx + 1}
            </KeyS>
          ))}
          <KeyS isPressed={keyStateMap.F10}>F10</KeyS>
          <KeyS />
          <KeyS />
          <KeyS />
          <KeyS />
          <KeyS />
        </Row>
        <Row>
          <KeyS isPressed={keyStateMap.Backquote}>{"`~"}</KeyS>
          {new Array(9).fill(null).map((_, idx) => (
            <KeyS isPressed={keyStateMap[`Digit${idx + 1}`]} key={`${idx + 1}`}>
              {idx + 1}
            </KeyS>
          ))}
          <KeyS isPressed={keyStateMap.Digit0}>0</KeyS>
          <KeyS isPressed={keyStateMap.Minus}>-_</KeyS>
          <KeyS isPressed={keyStateMap.Equal}>=+</KeyS>
          <KeyL isPressed={keyStateMap.Backspace}>backspace</KeyL>
          <KeyS isPressed={keyStateMap.Delete}>Del</KeyS>
          <KeyS isPressed={keyStateMap.Insert}>Ins</KeyS>
        </Row>
        <Row>
          <KeyM isPressed={keyStateMap.Tab}>Tab</KeyM>
          {["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"].map((el) => (
            <KeyS isPressed={keyStateMap[`Key${el}`]} key={el}>
              {el}
            </KeyS>
          ))}
          <KeyS isPressed={keyStateMap.BracketLeft}>[</KeyS>
          <KeyS isPressed={keyStateMap.BracketRight}>]</KeyS>
          <KeyM isPressed={keyStateMap.Backslash}>\</KeyM>
          <KeyS isPressed={keyStateMap.Home}>Hm</KeyS>
          <KeyS isPressed={keyStateMap.End}>End</KeyS>
        </Row>
        <Row>
          <KeyL isPressed={keyStateMap.CapsLock}>Caps Lock</KeyL>
          {["A", "S", "D", "F", "G", "H", "J", "K", "L"].map((el) => (
            <KeyS isPressed={keyStateMap[`Key${el}`]} key={el}>
              {el}
            </KeyS>
          ))}
          <KeyS isPressed={keyStateMap.Semicolon}>;</KeyS>
          <KeyS isPressed={keyStateMap.Quote}>'</KeyS>
          <KeyL isPressed={keyStateMap.Enter}>ENTER</KeyL>
          <KeyS isPressed={keyStateMap.PageUp}>PgUp</KeyS>
        </Row>
        <Row>
          <KeyXL isPressed={keyStateMap.ShiftLeft}>Shift</KeyXL>
          {["Z", "X", "C", "V", "B", "N", "M"].map((el) => (
            <KeyS isPressed={keyStateMap[`Key${el}`]} key={el}>
              {el}
            </KeyS>
          ))}
          <KeyS isPressed={keyStateMap.Comma}>,</KeyS>
          <KeyS isPressed={keyStateMap.Period}>.</KeyS>
          <KeyS isPressed={keyStateMap.Slash}>/</KeyS>
          <KeyM isPressed={keyStateMap.ShiftRight}>Shift</KeyM>
          <KeyS isPressed={keyStateMap.ArrowUp}>↑</KeyS>
          <KeyS isPressed={keyStateMap.PageDown}>PgDn</KeyS>
        </Row>
        <Row>
          <KeyS isPressed={keyStateMap.ControlLeft}>Ctrl</KeyS>
          <KeyS isPressed={keyStateMap.MetaLeft}>Win</KeyS>
          <KeyS isPressed={keyStateMap.AltLeft}>Alt</KeyS>
          <KeyXXL isPressed={keyStateMap.Space}>Space</KeyXXL>
          <KeyS isPressed={keyStateMap.MetaRight}>한/영</KeyS>
          <KeyS/>
          <KeyS isPressed={keyStateMap.ArrowLeft}>←</KeyS>
          <KeyS isPressed={keyStateMap.ArrowDown}>↓</KeyS>
          <KeyS isPressed={keyStateMap.ArrowRight}>→</KeyS>
        </Row>
      </div>
    </div>
  );
}

export default Keyboard;
