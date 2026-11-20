import { useState } from "react";
import { Button, Glass, Input, Menu, SearchField, SegmentedControl, Slider, Switch, TabBar } from "glisse";
import { NoteIcon, PlusIcon } from "./icons";
import type { ThemeName } from "./App";

export function Gallery({ theme, onTheme }: { theme: ThemeName; onTheme: (theme: ThemeName) => void }) {
  const [textTab, setTextTab] = useState("queue");
  const [linkTab, setLinkTab] = useState("queue");
  const [sample, setSample] = useState("plan");
  const [live, setLive] = useState(40);

  return (
    <div className="screen">
      <div className="status">
        <span>9:41</span>
        <span className="battery" aria-hidden />
      </div>
      <h1>Components</h1>

      <h2 className="section">Appearance</h2>
      <div className="group">
        <div className="row static">
          <span>Dark</span>
          <Switch aria-label="Dark glass" checked={theme === "dark"} onCheckedChange={(on) => onTheme(on ? "dark" : "light")} />
        </div>
      </div>

      <h2 className="section">Buttons</h2>
      <div className="group pad">
        <div className="row wrap">
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
      </div>

      <h2 className="section">Search</h2>
      <SearchField aria-label="Search the library" placeholder="Search" className="field" />

      <h2 className="section">Text field</h2>
      <Input aria-label="Agent name" className="field" icon={<NoteIcon />} placeholder="Agent name" defaultValue="Cove" />
      <Input aria-label="Disabled note" className="field" placeholder="Disabled" disabled defaultValue="Locked" />

      <h2 className="section">Switches</h2>
      <div className="group">
        <div className="row static">
          <span>On</span>
          <Switch aria-label="Uncontrolled on" defaultChecked />
        </div>
        <div className="row static">
          <span>Off</span>
          <Switch aria-label="Uncontrolled off" />
        </div>
        <div className="row static">
          <span>Disabled</span>
          <Switch aria-label="Disabled off" disabled />
        </div>
        <div className="row static">
          <span>Disabled on</span>
          <Switch aria-label="Disabled on" disabled defaultChecked />
        </div>
      </div>

      <h2 className="section">Slider</h2>
      <div className="group">
        <div className="row static">
          <span>Lens sample</span>
          <strong>{live}</strong>
        </div>
        <div className="slider-pad">
          <Slider aria-label="Lens sample" value={live} onValueChange={setLive} />
        </div>
        <div className="slider-pad">
          <Slider aria-label="Disabled slider" defaultValue={20} disabled />
        </div>
      </div>

      <h2 className="section">Segments</h2>
      <div className="group pad">
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
      </div>

      <h2 className="section">Text tabs</h2>
      <div className="group pad">
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
      </div>

      <h2 className="section">Link tabs</h2>
      <div className="group pad">
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
      </div>

      <h2 className="section">Menu</h2>
      <div className="group pad">
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
      </div>

      <h2 className="section">Glass</h2>
      <p className="hint">A custom floating control. Not a list row.</p>
      <div className="glass-sample">
        <Glass className="float">Custom</Glass>
      </div>
    </div>
  );
}
