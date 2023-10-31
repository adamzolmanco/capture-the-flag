import { useEffect, useRef, useState } from "react";

function Challenge() {
  var ranOnce = false;
  const interval = useRef();
  const [isLoading, setIsLoading] = useState(true);
  const [seeScript, setSeeScript] = useState(false);
  useEffect(() => {
    if (!ranOnce) {
      ranOnce = true;
      getSite();
    }
  }, []);

  const getSite = async () => {
    try {
      const siteCode = await fetch(
        "https://tns4lpgmziiypnxxzel5ss5nyu0nftol.lambda-url.us-east-1.on.aws/challenge"
      );

      let data;
      if (siteCode) {
        data = await siteCode.text();
        getCode(data);
      }
    } catch (err) {}
  };

  const getCode = (text) => {
    const doc = new DOMParser().parseFromString(text, "text/xml");
    let url = "";
    doc.getElementsByTagName("body")[0].childNodes.forEach((element) => {
      if (element.tagName === "code") {
        element.childNodes.forEach((valCode) => {
          if (valCode.tagName === "div") {
            valCode.childNodes.forEach((valDiv) => {
              if (valDiv.tagName === "span") {
                valDiv.childNodes.forEach((val) => {
                  if (val.tagName === "i") {
                    url += val.attributes["value"]?.nodeValue;
                  }
                });
              }
            });
          }
        });
      }
    });
    getFlag(url);
  };

  const getFlag = async (url) => {
    try {
      const siteCode = await fetch(url);

      let data;
      if (siteCode) {
        data = await siteCode.text();
        console.log(data);
        runAnimation(data);
      }
    } catch (err) {}
  };

  const runAnimation = (text) => {
    let counter = 0;
    const textArr = text.split("");
    const flagElement = document.getElementById("flag");
    setIsLoading(false);
    interval.current = setInterval(() => {
      if (counter >= textArr.length - 1) {
        clearInterval(interval.current);
      }
      const listItem = document.createElement("li");
      const div = document.createElement("div");
      div.style.display = "flex";
      const divLetter = document.createElement("div");
      const divValue = document.createElement("div");
      divLetter.innerText = textArr[counter];
      const letter = textArr[counter].toString();
      if (letter === "h") {
        divValue.innerText = "ighly";
      } else if (letter === "e") {
        divValue.innerText = "nergetic";
      } else if (letter === "r") {
        divValue.innerText = "escues";
      } else if (letter === "o") {
        divValue.innerText = "ften";
      } else if (letter === "i") {
        divValue.innerText = "nvoling";
      } else if (letter === "c") {
        divValue.innerText = "ape";
      } else if (letter === "s") {
        divValue.innerText = "uperheros";
      }

      divLetter.style.fontWeight = "800";
      div.appendChild(divLetter);
      div.appendChild(divValue);
      listItem.appendChild(div);
      flagElement.appendChild(div);
      counter++;
    }, 500);
  };

  return (
    <div>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <button
          style={{ maxWidth: "200px" }}
          onClick={() => {
            setSeeScript(!seeScript);
          }}
        >
          {seeScript ? "Close Script" : "See Script"}
        </button>
      )}
      <ul id="flag"></ul>
      {seeScript ? (
        <div
          style={{
            background: "black",
            width: "1200px",
            height: "400px",
            overflowY: "scroll",
            marginBottom: "15px",
          }}
        >
          {`var ranOnce = false;
  const interval = useRef();
  const [isLoading, setIsLoading] = useState(true);
  const [seeScript, setSeeScript] = useState(false);
  useEffect(() => {
    if (!ranOnce) {
      ranOnce = true;
      getSite();
    }
  }, []);

  const getSite = async () => {
    try {
      const siteCode = await fetch(
        "https://tns4lpgmziiypnxxzel5ss5nyu0nftol.lambda-url.us-east-1.on.aws/challenge"
      );

      let data;
      if (siteCode) {
        data = await siteCode.text();
        getCode(data);
      }
    } catch (err) {}
  };

  const getCode = (text) => {
    const doc = new DOMParser().parseFromString(text, "text/xml");
    let url = "";
    doc.getElementsByTagName("body")[0].childNodes.forEach((element) => {
      if (element.tagName === "code") {
        element.childNodes.forEach((valCode) => {
          if (valCode.tagName === "div") {
            valCode.childNodes.forEach((valDiv) => {
              if (valDiv.tagName === "span") {
                valDiv.childNodes.forEach((val) => {
                  if (val.tagName === "i") {
                    url += val.attributes["value"]?.nodeValue;
                  }
                });
              }
            });
          }
        });
      }
    });
    getFlag(url);
  };

  const getFlag = async (url) => {
    try {
      const siteCode = await fetch(url);

      let data;
      if (siteCode) {
        data = await siteCode.text();
        console.log(data);
        runAnimation(data);
      }
    } catch (err) {}
  };

  const runAnimation = (text) => {
    let counter = 0;
    const textArr = text.split("");
    const flagElement = document.getElementById("flag");
    setIsLoading(false);
    interval.current = setInterval(() => {
      if (counter >= textArr.length - 1) {
        clearInterval(interval.current);
      }
      const listItem = document.createElement("li");
      const div = document.createElement("div");
      div.style.display = "flex";
      const divLetter = document.createElement("div");
      const divValue = document.createElement("div");
      divLetter.innerText = textArr[counter];
      const letter = textArr[counter].toString();
      if (letter === "h") {
        divValue.innerText = "ighly";
      } else if (letter === "e") {
        divValue.innerText = "nergetic";
      } else if (letter === "r") {
        divValue.innerText = "escues";
      } else if (letter === "o") {
        divValue.innerText = "ften";
      } else if (letter === "i") {
        divValue.innerText = "nvoling";
      } else if (letter === "c") {
        divValue.innerText = "ape";
      } else if (letter === "s") {
        divValue.innerText = "uperheros";
      }

      divLetter.style.fontWeight = "800";
      div.appendChild(divLetter);
      div.appendChild(divValue);
      listItem.appendChild(div);
      flagElement.appendChild(div);
      counter++;
    }, 500);
  };`}
        </div>
      ) : null}
    </div>
  );
}

export default Challenge;
