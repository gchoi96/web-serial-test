import { useState, useCallback } from "react";
import useSerial from "./useSerial";
import keyMap from "../core/keyMap";
import { convertDateToLogFormat } from "../utils/stringUtil";

const useSerialKeyboard = (logging = true) => {
  const [log, setLog] = useState([]);
  const { port, requestPort, write, encoder } = useSerial({ baudRate: 115200 });
  const [keyStateMap, setKeyStateMap] = useState(
    Object.keys(keyMap).reduce((acc, cur) => {
      acc[cur] = false;
      return acc;
    }, {})
  );

  const sendKeyEvent = useCallback(
    async (isPressed, code) => {
      const data = encoder.encode(keyMap[code] + (isPressed ? "d" : "u"));
      await write(data);
      if (!logging) return;
      setLog((prev) => [
        ...prev,
        `[${convertDateToLogFormat()}] : ${isPressed ? "press" : "release"} ${code}`,
      ]);
    },
    [encoder, logging, write]
  );

  const press = useCallback(
    async (code) => {
      sendKeyEvent(true, code);
      setKeyStateMap((prev) => ({ ...prev, [code]: true }));
    },
    [sendKeyEvent]
  );

  const release = useCallback(
    async (code) => {
      sendKeyEvent(false, code);
      setKeyStateMap((prev) => ({ ...prev, [code]: false }));
    },
    [sendKeyEvent]
  );

  return { requestPort, port, log, press, release, keyStateMap };
};

export default useSerialKeyboard;
