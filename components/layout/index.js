import Header from "./Header";
import useScript from "../../hooks/useScript";
import { scriptUrls } from "../../utils/constants";

export default function index({ children }) {
  // Load ionicon scripts
  useScript(scriptUrls.ioniconsUrl);

  return (
    <>
      <Header />

      <div className="container">{children}</div>
    </>
  );
}
