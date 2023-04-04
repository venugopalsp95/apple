import DisplaySection from "./components/DisplaySection";
import Jumbortron from "./components/Jumbortron";
import Nav from "./components/Nav";
import SoundSection from "./components/SoundSection";
import WebgiViewer from "./components/WebgiViewer";
import { useRef } from "react";
import Loader from "./components/Loader";

function App() {
  const webgiViewerRef = useRef();
  const contentRef = useRef();

  const handlePreview = () => {
    webgiViewerRef.current.triggerPreview();
  }

  return (
    <div className="App">
      <Loader/>
      <div ref={contentRef} id="content">
        <Nav />
        <Jumbortron />
        <SoundSection />
        <DisplaySection triggerPreview={handlePreview} />

      </div>
      <WebgiViewer contentRef={contentRef} ref={webgiViewerRef} />
    </div>
  );
}

export default App;
