import React, { useState } from "react";
import ActionButton from "./component/ActionButton/ActionButton";
import { themeType } from "./config/const";
import { currentDate } from "./config/utils";
import { useStyles } from "./AppStyle";
import { ThemeContext } from "./theme/ThemeProvider";

interface rightPartProps {
  date: string;
  des: string;
}

function App() {
  const classes = useStyles();
  const [des, setDes] = useState("");
  const [btnIdxs, setBtnIdxArray] = useState<number[]>([0]);
  const [rightMsg, setRightMsg] = useState<rightPartProps[]>([]);

  const curThemeName = localStorage.getItem("appTheme") || themeType.light;
  const setThemeName = React.useContext(ThemeContext);
  const [theme, setTheme] = useState(curThemeName);

  const addMessageHistory = (des: string) => {
    setRightMsg((prevMsgs) => [
      ...prevMsgs,
      {
        date: currentDate(),
        des: des,
      },
    ]);
  };

  const handleToggle = () => {
    if (theme === themeType.light) {
      setThemeName(themeType.dark);
      setTheme(themeType.dark);
      addMessageHistory("Theme was set to dark");
    } else {
      setThemeName(themeType.light);
      setTheme(themeType.light);
      addMessageHistory("Theme was set to dark");
    }
  };

  const handleMsgSend = () => {
    addMessageHistory(`Message Sent: ${des}`);
    setDes("");
  };

  const handleDes = (e: any) => {
    setDes(e.target.value);
  };

  const addBtnIdxs = (idx: number) => {
    if (idx + 1 < btnIdxs.length) {
      addMessageHistory(`Button ${idx + 1} clicked`);
    } else {
      setBtnIdxArray((prevState) => {
        return [...prevState, idx + 1];
      });
      addMessageHistory(`Button ${idx + 2} added`);
    }
  };

  return (
    <div className={classes.root}>
      <div className={classes.left}>
        <div className={classes.firstPart}>
          <ActionButton
            action={handleToggle}
            content={`Set ${
              theme === themeType.light ? "Dark" : "Light"
            } Theme`}
            className={classes.topBtn}
          />
        </div>
        <div className={classes.secondPart}>
          <textarea
            value={des}
            className={classes.descriptionTextField}
            aria-label="maximum height"
            placeholder="Some Description"
            onChange={(e) => {
              handleDes(e);
            }}
          />
          <ActionButton
            action={handleMsgSend}
            content="Send"
            className={classes.sendBtn}
            disable={des.length === 0}
          />
        </div>
        <div className={classes.thirdPart}>
          {btnIdxs.map((idx) => (
            <ActionButton
              key={idx}
              action={() => addBtnIdxs(idx)}
              content={`Button ${idx + 1}`}
              className={classes.increaseBtn}
            />
          ))}
        </div>
      </div>
      <div className={classes.right}>
        {rightMsg.map((item: rightPartProps, index) => {
          return (
            <div key={index} className={classes.item}>
              <span className={classes.msgDate}>{item.date}</span>
              <span className={classes.msgDes}>{item.des}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
