import { useState } from "react";
import { TabBar } from "glisse";
import { Gallery } from "./gallery";
import { JobIcon, LibraryIcon, QueueIcon } from "./icons";
import { Job, Queue } from "./screens";
import "./app.css";

export type TabId = "queue" | "job" | "library";
export type JobId = "notes" | "guide" | "photos";
export type ThemeName = "light" | "dark";

export function App() {
  const [tab, setTab] = useState<TabId>("queue");
  const [theme, setTheme] = useState<ThemeName>("light");
  const [jobId, setJobId] = useState<JobId>("notes");

  return (
    <div className="app" data-theme={theme}>
      <div className="column" data-testid="phone">
        <div className="scroll" data-glisse-backdrop>
          {tab === "queue" ? (
            <Queue
              onOpen={(id) => {
                setJobId(id);
                setTab("job");
              }}
            />
          ) : null}
          {tab === "job" ? <Job jobId={jobId} onBack={() => setTab("queue")} /> : null}
          {tab === "library" ? (
            <div id="cove-library">
              <Gallery theme={theme} onTheme={setTheme} />
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
          <div className="home" aria-hidden />
        </div>
      </div>
    </div>
  );
}
