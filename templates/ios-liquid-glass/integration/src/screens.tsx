import { useState } from "react";
import { Button, Glass, Input, Menu, SearchField, SegmentedControl, Slider, Switch } from "glisse";
import type { JobId } from "./App";
import { NoteIcon } from "./icons";

const JOBS: { id: JobId; title: string; state: string; detail: string }[] = [
  { id: "notes", title: "Tighten the release notes", state: "Needs you", detail: "notes.md · 2 files" },
  { id: "guide", title: "Rebase the field guide", state: "Running", detail: "4 commits behind" },
  { id: "photos", title: "Caption the dock photos", state: "Queued", detail: "18 images" },
];

export function Queue({ onOpen }: { onOpen: (id: JobId) => void }) {
  const [query, setQuery] = useState("");
  const [notice, setNotice] = useState("");
  const shown = JOBS.filter((job) => job.title.toLowerCase().includes(query.trim().toLowerCase()));

  return (
    <div className="screen">
      <div className="status">
        <span>9:41</span>
        <span className="battery" aria-hidden />
      </div>
      <div className="head">
        <span className="brand">Cove</span>
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
      <p className="sub">3 jobs on the desk · studio-mac</p>
      <p className="notice" data-testid="menu-status" role="status">{notice}</p>
      <SearchField
        aria-label="Search jobs"
        placeholder="Search jobs"
        value={query}
        onValueChange={setQuery}
        className="field"
      />
      <div className="cards">
        {shown.map((job) => (
          <Glass key={job.id} className="card">
            <button type="button" className="card-hit" onClick={() => onOpen(job.id)}>
              <b>{job.title}</b>
              <span className="meta">
                <i className={`dot ${job.id}`} />
                {job.state} · {job.detail}
              </span>
            </button>
          </Glass>
        ))}
        {shown.length === 0 ? <p className="sub">No job matches that search.</p> : null}
      </div>
    </div>
  );
}

export function Job({ jobId }: { jobId: JobId }) {
  const job = JOBS.find((item) => item.id === jobId) ?? JOBS[0];
  const [section, setSection] = useState("plan");
  const [shell, setShell] = useState(true);
  const [ask, setAsk] = useState(false);
  const [depth, setDepth] = useState(2);
  const [note, setNote] = useState("");
  const [sent, setSent] = useState("");

  return (
    <div className="screen">
      <div className="status">
        <span>9:41</span>
        <span className="battery" aria-hidden />
      </div>
      <p className="sub">Cove · {job.state}</p>
      <h1 className="job-title">{job.title}</h1>
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
      <Glass className="sheet prose">
        {section === "plan" ? <p>Shorten the opening, keep the install steps, and drop the changelog slogan.</p> : null}
        {section === "diff" ? <p>notes.md lost two adjectives. changelog.md is untouched.</p> : null}
        {section === "notes" ? <p>{job.detail}. The agent is waiting on this Mac, not on a remote runner.</p> : null}
      </Glass>
      <Glass className="sheet">
        <div className="grow">
          <span>Shell on this Mac</span>
          <Switch aria-label="Shell on this Mac" checked={shell} onCheckedChange={setShell} />
        </div>
        <div className="grow">
          <span>Ask before writing</span>
          <Switch aria-label="Ask before writing" checked={ask} onCheckedChange={setAsk} />
        </div>
      </Glass>
      <div className="depth">
        <span>Review depth</span>
        <strong data-testid="depth">{depth} of 4</strong>
      </div>
      <Slider aria-label="Review depth" min={0} max={4} step={1} value={depth} onValueChange={setDepth} />
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
        <p className="notice" role="status">
          {sent}
        </p>
      ) : null}
    </div>
  );
}
