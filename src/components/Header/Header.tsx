import { MdPictureAsPdf } from "react-icons/md";
import { MdOutlineLightMode, MdDarkMode } from "react-icons/md";
import { HeaderStyle } from "./styles";
import { useEffect } from "react";

export const Header = () => {
  function HadleClickModethemeDark(): void {
    const dark = document.querySelector(".container-main");
    dark?.classList.add("dark");
    dark?.classList.remove("light");
    const deactivate = document.querySelector("#dark-mode");
    const deactivateBtncolorLight = document.querySelector("#light-mode");
    deactivate?.classList.add("dark-color");
    deactivateBtncolorLight?.classList.remove("light-color");
    const darkHeader = document.querySelector(".mode-theme-header");
    darkHeader?.classList.add("dark-header");
    darkHeader?.classList.remove("light-header");
  }

  function HadleClickModethemeLight(): void {
    const dark = document.querySelector(".container-main");
    dark?.classList.add("light");
    dark?.classList.remove("dark");
    const deactivate = document.querySelector("#light-mode");
    const deactivateBtncolorDark = document.querySelector("#dark-mode");
    deactivate?.classList.add("light-color");
    deactivateBtncolorDark?.classList.remove("dark-color");
    const darkHeader = document.querySelector(".mode-theme-header");
    darkHeader?.classList.add("light-header");
    darkHeader?.classList.remove("dark-header");
  }
  
  useEffect(() => {
    function initTheme(): void {
      HadleClickModethemeDark();
    }
    initTheme();
  },[]);

  return (
    <HeaderStyle>
      <div className="mode-theme-header">
        <ul>
          <MdPictureAsPdf />
          <li>
            <MdOutlineLightMode
              onClick={HadleClickModethemeLight}
              id="light-mode"
            />
            <MdDarkMode onClick={HadleClickModethemeDark} id="dark-mode" />
          </li>
        </ul>
      </div>
    </HeaderStyle>
  );
};
