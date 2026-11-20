import { useState } from "react";
import { Button, Input, Menu, SearchField, SegmentedControl, Slider, Switch } from "glisse";
import type { JobId } from "./App";
import { BackIcon, NoteIcon } from "./icons";

const JOBS: { id: JobId; title: string; state: string; detail: string; section: "now" | "later" }[] = [
  { id: "notes", title: "Tighten the release notes", state: "Needs you", detail: "notes.md · 2 files", section: "now" },
  { id: "guide", title: "Rebase the field guide", state: "Running", detail: "4 commits behind", section: "later" },
  { id: "photos", title: "Caption the dock photos", state: "Queued", detail: "18 images", section: "later" },
];

function Chevron() {
  return (
    <svg className="chevron" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
      <path d="M4.2 2.4 8 6 4.2 9.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function Queue({ onOpen }: { onOpen: (id: JobId) => void }) {
  const [query, setQuery] = useState("");
  const [notice, setNotice] = useState("");
  const shown = JOBS.filter((job) => job.title.toLowerCase().includes(query.trim().toLowerCase()));
  const now = shown.filter((job) => job.section === "now");
  const later = shown.filter((job) => job.section === "later");

  const group = (jobs: typeof JOBS) => (
    <div className="group">
      {jobs.map((job) => (
        <button key={job.id} type="button" className="row" onClick={() => onOpen(job.id)}>
          <span className="row-copy">
            <b>{job.title}</b>
            <span>{job.detail}</span>
          </span>
          <Chevron />
        </button>
      ))}
    </div>
  );

  return (
    <div className="screen" id="cove-queue">
      <div className="status">
        <span>9:41</span>
        <span className="battery" aria-hidden />
      </div>
      <div className="bar trail">
        <Menu
          aria-label="Job actions"
          align="end"
          items={[
            { label: "Hold for later", onSelect: () => setNotice("Held for later") },
            { label: "Page the studio", disabled: true },
            "separator",
            { label: "Drop this job", destructive: true, onSelect: () => setNotice("Job dropped") },
          ]}
        />
      </div>
      <h1>Today</h1>
      <p className="sub" data-testid="menu-status">
        {notice || "studio-mac"}
      </p>
      <SearchField aria-label="Search jobs" placeholder="Search" value={query} onValueChange={setQuery} className="field" />
      {now.length > 0 ? (
        <>
          <h2 className="section">Needs you</h2>
          {group(now)}
        </>
      ) : null}
      {later.length > 0 ? (
        <>
          <h2 className="section">On the desk</h2>
          {group(later)}
        </>
      ) : null}
      {shown.length === 0 ? <p className="empty">No job matches.</p> : null}
    </div>
  );
}

export function Job({ jobId, onBack }: { jobId: JobId; onBack: () => void }) {
  const job = JOBS.find((item) => item.id === jobId) ?? JOBS[0];
  const [section, setSection] = useState("plan");
  const [shell, setShell] = useState(true);
  const [ask, setAsk] = useState(false);
  const [depth, setDepth] = useState(2);
  const [note, setNote] = useState("");
  const [sent, setSent] = useState("");
  const copy =
    section === "plan"
      ? "Shorten the opening, keep the install steps, and drop the changelog slogan."
      : section === "diff"
        ? "notes.md lost two adjectives. changelog.md is untouched."
        : `${job.detail}. The agent is waiting on this Mac.`;

  return (
    <div className="screen" id="cove-job">
      <div className="status">
        <span>9:41</span>
        <span className="battery" aria-hidden />
      </div>
      <div className="bar">
        <Button icon={<BackIcon />} onClick={onBack}>
          Today
        </Button>
      </div>
      <h1 className="title-1">{job.title}</h1>
      <p className="sub">{job.state}</p>
      <div className="segment">
        <SegmentedControl
          aria-label="Job section"
          value={section}
          onValueChange={setSection}
          items={[
            { value: "plan", label: "Plan" },
            { value: "diff", label: "Diff" },
            { value: "notes", label: "Notes" },
          ]}
        />
      </div>
      <div className="group prose">
        <p>{copy}</p>
      </div>
      <h2 className="section">Permissions</h2>
      <div className="group">
        <div className="row static">
          <span>Shell on this Mac</span>
          <Switch aria-label="Shell on this Mac" checked={shell} onCheckedChange={setShell} />
        </div>
        <div className="row static">
          <span>Ask before writing</span>
          <Switch aria-label="Ask before writing" checked={ask} onCheckedChange={setAsk} />
        </div>
      </div>
      <h2 className="section">Review</h2>
      <div className="group">
        <div className="row static">
          <span>Depth</span>
          <strong data-testid="depth">{depth} of 4</strong>
        </div>
        <div className="slider-pad">
          <Slider aria-label="Review depth" min={0} max={4} step={1} value={depth} onValueChange={setDepth} />
        </div>
      </div>
      <Input
        aria-label="Note for the agent"
        className="field"
        icon={<NoteIcon />}
        placeholder="Note for the agent"
        value={note}
        onValueChange={setNote}
      />
      <div className="actions">
        <Button onClick={() => setSent("Held")}>Hold</Button>
        <Button variant="filled" onClick={() => setSent(note ? `Sent: ${note}` : "Sent back")}>
          Send back
        </Button>
      </div>
      {sent ? (
        <p className="sub sent" role="status">
          {sent}
        </p>
      ) : null}
    </div>
  );
}
