import { useEffect, useState } from "react";
import { TabBar } from "glisse";
import { Gallery } from "./gallery";
import { JobIcon, LibraryIcon, QueueIcon } from "./icons";
import { Job, Queue } from "./screens";
import "./app.css";

export type TabId = "queue" | "job" | "library";
export type JobId = "notes" | "guide" | "photos";
export type ThemeName = "light" | "dark";

function useWide() {
  const [wide, setWide] = useState(() => window.matchMedia("(min-width: 1100px)").matches);
  useEffect(() => {
    const query = window.matchMedia("(min-width: 1100px)");
    const onChange = () => setWide(query.matches);
    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, []);
  return wide;
}

export function App() {
  const wide = useWide();
  const [tab, setTab] = useState<TabId>("queue");
  const [theme, setTheme] = useState<ThemeName>("light");
  const [jobId, setJobId] = useState<JobId>("notes");

  return (
    <div className="app" data-theme={theme}>
      <div className="scene" data-glisse-backdrop aria-hidden>
        <div className="sky" />
        <div className="sun" />
        <div className="hill hill-a" />
        <div className="hill hill-b" />
        <div className="water" />
      </div>
      <div className="layout">
        <div className="phone" id="cove-queue" data-testid="phone">
          <div className="bezel">
            <div className="scroll">
              {tab === "queue" ? (
                <Queue
                  onOpen={(id) => {
                    setJobId(id);
                    setTab("job");
                  }}
                />
              ) : null}
              {tab === "job" ? (
                <div id="cove-job">
                  <Job jobId={jobId} />
                </div>
              ) : null}
              {tab === "library" ? (
                <div id={wide ? undefined : "cove-library"}>
                  {wide ? (
                    <div className="screen">
                      <h1 className="job-title">Library</h1>
                      <p className="sub">The column beside the phone mounts every glisse component.</p>
                    </div>
                  ) : (
                    <Gallery theme={theme} onTheme={setTheme} />
                  )}
                </div>
              ) : null}
            </div>
            <div className="dock">
              <TabBar
                aria-label="Cove"
                value={tab}
                onValueChange={(value) => setTab(value as TabId)}
                items={[
                  { value: "queue", label: "Queue", icon: <QueueIcon /> },
                  { value: "job", label: "Job", icon: <JobIcon /> },
                  { value: "library", label: "Library", icon: <LibraryIcon /> },
                ]}
              />
            </div>
            <div className="home" aria-hidden />
          </div>
        </div>
        {wide ? (
          <aside className="side" id="cove-library" data-testid="gallery">
            <Gallery theme={theme} onTheme={setTheme} />
          </aside>
        ) : null}
      </div>
    </div>
  );
}
