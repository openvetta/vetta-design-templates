import { useState } from "react";
import { Button, Glass, Input, Menu, SearchField, SegmentedControl, Slider, Switch, TabBar } from "glisse";
import { NoteIcon, PlusIcon } from "./icons";
import type { ThemeName } from "./App";

export function Gallery({
  theme,
  onTheme,
}: {
  theme: ThemeName;
  onTheme: (theme: ThemeName) => void;
}) {
  const [textTab, setTextTab] = useState("queue");
  const [linkTab, setLinkTab] = useState("queue");
  const [sample, setSample] = useState("plan");
  const [live, setLive] = useState(40);

  return (
    <div className="gallery">
      <p className="kicker">Running glisse 0.6.0</p>
      <h2>Library</h2>
      <p className="sub">Every public component. The phone uses the same imports in a job desk, not a copy of this grid.</p>

      <Glass className="sheet block">
        <div className="grow">
          <span>Dark glass</span>
          <Switch
            aria-label="Dark glass"
            checked={theme === "dark"}
            onCheckedChange={(on) => onTheme(on ? "dark" : "light")}
          />
        </div>
      </Glass>

      <section className="spec">
        <h3>Button</h3>
        <div className="row">
          <Button>Hold</Button>
          <Button variant="filled">Continue</Button>
          <Button icon={<PlusIcon />}>Add job</Button>
          <Button icon={<PlusIcon />} aria-label="Add a job" />
          <Button destructive>Drop</Button>
          <Button variant="filled" destructive>
            Delete
          </Button>
          <Button variant="filled" tint="#7a4e12">
            Pin
          </Button>
          <Button disabled>Wait</Button>
          <Button variant="filled" disabled>
            Done
          </Button>
        </div>
      </section>

      <section className="spec">
        <h3>SearchField</h3>
        <SearchField aria-label="Search the library" placeholder="Search jobs" className="field" />
      </section>

      <section className="spec">
        <h3>Input</h3>
        <Input aria-label="Agent name" className="field" icon={<NoteIcon />} placeholder="Agent name" defaultValue="Cove" />
        <Input aria-label="Disabled note" className="field" placeholder="Disabled" disabled defaultValue="Locked" />
      </section>

      <section className="spec">
        <h3>Switch</h3>
        <div className="row">
          <Switch aria-label="Uncontrolled on" defaultChecked />
          <Switch aria-label="Uncontrolled off" />
          <Switch aria-label="Disabled off" disabled />
          <Switch aria-label="Disabled on" disabled defaultChecked />
        </div>
      </section>

      <section className="spec">
        <h3>Slider</h3>
        <div className="depth">
          <span>Lens sample</span>
          <strong>{live}</strong>
        </div>
        <Slider aria-label="Lens sample" value={live} onValueChange={setLive} />
        <Slider aria-label="Disabled slider" defaultValue={20} disabled />
      </section>

      <section className="spec">
        <h3>SegmentedControl</h3>
        <SegmentedControl
          aria-label="Sample section"
          value={sample}
          onValueChange={setSample}
          items={[
            { value: "plan", label: "Plan" },
            { value: "diff", label: "Diff" },
            { value: "notes", label: "Notes" },
          ]}
        />
      </section>

      <section className="spec">
        <h3>TabBar</h3>
        <TabBar
          aria-label="Text sections"
          value={textTab}
          onValueChange={setTextTab}
          items={[
            { value: "queue", label: "Queue" },
            { value: "job", label: "Job" },
            { value: "library", label: "Library" },
          ]}
        />
        <TabBar
          aria-label="Linked sections"
          value={linkTab}
          onValueChange={setLinkTab}
          items={[
            { value: "queue", label: "Queue", href: "#cove-queue" },
            { value: "job", label: "Job", href: "#cove-job" },
            { value: "library", label: "Library", href: "#cove-library" },
          ]}
        />
      </section>

      <section className="spec">
        <h3>Menu</h3>
        <Menu
          aria-label="Library actions"
          align="start"
          items={[
            { label: "Rename the desk", icon: <NoteIcon /> },
            { label: "Page the studio", disabled: true },
            "separator",
            { label: "Drop this job", destructive: true },
          ]}
        />
      </section>

      <section className="spec">
        <h3>Glass</h3>
        <Glass className="card sample-card">
          <p>A sheet island. Radius comes from the app. The frost and the rim come from Glass.</p>
        </Glass>
      </section>
    </div>
  );
}
